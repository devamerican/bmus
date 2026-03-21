import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Verify webhook signature from Sanity
function verifySignature(
  body: string,
  signature: string | null,
  secret: string
): boolean {
  if (!signature) return false

  // Sanity sends signature in format: t=<timestamp>,v1=<hash>
  const parts = signature.split(',')
  if (parts.length < 2) return false

  const providedHash = parts[1]?.trim()
  if (!providedHash?.startsWith('v1=')) {
    return false
  }

  // Create expected signature - Sanity uses hex encoding
  const expectedHash = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex')

  return providedHash.substring(3) === expectedHash
}

// Map Sanity document types to their corresponding page paths
function getPathsToRevalidate(
  operation: string,
  documentType: string,
  slug?: { current: string }
): string[] {
  const paths: string[] = []

  // Blog posts
  if (documentType === 'blogPost') {
    if (operation === 'delete') {
      paths.push('/blog')
    } else if (slug?.current) {
      paths.push(`/blog/${slug.current}`)
      paths.push('/blog') // Revalidate blog listing too
    }
  }

  // Homepage
  if (documentType === 'homepage' || documentType === 'navbar') {
    paths.push('/')
  }

  // About Us
  if (documentType === 'aboutUs') {
    paths.push('/about-us')
  }

  // Services
  if (documentType === 'services') {
    paths.push('/services')
  }

  // Director's Message
  if (documentType === 'directorsMessage') {
    paths.push('/director-message')
  }

  // Why Study MBBS Abroad
  if (documentType === 'whyStudyMBBSAbroad') {
    paths.push('/why-study-mbbs-abroad')
  }

  // MBBS FAQs
  if (documentType === 'mbbsFaqs') {
    paths.push('/mbbs-abroad-faq')
  }

  // Gallery
  if (documentType === 'gallery') {
    paths.push('/gallery/photos')
    paths.push('/gallery/videos')
  }

  // Student Reviews
  if (documentType === 'studentReviews') {
    paths.push('/student-reviews')
  }

  // MBBS in Country
  if (documentType === 'mbbsInCountry' && slug) {
    paths.push(`/mbbs/${slug.current}`)
  }

  // Revalidate homepage for navbar changes (it's on every page)
  if (documentType === 'navbar' && !paths.includes('/')) {
    paths.push('/')
  }

  return paths
}

export async function POST(request: NextRequest) {
  try {
    // Get webhook secret from environment variable
    const webhookSecret = process.env.SANITY_WEBHOOK_SECRET
    if (!webhookSecret) {
      console.error('SANITY_WEBHOOK_SECRET is not configured')
      return NextResponse.json(
        { message: 'Webhook secret not configured' },
        { status: 500 }
      )
    }

    // Get raw body for signature verification
    const rawBody = await request.text()
    const signature = request.headers.get('sanity-webhook-signature')

    // Verify webhook signature
    if (!verifySignature(rawBody, signature, webhookSecret)) {
      return NextResponse.json(
        { message: 'Invalid signature' },
        { status: 401 }
      )
    }

    // Parse webhook body
    const body = JSON.parse(rawBody)
    const { _type: documentType, slug, operation } = body

    console.log(`Webhook received: ${operation} on ${documentType}`, { slug })

    // Get paths to revalidate based on document type and operation
    const paths = getPathsToRevalidate(operation, documentType, slug)

    if (paths.length === 0) {
      return NextResponse.json({
        revalidated: false,
        message: 'No paths to revalidate for this document type',
      })
    }

    // Revalidate all relevant paths
    for (const path of paths) {
      try {
        revalidatePath(path)
        console.log(`Revalidated: ${path}`)
      } catch (error) {
        console.error(`Failed to revalidate ${path}:`, error)
      }
    }

    return NextResponse.json({
      revalidated: true,
      paths,
      message: 'Successfully revalidated paths',
    })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { message: 'Webhook processing failed', error: String(error) },
      { status: 500 }
    )
  }
}
