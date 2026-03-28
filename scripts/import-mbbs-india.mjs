import { createClient } from 'next-sanity'
import fs from 'fs'

// Manually load .env.local
try {
  const envContent = fs.readFileSync('.env.local', 'utf-8')
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=')
    if (key && !key.startsWith('#') && valueParts.length > 0) {
      const value = valueParts.join('=').trim()
      // Remove quotes if present
      process.env[key] = value.replace(/^["']|["']$/g, '')
    }
  })
} catch (e) {
  console.log('No .env.local file found, using system environment variables')
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_WRITE_TOKEN

if (!token) {
  console.error('❌ Error: SANITY_WRITE_TOKEN environment variable is required')
  console.log('Get a token at: https://www.sanity.io/manage/personal/project')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  token,
  apiVersion: '2025-05-06'
})

console.log(`🔗 Project ID: ${projectId}`)
console.log(`📦 Dataset: ${dataset}\n`)

const data = JSON.parse(fs.readFileSync('./sanity-imports/mbbs-india-states-no-images.json', 'utf-8'))

async function importDocuments() {
  console.log(`📝 Starting import of ${data.imports.length} documents...\n`)

  for (const doc of data.imports) {
    try {
      const existing = await client.fetch(
        `*[_type == "mbbsInCountry" && slug.current == $slug][0]`,
        { slug: doc.slug.current }
      )

      let result
      if (existing) {
        result = await client.createOrReplace({
          ...doc,
          _id: existing._id
        })
        console.log(`✅ Updated: ${result.heading}`)
      } else {
        result = await client.create(doc)
        console.log(`✅ Created: ${result.heading}`)
      }

      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`❌ Error with ${doc.heading}:`, error.message)
    }
  }

  console.log('\n✨ Import complete!')
  console.log('\n🔗 Verify by visiting:')
  console.log('   - /mbbs/punjab')
  console.log('   - /mbbs/haryana')
  console.log('   - /mbbs/rajasthan')
  console.log('   - /mbbs/uttar-pradesh')
  console.log('   - /mbbs/maharashtra')
  console.log('\n📝 Note: Images are placeholders. Upload real images in Sanity Studio.')
}

importDocuments().catch(console.error)
