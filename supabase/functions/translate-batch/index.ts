import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const LANG_NAMES: Record<string, string> = {
  pt: "European Portuguese (Portugal/Angola)",
  en: "English",
  fr: "French",
  de: "German",
  ja: "Japanese",
  es: "Spanish",
  it: "Italian",
  ru: "Russian",
  zh: "Simplified Mandarin Chinese",
  ar: "Arabic",
  ko: "Korean",
};

async function sha1(s: string) {
  const buf = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { lang, texts } = await req.json();
    if (!lang || !LANG_NAMES[lang] || !Array.isArray(texts)) {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (lang === "en") {
      return new Response(
        JSON.stringify({ translations: texts.map((t: string) => t) }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Compute hashes
    const hashes = await Promise.all(texts.map((t: string) => sha1(t)));

    // Fetch cached
    const { data: cached } = await supabase
      .from("translation_cache")
      .select("source_hash, translated_text")
      .eq("lang", lang)
      .in("source_hash", hashes);

    const cacheMap = new Map<string, string>(
      (cached ?? []).map((r: any) => [r.source_hash, r.translated_text]),
    );

    const missingIdx: number[] = [];
    const missingTexts: string[] = [];
    hashes.forEach((h, i) => {
      if (!cacheMap.has(h)) {
        missingIdx.push(i);
        missingTexts.push(texts[i]);
      }
    });

    let newTranslations: string[] = [];
    if (missingTexts.length > 0) {
      const apiKey = Deno.env.get("LOVABLE_API_KEY");
      if (!apiKey) throw new Error("LOVABLE_API_KEY missing");

      const systemPrompt = `You are a professional translator. Translate the user-provided JSON array of UI strings from English into ${LANG_NAMES[lang]}.
Rules:
- Preserve the EXACT same array length and order.
- Do NOT translate proper nouns (names, brands, places like "Domingos Conde", "Open Mind Academy", "PixelShitZ", "NÓDUS English Speak", "ConstruÁfrica", "42 Luanda", "Instituto Confúcio", "Universidade Agostinho Neto", "Calumbo", "Icolo e Bengo", "Angola", "HSK 1", "Piscine C", "Discovery Piscine Web", "LinkedIn", "GitHub").
- Keep punctuation, emojis, numbers, URLs intact.
- Return ONLY a JSON array of strings, same length, no explanation.`;

      const resp = await fetch(
        "https://ai.gateway.lovable.dev/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: JSON.stringify(missingTexts) },
            ],
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!resp.ok) {
        const errText = await resp.text();
        console.error("AI gateway error", resp.status, errText);
        if (resp.status === 429 || resp.status === 402) {
          return new Response(
            JSON.stringify({ error: "rate_limited_or_credits" }),
            {
              status: resp.status,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            },
          );
        }
        throw new Error("AI gateway failed");
      }

      const data = await resp.json();
      const content = data.choices?.[0]?.message?.content ?? "[]";
      let parsed: any;
      try {
        parsed = JSON.parse(content);
        if (!Array.isArray(parsed)) {
          // gemini may wrap in object
          const firstArr = Object.values(parsed).find((v) => Array.isArray(v));
          parsed = firstArr ?? [];
        }
      } catch {
        parsed = [];
      }

      newTranslations = parsed.map((s: unknown) => String(s ?? ""));

      // Insert into cache (best-effort)
      const rows = missingTexts.map((src, i) => ({
        lang,
        source_hash: hashes[missingIdx[i]],
        source_text: src,
        translated_text: newTranslations[i] ?? src,
      }));
      if (rows.length) {
        await supabase.from("translation_cache").upsert(rows, {
          onConflict: "lang,source_hash",
        });
      }
    }

    // Build final ordered output
    const result = hashes.map((h, i) => {
      if (cacheMap.has(h)) return cacheMap.get(h)!;
      const localIdx = missingIdx.indexOf(i);
      return newTranslations[localIdx] ?? texts[i];
    });

    return new Response(JSON.stringify({ translations: result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("translate-batch error", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
