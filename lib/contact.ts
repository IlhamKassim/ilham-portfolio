import { profile } from './data'

export function whatsappLink(message: string) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
