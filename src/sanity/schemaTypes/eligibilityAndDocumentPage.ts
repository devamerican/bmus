import { defineType, defineField } from 'sanity'

export const eligibilityAndDocumentPageSchema = defineType({
  name: 'eligibilityAndDocumentPage',
  title: 'MBBS Eligibility & Documents Page',
  type: 'document',
  preview: {
    prepare() {
      return { title: '/mbbs-abroad-eligibility-and-document' }
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
