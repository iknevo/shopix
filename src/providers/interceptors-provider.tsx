import { api } from "@/lib/axios"
import { useAuthStore } from "@/state/use-auth-store"
import { useLayoutEffect, type ReactNode } from "react"

export default function InterceptorsProvider({ children }: { children: ReactNode }) {
  const { accessToken, setAccessToken, logout } = useAuthStore()

  useLayoutEffect(() => {
    const reqInterceptor = api.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    })

    return () => {
      api.interceptors.request.eject(reqInterceptor)
    }
  }, [accessToken])

  useLayoutEffect(() => {
    const resInterceptor = api.interceptors.response.use(
      (res) => res,
      async (error) => {
        const original = error.config

        if (error.status === 401 && !original._retry) {
          original._retry = true

          try {
            const refreshToken = localStorage.getItem("refreshToken")

            const res = await api.post("/auth/refresh", {
              refreshToken,
            })

            const newAccessToken = res.data.accessToken

            setAccessToken(newAccessToken)

            original.headers.Authorization = `Bearer ${newAccessToken}`

            return api(original)
          } catch (err) {
            logout()
            return Promise.reject(err)
          }
        }

        return Promise.reject(error)
      }
    )

    return () => {
      api.interceptors.response.eject(resInterceptor)
    }
  }, [setAccessToken, logout])

  return children
}
