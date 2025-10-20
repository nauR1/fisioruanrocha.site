import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Award, BookOpen, Heart, Target, ArrowRight, Calendar } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre | Ruan Rocha - Fisioterapeuta Esportivo",
  description:
    "Conheça Dr. Ruan Rocha, fisioterapeuta especializado em reabilitação esportiva, quiropraxia e tratamento de lesões do ombro.",
}

export default function AboutPage() {
  const formations = [
    {
      title: "Fisioterapia Neurofuncional",
      institution: "Anhanguera Educacional",
      year: "2024",
      description:
        "Abordagem voltada a pacientes com disfunções neurológicas (AVC, lesões medulares, neuropatias), com ênfase em avaliação neurológica, treino de marcha, equilíbrio e coordenação. Utiliza técnicas de facilitação neuromuscular e integração sensório-motora para recuperar função e autonomia.",
    },
    {
      title: "Fisioterapia Traumato-ortopédica",
      institution: "Anhanguera Educacional",
      year: "2025",
      description:
        "Foco em reabilitação de lesões músculo-esqueléticas (entorses, tendinopatias, fraturas) por meio de avaliação biomecânica, mobilizações, controle de dor e fortalecimento progressivo. Objetiva restaurar mobilidade, estabilidade e retorno seguro às atividades.",
    },
    {
      title: "Quiropraxia",
      institution: "instituto HIB",
      year: "2025",
      hours: "120 horas",
      description:
        "Formação em ajustes articulares e técnicas de terapia manual para alívio de dor (lombar, cervical), melhora da mobilidade e otimização da função. Inclui avaliação postural, segurança dos ajustes e protocolos de cuidados complementares.",
    },
    {
      title: "Fisioterapia no Alto Rendimento",
      institution: "FAECH",
      year: "2024",
      description:
        "Atuação com atletas e praticantes de esportes, integrando prevenção de lesões, reabilitação acelerada e protocolos de retorno ao esporte. Envolve controle de carga, performance funcional e acompanhamento baseado em evidências.",
    },
    {
      title: "Fisioterapia na Dor Crônica e Fibromialgia",
      institution: "Faculdade Focus",
      year: "2024",
      description:
        "Ênfase em educação em dor, estratégias multimodais (exercícios graduais, terapia manual, manejo do sono e estresse) e planos individualizados para reduzir sintomas, melhorar função e qualidade de vida em condições persistentes.",
    },
    {
      title: "Fundamentos do Treinamento Esportivo",
      institution: "IOB - Instituto Olímpico Brasileiro",
      year: "2025",
      description:
        "Princípios de periodização, força, potência e mobilidade aplicados ao contexto esportivo. Inclui prevenção de lesões, controle de carga e adaptação de exercícios conforme objetivos e nível do atleta.",
    },
    {
      title: "Formação em Pilates Clássico",
      institution: "Meta",
      year: "2025",
      description:
        "Aplicação de Pilates para controle motor, estabilidade de core, mobilidade e respiração. Utilizado na reabilitação e melhora postural com exercícios de solo e em equipamentos, respeitando o método clássico.",
    },
  ]

  const complementary = [
    "Liberação Miofascial - Qualitus Cursos (2024)",
    "Massoterapia - Instituto Experience (2024)",
    "Auriculoterapia - INAESP (2022)",
    "Ventosaterapia - INAESP (2021)",
  ]

  const values = [
    {
      icon: Target,
      title: "Excelência Técnica",
      description: "Formação contínua e atualização constante para oferecer os melhores tratamentos.",
    },
    {
      icon: Heart,
      title: "Humanização",
      description: "Atendimento empático que coloca o paciente no centro do processo de reabilitação.",
    },
    {
      icon: BookOpen,
      title: "Baseado em Evidências",
      description: "Decisões clínicas fundamentadas em pesquisas científicas e protocolos validados.",
    },
    {
      icon: Award,
      title: "Resultados Reais",
      description: "Compromisso com a recuperação funcional plena e retorno seguro às atividades.",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-br from-background via-secondary to-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Sobre Ruan Rocha</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Fisioterapeuta dedicado à excelência no tratamento de atletas e pacientes com dores crônicas.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-6xl mx-auto">
              <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/physiotherapist-ruan-rocha-professional-portrait.jpg"
                  alt="Dr. Ruan Rocha"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain object-center"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d7377]/30 to-transparent" />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Minha História</h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Sou Ruan Rocha da Paixão, bacharel em Fisioterapia pela Faculdade Zacarias de Góes. Minha jornada
                    profissional é marcada pela busca constante de excelência e pela paixão em ajudar pessoas a
                    recuperarem seu movimento e qualidade de vida.
                  </p>
                  <p>
                    Com especializações em Fisioterapia Neurofuncional e Traumato-Ortopédica, desenvolvi expertise no
                    manejo de condições complexas, desde lesões esportivas até síndromes dolorosas crônicas como a
                    fibromialgia.
                  </p>
                  <p>
                    Minha formação em Quiropraxia pelo Instituto HIB e em Fisioterapia no Alto
                    Rendimento me permite oferecer uma abordagem integrada e especializada para atletas que buscam
                    performance máxima e recuperação eficiente.
                  </p>
                  <p>
                    Atuo com quiropraxia, terapia manual e protocolos de performance para retorno seguro ao
                    esporte, sempre com uma abordagem humanizada que coloca o paciente no centro do processo de
                    reabilitação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-10 md:mb-12 text-center">
                Formação Acadêmica e Especializações
              </h2>

              <Accordion
                type="multiple"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
              >
                {formations.map((formation, index) => (
                  <AccordionItem
                    key={index}
                    value={`formation-${index}`}
                    className="rounded-xl bg-card border border-border hover:border-[#0d7377] transition-all border-b-0"
                  >
                    <AccordionTrigger className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4 w-full">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0d7377]/10 flex items-center justify-center flex-shrink-0">
                          <Award className="text-[#0d7377]" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">{formation.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">{formation.institution}</p>
                          <p className="text-xs sm:text-sm text-[#0d7377] font-medium mt-1">
                            {formation.year}
                            {formation.hours && ` • ${formation.hours}`}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {formation.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <BookOpen className="text-[#d4af37]" size={20} />
                  Formações Complementares
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {complementary.map((item, index) => (
                    <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-10 md:mb-12 text-center">
                Valores e Filosofia de Trabalho
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-[#0d7377] transition-all text-center"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0d7377]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <value.icon className="text-[#0d7377]" size={24} />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-foreground mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-10 md:mb-12 text-center">
                Atendimento Profissional
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                    <div>
                      <h3 className="font-bold text-foreground text-lg sm:text-xl">Taperoá - Ba</h3>
                      <p className="text-[#0d7377] font-medium text-sm sm:text-base">Fisioterapia Traumato ortopedica / Quiropraxia</p>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0">2024 - Atual</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                    <div>
                      <h3 className="font-bold text-foreground text-lg sm:text-xl">Cruz das Almas - Ba</h3>
                      <p className="text-[#0d7377] font-medium text-sm sm:text-base">Fisioterapia Traumato ortopedica / Quiropraxia</p>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0">2025 - Atual</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#0d7377] to-[#14a085]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Pronto para Iniciar Sua Recuperação?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
                Agende sua consulta e descubra como posso ajudar você a alcançar seus objetivos de saúde e bem-estar.
              </p>
              <Button 
                asChild
                size="lg" 
                variant="secondary" 
                className="bg-white text-[#0d7377] hover:bg-white/90 font-semibold text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
              >
                <a href={getWhatsAppLink(WHATSAPP_MESSAGES.schedule)} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2" size={18} />
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
