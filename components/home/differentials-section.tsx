"use client"

import { Target, Brain, Heart, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export function DifferentialsSection() {
  const differentials = [
    {
      icon: Target,
      title: "Baseado em Evidências",
      description: "Tratamentos fundamentados em pesquisas científicas e protocolos validados internacionalmente.",
    },
    {
      icon: Brain,
      title: "Raciocínio Clínico Avançado",
      description: "Avaliação detalhada e personalizada para identificar a causa raiz do problema.",
    },
    {
      icon: Heart,
      title: "Abordagem Humanizada",
      description: "Atendimento empático focado em suas necessidades individuais e objetivos pessoais.",
    },
    {
      icon: Trophy,
      title: "Foco em Performance",
      description: "Especialização em atletas de alto rendimento e retorno seguro ao esporte.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Por que escolher meu trabalho?</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Combinação única de expertise técnica, formação especializada e compromisso com resultados reais.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group p-6 sm:p-8 rounded-xl bg-card border border-border hover:border-[#0d7377] transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#0d7377]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#0d7377] transition-colors">
                <item.icon className="text-[#0d7377] group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
