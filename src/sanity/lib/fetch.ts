import { client } from './client'
import { QueryParams } from 'next-sanity'

/**
 * Cached Sanity fetch for production use.
 *
 * This uses Next.js's built-in fetch cache with ISR (Incremental Static
 * Regeneration). Responses are cached at Vercel's CDN Edge after the first
 * request and revalidated in the background every `revalidate` seconds.
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
 * @param revalidate - Revalidation interval in seconds (default: 3600 = 1 hour).
 *                    Set to `false` to cache indefinitely and rely solely on
 *                    on-demand revalidation via webhooks.
 */
export async function cachedSanityFetch<T = unknown>(
  query: string,
  params: QueryParams = {},
  revalidate: number | false = 3600
): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate,
    },
  })
}
