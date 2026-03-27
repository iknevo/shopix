import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "@/layouts/default-layout"
import NotFound from "@/pages/not-found"
import HomePage from "@/pages/home-page"
import ProductsSection from "./features/products/components/products-section"
import CategoriesSection from "./features/categories/components/categories-section"
import ProductDetails from "./features/products/components/product-details"
import CartPage from "./features/cart/components/cart-page"
import LoginPage from "./features/auth/components/login-page"
import ProtectedRoute from "./features/auth/components/protected-route"
import ProfilePage from "./features/profile/components/profile-page"

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ProductsSection />,
      },
      {
        path: "shop/:id",
        element: <ProductDetails />,
      },
      {
        path: "categories",
        element: <CategoriesSection />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])
