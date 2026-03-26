import CategoryFilter from "./category-filter"
import SortFilter from "./sort-filter"

export default function ProductsActions() {
  return (
    <div className="flex items-center gap-3">
      <CategoryFilter />
      <SortFilter />
    </div>
  )
}
