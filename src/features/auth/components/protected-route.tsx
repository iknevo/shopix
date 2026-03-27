import { useAuthStore } from "@/state/use-auth-store"
import { useEffect, type ReactNode } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { checkLoggedIn } = useAuthStore()
  const isLoggedIn = checkLoggedIn()

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", {
        state: { from: location.pathname },
        replace: true,
      })
    }
  }, [isLoggedIn, navigate, location])

  return children
}
