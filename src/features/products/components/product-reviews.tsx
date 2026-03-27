import type { ProductReviews } from "@/types/product"
import { Star } from "lucide-react"

type Props = {
  reviews: ProductReviews
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export function ProductReviews({ reviews }: Props) {
  return (
    <div className="mt-14 space-y-6">
      <h2 className="text-xl font-semibold">Customer Reviews ({reviews.length})</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {reviews.slice(0, 4).map((review, i) => (
          <div key={i} className="rounded-2xl border bg-background p-5 transition hover:shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium">
                {getInitials(review.reviewerName)}
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">{review.reviewerName}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`h-4 w-4 ${
                    idx < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
