import { create } from "zustand"
import { devtools } from "zustand/middleware"

type User = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  image: string
  gender: string
}

type AuthStore = {
  user: User | null
  accessToken: string

  setUser: (user: User) => void
  setAccessToken: (token: string) => void
  checkLoggedIn: () => boolean
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    (set, get) => ({
      user: null,
      accessToken: "",

      setUser: (user) => set({ user }, false, "setUser"),

      setAccessToken: (token) => set({ accessToken: token }, false, "setAccessToken"),

      logout: () => set({ user: null, accessToken: "" }, false, "logout"),

      checkLoggedIn: () => {
        const { accessToken, user } = get()
        return !!accessToken && !!user
      },
    }),
    {
      name: "auth",
    }
  )
)
