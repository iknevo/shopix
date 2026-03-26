import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden rounded-2xl border pt-0">
      <Skeleton className="aspect-square w-full" />

      <CardContent className="space-y-3 p-4">
        <Skeleton className="h-4 w-3/4" />

        <Skeleton className="h-3 w-1/2" />

        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>

        <Skeleton className="h-4 w-12" />

        <Skeleton className="h-9 w-full rounded-md" />
      </CardContent>
    </Card>
  )
}
