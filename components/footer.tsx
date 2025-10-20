import Link from "next/link"
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-foreground">Dr.Ruan</span> <span className="text-primary">Rocha</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Fisioterapia Traumato Ortopedica</p>
            <p className="text-xs text-muted-foreground">Recupere seu movimento. Volte mais forte.</p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/ombro" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Reabilitação do Ombro
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Quiropraxia</li>
              <li className="text-sm text-muted-foreground">Reabilitação do Ombro</li>
              <li className="text-sm text-muted-foreground">Performance Atlética</li>
              <li className="text-sm text-muted-foreground">Fisioterapia Neurofuncional</li>
              <li className="text-sm text-muted-foreground">Pilates Classico</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4">Contato</h3>
            <ul className="space-y-3">
              {/* Telefone Clicável */}
              <li className="flex items-start gap-2 text-sm text-muted-foreground justify-center sm:justify-start">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+5575988488287" className="hover:text-primary transition-colors">
                  (75) 9 8848-8287
                </a>
              </li>
              {/* E-mail Clicável */}
              <li className="flex items-start gap-2 text-sm text-muted-foreground justify-center sm:justify-start">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:drruanrocha@gmail.com" className="hover:text-primary transition-colors break-all">
                  drruanrocha@gmail.com
                </a>
              </li>
              {/* Localização Clicável */}
              <li className="flex items-start gap-2 text-sm text-muted-foreground justify-center sm:justify-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Taperoá+BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Taperoá - BA
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/fisioruanrocha" // <-- AJUSTE AQUI
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/fisioruanrocha" // <-- AJUSTE AQUI
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/fisioruanrocha" // <-- AJUSTE AQUI
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Ruan Rocha Fisioterapia traumato ortopedica. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground text-center">
            <Link href="/privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://instagram.com/Deed_System"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Desenvolvido por @Deed_System
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}