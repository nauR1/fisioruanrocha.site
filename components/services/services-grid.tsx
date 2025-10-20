"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ServiceModal } from "@/components/service-modal"
import { servicesData } from "@/lib/services-data"
import type { Service } from "@/lib/types"
import * as Icons from "lucide-react"
import { ArrowRight, Star, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const iconMap: Record<string, any> = Icons as any

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
      >
        {servicesData.map((service) => {
          const IconComponent = iconMap[service.icon] ?? Icons.HelpCircle
          const previewBenefits = service.benefits.slice(0, 3)
          const isFeatured = !!service.featured

          return (
            <motion.div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl bg-card border-2 transition-all duration-300 ${
                isFeatured ? "border-[#0d7377] shadow-lg lg:col-span-2" : "border-border hover:border-[#0d7377] hover:shadow-lg"
              }`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              variants={itemVariants}
              onClick={() => handleOpen(service)}
            >
              {isFeatured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-[#0d7377] to-[#14919b] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Especialidade
                  </div>
                </div>
              )}

              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="p-6 sm:p-8">
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="text-white" size={isFeatured ? 32 : 28} />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-2">
                  {service.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {previewBenefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted/40 text-foreground text-xs"
                    >
                      <CheckCircle2 className="text-[#0d7377]" size={12} />
                      {benefit}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="border-2 bg-transparent" onClick={() => handleOpen(service)}>
                  Saiba mais
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}