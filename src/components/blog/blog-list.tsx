import { BlogCard } from './blog-card'
import { Pagination } from './pagination'

interface BlogListProps {
  posts: Array<{
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    publishedAt: string
    featuredImage: any
  }>
  currentPage: number
  totalPages: number
}

const POSTS_PER_PAGE = 9

export function BlogList({ posts, currentPage, totalPages }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No blog posts found.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
      )}
    </div>
  )
}

export { POSTS_PER_PAGE }
