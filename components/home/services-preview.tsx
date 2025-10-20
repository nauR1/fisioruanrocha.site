"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Activity,
  Dumbbell,
  Brain,
  Bone,
  Heart,
  Trophy,
  Hand,
  Ear,
  Circle,
  HandMetal,
  Star,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { ServiceModal } from "@/components/service-modal"
import { servicesData } from "@/lib/services-data"
import type { Service } from "@/lib/types"
import Link from "next/link"

const iconMap: Record<string, any> = {
  Activity,
  Dumbbell,
  Brain,
  Bone,
  Heart,
  Trophy,
  Hand,
  Ear,
  Circle,
  HandMetal,
}

export function ServicesPreview() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Show first 4 services in preview
  const previewServices = servicesData.slice(0, 4)

  const handleServiceClick = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Serviços Especializados</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Tratamentos integrados para reabilitação completa e melhora do desempenho funcional.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
          >
            {previewServices.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              const isFeatured = service.featured
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative overflow-hidden rounded-2xl bg-card border-2 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    isFeatured ? "border-[#0d7377] shadow-lg" : "border-border"
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  {isFeatured && (
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="bg-gradient-to-r from-[#0d7377] to-[#14919b] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                      >
                        <Star size={12} fill="currentColor" />
                        Especialidade
                      </motion.div>
                    </div>
                  )}
                  <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
          />
                  <div className="p-6 sm:p-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.35 }}
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 ${
                        isFeatured ? "ring-2 ring-[#0d7377] ring-offset-2" : ""
                      }`}
                    >
                      <IconComponent className="text-white" size={isFeatured ? 32 : 28} />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">{service.shortDescription}</p>
                    <button className="inline-flex items-center text-[#0d7377] font-semibold hover:gap-2 transition-all text-sm sm:text-base">
                      Saiba mais
                      <ArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.3 }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
              <Link href="/servicos">
                Ver todos os serviços
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
