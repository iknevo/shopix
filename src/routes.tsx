import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "@/layouts/default-layout"
import NotFound from "@/pages/not-found"
import HomePage from "@/pages/home-page"

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])
