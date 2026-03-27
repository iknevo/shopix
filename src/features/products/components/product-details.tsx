import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Trash } from "lucide-react"
import { useState } from "react"
import Section from "@/components/section"
import { useGetProduct } from "../api/use-get-product"
import { ProductReviews } from "./product-reviews"
import ProductDetailsSkeleton from "./product-details-skeleton"
import ProductNotFound from "./product-not-found"
import { useCartStore } from "@/state/use-cart-store"
import { cn } from "@/lib/utils"

export default function ProductDetails() {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)
  const { data: product, isLoading, isError } = useGetProduct(Number(id))
  const inStock = !!product && product?.stock > 0
  const { addItem, isInCart, removeItem } = useCartStore()
  const inCart = !!product && isInCart(product.id)

  const handleClick = () => {
    if (!product) return

    const { id, title, price, thumbnail } = product
    if (inCart) {
      removeItem(id)
    } else {
      addItem({
        id,
        title,
        price,
        quantity: 1,
        total: price,
        thumbnail,
      })
    }
  }

  if (isLoading) return <ProductDetailsSkeleton />
  if (isError || !product) return <ProductNotFound />

  return (
    <Section className="py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border bg-muted">
            <img
              src={product.images[activeImage]}
              alt={product.title}
              className="h-100 w-full object-contain"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "overflow-hidden rounded-lg border p-1",
                  idx === activeImage && "border-primary"
                )}
              >
                <img src={img} className="h-16 w-16 object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Badge variant="secondary" className="capitalize">
            {product.category}
          </Badge>

          <h1 className="text-2xl font-semibold md:text-3xl">{product.title}</h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {product.rating} ({product.reviews.length} reviews)
          </div>

          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-primary">${product.price}</p>

            {product.discountPercentage > 0 && (
              <>
                <p className="text-sm text-muted-foreground line-through">
                  ${Math.round(product.price / (1 - product.discountPercentage / 100))}$
                </p>
                <Badge variant="destructive">-{product.discountPercentage}%</Badge>
              </>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <p className="text-sm">
            {inStock ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="sm" className="md:flex-1" variant={"outline"} disabled={!inStock} asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>

            <Button
              size="sm"
              variant={inCart ? "destructive" : "default"}
              className="md:flex-1"
              onClick={handleClick}
            >
              {inCart ? <Trash className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </Button>
          </div>

          <div className="space-y-1 text-sm text-muted-foreground">
            <p>{product.shippingInformation}</p>
            <p>{product.warrantyInformation}</p>
          </div>
        </div>
      </div>
      <ProductReviews reviews={product.reviews} />
    </Section>
  )
}
