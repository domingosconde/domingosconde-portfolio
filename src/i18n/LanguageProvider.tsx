import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { supabase } from "@/integrations/supabase/client";

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

type Ctx = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  loading: boolean;
};

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  loading: false,
});

export const useLanguage = () => useContext(LanguageContext);

const STORAGE_KEY = "site-lang";
const ORIGINAL_ATTR = "data-orig-text";
const ORIGINAL_PLACEHOLDER = "data-orig-placeholder";
const ORIGINAL_ARIA = "data-orig-aria";
const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "CODE",
  "PRE",
  "SVG",
  "PATH",
]);

function isSkipped(node: Node): boolean {
  let el: Node | null = node;
  while (el) {
    if (el.nodeType === Node.ELEMENT_NODE) {
      const e = el as HTMLElement;
      if (SKIP_TAGS.has(e.tagName)) return true;
      if (e.getAttribute && e.getAttribute("data-no-translate") !== null)
        return true;
    }
    el = el.parentNode;
  }
  return false;
}

function collectTextNodes(root: HTMLElement): Text[] {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim())
        return NodeFilter.FILTER_REJECT;
      if (isSkipped(node)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);
  return nodes;
}

function collectAttrTargets(root: HTMLElement) {
  const placeholders = Array.from(
    root.querySelectorAll<HTMLElement>(
      "input[placeholder], textarea[placeholder]",
    ),
  );
  const arias = Array.from(
    root.querySelectorAll<HTMLElement>("[aria-label]"),
  ).filter((el) => !isSkipped(el));
  return { placeholders, arias };
}

async function translateBatch(
  lang: LangCode,
  texts: string[],
): Promise<string[]> {
  if (lang === "en" || texts.length === 0) return texts;
  const { data, error } = await supabase.functions.invoke("translate-batch", {
    body: { lang, texts },
  });
  if (error || !data?.translations) {
    console.error("translate-batch failed", error);
    return texts;
  }
  return data.translations as string[];
}

async function translateDocument(lang: LangCode) {
  const root = document.body;
  if (!root) return;

  // Restore originals first when going back to en
  if (lang === "en") {
    root.querySelectorAll(`[${ORIGINAL_ATTR}]`).forEach((el) => {
      const orig = (el as HTMLElement).getAttribute(ORIGINAL_ATTR);
      if (orig !== null) (el as HTMLElement).innerText = orig;
    });
    // Text nodes were stored differently - reload simplest = use stored map on each node
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    return;
  }

  const textNodes = collectTextNodes(root);
  const { placeholders, arias } = collectAttrTargets(root);

  // Build flat list of strings
  const items: { kind: "text" | "placeholder" | "aria"; ref: any; orig: string }[] =
    [];

  textNodes.forEach((tn) => {
    const el = tn.parentElement as HTMLElement | null;
    if (!el) return;
    let orig = el.getAttribute(ORIGINAL_ATTR + "-node-" + indexOfChild(el, tn));
    if (orig === null) {
      orig = tn.nodeValue ?? "";
      el.setAttribute(ORIGINAL_ATTR + "-node-" + indexOfChild(el, tn), orig);
    }
    if (orig.trim()) items.push({ kind: "text", ref: tn, orig });
  });
  placeholders.forEach((el) => {
    let orig = el.getAttribute(ORIGINAL_PLACEHOLDER);
    if (orig === null) {
      orig = el.getAttribute("placeholder") ?? "";
      el.setAttribute(ORIGINAL_PLACEHOLDER, orig);
    }
    if (orig.trim()) items.push({ kind: "placeholder", ref: el, orig });
  });
  arias.forEach((el) => {
    let orig = el.getAttribute(ORIGINAL_ARIA);
    if (orig === null) {
      orig = el.getAttribute("aria-label") ?? "";
      el.setAttribute(ORIGINAL_ARIA, orig);
    }
    if (orig.trim()) items.push({ kind: "aria", ref: el, orig });
  });

  if (items.length === 0) return;

  // De-duplicate
  const uniqueMap = new Map<string, number[]>();
  items.forEach((it, idx) => {
    const arr = uniqueMap.get(it.orig) ?? [];
    arr.push(idx);
    uniqueMap.set(it.orig, arr);
  });
  const uniqueTexts = Array.from(uniqueMap.keys());

  // Chunk to avoid huge prompts
  const CHUNK = 50;
  const translated: string[] = [];
  for (let i = 0; i < uniqueTexts.length; i += CHUNK) {
    const chunk = uniqueTexts.slice(i, i + CHUNK);
    const out = await translateBatch(lang, chunk);
    translated.push(...out);
  }

  uniqueTexts.forEach((src, i) => {
    const target = translated[i] ?? src;
    const indices = uniqueMap.get(src) ?? [];
    indices.forEach((idx) => {
      const it = items[idx];
      if (it.kind === "text") {
        (it.ref as Text).nodeValue = (it.orig.match(/^\s*/)?.[0] ?? "") +
          target +
          (it.orig.match(/\s*$/)?.[0] ?? "");
      } else if (it.kind === "placeholder") {
        (it.ref as HTMLElement).setAttribute("placeholder", target);
      } else {
        (it.ref as HTMLElement).setAttribute("aria-label", target);
      }
    });
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

function indexOfChild(parent: HTMLElement, child: Node) {
  return Array.prototype.indexOf.call(parent.childNodes, child);
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<LangCode>(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem(STORAGE_KEY) as LangCode | null;
    return stored && LANGUAGES.some((l) => l.code === stored) ? stored : "en";
  });
  const [loading, setLoading] = useState(false);
  const initialized = useRef(false);

  const applyLang = useCallback(async (l: LangCode) => {
    setLoading(true);
    try {
      // Wait next paint so React content is mounted
      await new Promise((r) => setTimeout(r, 50));
      await translateDocument(l);
    } finally {
      setLoading(false);
    }
  }, []);

  const setLang = useCallback(
    (l: LangCode) => {
      localStorage.setItem(STORAGE_KEY, l);
      setLangState(l);
      // For switching back to English, just reload to restore originals reliably
      if (l === "en") {
        window.location.reload();
        return;
      }
      applyLang(l);
    },
    [applyLang],
  );

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    if (lang !== "en") {
      // Wait a bit for app to render
      setTimeout(() => applyLang(lang), 300);
    } else {
      document.documentElement.lang = "en";
    }
  }, [lang, applyLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};
