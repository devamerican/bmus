import { defineType, defineField, defineArrayMember } from 'sanity'

export const servicesSchema = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  preview: {prepare(value, viewOptions) {
      return {
        title: "/services",
        // subtitle: "what",
      }
  },},
  fields: [
    defineField({
      name: 'heading',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'servicesItems',
      title: 'Services Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})