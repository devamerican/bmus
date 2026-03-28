# Import MBBS India States to Sanity CMS

This directory contains the data for 5 Indian states (Punjab, Haryana, Rajasthan, Uttar Pradesh, Maharashtra) that need to be imported into your Sanity CMS.

## Method 1: Using Sanity CLI (Recommended)

1. **Install Sanity CLI globally** (if not already installed):
```bash
npm install -g @sanity/cli
```

2. **Navigate to your project directory**:
```bash
cd /Users/ajay/projects/bmus
```

3. **Login to Sanity** (if not already logged in):
```bash
sanity login
```

4. **Import the data**:
```bash
sanity dataset import --replace sanity-imports/mbbs-india-states.json production
```

> **Note**: The `--replace` flag will replace any existing documents with the same ID. Remove it if you want to preserve existing data.

## Method 2: Manual Entry via Sanity Studio

If you prefer to manually enter the data:

1. **Open Sanity Studio** at your project's URL (usually `https://your-project.sanity.studio`)

2. **Create a new document** for each state:
   - Click "MBBS In Country" in the sidebar
   - Click "New MBBS In Country"
   - Fill in the details from the JSON file

3. **For each state, enter**:

### **Punjab**
- **Slug**: `punjab`
- **Heading**: `Punjab MBBS Admission 2026`
- **Background Image**: Upload a Punjab landmark image
- **Hero Logo**: Upload Punjab emblem/logo
- **Hero Content**: See content in JSON file
- **Sections**: Add 6 sections (stats, admission process, particulars, private fees table, govt fees table, NRI fees table)

### **Haryana**
- **Slug**: `haryana`
- **Heading**: `Haryana MBBS Admission 2025`
- (Same structure as above)

### **Rajasthan**
- **Slug**: `rajasthan`
- **Heading**: `Rajasthan MBBS Admission 2026`
- (Same structure as above)

### **Uttar Pradesh**
- **Slug**: `uttar-pradesh`
- **Heading**: `Uttar Pradesh MBBS Admission 2025`
- (Same structure as above)

### **Maharashtra**
- **Slug**: `maharashtra`
- **Heading**: `Maharashtra MBBS Admission 2026`
- (Same structure as above)

## Method 3: Using Import Script

Create a script at `scripts/import-mbbs-india.js`:

```javascript
import { createClient } from '@sanity/client'
import fs from 'fs'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: false,
  token: 'your-token-with-write-access'
})

const data = JSON.parse(fs.readFileSync('./sanity-imports/mbbs-india-states.json', 'utf-8'))

async function importDocuments() {
  for (const doc of data.imports) {
    try {
      const result = await client.create(doc)
      console.log(`✅ Created: ${result.heading}`)
    } catch (error) {
      console.error(`❌ Error creating ${doc.heading}:`, error.message)
    }
  }
}

importDocuments()
```

Run with:
```bash
node scripts/import-mbbs-india.js
```

## Image Assets

The JSON file contains placeholder image references. You'll need to:

1. **Upload images** to Sanity Studio first
2. **Copy the asset IDs** from the uploaded images
3. **Update the JSON** file with the correct asset references before importing

Or, after import, edit each document and manually assign the images.

## Verify Import

After importing, verify by visiting:
- `/mbbs/punjab`
- `/mbbs/haryana`
- `/mbbs/rajasthan`
- `/mbbs/uttar-pradesh`
- `/mbbs/maharashtra`

All pages should display with the imported content.

## Troubleshooting

### Import fails with validation errors
- Ensure all required fields are filled
- Check that slugs are unique
- Verify image assets exist (or remove them and add later)

### Pages show 404
- Check that documents were successfully created in Sanity
- Verify the slug matches the URL
- Clear your cache (Sanity content is cached for 1 hour)

### Content doesn't appear
- Run `npm run build` to rebuild the site
- Check browser console for errors
- Verify Sanity connection in your environment variables
