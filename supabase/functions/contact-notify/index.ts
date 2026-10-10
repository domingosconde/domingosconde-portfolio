import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'

const SHEET_ID = '10-Vs2Xadnyz3wGhqmP4UFh-E6m7ZzxEqlDgd-bKxQBU'
const TO_EMAIL = 'teacherelisio2023@gmail.com'

const Body = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
})

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const json = (b: unknown, status = 200) =>
    new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })

  try {
    const parsed = Body.safeParse(await req.json())
    if (!parsed.success) return json({ error: 'Invalid input' }, 400)
    const { name, email, message } = parsed.data

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    const SHEETS_KEY = Deno.env.get('GOOGLE_SHEETS_API_KEY')
    if (!LOVABLE_API_KEY || !RESEND_API_KEY || !SHEETS_KEY) return json({ error: 'Not configured' }, 500)

    const date = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC'

    const [mailRes, sheetRes] = await Promise.all([
      fetch('https://connector-gateway.lovable.dev/resend/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          'X-Connection-Api-Key': RESEND_API_KEY,
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [TO_EMAIL],
          reply_to: email,
          subject: `New portfolio message from ${name}`,
          html: `<h2>New message from your portfolio</h2>
<p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p>
<p><b>Message:</b></p><p style="white-space:pre-wrap">${esc(message)}</p>
<p style="color:#888">Received ${date}</p>`,
        }),
      }),
      fetch(
        `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SHEET_ID}/values/Leads!A:D:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            'X-Connection-Api-Key': SHEETS_KEY,
          },
          body: JSON.stringify({ values: [[date, name, email, message]] }),
        },
      ),
    ])

    const mailOk = mailRes.ok
    const sheetOk = sheetRes.ok
    if (!mailOk) console.error('Resend failed', mailRes.status, await mailRes.text())
    if (!sheetOk) console.error('Sheets failed', sheetRes.status, await sheetRes.text())

    return json({ email: mailOk, sheet: sheetOk }, mailOk || sheetOk ? 200 : 502)
  } catch (e) {
    console.error(e)
    return json({ error: 'Unexpected error' }, 500)
  }
})
