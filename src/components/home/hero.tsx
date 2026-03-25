import { HeroImg } from "@/assets"
import { Button } from "@/components/ui/button"
import { Flame, Landmark, RefreshCw, Truck } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-background via-muted/40 to-background" />

      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Discover Your Next
              <span className="block text-primary">Favorite Product</span>
            </h1>

            <p className="mx-auto max-w-150 text-muted-foreground md:text-lg lg:mx-0">
              Shop the latest trends with unbeatable prices. High-quality products curated just for
              you.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="px-8">
                Shop Now
              </Button>

              <Button variant="outline" size="lg" className="px-8">
                Browse Categories
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-2">
                <Truck size={20} />
                <span>Free Shipping</span>
              </div>

              <div className="flex items-center gap-2">
                <Landmark size={20} />
                <span>Secure Payment</span>
              </div>

              <div className="flex items-center gap-2">
                <RefreshCw size={20} />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border bg-muted">
              <img src={HeroImg} alt="Hero" className="h-full w-full object-cover" />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border bg-background p-4 shadow-lg md:block">
              <p className="mb-3 flex items-center gap-2 text-sm font-medium">
                <Flame className="text-orange-500" />
                <span>Hot Deals</span>
              </p>
              <p className="text-lg font-bold text-primary">Up to 50% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
