import type { Metadata } from 'next'
import { cachedSanityFetch } from '@/sanity/lib/fetch'
import { BLOG_POSTS_QUERY, BLOG_POSTS_COUNT_QUERY } from '@/sanity/queries/blog'
import { BlogList, POSTS_PER_PAGE } from '@/components/blog/blog-list'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights and updates about MBBS abroad, medical education, and student experiences.',
  openGraph: {
    title: 'Blog | BMUS',
    description: 'Latest insights and updates about MBBS abroad, medical education, and student experiences.',
  },
}

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1

  // Calculate pagination
  const start = (currentPage - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE - 1

  // Fetch posts and count in parallel
  const [posts, totalCount] = await Promise.all([
    cachedSanityFetch<any[]>(BLOG_POSTS_QUERY, { start, end }),
    cachedSanityFetch<number>(BLOG_POSTS_COUNT_QUERY, {}),
  ])

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Latest insights and updates about MBBS abroad, medical education, and student experiences.
        </p>
      </div>

      <BlogList posts={posts} currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
