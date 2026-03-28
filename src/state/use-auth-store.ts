import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

type AuthStore = {
  accessToken: string
  setAccessToken: (token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        accessToken: "",

        setAccessToken: (token) => set({ accessToken: token }, false, "setAccessToken"),

        logout: () => set({ accessToken: "" }, false, "logout"),
      }),
      {
        name: "auth-storage",
      }
    ),
    { name: "auth" }
  )
)
