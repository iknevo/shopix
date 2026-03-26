import { useQuery } from "@tanstack/react-query"
import { getCategories } from "./categories"

export function useGetCategoris() {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  })
  return query
}
