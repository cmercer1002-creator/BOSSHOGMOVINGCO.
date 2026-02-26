import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface LeadPayload {
  name: string
  phone: string
  email: string
  moveDate: string
  fromAddress: string
  toAddress: string
  moveType: string
  notes: string
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json()
    const { name, phone, email, moveDate, fromAddress, toAddress, moveType, notes } = body

    console.log('[Boss Hog Lead Capture]', JSON.stringify(body, null, 2))

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Boss Hog Leads <leads@bosshogmoving.com>',
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New Quote Request — ${name} (${moveType})`,
      html: `
        <h2 style="color:#dc2626">New Quote Request — Boss Hog Moving Co.</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Phone</td><td style="padding:8px">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Email</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Move Type</td><td style="padding:8px">${moveType}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Move Date</td><td style="padding:8px">${moveDate}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">From</td><td style="padding:8px">${fromAddress}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">To</td><td style="padding:8px">${toAddress}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9fafb">Notes</td><td style="padding:8px">${notes || '—'}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({
      success: true,
      message:
        "We received your request and will contact you within 1 business hour. Can't wait? Call us directly!",
    })
  } catch (err) {
    console.error('[Lead API Error]', err)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
