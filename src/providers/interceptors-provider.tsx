import { api } from "@/lib/axios"
import { useAuthStore } from "@/state/use-auth-store"
import { useLayoutEffect, type ReactNode } from "react"

export default function InterceptorsProvider({ children }: { children: ReactNode }) {
  const { accessToken, setAccessToken } = useAuthStore()

  useLayoutEffect(() => {
    const reqInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${accessToken}`
      return config
    })
    return () => {
      api.interceptors.request.eject(reqInterceptor)
    }
  }, [accessToken])

  useLayoutEffect(() => {
    const resInterceptor = api.interceptors.response.use(
      (config) => config,
      async (error) => {
        const original = error.config
        if (error.status === 401 && !original._retry) {
          original._retry = true
          const refreshToken = localStorage.getItem("refreshToken")
          const res = await api.post("/auth/refresh", {
            refreshToken,
          })
          const { accessToken } = res.data
          setAccessToken(accessToken)

          original.headers.Authorization = `Bearer ${accessToken}`
          return api(original)
        }
        return Promise.reject(error)
      }
    )
    return () => {
      api.interceptors.request.eject(resInterceptor)
    }
  }, [setAccessToken])

  return children
}
