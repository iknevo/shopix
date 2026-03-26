import { api } from "@/lib/axios"
import type { ProductsResponse } from "@/types/product"
import { toast } from "sonner"

type AllProductsProps = {
  category: string | null
  limit: number
  skip: number
}
export async function getProducts({
  category,
  limit,
  skip,
}: AllProductsProps): Promise<ProductsResponse> {
  let url = "/products"
  if (category) url += `/category/${category}`
  url += `?limit=${limit}&skip=${skip}`

  try {
    const res = await api.get(url)
    return res.data
  } catch {
    toast.error("Failed to fetch products")
    throw new Error("Failed to fetch products")
  }
}
