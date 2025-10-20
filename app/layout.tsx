import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ruan Rocha | Fisioterapia Traumato ortopedica — Reabilitação de Ombro",
  description:
    "Fisioterapia Traumato ortopedica especialista em reabilitação do ombro. Agendamento online.",
  keywords: [
    "fisioterapeuta esportivo",
    "quiropraxia",
    "especialista emreabilitação do ombro",
    "fisioterapia esportiva",
    "tratamento manguito rotador",
    "fisioterapia para atletas",
    "fisioterapia Bahia",
  ],
  authors: [{ name: "Ruan Rocha da Paixão" }],
  openGraph: {
    title: "Ruan Rocha | Fisioterapia Traumato ortopedica",
    description: "Especialista em reabilitação do ombro e performance atlética",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
