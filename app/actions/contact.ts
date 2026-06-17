'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactPayload = {
  firstName: string
  lastName: string
  email: string
  company: string
  services: string[]
  budget: string
  message: string
}

export async function sendContactEmail(data: ContactPayload): Promise<{ ok: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: 'Email service not configured.' }
  }

  const servicesLine = data.services.length ? data.services.join(', ') : 'Not specified'
  const companyLine = data.company || 'Not provided'
  const budgetLine = data.budget || 'Not specified'

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#0f0e0d">
      <div style="background:#0f0e0d;padding:32px 40px;border-radius:12px 12px 0 0">
        <span style="font-size:28px;font-weight:700;color:#fff;letter-spacing:-0.02em">Shrivix</span>
        <span style="display:block;font-size:13px;color:rgba(255,255,255,0.45);margin-top:4px">New contact form submission</span>
      </div>
      <div style="background:#fff;border:1px solid #e4dfd7;border-top:none;padding:36px 40px;border-radius:0 0 12px 12px">
        <h2 style="font-size:20px;font-weight:600;margin:0 0 24px">
          New enquiry from ${data.firstName} ${data.lastName}
        </h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0ede9;color:#7a7571;font-size:13px;width:140px">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0ede9;font-weight:500">${data.firstName} ${data.lastName}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0ede9;color:#7a7571;font-size:13px">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0ede9"><a href="mailto:${data.email}" style="color:#1a50d4">${data.email}</a></td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0ede9;color:#7a7571;font-size:13px">Company</td><td style="padding:10px 0;border-bottom:1px solid #f0ede9">${companyLine}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0ede9;color:#7a7571;font-size:13px">Interested in</td><td style="padding:10px 0;border-bottom:1px solid #f0ede9">${servicesLine}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #f0ede9;color:#7a7571;font-size:13px">Budget</td><td style="padding:10px 0;border-bottom:1px solid #f0ede9">${budgetLine}</td></tr>
        </table>
        <div style="margin-top:28px">
          <div style="font-size:13px;color:#7a7571;margin-bottom:8px">Message</div>
          <div style="background:#f9f8f6;border:1px solid #e4dfd7;border-radius:8px;padding:18px 20px;font-size:15px;line-height:1.7;white-space:pre-wrap">${data.message}</div>
        </div>
        <div style="margin-top:32px;padding-top:24px;border-top:1px solid #f0ede9">
          <a href="mailto:${data.email}" style="display:inline-block;background:#1a50d4;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:600;font-size:14px">
            Reply to ${data.firstName} →
          </a>
        </div>
      </div>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: 'Shrivix Contact <noreply@shrivix.com>',
      to: 'hello@shrivix.com',
      replyTo: data.email,
      subject: `New enquiry from ${data.firstName} ${data.lastName}${data.company ? ` · ${data.company}` : ''}`,
      html,
    })

    if (error) return { ok: false, error: error.message }
    return { ok: true }
  } catch {
    return { ok: false, error: 'Failed to send. Please email us directly at hello@shrivix.com.' }
  }
}
