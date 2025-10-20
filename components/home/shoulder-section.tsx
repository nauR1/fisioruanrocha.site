"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function ShoulderSection() {
  const conditions = [
    "Lesões do manguito rotador",
    "Tendinite do supraespinhal",
    "Impacto subacromial",
    "Instabilidade glenoumeral",
    "Bursite do ombro",
    "Capsulite adesiva (ombro congelado)",
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1f2e] to-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">Especialização</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              Reabilitação do Ombro
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              O ombro é essencial para o dia a dia, mas é também uma das articulações mais lesionadas. Sabia que é sua articulaçãio mais movel? 
              Combino ajustes quiropráticos precisos, treino funcional progressivo e técnicas manuais validadas para aliviar 
              tendinites, impacto subacromial, lesões do manguito rotador e instabilidade — recuperando força e amplitude 
              com segurança e rapidez.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-[#14919b]">Condições tratadas:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {conditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="text-[#d4af37] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm text-gray-300">{condition}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button asChild size="lg" className="bg-[#d4af37] hover:bg-[#e8c547] text-black font-semibold">
                <Link href="/ombro">
                  Saiba mais sobre ombro
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/agendamento">Agendar avaliação</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[500px]"
          >
            <img
              src="/shoulder-anatomy-and-rehabilitation-exercise-athle.jpg"
              alt="Reabilitação do ombro"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d7377]/30 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
