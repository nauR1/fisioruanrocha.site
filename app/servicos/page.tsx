import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Activity, Dumbbell, Sparkles, Hand, Heart, Zap, Target, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"
import { ServicesGrid } from "@/components/services/services-grid"

export const metadata: Metadata = {
  title: "Serviços | Ruan Rocha - Fisioterapia Esportiva",
  description:
    "Conheça os serviços de fisioterapia esportiva, quiropraxia, reabilitação do ombro e terapias complementares oferecidos por Dr. Ruan Rocha.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Dumbbell,
      title: "Reabilitação do Ombro",
      description:
        "Protocolos específicos e baseados em evidências para tratamento de lesões do manguito rotador, tendinites, impacto subacromial e instabilidade.",
      benefits: [
        "Avaliação detalhada da biomecânica do ombro",
        "Tratamento de lesões do manguito rotador",
        "Manejo de tendinites e bursites",
        "Recuperação de instabilidade glenoumeral",
        "Retorno seguro ao esporte",
      ],
      color: "from-[#d4af37] to-[#e8c547]",
      featured: true,
    },
    {
      icon: Activity,
      title: "Quiropraxia",
      description:
        "Ajustes quiropráticos especializados para otimizar função articular, melhorar mobilidade e potencializar o desempenho atlético.",
      benefits: [
        "Melhora da mobilidade articular",
        "Redução de dores e tensões musculares",
        "Otimização do desempenho esportivo",
        "Prevenção de lesões recorrentes",
        "Recuperação mais rápida entre treinos",
      ],
      color: "from-[#0d7377] to-[#14919b]",
    },
    {
      icon: Sparkles,
      title: "Performance Atlética",
      description:
        "Treinamento funcional, prevenção de lesões e otimização do desempenho para atletas de alto rendimento em diversas modalidades.",
      benefits: [
        "Avaliação funcional do movimento",
        "Programas de prevenção de lesões",
        "Otimização da biomecânica esportiva",
        "Treinamento de força e estabilidade",
        "Acompanhamento de atletas de alto rendimento",
      ],
      color: "from-[#14919b] to-[#0d7377]",
    },
    {
      icon: Hand,
      title: "Liberação Miofascial",
      description:
        "Técnica manual especializada para tratamento de pontos gatilho, tensões musculares e restrições fasciais que limitam o movimento.",
      benefits: [
        "Alívio de dores musculares crônicas",
        "Melhora da flexibilidade e amplitude",
        "Redução de tensões e contraturas",
        "Recuperação muscular pós-treino",
        "Tratamento de pontos gatilho",
      ],
      color: "from-[#e8c547] to-[#d4af37]",
    },
    {
      icon: Heart,
      title: "Manejo da Dor Crônica",
      description:
        "Abordagem integrada para tratamento de fibromialgia e outras síndromes dolorosas crônicas, com foco em educação em dor e qualidade de vida.",
      benefits: [
        "Educação em neurociência da dor",
        "Exercícios terapêuticos graduados",
        "Técnicas de relaxamento e controle",
        "Abordagem multidisciplinar",
        "Melhora da qualidade de vida",
      ],
      color: "from-[#0d7377] to-[#14919b]",
    },
    {
      icon: Zap,
      title: "Pilates Classico",
      description:
        "Adaptação do Pilates classico a sua necessidade, combinando força, flexibilidade e relaxamento para melhorar a saúde e o bem-estar.",
      benefits: [
        "Força e flexibilidade através do Pilates",
        "Redução de dores musculares e tensões",
        "Melhora da mobilidade e estabilidade",
        "Técnicas adaptada ao seu dia a dia",
        "Abordagem integrativa",
      ],
      color: "from-[#14919b] to-[#0d7377]",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Avaliação Inicial",
      description: "Anamnese detalhada, avaliação funcional e identificação dos objetivos do tratamento.",
    },
    {
      step: "02",
      title: "Diagnóstico Funcional",
      description: "Análise biomecânica, testes específicos e raciocínio clínico para definir o plano de tratamento.",
    },
    {
      step: "03",
      title: "Plano Personalizado",
      description: "Desenvolvimento de protocolo individualizado baseado em evidências científicas.",
    },
    {
      step: "04",
      title: "Tratamento e Acompanhamento",
      description: "Execução do plano com reavaliações periódicas e ajustes conforme necessário.",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-br from-background via-muted to-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Atendimento especializado • Individual e personalizado
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Serviços Especializados</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Tratamentos integrados para reabilitação completa e melhora do desempenho funcional.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <ServicesGrid />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 sm:mb-14 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Como funciona o tratamento</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Processo estruturado para garantir os melhores resultados.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {process.map((item, index) => (
                  <div key={index} className="p-4 sm:p-6 rounded-xl bg-card border border-border h-full">
                    <div className="w-9 h-9 rounded-full bg-[#0d7377]/10 text-[#0d7377] flex items-center justify-center mb-3 sm:mb-4">
                      <CheckCircle2 size={16} />
                    </div>
                    <h3 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 sm:mb-14 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Áreas de Atuação</h2>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-card border border-border">
                  <Target className="text-[#0d7377]" size={18} />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-foreground">Fisioterapia Esportiva</span>
                    <span className="text-muted-foreground ml-2 hidden sm:inline">Crossfit, musculação, natação, vôlei, futebol e outras modalidades.</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-card border border-border">
                  <Activity className="text-[#0d7377]" size={18} />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-foreground">Fisioterapia Ortopédica</span>
                    <span className="text-muted-foreground ml-2 hidden sm:inline">Lesões musculoesqueléticas, pós-operatório e reabilitação funcional.</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-card border border-border">
                  <Heart className="text-[#0d7377]" size={18} />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-foreground">Fisioterapia Neurofuncional</span>
                    <span className="text-muted-foreground ml-2 hidden sm:inline">AVC, lesões medulares e síndromes neuromusculares.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0d7377] to-[#14919b] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Pronto para começar seu tratamento?</h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                Agende sua avaliação e descubra qual serviço é ideal para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-3 sm:pt-4">
                <Button asChild size="lg" className="bg-white text-[#0d7377] hover:bg-gray-100 font-semibold text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8">
                  <Link href="/agendamento">
                    Agendar consulta
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 bg-transparent text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
                >
                  <Link href="/ombro">Saiba mais sobre ombro</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
