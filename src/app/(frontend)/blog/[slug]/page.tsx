import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PortableText } from 'next-sanity'
import { cachedSanityFetch } from '@/sanity/lib/fetch'
import { BLOG_POST_BY_SLUG_QUERY, BLOG_POSTS_SLUGS_QUERY } from '@/sanity/queries/blog'
import { urlFor } from '@/sanity/lib/image'
import { Calendar, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await cachedSanityFetch<any>(BLOG_POST_BY_SLUG_QUERY, { slug }, 3600, [`blog-${slug}`])

  if (!post) return {}

  const title = post.seo?.title?.trim() || post.title
  const description = post.seo?.description?.trim() || post.excerpt
  const keywords = post.seo?.keywords?.length ? post.seo.keywords : undefined
  const imageUrl = urlFor(post.featuredImage).width(1200).height(630).url()

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export async function generateStaticParams() {
  const slugs = await cachedSanityFetch<string[]>(BLOG_POSTS_SLUGS_QUERY, {}, 3600, ['blog'])

  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await cachedSanityFetch<any>(BLOG_POST_BY_SLUG_QUERY, { slug }, 3600, [`blog-${slug}`])

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Static Hero Section - Full Width */}
      <section className="relative w-screen h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/students.jpg"
            alt="Blog background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center space-y-6 relative z-10">
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4 border border-primary/30">
              Blog Post
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80 text-lg">
              <Calendar className="h-5 w-5" />
              <time dateTime={post.publishedAt}>{publishedDate}</time>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12">
            <Image
              src={urlFor(post.featuredImage).url()}
              alt={post.featuredImage?.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <PortableText value={post.content} />
          </article>
        </div>
      </div>
    </>
  )
}
