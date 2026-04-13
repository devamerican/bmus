import { defineType, defineField } from 'sanity'

export const studentReviewsPageSchema = defineType({
  name: 'studentReviewsPage',
  title: 'Student Reviews Page',
  type: 'document',
  preview: {
    prepare() {
      return { title: '/student-reviews' }
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
