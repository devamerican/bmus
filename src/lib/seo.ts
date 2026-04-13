import type { Metadata } from 'next'

export type SanitySeo = {
  title?: string | null
  description?: string | null
  keywords?: string[] | null
} | null | undefined

export type SeoFallback = {
  title: string
  description: string
  keywords?: string[]
}

export function buildMetadata(seo: SanitySeo, fallback: SeoFallback): Metadata {
  const title = seo?.title?.trim() || fallback.title
  const description = seo?.description?.trim() || fallback.description
  const keywords = seo?.keywords?.length ? seo.keywords : fallback.keywords

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
  }
}
