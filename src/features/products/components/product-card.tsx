import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import type { Product } from "@/types/product"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Card className="group overflow-hidden rounded-2xl border pt-0 transition hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2">
            -{Math.round(product.discountPercentage)}%
          </Badge>
        )}
      </div>

      <CardContent className="space-y-3 p-4">
        <h3 className="line-clamp-1 text-sm font-medium">{product.title}</h3>

        <p className="text-xs text-muted-foreground">{product.brand}</p>

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-primary">${product.price}</span>

          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              ${Math.round(product.price / (1 - product.discountPercentage / 100))}$
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>

        <Button size="sm" className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
