import twilio from 'twilio'

const client = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
  ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null

export function toGhanaNumber(number) {
  const digits = String(number || '').replace(/\D/g, '')
  if (digits.startsWith('233')) return `+${digits}`
  if (digits.startsWith('0') && digits.length === 10) return `+233${digits.slice(1)}`
  return null
}

export async function sendSms(to, body) {
  if (!client || !process.env.TWILIO_PHONE_NUMBER) {
    throw new Error('SMS provider is not configured')
  }

  return client.messages.create({
    body,
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
  })
}
