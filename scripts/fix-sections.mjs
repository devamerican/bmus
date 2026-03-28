import { createClient } from 'next-sanity'
import fs from 'fs'

// Manually load .env.local
try {
  const envContent = fs.readFileSync('.env.local', 'utf-8')
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=')
    if (key && !key.startsWith('#') && valueParts.length > 0) {
      const value = valueParts.join('=').trim()
      process.env[key] = value.replace(/^["']|["']$/g, '')
    }
  })
} catch (e) {
  console.log('No .env.local file found')
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_WRITE_TOKEN

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  token,
  apiVersion: '2025-05-06'
})

console.log(`🔗 Project ID: ${projectId}`)
console.log(`📦 Dataset: ${dataset}\n`)

async function fixDocuments() {
  console.log('📝 Fixing section types in documents...\n')

  // Fetch all mbbsInCountry documents
  const docs = await client.fetch(
    `*[_type == "mbbsInCountry"]`
  )

  for (const doc of docs) {
    try {
      // Fix the _type values in sections
      const fixedSections = doc.sections?.map(section => {
        // Map the type to the correct section type name
        const typeMap = {
          'table': 'tableSection',
          'content': 'contentSection',
          'labelValue': 'labelValueSection'
        }

        return {
          ...section,
          _type: typeMap[section.type] || section._type
        }
      })

      // Update the document
      await client.createOrReplace({
        ...doc,
        sections: fixedSections
      })

      console.log(`✅ Fixed: ${doc.heading}`)
    } catch (error) {
      console.error(`❌ Error fixing ${doc.heading}:`, error.message)
    }
  }

  console.log('\n✨ Done! Now the sections should show proper UI in Sanity Studio.')
}

fixDocuments().catch(console.error)
