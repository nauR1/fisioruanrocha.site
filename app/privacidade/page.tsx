import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | Ruan Rocha",
  description: "Política de privacidade e proteção de dados pessoais - LGPD",
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a1f2e] to-[#0a0a0a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidade</h1>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações Gerais</h2>
                  <p className="leading-relaxed">
                    Esta Política de Privacidade descreve como Ruan Rocha da Paixão coleta, usa e protege as informações
                    pessoais fornecidas por você ao utilizar nossos serviços de fisioterapia e este website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Dados Coletados</h2>
                  <p className="leading-relaxed mb-3">Coletamos as seguintes informações:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nome completo</li>
                    <li>Email</li>
                    <li>Telefone</li>
                    <li>Informações sobre sua condição de saúde (quando fornecidas voluntariamente)</li>
                    <li>Preferências de agendamento</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso das Informações</h2>
                  <p className="leading-relaxed mb-3">Utilizamos suas informações para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Agendar e confirmar consultas</li>
                    <li>Fornecer tratamento fisioterapêutico adequado</li>
                    <li>Entrar em contato sobre sua consulta ou tratamento</li>
                    <li>Enviar informações relevantes sobre nossos serviços (com seu consentimento)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Proteção de Dados</h2>
                  <p className="leading-relaxed">
                    Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso
                    não autorizado, alteração, divulgação ou destruição. Seus dados de saúde são tratados com sigilo
                    profissional conforme o Código de Ética da Fisioterapia.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Compartilhamento de Dados</h2>
                  <p className="leading-relaxed">
                    Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando
                    necessário para prestação do serviço (ex: laboratórios, outros profissionais de saúde) ou quando
                    exigido por lei.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
                  <p className="leading-relaxed mb-3">Você tem direito a:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Confirmar a existência de tratamento de dados</li>
                    <li>Acessar seus dados</li>
                    <li>Corrigir dados incompletos ou desatualizados</li>
                    <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                    <li>Revogar o consentimento</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
                  <p className="leading-relaxed">
                    Este site pode utilizar cookies para melhorar a experiência do usuário. Você pode configurar seu
                    navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Contato</h2>
                  <p className="leading-relaxed">
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                  </p>
                  <p className="leading-relaxed mt-3">
                    <strong>Email:</strong> drruanrocha@gmail.com
                    <br />
                    <strong>Telefone:</strong> (75) 9 9864-3266
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações</h2>
                  <p className="leading-relaxed">
                    Esta Política de Privacidade pode ser atualizada periodicamente. A versão mais recente estará sempre
                    disponível nesta página.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Última atualização:</strong> Janeiro de 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  <Footer />
    </>
  )
}
