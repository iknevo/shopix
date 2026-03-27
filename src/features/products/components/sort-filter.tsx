import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { useFiltersParams } from "@/hooks/use-filters-params"

const SORT_OPTIONS = [
  { label: "Title: A-Z", value: "title", order: "asc" },
  { label: "Title: Z-A", value: "title", order: "desc" },
  { label: "Price: Low to High", value: "price", order: "asc" },
  { label: "Price: High to Low", value: "price", order: "desc" },
]

export default function SortFilter() {
  const { setSort, sortBy, order } = useFiltersParams()

  const selectedOption = SORT_OPTIONS.find((opt) => opt.value === sortBy && opt.order === order)

  return (
    <Combobox
      items={SORT_OPTIONS}
      value={selectedOption || null}
      onValueChange={(val) => setSort(val?.value ?? "", val?.order ?? "")}
      autoHighlight
    >
      <ComboboxInput placeholder="Sort by" showClear />

      <ComboboxContent>
        <ComboboxEmpty>No options found.</ComboboxEmpty>

        <ComboboxList>
          {(item) => (
            <ComboboxItem key={`${item.value}-${item.order}`} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
