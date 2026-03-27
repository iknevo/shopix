import Section from "@/components/section"
import { useGetCategoris } from "@/features/categories/api/use-get-categories"
import { cn } from "@/lib/utils"
import { Tag } from "lucide-react"
import { useFiltersParams } from "@/hooks/use-filters-params"
import CategoriesSkeleton from "./categories-skeleton"
import { Link } from "react-router-dom"
import { useHead } from "@unhead/react"

export default function CategoriesSection() {
  const { data: categories = [], isLoading } = useGetCategoris()
  const { setCategory } = useFiltersParams()

  useHead({
    title: "Shopix - Categories",
    meta: [
      {
        name: "description",
        content: "Check all categories",
      },
    ],
  })

  if (isLoading) {
    return (
      <Section title="Shop by Category" description="Explore products across all categories">
        <CategoriesSkeleton />
      </Section>
    )
  }

  return (
    <Section title="Shop by Category" description="Explore products across all categories">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setCategory(cat.slug)}
            className={cn(
              "group relative overflow-hidden rounded-2xl border bg-background p-4 text-left transition-all duration-300",
              "hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            )}
          >
            <Link to="/shop">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/0 to-primary/10 opacity-0 transition group-hover:opacity-100" />

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <Tag className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>

              <p className="text-sm leading-tight font-medium transition group-hover:text-primary">
                {cat.name}
              </p>

              <span className="mt-2 inline-block text-xs text-muted-foreground opacity-0 transition group-hover:opacity-100">
                Explore →
              </span>
            </Link>
          </button>
        ))}
      </div>
    </Section>
  )
}
