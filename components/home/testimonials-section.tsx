"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "Cruz das Almas, BA",
      sport: "Crossfit",
      text: "Após uma lesão no ombro, achei que não voltaria a treinar. O Dr. Ruan não só me recuperou, como voltei mais forte. Profissional excepcional!",
      rating: 5,
    },
    {
      name: "Marina Santos",
      location: "Santo Antônio de Jesus, BA",
      sport: "Natação",
      text: "Tratamento humanizado e eficaz. A abordagem do Dr. Ruan com quiropraxia e exercícios funcionais fez toda diferença na minha recuperação.",
      rating: 5,
    },
    {
      name: "Maria",
      location: "Taperoá, BA",
      sport: "Musculação",
      text: "Sofria com dores crônicas há anos. O trabalho com fibromialgia e liberação miofascial mudou minha qualidade de vida completamente.",
      rating: 5,
    },
    {
      name: "Ana Paula",
      location: "Cruz das Almas, BA",
      sport: "Vôlei",
      text: "Profissional atualizado e competente. Me ajudou a voltar às quadras em tempo recorde após lesão do manguito rotador.",
      rating: 5,
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
          transition={{ duration: 0.35 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">O que dizem meus pacientes</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Resultados reais de pessoas que recuperaram movimento e voltaram mais fortes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-[#0d7377] transition-all duration-300 hover:shadow-lg"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#0d7377]/10" size={36} />

              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="text-[#d4af37] fill-[#d4af37]" size={16} />
                  </motion.div>
                ))}
              </div>

              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6 relative z-10">"{testimonial.text}"</p>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#0d7377] to-[#14919b] flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.sport} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
