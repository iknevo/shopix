import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { useGetCategoris } from "@/features/categories/api/use-get-categories"
import { useFiltersParams } from "@/hooks/use-filters-params"
import type { Category } from "@/types/category"

export default function CategoryFilter() {
  const { category, setCategory } = useFiltersParams()
  const { data: categories = [], isLoading } = useGetCategoris()

  return (
    <Combobox
      items={categories}
      value={
        category
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ") || null
      }
      onValueChange={(val) => setCategory(val ?? "")}
      autoHighlight
    >
      <ComboboxInput placeholder="Filter By Category" showClear disabled={isLoading} />

      <ComboboxContent>
        <ComboboxEmpty>No categories found.</ComboboxEmpty>

        <ComboboxList>
          {(item: Category) => (
            <ComboboxItem key={item.slug} value={item.slug}>
              {item.name}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
