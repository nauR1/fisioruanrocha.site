"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            <Sparkles size={16} />
            <span>Fisioterapia Traumato ortopedica</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.1] text-balance"
          >
            Recupere seu
            <span className="block text-primary mt-1 sm:mt-2">movimento</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-1 sm:gap-2"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Especialista em reabilitação do ombro e performance atlética.
            </p>
            <p className="text-base sm:text-lg font-semibold text-primary">CREFITO-7 / 440234-F            </p>
            <p className="text-sm text-muted-foreground">Ruan Rocha - Fisioterapeuta</p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty"
          >
            Tratamentos baseados em evidências científicas.
            <span className="block mt-1 sm:mt-2">Conheça meu trabalho</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
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
              <Link href="/sobre">Conheça meu trabalho</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto pt-12 sm:pt-14 md:pt-16"
          >
            {[
              { value: "10+", label: "Cursos" },
              { value: "2", label: "pós Graduação" },
              { value: "95%", label: "Satisfação" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="space-y-1 sm:space-y-2"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary">{stat.value}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
