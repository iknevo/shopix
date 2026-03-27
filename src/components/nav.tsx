import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useMedia } from "react-use"
import { useState } from "react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Categories", path: "/categories" },
]

export default function Nav() {
  const isMobile = useMedia("(max-width: 1024px)", false)
  const [isOpen, setIsOpen] = useState(false)

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="px-2">
          <SheetHeader>
            <SheetTitle>
              <span className="font-bold">Menu</span>
            </SheetTitle>
          </SheetHeader>
          <VisuallyHidden>
            <SheetDescription>side menu navigation for shopix application</SheetDescription>
          </VisuallyHidden>
          <div className="mt-6 flex flex-col gap-4 px-4">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold">
              Shop<span className="text-primary">ix</span>
            </NavLink>

            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "font-medium text-primary" : "text-muted-foreground"
                }
              >
                {name}
              </NavLink>
            ))}

            <Button asChild variant="link" className="mt-4 w-full">
              <NavLink to="/shop" onClick={() => setIsOpen(false)}>
                Go to Shop
              </NavLink>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    )
  }
  return (
    <nav className="ml-6 hidden items-center gap-6 lg:flex">
      {navLinks.map(({ name, path }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-primary"
              : "text-muted-foreground transition hover:text-foreground"
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  )
}
