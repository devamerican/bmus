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
const TYPE_TO_PATH_MAP: Record<string, string | string[] | ((payload: SanityWebhookPayload) => string | string[] | null)> = {
  // Static routes (direct mapping)
  'aboutUs': '/about-us',
  'homepage': '/',
  'services': '/services',
  'directorsMessage': '/director-message',
  'whyStudyMBBSAbroad': '/why-study-mbbs-abroad',
  'mbbsFaqs': '/mbbs-abroad-faq',
  'prospectus': '/prospectus',
  'gallery': '/gallery/photos',
  'bookCounselingPage': '/book-counseling',
  'contactUsPage': '/contact-us',
  'admissionProcessPage': '/admission-process',
  'applyOnlinePage': '/apply-online',
  'eligibilityAndDocumentPage': '/mbbs-abroad-eligibility-and-document',
  'studentReviewsPage': '/student-reviews',

  // Dynamic routes (functions that extract slugs)
  'blogPost': (payload) => {
    const slug = payload?.slug?.current;
    const paths: string[] = [];

    // Always revalidate the blog listing page
    paths.push('/blog');

    // Revalidate the individual blog post if we have a slug
    if (slug) {
      paths.push(`/blog/${slug}`);
    }

    return paths;
  },
  'mbbsInCountry': (payload) => {
    const slug = payload?.slug?.current;
    return slug ? `/mbbs/${slug}` : null;
  },
  'navbar': '/',
};

// Type-to-cache-tag mapping for on-demand revalidation
const TYPE_TO_TAG_MAP: Record<string, string | string[] | ((payload: SanityWebhookPayload) => string | string[] | null)> = {
  'aboutUs': 'about-us',
  'homepage': 'homepage',
  'services': 'services',
  'directorsMessage': 'director-message',
  'whyStudyMBBSAbroad': 'why-study-mbbs-abroad',
  'mbbsFaqs': 'mbbs-abroad-faq',
  'prospectus': 'prospectus',
  'gallery': ['gallery-photos', 'gallery-videos'],
  'navbar': 'navbar',
  // Tags below must match the exact tag string each page passes to
  // cachedSanityFetch — unstable_cache is tag-keyed, so a mismatch means the
  // page never refreshes on publish.
  'bookCounselingPage': 'bookCounselingPage',
  'contactUsPage': 'contact-us',
  'admissionProcessPage': 'admission-process',
  'applyOnlinePage': 'apply-online',
  'eligibilityAndDocumentPage': 'mbbs-abroad-eligibility-and-document',
  'studentReviewsPage': 'student-reviews',

  'blogPost': (payload) => {
    const slug = payload?.slug?.current;
    const tags: string[] = ['blog'];

    if (slug) {
      tags.push(`blog-${slug}`);
    }

    return tags;
  },
  'mbbsInCountry': (payload) => {
    const slug = payload?.slug?.current;
    return slug ? `mbbs-${slug}` : null;
  },
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

  // Handle static routes (string)
  if (typeof pathResolver === 'string') {
    return [pathResolver];
  }

  // Handle static routes (array of strings)
  if (Array.isArray(pathResolver)) {
    return pathResolver;
  }

  // Handle dynamic routes (function)
  try {
    const result = pathResolver(payload);
    if (Array.isArray(result)) {
      return result;
    }
    return result ? [result] : [];
  } catch (error) {
    console.error(`[Webhook] Error resolving path for ${_type}:`, error);
    return [];
  }
}

// Logging utility
export function logRevalidation(path: string, operation: string = 'update') {
  console.log(`[Webhook] Revalidating ${path} (${operation})`);
}

// Main function to get cache tags from webhook payload
export function getTagsForWebhookPayload(payload: SanityWebhookPayload): string[] {
  const { _type } = payload;

  if (!_type) {
    return [];
  }

  const tagResolver = TYPE_TO_TAG_MAP[_type];

  // Safety net: if a document type has no explicit tag mapping, fall back to
  // revalidating a tag named after the document `_type` itself. This means any
  // page that follows the convention of tagging its fetch with the document
  // `_type` will revalidate on publish even if this map is never updated.
  if (!tagResolver) {
    return [_type];
  }

  // Handle static tags (string)
  if (typeof tagResolver === 'string') {
    return [tagResolver];
  }

  // Handle static tags (array of strings)
  if (Array.isArray(tagResolver)) {
    return tagResolver;
  }

  // Handle dynamic tags (function)
  try {
    const result = tagResolver(payload);
    if (Array.isArray(result)) {
      return result;
    }
    return result ? [result] : [];
  } catch (error) {
    console.error(`[Webhook] Error resolving tag for ${_type}:`, error);
    return [];
  }
}
