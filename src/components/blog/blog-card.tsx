import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug.current}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={urlFor(post.featuredImage).url()}
            alt={post.featuredImage?.alt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <CardHeader>
        <Link href={`/blog/${post.slug.current}`}>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.publishedAt}>{publishedDate}</time>
        </div>
      </CardContent>
    </Card>
  )
}
