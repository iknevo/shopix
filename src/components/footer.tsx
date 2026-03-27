import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Shopix</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Discover amazing products at the best prices.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/shop" className="hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-foreground">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Shopix. All rights reserved.</p>

          <div className="flex gap-4">
            <Link to="/" className="hover:text-foreground">
              Terms
            </Link>
            <Link to="/" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
