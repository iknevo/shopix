import BenefitsSection from "@/components/home/benefits-sections"
import HeroSection from "@/components/home/hero"
import HomeCTA from "@/components/home/home-cta"
import ProductsSection from "@/features/products/components/products-section"

export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <HomeCTA />
    </section>
  )
}
