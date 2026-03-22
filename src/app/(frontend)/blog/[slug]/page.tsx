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

  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.excerpt
  const imageUrl = urlFor(post.featuredImage).width(1200).height(630).url()

  return {
    title,
    description,
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        {/* Meta Info */}
        <div className="flex items-center gap-2 text-muted-foreground mb-8 pb-8 border-b">
          <Calendar className="h-5 w-5" />
          <time dateTime={post.publishedAt}>{publishedDate}</time>
        </div>

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
  )
}
