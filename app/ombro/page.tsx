import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle, CheckCircle2, ArrowRight, Activity, Target, TrendingUp, Clock, Shield, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reabilitação do Ombro | Ruan Rocha - Especialista em Lesões do Ombro",
  description:
    "Tratamento especializado para lesões do ombro: manguito rotador, tendinites, impacto subacromial e instabilidade. Protocolos baseados em evidências.",
  keywords: [
    "reabilitação do ombro",
    "lesão manguito rotador",
    "tendinite ombro",
    "impacto subacromial",
    "fisioterapia ombro",
    "tratamento ombro atleta",
  ],
}

export default function ShoulderPage() {
  const conditions = [
    {
      title: "Lesões do Manguito Rotador",
      description:
        "Ruptura parcial ou completa dos tendões que estabilizam o ombro, comum em atletas de arremesso e levantamento de peso.",
      symptoms: ["Dor ao levantar o braço", "Fraqueza muscular", "Crepitação no movimento", "Dor noturna"],
    },
    {
      title: "Tendinite do Supraespinhal",
      description:
        "Inflamação do tendão supraespinhal, frequente em movimentos repetitivos acima da cabeça como natação e vôlei.",
      symptoms: ["Dor lateral no ombro", "Dificuldade em movimentos acima da cabeça", "Dor ao deitar sobre o ombro"],
    },
    {
      title: "Impacto Subacromial",
      description:
        "Compressão das estruturas entre o úmero e o acrômio, causando dor e limitação de movimento em atletas.",
      symptoms: [
        "Dor em arco de movimento",
        "Limitação de amplitude",
        "Dor ao alcançar objetos",
        "Fraqueza progressiva",
      ],
    },
    {
      title: "Instabilidade Glenoumeral",
      description:
        "Frouxidão excessiva da articulação do ombro, podendo levar a luxações recorrentes em esportes de contato.",
      symptoms: [
        "Sensação de ombro saindo do lugar",
        "Apreensão em certos movimentos",
        "Dor e fraqueza",
        "Luxações recorrentes",
      ],
    },
    {
      title: "Bursite do Ombro",
      description:
        "Inflamação da bursa subacromial, causando dor e limitação funcional em atividades diárias e esportivas.",
      symptoms: ["Dor aguda no ombro", "Inchaço local", "Dificuldade para dormir", "Limitação de movimento"],
    },
    {
      title: "Capsulite Adesiva (Ombro Congelado)",
      description: "Rigidez progressiva da cápsula articular, limitando severamente a amplitude de movimento do ombro.",
      symptoms: ["Rigidez progressiva", "Dor constante", "Perda de movimento", "Dificuldade em atividades básicas"],
    },
  ]

  const protocol = [
    {
      icon: Activity,
      phase: "Fase 1: Controle da Dor",
      duration: "1-2 semanas",
      description: "Redução da inflamação e controle da dor através de técnicas manuais e modalidades terapêuticas.",
      interventions: ["Terapia manual", "Liberação miofascial", "Educação em dor", "Modificação de atividades"],
    },
    {
      icon: Target,
      phase: "Fase 2: Recuperação da Mobilidade",
      duration: "2-4 semanas",
      description: "Restauração da amplitude de movimento e normalização dos padrões de movimento.",
      interventions: [
        "Mobilizações articulares",
        "Alongamentos específicos",
        "Exercícios de mobilidade",
        "Correção postural",
      ],
    },
    {
      icon: TrendingUp,
      phase: "Fase 3: Fortalecimento",
      duration: "4-8 semanas",
      description: "Progressão gradual de força e estabilidade do complexo do ombro.",
      interventions: [
        "Exercícios de fortalecimento",
        "Treino de estabilidade",
        "Controle neuromuscular",
        "Progressão de carga",
      ],
    },
    {
      icon: Zap,
      phase: "Fase 4: Retorno ao Esporte",
      duration: "2-4 semanas",
      description: "Preparação específica para retorno seguro às atividades esportivas e prevenção de recidivas.",
      interventions: [
        "Exercícios específicos do esporte",
        "Treinamento de potência",
        "Simulação de gestos esportivos",
        "Estratégias de prevenção",
      ],
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Prevenção de Cirurgia",
      description: "Muitas lesões do ombro respondem bem ao tratamento conservador, evitando procedimentos invasivos.",
    },
    {
      icon: Clock,
      title: "Recuperação Mais Rápida",
      description: "Protocolos baseados em evidências aceleram o processo de reabilitação de forma segura.",
    },
    {
      icon: Target,
      title: "Retorno Seguro ao Esporte",
      description: "Preparação adequada reduz o risco de re-lesão e melhora o desempenho atlético.",
    },
  ]

  const faqs = [
    {
      question: "Quanto tempo leva a reabilitação do ombro?",
      answer:
        "O tempo varia conforme a gravidade da lesão, mas geralmente entre 6 a 12 semanas para lesões leves a moderadas. Lesões mais graves podem requerer 3 a 6 meses de reabilitação.",
    },
    {
      question: "Posso continuar treinando durante o tratamento?",
      answer:
        "Sim, mas com modificações. Trabalharemos juntos para adaptar seus treinos, evitando movimentos que agravam a lesão enquanto mantemos o condicionamento geral.",
    },
    {
      question: "Quando posso voltar a treinar normalmente?",
      answer:
        "O retorno ao treino normal ocorre quando você recupera amplitude de movimento completa, força adequada e consegue realizar movimentos específicos do esporte sem dor ou compensações.",
    },
    {
      question: "O tratamento é doloroso?",
      answer:
        "O tratamento é adaptado ao seu nível de dor. Algumas técnicas podem causar desconforto leve, mas sempre respeitamos seus limites e trabalhamos dentro de uma zona de conforto terapêutico.",
    },
    {
      question: "Preciso fazer cirurgia?",
      answer:
        "A maioria das lesões do ombro responde bem ao tratamento conservador. A cirurgia é considerada apenas quando o tratamento fisioterapêutico não apresenta resultados após um período adequado.",
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
              <div className="inline-block">
                <span className="text-[#d4af37] text-xs sm:text-sm font-semibold tracking-wider uppercase">Especialização</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Reabilitação do Ombro</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Tratamento especializado para lesões do ombro em atletas, com protocolos baseados em evidências para
                retorno seguro ao esporte.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                >
                  <Link href="/agendamento">
                    Agende sua avaliação
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 rounded-full hover:bg-secondary transition-all duration-300 bg-transparent w-full sm:w-auto"
                >
                  <Link href="/servicos">Conheça os serviços</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto pt-10 sm:pt-12">
                {[
                  { value: "2", label: "Pós Graduação" },
                  { value: "95%", label: "Satisfação" },
                  { value: "10+", label: "Cursos" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1 sm:space-y-2">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Anatomy Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Anatomia e Função do Ombro</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  O ombro é a articulação mais móvel do corpo humano, permitindo uma ampla gama de movimentos essenciais
                  para o desempenho atlético. Essa mobilidade, no entanto, vem com o custo de maior vulnerabilidade a
                  lesões.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  O complexo do ombro é composto por quatro articulações que trabalham em conjunto: glenoumeral,
                  acromioclavicular, esternoclavicular e escapulotorácica. O manguito rotador, formado por quatro
                  músculos (supraespinhal, infraespinhal, redondo menor e subescapular), é crucial para estabilizar a
                  articulação durante movimentos.
                </p>

                <div className="p-4 sm:p-6 rounded-xl bg-[#0d7377]/5 border border-[#0d7377]/20">
                  <p className="text-xs sm:text-sm text-foreground font-semibold mb-2">Por que atletas são mais vulneráveis?</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Movimentos repetitivos, cargas elevadas e gestos esportivos específicos (arremesso, saque, supino)
                    sobrecarregam as estruturas do ombro, aumentando o risco de lesões por overuse e traumas agudos.
                  </p>
                </div>
              </div>

              <div className="relative h-[400px] sm:h-[450px] md:h-[500px]">
                <img
                  src="/shoulder-anatomy-and-rehabilitation-exercise-athle.jpg"
                  alt="Anatomia do ombro"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-14 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Condições Tratadas</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Expertise no tratamento das principais lesões do ombro em atletas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-8 rounded-xl bg-card border border-border hover:border-[#0d7377] transition-all"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="text-[#d4af37] flex-shrink-0 mt-1" size={20} />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{condition.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{condition.description}</p>
                    <div className="space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-foreground">Sintomas comuns:</p>
                      <ul className="space-y-1">
                        {condition.symptoms.map((symptom, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-[#0d7377] mt-1">•</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Protocol Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-14 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Protocolo de Reabilitação</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Abordagem progressiva e baseada em evidências para recuperação completa.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {protocol.map((phase, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-8 rounded-xl bg-card border-2 border-border hover:border-[#0d7377] transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#0d7377] to-[#14919b] flex items-center justify-center">
                          <phase.icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">{phase.phase}</h3>
                          <span className="text-xs sm:text-sm text-[#d4af37] font-semibold">{phase.duration}</span>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{phase.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {phase.interventions.map((intervention, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="text-[#0d7377] flex-shrink-0" size={14} />
                              <span className="text-xs sm:text-sm text-muted-foreground">{intervention}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 sm:mb-14 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Por que escolher tratamento especializado?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#0d7377]/20 flex items-center justify-center mx-auto">
                      <benefit.icon className="text-[#d4af37]" size={24} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 sm:mb-14 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-4 sm:p-6 rounded-xl bg-card border border-border">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">{faq.question}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0d7377] to-[#14919b] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Está com dor no ombro?</h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                Não deixe a lesão evoluir. Agende sua avaliação e comece sua recuperação hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
                <Button asChild size="lg" className="bg-white text-[#0d7377] hover:bg-gray-100 font-semibold h-12 sm:h-14 text-base sm:text-lg px-6 sm:px-8">
                  <Link href="/agendamento">
                    Agendar avaliação
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 bg-transparent h-12 sm:h-14 text-base sm:text-lg px-6 sm:px-8"
                >
                  <Link href="/contato">Tirar dúvidas</Link>
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
