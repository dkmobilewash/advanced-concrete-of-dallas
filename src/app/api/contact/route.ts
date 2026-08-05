export async function POST(request: Request) {
  const body = await request.json()
  // Log to console for now; replace with an email service (Resend, SendGrid) in production
  console.log('Contact form submission:', body)
  return Response.json({ success: true })
}
