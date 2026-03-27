import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/state/use-cart-store"
import { Minus, Plus, Trash } from "lucide-react"
import { Link } from "react-router-dom"

export default function CartPage() {
  const {
    cart,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
    clearCart,
    getTotalCartPrice,
  } = useCartStore()

  const total = getTotalCartPrice()
  const totalItems = cart.length

  if (cart.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-20 text-center">
        <div>
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">Looks like you haven’t added anything yet.</p>

          <Button asChild className="mt-6">
            <Link to="/shop">Back to shop</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Section title="Your Cart" className="py-10">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{totalItems} items in your cart</p>

            <Button variant="ghost" className="text-red-500" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>

          <ScrollArea className="max-h-[70vh] overflow-y-scroll pr-3">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl border bg-background p-4 transition hover:shadow-sm"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <h3 className="line-clamp-1 text-sm font-medium">{item.title}</h3>

                      <p className="text-xs text-muted-foreground">${item.price}</p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-md border px-2 py-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6"
                          onClick={() => decreaseItemQuantity(item.id)}
                          disabled={item.quantity === 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>

                        <span className="w-5 text-center text-xs">{item.quantity}</span>

                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6"
                          onClick={() => increaseItemQuantity(item.id)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <Button size="icon" variant="ghost" onClick={() => removeItem(item.id)}>
                        <Trash className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>

                  <div className="ml-auto w-20 shrink-0 text-right text-sm font-semibold">
                    ${item.total.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="sticky top-24 h-fit space-y-5 rounded-xl border bg-background p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Order Summary</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <Separator />

            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full">Checkout</Button>

          <Button variant="outline" className="w-full" asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
