import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./products"
import { productsLimit } from "@/config/constants"

type Props = {
  category: string
  page: number
  sortBy: string
  order: string
}

export function useGetProducts({ category, page, sortBy, order }: Props) {
  const query = useQuery({
    queryKey: ["products", category, page, sortBy, order],
    queryFn: async () =>
      getProducts({
        category,
        limit: productsLimit,
        skip: (page - 1) * productsLimit,
        sort: { sortBy, order },
      }),
  })

  return query
}
