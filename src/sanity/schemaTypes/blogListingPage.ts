import { defineType, defineField } from 'sanity'

export const blogListingPageSchema = defineType({
  name: 'blogListingPage',
  title: 'Blog Listing Page',
  type: 'document',
  preview: {
    prepare() {
      return { title: '/blog' }
    },
  },
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
