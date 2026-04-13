import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import type { Metadata } from 'next'
import { cachedSanityFetch } from '@/sanity/lib/fetch'
import { BLOG_POSTS_QUERY, BLOG_POSTS_COUNT_QUERY } from '@/sanity/queries/blog'
import { BlogList, POSTS_PER_PAGE } from '@/components/blog/blog-list'
import { buildMetadata, type SanitySeo } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const seo = await cachedSanityFetch<SanitySeo>(
    `*[_type == "blogListingPage"][0].seo`,
    {},
    3600,
    ['blog-listing'],
  )
  const meta = buildMetadata(seo, {
    title: 'Blog',
    description: 'Latest insights and updates about MBBS abroad, medical education, and student experiences.',
  })
  return {
    ...meta,
    openGraph: {
      title: typeof meta.title === 'string' ? meta.title : 'Blog | BMUS',
      description: meta.description ?? undefined,
    },
  }
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
    cachedSanityFetch<any[]>(BLOG_POSTS_QUERY, { start, end }, 3600, ['blog']),
    cachedSanityFetch<number>(BLOG_POSTS_COUNT_QUERY, {}, 3600, ['blog']),
  ])

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE)

  return (
    <div>
      {/* Hero Section with Image */}
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <Image
          src="/bmus-abroad.jpg"
          alt="BMUS Blog"
          fill
          className="object-cover object-top brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-white/90 text-sm font-semibold mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <BookOpen className="h-4 w-4" />
              <span>BMUS Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Insights on Studying MBBS Abroad
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
              Latest updates, guides, and student experiences from our global medical education community.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <BlogList posts={posts} currentPage={currentPage} totalPages={totalPages} />
      </section>
    </div>
  )
}
