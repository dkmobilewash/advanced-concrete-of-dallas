// Vercel Function (Web Handler signature — see
// https://vercel.com/docs/functions/functions-api-reference). Receives the
// contact form submission and emails it via Resend. RESEND_API_KEY must be
// set as a Vercel environment variable — never hardcoded here.
const NOTIFY_TO = 'nkerr7844@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Advanced Concrete of Dallas <notifications@advancedconcretedallas.com>'

interface ContactPayload {
  name: string
  phone: string
  email: string
  service: string
  description: string
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== 'object' || body === null) return false
  const b = body as Record<string, unknown>
  return (
    isNonEmptyString(b.name) &&
    isNonEmptyString(b.phone) &&
    isNonEmptyString(b.email) &&
    isNonEmptyString(b.service) &&
    isNonEmptyString(b.description) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email as string)
  )
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return Response.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  if (!isValidPayload(body)) {
    return Response.json({ error: 'Missing or invalid fields.' }, { status: 400 })
  }

  const { name, phone, email, service, description } = body

  const html = `
    <h2>New Free Estimate Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Project Description:</strong></p>
    <p>${escapeHtml(description).replace(/\n/g, '<br>')}</p>
  `.trim()

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: `New Estimate Request from ${name}`,
      html,
    }),
  })

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text()
    console.error('Resend API error:', resendResponse.status, errorText)
    return Response.json({ error: 'Failed to send notification email.' }, { status: 502 })
  }

  return Response.json({ success: true })
}
