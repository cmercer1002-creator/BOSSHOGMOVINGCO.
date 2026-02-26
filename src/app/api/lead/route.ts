import { NextRequest, NextResponse } from 'next/server'

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

    // Log the lead (replace with CRM integration, email, etc.)
    console.log('[Boss Hog Lead Capture]', JSON.stringify(body, null, 2))

    // TODO: Integrate with CRM (HouseCall Pro, etc.), send email notification,
    // or forward to a webhook. Example integrations:
    //   - Email: nodemailer, Resend, SendGrid
    //   - CRM: HouseCall Pro API, Jobber, etc.
    //   - Webhook: Zapier, Make, etc.

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
