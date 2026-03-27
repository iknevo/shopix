import Section from "@/components/section"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function HomeCTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-background via-muted/70 to-background" />

      <div className="relative mx-auto max-w-2xl space-y-6 text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Limited Offer
        </div>

        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Get 10% OFF your first order
        </h2>

        <p className="text-sm opacity-90 md:text-base">
          Join thousands of happy customers and stay updated with the latest deals.
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input placeholder="Enter your email" className="h-11" />
          <Button className="h-11 w-full px-6 sm:w-auto">Subscribe</Button>
        </div>

        <p className="text-xs opacity-70">No spam. Unsubscribe anytime.</p>
      </div>
    </Section>
  )
}
