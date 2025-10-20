"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Service } from "@/lib/types"
import { CheckCircle2, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground pr-8">{service.title}</DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 py-4"
        >
          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed text-lg">{service.fullDescription}</p>
          </div>

          {/* Duration and Ideal For Quick Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
              <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Duração</h4>
                <p className="text-sm text-muted-foreground">{service.duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
              <Users className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Atendimento</h4>
                <p className="text-sm text-muted-foreground">Individual e personalizado</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Benefícios</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Techniques */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Técnicas Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {service.techniques.map((technique, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {technique}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Indicado Para</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.idealFor.map((indication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/30"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{indication}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex-1">
                <Link href="/agendamento">Agendar Avaliação</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1 bg-transparent">
                <Link href="/agendamento">Tirar Dúvidas</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
