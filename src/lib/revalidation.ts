// Type definitions for Sanity webhooks
export interface SanityWebhookPayload {
  _type: string;
  _id: string;
  operation?: 'create' | 'update' | 'delete';
  slug?: { current: string };
  [key: string]: any;
}

export interface LegacyWebhookPayload {
  path?: string;
}

// Type-to-path mapping for all Sanity content types
const TYPE_TO_PATH_MAP: Record<string, string | ((payload: SanityWebhookPayload) => string | null)> = {
  // Static routes (direct mapping)
  'aboutUs': '/about-us',
  'homepage': '/',
  'services': '/services',
  'directorsMessage': '/director-message',
  'whyStudyMBBSAbroad': '/why-study-mbbs-abroad',
  'mbbsFaqs': '/mbbs-abroad-faq',
  'prospectus': '/prospectus',
  'gallery': '/gallery/photos',

  // Dynamic routes (functions that extract slugs)
  'blogPost': (payload) => {
    const slug = payload?.slug?.current;
    return slug ? `/blog/${slug}` : null;
  },
  'mbbsInCountry': (payload) => {
    const slug = payload?.slug?.current;
    return slug ? `/mbbs/${slug}` : null;
  }
};

// Main function to get paths from webhook payload
export function getPathsForWebhookPayload(payload: SanityWebhookPayload): string[] {
  const { _type } = payload;

  if (!_type) {
    console.error('[Webhook] Missing _type in payload');
    return [];
  }

  const pathResolver = TYPE_TO_PATH_MAP[_type];

  if (!pathResolver) {
    console.warn(`[Webhook] Unknown _type: ${_type}`);
    return [];
  }

  // Handle static routes
  if (typeof pathResolver === 'string') {
    return [pathResolver];
  }

  // Handle dynamic routes
  try {
    const path = pathResolver(payload);
    return path ? [path] : [];
  } catch (error) {
    console.error(`[Webhook] Error resolving path for ${_type}:`, error);
    return [];
  }
}

// Logging utility
export function logRevalidation(path: string, operation: string = 'update') {
  console.log(`[Webhook] Revalidating ${path} (${operation})`);
}
