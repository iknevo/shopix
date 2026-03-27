import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

type CartItem = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  thumbnail?: string
}

type CartStore = {
  cart: CartItem[]

  setCart: (cart: CartItem[]) => void
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void

  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void

  isInCart: (id: number) => boolean
  clearCart: () => void

  getQuantityById: (id: number) => number
  getTotalCartPrice: () => number
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],

        setCart: (cart) => set({ cart }),

        addItem: (item) =>
          set((state) => ({
            cart: [...state.cart, item],
          })),

        removeItem: (id) =>
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
          })),

        increaseItemQuantity: (id) =>
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    total: (item.quantity + 1) * item.price,
                  }
                : item
            ),
          })),

        decreaseItemQuantity: (id) =>
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: Math.max(1, item.quantity - 1),
                    total: Math.max(1, item.quantity - 1) * item.price,
                  }
                : item
            ),
          })),
        isInCart: (id) => get().cart.some((item) => item.id === id),
        clearCart: () => set({ cart: [] }),

        getQuantityById: (id) => get().cart.find((item) => item.id === id)?.quantity ?? 0,

        getTotalCartPrice: () => get().cart.reduce((sum, item) => sum + item.total, 0),
      }),
      {
        name: "cart",
      }
    )
  )
)
