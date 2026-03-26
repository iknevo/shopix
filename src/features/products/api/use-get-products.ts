import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./products"
import { productsLimit } from "@/config/constants"

type Props = {
  category: string | null
  page: number
}
export function useGetProducts({ category, page = 1 }: Props) {
  const query = useQuery({
    queryKey: ["products", category, page],
    queryFn: async () =>
      getProducts({ category, limit: productsLimit, skip: (page - 1) * productsLimit }),
  })
  const total = query.data?.total ?? 0
  const pagesCount = Math.ceil(total / productsLimit)
  console.log({ total, pagesCount })

  return query
}
