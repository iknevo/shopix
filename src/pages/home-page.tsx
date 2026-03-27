import BenefitsSection from "@/components/home/benefits-sections"
import HeroSection from "@/components/home/hero"
import HomeCTA from "@/components/home/home-cta"
import ProductsSection from "@/features/products/components/products-section"

import { useHead } from "@unhead/react"

export default function HomePage() {
  useHead({
    title: "Shopix - Home",
    meta: [
      {
        name: "description",
        content:
          "Shop the latest trends with unbeatable prices. High-quality products curated just for you.",
      },
    ],
  })
  return (
    <section>
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <HomeCTA />
    </section>
  )
}
