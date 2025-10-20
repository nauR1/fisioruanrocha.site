"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function SchedulingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+55",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    consent: false,
  })

  // Validações e códigos de país
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
  })

  const countryCodes = [
    { code: "+55", label: "+55 — Brasil" },
    { code: "+351", label: "+351 — Portugal" },
    { code: "+34", label: "+34 — Espanha" },
    { code: "+1", label: "+1 — EUA" },
    { code: "+44", label: "+44 — Reino Unido" },
  ]

  const nameRegex = /^[A-Za-zÀ-ÿ' -]+$/
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", service: "", preferredDate: "" }

    if (!formData.name.trim() || !nameRegex.test(formData.name.trim())) {
      newErrors.name = "Use apenas letras, acentos, espaços e hífen."
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Informe um e-mail válido (ex.: nome@dominio.com)."
    }

    const phoneDigits = formData.phone.replace(/[^0-9]/g, "")
    if (!phoneDigits || phoneDigits.length < 8) {
      newErrors.phone = "Informe um telefone válido com pelo menos 8 dígitos."
    }

    if (!formData.service) {
      newErrors.service = "Selecione um serviço."
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Escolha uma data preferencial."
    }

    setErrors(newErrors)
    return Object.values(newErrors).every((v) => v === "")
  }

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Create WhatsApp message
    const message = `Olá! Gostaria de agendar uma consulta.

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.countryCode} ${formData.phone}
*Serviço:* ${formData.service}
*Data preferencial:* ${formData.preferredDate}
*Horário preferencial:* ${formData.preferredTime}
*Mensagem:* ${formData.message || "Nenhuma mensagem adicional"}`

    const whatsappUrl = `https://wa.me/5575988484287?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitted(true)
  }

  const services = [
    "Quiropraxia",
    "Reabilitação do Ombro",
    "Performance Atlética",
    "Liberação Miofascial",
    "Manejo da Dor Crônica",
    "Avaliação Inicial",
    "outros serviços",
  ]

  const timeSlots = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
  ]

  const benefits = [
    "Avaliação completa e personalizada",
    "Plano de tratamento individualizado",
    "Atendimento humanizado",
    "Protocolos baseados em evidências",
  ]

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center bg-background py-24 sm:py-28 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0d7377]/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="text-[#0d7377]" size={40} />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Solicitação Enviada!</h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Sua solicitação de agendamento foi enviada via WhatsApp. Entrarei em contato em breve para confirmar sua
                consulta.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-2 h-10 sm:h-12 text-sm sm:text-base">
                Fazer nova solicitação
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-br from-background via-secondary to-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Agende sua Consulta</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Preencha o formulário abaixo e entrarei em contato para confirmar seu horário.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Informações Pessoais</h2>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm sm:text-base text-foreground">
                          Nome completo *
                        </Label>
                        <div className="relative mt-2">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            maxLength={60}
                            pattern="^[A-Za-zÀ-ÿ' -]+$"
                            title="Use apenas letras, acentos, espaços e hífen."
                            onChange={(e) => {
                              const v = e.target.value.replace(/[0-9]/g, "")
                              setFormData({ ...formData, name: v })
                            }}
                            aria-invalid={!!errors.name}
                            className="pl-10 h-10 sm:h-12"
                            placeholder="Seu nome completo"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label htmlFor="email" className="text-sm sm:text-base text-foreground">
                            Email *
                          </Label>
                          <div className="relative mt-2">
                            <Mail
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                              size={16}
                            />
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              maxLength={254}
                              pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,}$"
                              title="Informe um e-mail válido (ex.: nome@dominio.com)."
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              onBlur={() => {
                                if (!emailRegex.test(formData.email.trim())) {
                                  setErrors((prev) => ({ ...prev, email: "Informe um e-mail válido." }))
                                } else {
                                  setErrors((prev) => ({ ...prev, email: "" }))
                                }
                              }}
                              aria-invalid={!!errors.email}
                              className="pl-10 h-10 sm:h-12"
                              placeholder="seu@email.com"
                            />
                          </div>
                          {errors.email && (
                            <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-sm sm:text-base text-foreground">
                            Telefone *
                          </Label>
                          <div className="mt-2 grid grid-cols-[120px_1fr] gap-2">
                            <select
                              id="countryCode"
                              value={formData.countryCode}
                              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                              className="h-10 sm:h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              aria-label="Código do país"
                            >
                              {countryCodes.map((c) => (
                                <option key={c.code} value={c.code}>
                                  {c.label}
                                </option>
                              ))}
                            </select>
                            <div className="relative">
                              <Phone
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                size={16}
                              />
                              <Input
                                id="phone"
                                type="tel"
                                inputMode="numeric"
                                required
                                value={formData.phone}
                                maxLength={15}
                                pattern="^[0-9]+$"
                                title="Use apenas números."
                                onChange={(e) => {
                                  const v = e.target.value.replace(/[^0-9]/g, "")
                                  setFormData({ ...formData, phone: v })
                                }}
                                aria-invalid={!!errors.phone}
                                className="pl-10 h-10 sm:h-12"
                                placeholder="(75) 9 9999-9999"
                              />
                            </div>
                          </div>
                          {errors.phone && (
                            <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Detalhes da Consulta</h2>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <Label htmlFor="service" className="text-sm sm:text-base text-foreground">
                          Serviço desejado *
                        </Label>
                        <select
                          id="service"
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full mt-2 h-10 sm:h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Selecione um serviço</option>
                          {services.map((service, index) => (
                            <option key={`${service}-${index}`} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label htmlFor="preferredDate" className="text-sm sm:text-base text-foreground">
                            Data preferencial *
                          </Label>
                          <div className="relative mt-2">
                            <Calendar
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                              size={16}
                            />
                            <Input
                              id="preferredDate"
                              type="date"
                              required
                              value={formData.preferredDate}
                              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                              className="pl-10 h-10 sm:h-12"
                              min={new Date().toISOString().split("T")[0]}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="preferredTime" className="text-sm sm:text-base text-foreground">
                            Horário preferencial *
                          </Label>
                          <div className="relative mt-2">
                            <Clock
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                              size={16}
                            />
                            <select
                              id="preferredTime"
                              required
                              value={formData.preferredTime}
                              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                              className="w-full h-10 sm:h-12 rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <option value="">Selecione um horário</option>
                              {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm sm:text-base text-foreground">
                          Mensagem adicional (opcional)
                        </Label>
                        <div className="relative mt-2">
                          <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={16} />
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            maxLength={600}
                            className="pl-10 min-h-[100px] sm:min-h-[120px]"
                            placeholder="Conte-me um pouco sobre sua condição ou dúvidas..."
                          />
                          <p className="mt-1 text-xs text-muted-foreground">Máx. 600 caracteres.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-card border border-border">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1"
                      />
                      <Label htmlFor="consent" className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Concordo com o tratamento dos meus dados pessoais de acordo com a{" "}
                        <a href="/privacidade" className="text-[#0d7377] hover:underline">
                          Política de Privacidade
                        </a>{" "}
                        e autorizo o contato via WhatsApp para confirmação da consulta. *
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0d7377] hover:bg-[#14919b] text-white font-semibold h-12 sm:h-14 text-base sm:text-lg"
                  >
                    Enviar solicitação via WhatsApp
                  </Button>

                  <p className="text-xs sm:text-sm text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp para confirmar sua solicitação.
                  </p>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-6">
                <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0d7377] to-[#14919b] text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">O que esperar na primeira consulta</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-xs sm:text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Informações de Contato</h3>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <Phone size={14} className="mt-0.5 flex-shrink-0" />
                      <span>(75) 9 9864-3266</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail size={14} className="mt-0.5 flex-shrink-0" />
                      <span>drruanrocha@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20">
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                    <strong>Dúvidas?</strong> Entre em contato diretamente pelo WhatsApp ou telefone. Responderei o mais
                    breve possível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
