"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0d7377] to-[#14919b] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance"
          >
            Pronto para recuperar seu movimento?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
          >
            Agende sua avaliação e descubra como posso ajudá-lo a voltar mais forte para suas atividades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-3 sm:pt-4"
          >
            <Button asChild size="lg" className="bg-white text-[#0d7377] hover:bg-gray-100 font-semibold text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8">
              <Link href="/agendamento">
                <Calendar className="mr-2" size={18} />
                Agendar consulta
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg.white/10 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-transparent">
              <Link href="/agendamento">
                Entrar em contato
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.5 }}
            className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm"
          >
            {[
              "Atendimento humanizado",
              "Baseado em evidências",
              "Resultados comprovados",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
