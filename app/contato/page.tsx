import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | Ruan Rocha - Fisioterapia Esportiva",
  description:
    "Entre em contato com Dr. Ruan Rocha para agendar sua consulta ou tirar dúvidas sobre fisioterapia esportiva e reabilitação.",
}

export default function ContactPage() {
  // MELHORIA: Adicionado 'mapLink' para tornar os locais clicáveis
  const locations = [
    {
      name: "Clinica Particular",
      address: "Taperoá - BA",
      description: "Atendimento especializado em fisioterapia traumato ortopedica",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Taperoá+BA",
    },
    {
      name: "Clinica Particular",
      address: "Cruz das Almas - BA",
      description: "Atendimento especializado em ombro e quiropraxia",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Cruz+das+Almas+BA",
    },
  ]

  // CORREÇÃO: Ajustado número de telefone para consistência
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      value: "(75) 9 8848-8287", // <-- NÚMERO CORRIGIDO
      link: "/agendamento",
      description: "Direciona para a página de agendamento",
    },
    {
      icon: Mail,
      title: "Email",
      value: "drruanrocha@gmail.com",
      link: "/agendamento",
      description: "Direciona para a página de agendamento",
    },
  ]

  const workingHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
    { day: "Domingo", hours: "Fechado" },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-br from-background via-muted to-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Entre em Contato</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Estou à disposição para responder suas dúvidas e agendar sua consulta.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
                {contactMethods.map((method, index) => (
                  <Link
                    key={index}
                    href={method.link}
                    className="group p-6 sm:p-8 rounded-2xl bg-card border-2 border-border hover:border-[#0d7377] transition-all hover:shadow-lg flex" // Adicionado 'flex' para alinhar a seta
                  >
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#0d7377]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d7377] transition-colors">
                        <method.icon className="text-[#0d7377] group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">{method.title}</h3>
                        <p className="text-lg sm:text-xl text-[#0d7377] font-semibold mb-2">{method.value}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                    <ArrowRight
                      className="text-muted-foreground group-hover:text-[#0d7377] transition-colors self-center" // Adicionado 'self-center'
                      size={18}
                    />
                  </Link>
                ))}
              </div>

              {/* Quick Action */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0d7377] to-[#14919b] text-white text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prefere agendar diretamente?</h2>
                <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6">
                  Use nosso formulário de agendamento para escolher data e horário de sua preferência.
                </p>
                <Button asChild size="lg" className="bg-white text-[#0d7377] hover:bg-gray-100 font-semibold text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8">
                  <Link href="/agendamento">
                    Agendar consulta
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 sm:mb-14 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Locais de Atendimento</h2>
                <p className="text-base sm:text-lg text-muted-foreground">Atendo em dois locais na região do Recôncavo Baiano.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* MELHORIA: Card agora é um link para o mapa */}
                {locations.map((location, index) => (
                  <a
                    key={index}
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors hover:shadow-md"
                  >
                    <div className="flex items-start gap-3 mb-3 sm:mb-4">
                      <MapPin className="text-[#d4af37] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{location.name}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">{location.address}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{location.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Working Hours */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#0d7377]/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Clock className="text-[#0d7377]" size={28} />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Horário de Atendimento</h2>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
                <div className="space-y-3 sm:space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 sm:py-3 border-b border-border last:border-0"
                    >
                      <span className="font-semibold text-sm sm:text-base text-foreground">{schedule.day}</span>
                      <span className="text-sm sm:text-base text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 text-center">
                  * Horários sujeitos a disponibilidade. Entre em contato para confirmar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Siga nas Redes Sociais</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Acompanhe dicas, conteúdos educativos e novidades sobre fisioterapia esportiva.
              </p>
              <div className="flex justify-center gap-3 sm:gap-4">
                {/* AJUSTE: Adicionados links das redes sociais */}
                <a
                  href="https://www.instagram.com/fisioruanrocha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border-2 border-border hover:border-[#0d7377] flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="text-foreground" size={20} />
                </a>
                <a
                  href="https://www.facebook.com/fisioruanrocha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border-2 border-border hover:border-[#0d7377] flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="text-foreground" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/fisioruanrocha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border-2 border-border hover:border-[#0d7377] flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-foreground" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Localização</h2>
                <p className="text-base sm:text-lg text-muted-foreground">Cruz das Almas - BA</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[300px] sm:h-[350px] md:h-[400px]">
                {/* AJUSTE: Link do mapa funcional */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62447.28892187799!2d-39.12569584083331!3d-12.67135894380314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7145b0d18b6336b%3A0x65463138b1f50162!2sCruz%20das%20Almas%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1696502126297!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização - Cruz das Almas, BA"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}