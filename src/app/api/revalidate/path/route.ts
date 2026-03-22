import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'
import { getPathsForWebhookPayload, logRevalidation, type SanityWebhookPayload, type LegacyWebhookPayload } from '@/lib/revalidation'

type WebhookPayload = SanityWebhookPayload | LegacyWebhookPayload

export async function POST(req: NextRequest) {
  try {
    console.log('[Webhook] ============================================')
    console.log('[Webhook] Received request')
    console.log('[Webhook] Headers:', Object.fromEntries(req.headers.entries()))

    // 1. Verify secret exists
    if (!process.env.SANITY_WEBHOOK_SECRET) {
      console.log('[Webhook] ❌ Missing SANITY_WEBHOOK_SECRET')
      return new Response(
        'Missing environment variable SANITY_WEBHOOK_SECRET',
        { status: 500 }
      )
    }

    // 2. Parse and verify signature
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_WEBHOOK_SECRET,
    )

    console.log('[Webhook] Signature valid:', isValidSignature)
    console.log('[Webhook] Body:', JSON.stringify(body, null, 2))

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(
        JSON.stringify({ message, isValidSignature, body }),
        { status: 401 }
      )
    }

    // 3. Handle legacy { path } format (backward compatibility)
    if (body && 'path' in body && body.path) {
      console.log('[Webhook] ✅ Legacy format, path:', body.path)
      revalidatePath(body.path)
      logRevalidation(body.path)
      const response = NextResponse.json({
        revalidated: true,
        paths: [body.path],
        message: `Revalidated: ${body.path}`
      })
      console.log('[Webhook] ✅ Returning success response')
      return response
    }

    // 4. Handle Sanity webhook payload
    if (body && '_type' in body) {
      console.log('[Webhook] 📝 Sanity webhook payload detected')
      const sanityPayload = body as SanityWebhookPayload
      const paths = getPathsForWebhookPayload(sanityPayload)

      console.log('[Webhook] 📍 Paths to revalidate:', paths)

      if (paths.length === 0) {
        console.log('[Webhook] ❌ No paths found for type:', sanityPayload._type)
        return NextResponse.json({
          revalidated: false,
          paths: [],
          message: 'No paths found for this document type',
          _type: sanityPayload._type
        }, { status: 400 })
      }

      // 5. Revalidate all paths
      let revalidationErrors: string[] = []
      for (const path of paths) {
        try {
          revalidatePath(path)
          logRevalidation(path, sanityPayload.operation || 'update')
          console.log('[Webhook] ✅ Revalidated:', path)
        } catch (error) {
          console.log('[Webhook] ❌ Error revalidating', path, ':', error)
          revalidationErrors.push(`${path}: ${error}`)
        }
      }

      // 6. Return result
      if (revalidationErrors.length > 0) {
        return NextResponse.json({
          revalidated: true,
          paths,
          message: `Revalidated ${paths.length - revalidationErrors.length}/${paths.length} paths`,
          errors: revalidationErrors
        }, { status: 207 })
      }

      const response = NextResponse.json({
        revalidated: true,
        paths,
        message: `Revalidated ${paths.length} path${paths.length > 1 ? 's' : ''}`,
        operation: sanityPayload.operation
      })
      console.log('[Webhook] ✅ Returning success response')
      return response
    }

    // 7. Unknown payload format
    console.log('[Webhook] ❌ Unknown payload format')
    console.log('[Webhook] ============================================')
    return NextResponse.json({
      revalidated: false,
      message: 'Unknown payload format',
      body
    }, { status: 400 })

  } catch (err) {
    console.error('[Webhook] ❌ Error:', err)
    console.error('[Webhook] Error stack:', err instanceof Error ? err.stack : 'No stack')
    console.log('[Webhook] ============================================')
    return new Response(
      JSON.stringify({
        message: 'Internal server error',
        error: err instanceof Error ? err.message : String(err)
      }),
      { status: 500 }
    )
  }
}