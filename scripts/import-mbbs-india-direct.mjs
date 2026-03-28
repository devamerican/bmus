import fs from 'fs'

// Sanity configuration
const projectId = 'o56xr1r5'
const dataset = 'production'
const apiVersion = '2025-05-06'

// Using the existing read token (will try to create documents)
// If this doesn't work, we'll need a write token
const token = 'skNTwwvvZ41sV30UWlDXHYe4rGQvRiYmWiMuVxdTYS1JgJETy4PYrj2vdZRhUQSbSo2xZv0OCkMi83pvFc0m9f7XcF3ImYXWKTajRgsk5mz746MCcKG2VF6bWXytiXbpTar9UhoKTSrDBTaw7q2Dxz6ZamromUUMwyK7JHpYrBA8H2xnwG48'

const apiUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`

console.log(`🔗 Project ID: ${projectId}`)
console.log(`📦 Dataset: ${dataset}\n`)

// Read the JSON file
const data = JSON.parse(fs.readFileSync('./sanity-imports/mbbs-india-states.json', 'utf-8'))

async function createDocument(doc) {
  const mutations = {
    mutations: [
      {
        createOrReplace: {
          ...doc,
          // Sanity will generate an ID if not provided
          _id: doc._id || `mbbsInCountry-${doc.slug.current}`
        }
      }
    ]
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(mutations)
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`HTTP ${response.status}: ${error}`)
  }

  return await response.json()
}

async function importDocuments() {
  console.log(`📝 Starting import of ${data.imports.length} documents...\n`)

  for (const doc of data.imports) {
    try {
      // First, check if document exists
      const queryUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*[_type=="mbbsInCountry"&&slug.current=="${doc.slug.current}"]`

      const checkResponse = await fetch(queryUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const checkData = await checkResponse.json()

      if (checkData.result && checkData.result.length > 0) {
        doc._id = checkData.result[0]._id
        console.log(`📄 Found existing: ${doc.heading}`)
      }

      const result = await createDocument(doc)
      console.log(`✅ Success: ${doc.heading} (${doc.slug.current})`)

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500))

    } catch (error) {
      console.error(`❌ Error with ${doc.heading}: ${error.message}`)

      // If it's a permission error, provide helpful message
      if (error.message.includes('403') || error.message.includes('401')) {
        console.error('\n⚠️  Permission denied. The current token may not have write access.')
        console.error('Solution: Generate a write token at https://www.sanity.io/manage/personal/project')
        console.error('Then add it to .env.local as SANITY_WRITE_TOKEN\n')
        break
      }
    }
  }

  console.log('\n✨ Import attempt complete!')
  console.log('\n🔗 Verify by visiting:')
  console.log('   - /mbbs/punjab')
  console.log('   - /mbbs/haryana')
  console.log('   - /mbbs/rajasthan')
  console.log('   - /mbbs/uttar-pradesh')
  console.log('   - /mbbs/maharashtra')
}

importDocuments().catch(console.error)
