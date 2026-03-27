import Section from "@/components/section"
import { useGetProducts } from "../api/use-get-products"
import ProductCard from "./product-card"
import ProductCardSkeleton from "./product-card-skeleton"
import ProductsPagination from "./products-pagination"
import { productsLimit } from "@/config/constants"
import { useRef } from "react"
import ProductsActions from "./product-actions"
import { useFiltersParams } from "@/hooks/use-filters-params"

export default function ProductsSection() {
  const { category, sortBy, order, page, setParams, resetFilters } = useFiltersParams()

  const { data, isLoading, isError, refetch } = useGetProducts({
    category,
    page,
    sortBy,
    order,
  })

  const productsRef = useRef<HTMLDivElement | null>(null)

  const handlePageChange = (page: number) => {
    setParams({ page })

    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const isEmpty = !isLoading && !isError && data?.products.length === 0

  return (
    <Section
      title="Our Products"
      description="Discover some of our best products"
      action={<ProductsActions />}
      ref={productsRef}
    >
      {isLoading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium text-destructive">Failed to load products</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Something went wrong. Please try again.
          </p>

          <div className="mt-4 flex gap-2">
            <button onClick={() => refetch()} className="rounded-md border px-4 py-2 text-sm">
              Retry
            </button>

            <button onClick={resetFilters} className="rounded-md border px-4 py-2 text-sm">
              Reset Filters
            </button>
          </div>
        </div>
      ) : isEmpty ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium">No products found</p>
          <p className="mt-1 text-sm text-muted-foreground">Try changing category or sorting</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-4">
          {data?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!isLoading && !isError && !isEmpty && (
        <div className="mt-4">
          <ProductsPagination
            page={page}
            total={data?.total || 0}
            limit={productsLimit}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </Section>
  )
}
