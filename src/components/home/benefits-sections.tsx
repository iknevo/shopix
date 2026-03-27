import Section from "@/components/section"
import { Truck, ShieldCheck, RefreshCw } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $50",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% protected payments",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "30-day return policy",
  },
]

export default function BenefitsSection() {
  return (
    <Section className="bg-muted/40">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {benefits.map((b) => {
          const Icon = b.icon
          return (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-xl border bg-background p-4"
            >
              <Icon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">{b.title}</p>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
