import type { CollectionConfig } from 'payload'

export const MbbsFaqs: CollectionConfig = {
  slug: 'mbbs-faqs',
  admin: {
    useAsTitle: 'question',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'text',
      required: true,
    },
  ],
}