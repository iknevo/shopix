import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { Eye, EyeOff } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useLogin } from "../api/use-login"
import { useAuthStore } from "@/state/use-auth-store"

const schema = z.object({
  username: z.string().min(1, "User name is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
})

type FormValues = z.infer<typeof schema>

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || "/"
  const [showPassword, setShowPassword] = useState(false)
  const { mutate: login, isPending } = useLogin()
  const { setUser, setAccessToken } = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const isLoading = isPending || isSubmitting
  const onSubmit = async (data: FormValues) => {
    login(data, {
      onSuccess: (data) => {
        const { accessToken, id, email, username, firstName, lastName, image, gender } = data
        setAccessToken(accessToken)
        setUser({
          id,
          email,
          username,
          firstName,
          lastName,
          image,
          gender,
        })
        navigate(from, { replace: true })
      },
    })
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border bg-background shadow-sm md:grid-cols-2">
        <div className="relative hidden flex-col justify-between bg-muted p-8 md:flex">
          <div>
            <h2 className="text-2xl font-bold">
              Shop<span className="text-primary">ix</span>
            </h2>

            <p className="mt-4 text-sm text-muted-foreground">
              Discover amazing products at unbeatable prices.
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>✔ Fast delivery</p>
            <p>✔ Secure payments</p>
            <p>✔ Easy returns</p>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
        </div>

        <Card className="rounded-none border-0 shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <p className="text-sm text-muted-foreground">Login to your account</p>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label>User name</Label>
                <Input
                  placeholder="username"
                  type="text"
                  autoComplete="username"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-xs text-red-500">{errors.username.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Password</Label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    {...register("password")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-xs text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="flex items-center justify-end text-sm">
                <Link to="/forgot-password" className="text-muted-foreground hover:text-foreground">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-border" />
              OR
              <div className="h-px flex-1 bg-border" />
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Don’t have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
