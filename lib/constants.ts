// WhatsApp configuration
export const WHATSAPP_NUMBER = "5575988484287"
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

// WhatsApp message templates
export const WHATSAPP_MESSAGES = {
  schedule: "Olá! Gostaria de agendar uma consulta com o Dr. Ruan Rocha.",
  questions: "Olá! Tenho algumas dúvidas sobre os serviços de fisioterapia.",
  shoulder: "Olá! Gostaria de saber mais sobre o tratamento especializado em ombro.",
  general: "Olá! Gostaria de mais informações sobre os serviços.",
}

export function getWhatsAppLink(message: string = WHATSAPP_MESSAGES.general): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}
