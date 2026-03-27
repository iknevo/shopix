import { useQueryStates } from "nuqs"

export function useFiltersParams() {
  const [params, setParams] = useQueryStates({
    category: { defaultValue: "", parse: String },
    sortBy: { defaultValue: "", parse: String },
    order: { defaultValue: "", parse: String },
    page: { defaultValue: 1, parse: Number },
  })

  return {
    category: params.category,
    sortBy: params.sortBy,
    order: params.order,
    page: params.page,
    params,
    setParams,
    setCategory: (category: string) => setParams({ category, page: 1 }),
    setSort: (sortBy: string, order: string) => setParams({ sortBy, order, page: 1 }),

    resetFilters: () =>
      setParams({
        category: "",
        sortBy: "",
        order: "",
        page: 1,
      }),
  }
}
