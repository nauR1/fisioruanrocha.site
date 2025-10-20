"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants"

export function WhatsAppButton() {
  const href = getWhatsAppLink(WHATSAPP_MESSAGES.schedule)

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
