import { defineType, defineField } from 'sanity'

export const admissionProcessPageSchema = defineType({
  name: 'admissionProcessPage',
  title: 'Admission Process Page',
  type: 'document',
  preview: {
    prepare() {
      return { title: '/admission-process' }
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
