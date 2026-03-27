import { Skeleton } from "@/components/ui/skeleton"
import Section from "@/components/section"

export default function ProductDetailsSkeleton() {
  return (
    <Section className="py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="h-100 w-full rounded-2xl" />

          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-16 rounded-lg" />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-8 w-3/4" />

          <Skeleton className="h-4 w-40" />

          <div className="flex gap-3">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-6 w-16" />
          </div>

          <Skeleton className="h-16 w-full" />

          <Skeleton className="h-4 w-32" />

          <div className="flex gap-3">
            <Skeleton className="h-11 w-full" />
            <Skeleton className="h-11 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    </Section>
  )
}
