import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface BlogCardProps {
  post: {
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    publishedAt: string
    featuredImage: any
  }
}

export function BlogCard({ post }: BlogCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full">
      <Link href={`/blog/${post.slug.current}`} className="block relative overflow-hidden">
        <div className="relative h-56 overflow-hidden bg-muted">
          <Image
            src={urlFor(post.featuredImage).url()}
            alt={post.featuredImage?.alt || post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 text-primary" />
          <time dateTime={post.publishedAt} className="font-medium">
            {publishedDate}
          </time>
        </div>

        <Link href={`/blog/${post.slug.current}`} className="flex-1">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground line-clamp-3 mb-5 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug.current}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
        >
          Read More
          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}
