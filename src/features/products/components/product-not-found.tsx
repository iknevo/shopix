import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function ProductNotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-20 text-center">
      <div>
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <p className="mt-2 text-muted-foreground">
          The product you’re looking for doesn’t exist or was removed.
        </p>

        <Button asChild className="mt-6">
          <Link to="/shop">Back to shop</Link>
        </Button>
      </div>
    </div>
  )
}
