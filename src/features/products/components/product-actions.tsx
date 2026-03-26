import CategoryFilter from "./category-filter"
import SortFilter from "./sort-filter"

export default function ProductsActions() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <CategoryFilter />
      <SortFilter />
    </div>
  )
}
