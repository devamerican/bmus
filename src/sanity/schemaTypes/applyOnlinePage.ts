import { defineType, defineField } from 'sanity'

export const applyOnlinePageSchema = defineType({
  name: 'applyOnlinePage',
  title: 'Apply Online Page',
  type: 'document',
  preview: {
    prepare() {
      return { title: '/apply-online' }
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
