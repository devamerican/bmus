import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Default client with CDN for general use
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
})

// Client for ISR with webhook revalidation (CDN disabled for fresh data)
export const isrClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN to ensure fresh data when webhooks trigger
  perspective: 'published',
  stega: false,
})
