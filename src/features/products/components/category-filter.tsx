import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { useGetCategoris } from "@/features/categories/api/use-get-categories"
import { useQueryStates } from "nuqs"

export default function CategoryFilter() {
  const [params, setParams] = useQueryStates({
    category: { defaultValue: "", parse: String },
    page: { defaultValue: 1, parse: Number },
  })

  const { data: categories = [], isLoading } = useGetCategoris()

  return (
    <Combobox
      items={categories}
      value={params.category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}
      onValueChange={(val) =>
        setParams({
          category: val,
          page: 1,
        })
      }
      autoHighlight
    >
      <ComboboxInput placeholder="Category" showClear disabled={isLoading} />

      <ComboboxContent>
        <ComboboxEmpty>No categories found.</ComboboxEmpty>

        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.slug} value={item.slug}>
              {item.name}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
