import { isrClient } from './client'
import { QueryParams } from 'next-sanity'
import { unstable_cache } from 'next/cache'

/**
 * Cached Sanity fetch using Next.js caching with improved revalidation.
 *
 * This uses Next.js's built-in cache with reliable tag-based
 * on-demand revalidation via webhooks. Responses are cached and revalidated
 * when webhooks trigger revalidateTag().
 *
 * Key improvements over the previous implementation:
 * - Uses isrClient with useCdn: false to ensure fresh data fetches
 * - Proper tag-based revalidation for instant updates
 * - perspective: 'published' ensures only published content is served
 *
 * Use this instead of `sanityFetch` from `live.ts` for any content that does
 * not need to update in real-time. This dramatically reduces Fast Origin
 * Transfer usage because most requests are served directly from the CDN
 * without hitting Vercel Compute at all.
 *
 * For live-preview in the Sanity Studio, `sanityFetch` from `live.ts` is
 * still the right choice — but only when `draftMode()` is active.
 *
 * @param query   - GROQ query string
 * @param params  - Optional query parameters
 * @param revalidate - Revalidation interval in seconds (default: 3600 = 1 hour)
 * @param tags    - Cache tags for on-demand revalidation via webhooks
 */
export async function cachedSanityFetch<T = unknown>(
  query: string,
  params: QueryParams = {},
  revalidate: number = 3600,
  tags?: string[]
): Promise<T> {
  // Create a stable cache key from query and params
  const cacheKey = JSON.stringify({ query, params })
  const cacheKeyParts = ['sanity', cacheKey]

  // Use unstable_cache with proper configuration
  // The key fix is using isrClient (useCdn: false) which ensures fresh data
  // when tags are invalidated via webhooks
  return unstable_cache(
    async () => {
      return isrClient.fetch<T>(query, params)
    },
    cacheKeyParts,
    {
      revalidate,
      tags,
    }
  )()
}
