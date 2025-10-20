import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { DifferentialsSection } from "@/components/home/differentials-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { ShoulderSection } from "@/components/home/shoulder-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <DifferentialsSection />
        <ServicesPreview />
        <ShoulderSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
