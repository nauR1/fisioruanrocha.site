"use server"

import type { ContactFormData, SchedulingFormData, NewsletterFormData, FormResponse } from "./types"

export async function submitContactForm(data: ContactFormData): Promise<FormResponse> {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: "Por favor, preencha todos os campos obrigatórios.",
        error: "MISSING_FIELDS",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Por favor, insira um email válido.",
        error: "INVALID_EMAIL",
      }
    }

    // Validate consent
    if (!data.consent) {
      return {
        success: false,
        message: "Você precisa concordar com a política de privacidade.",
        error: "CONSENT_REQUIRED",
      }
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "Erro ao enviar mensagem. Por favor, tente novamente.",
      error: "SERVER_ERROR",
    }
  }
}

export async function submitSchedulingForm(data: SchedulingFormData): Promise<FormResponse> {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service || !data.preferredDate || !data.preferredTime) {
      return {
        success: false,
        message: "Por favor, preencha todos os campos obrigatórios.",
        error: "MISSING_FIELDS",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Por favor, insira um email válido.",
        error: "INVALID_EMAIL",
      }
    }

    // Validate consent
    if (!data.consent) {
      return {
        success: false,
        message: "Você precisa concordar com a política de privacidade.",
        error: "CONSENT_REQUIRED",
      }
    }

    // Validate date is in the future
    const selectedDate = new Date(data.preferredDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      return {
        success: false,
        message: "Por favor, selecione uma data futura.",
        error: "INVALID_DATE",
      }
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Create calendar event
    // 4. Send WhatsApp notification

    return {
      success: true,
      message: "Solicitação de agendamento enviada com sucesso!",
    }
  } catch (error) {
    console.error("Error submitting scheduling form:", error)
    return {
      success: false,
      message: "Erro ao enviar solicitação. Por favor, tente novamente.",
      error: "SERVER_ERROR",
    }
  }
}

export async function subscribeNewsletter(data: NewsletterFormData): Promise<FormResponse> {
  try {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email || !emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Por favor, insira um email válido.",
        error: "INVALID_EMAIL",
      }
    }

    // Here you would typically:
    // 1. Save to email marketing platform (Mailchimp, ConvertKit, etc.)
    // 2. Send welcome email
    // 3. Add to database

    return {
      success: true,
      message: "Inscrição realizada com sucesso! Verifique seu email.",
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return {
      success: false,
      message: "Erro ao realizar inscrição. Por favor, tente novamente.",
      error: "SERVER_ERROR",
    }
  }
}
