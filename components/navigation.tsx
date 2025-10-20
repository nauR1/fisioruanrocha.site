"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/ombro", label: "Ombro" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] pointer-events-auto transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
   >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-lg sm:text-xl md:text-2xl font-display font-bold tracking-tight hover:scale-105 transition-transform duration-200">
              <span className="text-foreground">Fisio Ruan</span> <span className="text-primary">Rocha</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link, index) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="pointer-events-none absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full rounded-full" />
                </Link>
              </div>
            ))}
            <div>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 xl:px-6 text-sm shadow-sm hover:shadow-md transition-all duration-200"
              >
                <a href={getWhatsAppLink(WHATSAPP_MESSAGES.schedule)} target="_blank" rel="noopener noreferrer">
                  Agendar
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 z-[101] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <div>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-full"
                >
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.schedule)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
