import { defineType, defineField } from 'sanity'

export const contactUsPageSchema = defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  preview: {
    prepare() {
      return { title: '/contact-us' }
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
