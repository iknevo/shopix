import { api } from "@/lib/axios"
import { useAuthStore } from "@/state/use-auth-store"
import type { UserResponse } from "@/types/auth"
import { useEffect } from "react"

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser } = useAuthStore()

  useEffect(() => {
    async function getUser(): Promise<UserResponse> {
      try {
        // HACK: this is for testing only
        // await new Promise((resolve) => setTimeout(resolve, 500))
        const res = await api.get("/auth/me")

        const { id, email, username, firstName, lastName, image, gender } = res.data
        setUser({
          id,
          email,
          username,
          firstName,
          lastName,
          image,
          gender,
        })
        return res.data
      } catch {
        throw new Error("Failed to login")
      }
    }
    getUser()
  }, [setUser])

  return children
}
