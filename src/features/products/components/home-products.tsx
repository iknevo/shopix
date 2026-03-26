import Section from "@/components/section"
import CategoryFilter from "./category-filter"
import { useQueryState } from "nuqs"
import { useGetProducts } from "../api/use-get-products"
import ProductCard from "./product-card"
import ProductCardSkeleton from "./product-card-skeleton"
import ProductsPagination from "./products-pagination"
import { productsLimit } from "@/config/constants"
import { useRef } from "react"

export default function HomeProducts() {
  const [category] = useQueryState("category")
  const [page, setPage] = useQueryState("page", {
    defaultValue: 1,
    parse: Number,
  })
  const { data, isLoading } = useGetProducts({ category, page })
  const productsRef = useRef<HTMLDivElement | null>(null)
  const handlePageChange = (p: number) => {
    setPage(p)

    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <Section
      title="Our Products"
      description="Discover some of our best products"
      action={<CategoryFilter />}
      ref={productsRef}
    >
      {isLoading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {data?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <div className="mt-4">
        <ProductsPagination
          page={page}
          total={data?.total || 0}
          limit={productsLimit}
          onPageChange={handlePageChange}
        />
      </div>
    </Section>
  )
}
