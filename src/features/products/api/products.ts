import { api } from "@/lib/axios"
import type { ProductsResponse } from "@/types/product"
import { toast } from "sonner"

type AllProductsProps = {
  category: string
  limit: number
  skip: number
  sort: {
    sortBy: string
    order: string
  }
}

export async function getProducts({
  category,
  limit,
  skip,
  sort,
}: AllProductsProps): Promise<ProductsResponse> {
  const baseUrl = category ? `/products/category/${category}` : "/products"

  const params = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
    ...(sort.sortBy && { sortBy: sort.sortBy }),
    ...(sort.order && { order: sort.order }),
  })

  const url = `${baseUrl}?${params.toString()}`

  try {
    const res = await api.get(url)
    return res.data
  } catch {
    toast.error("Failed to fetch products")
    throw new Error("Failed to fetch products")
  }
}
