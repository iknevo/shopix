import { api } from "@/lib/axios"
import type { CategoryResponse } from "@/types/category"
import { toast } from "sonner"

export async function getCategories(): Promise<CategoryResponse> {
  try {
    const res = await api.get("/products/categories")
    return res.data
  } catch {
    toast.error("Failed to fetch categories")
    throw new Error("Failed to fetch categories")
  }
}
