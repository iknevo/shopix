import { useAuthStore } from "@/state/use-auth-store"
import { useEffect, type ReactNode } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { accessToken } = useAuthStore()
  const hasHydrated = useAuthStore.persist.hasHydrated()

  const navigate = useNavigate()
  const location = useLocation()

  const isLoggedIn = !!accessToken

  useEffect(() => {
    if (hasHydrated && !isLoggedIn) {
      navigate("/login", {
        state: { from: location.pathname },
        replace: true,
      })
    }
  }, [hasHydrated, isLoggedIn, navigate, location])

  if (!hasHydrated) return null

  return children
}
