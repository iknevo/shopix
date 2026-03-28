import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/sonner"
import { NuqsAdapter } from "nuqs/adapters/react"
import { createHead, UnheadProvider } from "@unhead/react/client"
import InterceptorsProvider from "./providers/interceptors-provider"

const queryClient = new QueryClient()
const head = createHead()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InterceptorsProvider>
        <ThemeProvider>
          <NuqsAdapter>
            <UnheadProvider head={head}>
              <RouterProvider router={router} />
            </UnheadProvider>
          </NuqsAdapter>
        </ThemeProvider>
      </InterceptorsProvider>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
