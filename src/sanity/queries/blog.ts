import { groq } from 'next-sanity'

// Fetch all published blog posts for listing with pagination
export const BLOG_POSTS_QUERY = groq`
  *[_type == "blogPost" && status == "published"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featuredImage {
      ...,
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    }
  }
`

// Fetch single blog post by slug
export const BLOG_POST_BY_SLUG_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    featuredImage {
      ...,
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    },
    seoTitle,
    seoDescription
  }
`

// Count total published blog posts for pagination
export const BLOG_POSTS_COUNT_QUERY = groq`
  count(*[_type == "blogPost" && status == "published"])
`

// Fetch all published blog post slugs for static generation
export const BLOG_POSTS_SLUGS_QUERY = groq`
  *[_type == "blogPost" && status == "published"].slug.current
`
