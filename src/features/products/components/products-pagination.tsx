import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { paginationChunkSize, productsLimit } from "@/config/constants"
import { useQueryClient } from "@tanstack/react-query"
import { useQueryState } from "nuqs"
import { getProducts } from "../api/products"
import { cn } from "@/lib/utils"
import { TypographyP } from "@/components/typography"

type Props = {
  page: number
  total: number
  limit: number
  onPageChange: (page: number) => void
}

export default function ProductsPagination({ page, total, limit, onPageChange }: Props) {
  const totalPages = Math.ceil(total / limit)
  const queryClient = useQueryClient()
  const [category] = useQueryState("category")
  const start = (page - 1) * limit + 1
  const end = Math.min(page * limit, total)
  const currentChunk = Math.floor((page - 1) / paginationChunkSize)

  const visiblePages = Array.from({ length: paginationChunkSize }, (_, i) => {
    return currentChunk * paginationChunkSize + i + 1
  }).filter((p) => p <= totalPages)

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-between">
      <TypographyP>
        Showing {start}–{end} of {total} products ( Page {page} of {totalPages} )
      </TypographyP>
      <Pagination className="mx-0 w-fit justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (page === 1) return
                onPageChange(page - 1)
              }}
              onMouseEnter={() => {
                if (page === 1) return
                queryClient.prefetchQuery({
                  queryKey: ["products", category, page - 1],
                  queryFn: () =>
                    getProducts({
                      category,
                      limit: productsLimit,
                      skip: (page - 1) * productsLimit,
                    }),
                })
              }}
              className={cn(page === 1 && "pointer-events-none opacity-30")}
              aria-disabled={page === 1}
            />
          </PaginationItem>

          {visiblePages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                isActive={p === page}
                onClick={() => onPageChange(p)}
                onMouseEnter={() => {
                  if (p === page) return

                  queryClient.prefetchQuery({
                    queryKey: ["products", category, p],
                    queryFn: () =>
                      getProducts({
                        category,
                        limit: productsLimit,
                        skip: (p - 1) * productsLimit,
                      }),
                  })
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              className={cn(page === totalPages && "pointer-events-none opacity-30")}
              onClick={() => {
                if (page === totalPages) return
                onPageChange(page + 1)
              }}
              onMouseEnter={() => {
                if (page === totalPages) return
                queryClient.prefetchQuery({
                  queryKey: ["products", category, page + 1],
                  queryFn: () =>
                    getProducts({
                      category,
                      limit: productsLimit,
                      skip: (page + 1) * productsLimit,
                    }),
                })
              }}
              aria-disabled={page === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
