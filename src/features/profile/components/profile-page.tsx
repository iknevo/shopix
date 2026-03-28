import Section from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, User as UserIcon, LogOut, MapPin, Building2 } from "lucide-react"
import { useAuthStore } from "@/state/use-auth-store"
import { useMe } from "@/features/auth/api/use-me"
import { useNavigate } from "react-router-dom"

export default function ProfilePage() {
  const navigate = useNavigate()
  const { accessToken, logout } = useAuthStore()
  const { data: user, isLoading } = useMe(accessToken)

  if (isLoading) {
    return (
      <Section title="My Profile" className="py-10">
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground">Loading profile...</p>
        </div>
      </Section>
    )
  }

  if (!user) return null

  return (
    <Section title="My Profile" className="py-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="h-24 w-24 overflow-hidden rounded-full border">
              <img src={user.image} alt={user.username} className="h-full w-full object-cover" />
            </div>

            <h2 className="mt-4 text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-sm text-muted-foreground">@{user.username}</p>

            <Badge className="mt-2 capitalize">{user.gender}</Badge>

            <p className="mt-2 text-xs text-muted-foreground">Age: {user.age}</p>
          </CardContent>
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="space-y-6 p-6">
              <h3 className="text-lg font-semibold">Account Information</h3>

              <Separator />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">First Name</p>
                  <p className="mt-1 font-medium">{user.firstName}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Last Name</p>
                  <p className="mt-1 font-medium">{user.lastName}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4" />
                    Username
                  </p>
                  <p className="mt-1 font-medium">{user.username}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    Email
                  </p>
                  <p className="mt-1 font-medium">{user.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="space-y-6 p-6">
              <h3 className="text-lg font-semibold">Additional Info</h3>

              <Separator />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Address
                  </p>
                  <p className="mt-1 font-medium">
                    {user.address.address}, {user.address.city}
                  </p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    Company
                  </p>
                  <p className="mt-1 font-medium">{user.company.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="space-y-4 p-6">
              <h3 className="text-lg font-semibold">Account Actions</h3>

              <Separator />

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => {
                    logout()
                    navigate("/login")
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
