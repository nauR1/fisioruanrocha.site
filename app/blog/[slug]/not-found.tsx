import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center bg-background py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
              <FileQuestion className="text-muted-foreground" size={48} />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Artigo não encontrado</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Button asChild variant="default" size="lg">
              <Link href="/blog">Voltar para o blog</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
