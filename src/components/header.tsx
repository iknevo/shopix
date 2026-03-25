import { Button } from "@/components/ui/button"
import { ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"
import Nav from "@/components/nav"
import { Badge } from "@/components/ui/badge"
import ThemeToggle from "./ui/theme-button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <Link to="/" className="hidden text-xl font-bold whitespace-nowrap lg:block">
          Shop<span className="text-primary">ix</span>
        </Link>
        <Nav />
        <div className="flex flex-1 lg:hidden">
          <Link to="/" className="mx-auto text-xl font-bold whitespace-nowrap">
            Shop<span className="text-primary">ix</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full" variant="secondary">
              2
            </Badge>
          </Button>

          <Button variant="ghost" size="icon">
            <User />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
