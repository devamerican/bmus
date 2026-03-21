import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pages = []

  // Show page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...')
    }
  }

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Button variant="outline" size="icon" asChild>
          <Link href={`${basePath}?page=${currentPage - 1}`} aria-label="Previous page">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="icon" disabled>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-2">
                ...
              </span>
            )
          }

          const isActive = currentPage === page
          return (
            <Button
              key={`page-${page}`}
              variant={isActive ? 'default' : 'outline'}
              size="icon"
              asChild={!isActive}
              disabled={isActive}
            >
              {isActive ? (
                <span>{page}</span>
              ) : (
                <Link href={`${basePath}?page=${page}`}>{page}</Link>
              )}
            </Button>
          )
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Button variant="outline" size="icon" asChild>
          <Link href={`${basePath}?page=${currentPage + 1}`} aria-label="Next page">
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="icon" disabled>
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </nav>
  )
}
