import { api } from "@/lib/axios"
import type { UserResponse } from "@/types/auth"
import { toast } from "sonner"

interface Props {
  username: string
  password: string
}

export async function login({ username, password }: Props): Promise<UserResponse> {
  try {
    // HACK: this is for testing only
    // await new Promise((resolve) => setTimeout(resolve, 500))
    const res = await api.post("/auth/login", {
      username,
      password,
      expiresInMins: 15,
    })
    localStorage.setItem("refreshToken", res.data.refreshToken)
    return res.data
  } catch {
    toast.error("Failed to login")
    throw new Error("Failed to login")
  }
}

export async function getUser(): Promise<UserResponse> {
  try {
    const res = await api.get("/auth/me")
    return res.data
  } catch {
    throw new Error("Failed to login")
  }
}
