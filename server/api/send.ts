import { Resend } from 'resend'
import { emailTemplate } from '@/utils/emailTemplate'
const resend = new Resend(process.env.RESEND_TOKEN)

export default defineEventHandler(async (event) => {
  const { subject } = getQuery(event)
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'delivered@resend.dev',
      subject: subject as string,
      html: emailTemplate as string
    })
    return data
  } catch (error) {
  }
})
