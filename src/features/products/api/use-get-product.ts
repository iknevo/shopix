import { useQuery } from "@tanstack/react-query"
import { getProductById } from "./products"

export function useGetProduct(id: number) {
  const query = useQuery({
    queryKey: ["product", id],
    enabled: !!id,
    queryFn: async () => getProductById(id),
  })

  return query
}
