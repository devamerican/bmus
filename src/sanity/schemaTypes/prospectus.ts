import { defineType, defineField } from 'sanity'

export const prospectusSchema = defineType({
  name: 'prospectus',
  title: 'Prospectus',
  type: 'document',
  preview: {prepare(value, viewOptions) {
      return {
        title: "/prospectus",
        // subtitle: "what",
      }
  },},



  fields: [
    defineField({
      name: 'prospectus',
      title: 'Prospectus',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: Rule => Rule.required(),
    }),
  ]
})

