import { defineField, defineType } from 'sanity'

export const gallerySchema =  defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  preview: {prepare(value, viewOptions) {
      return {
        title: "/gallery",
        // subtitle: "what",
      }
  },},
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'file',
          options: {
            hotspot: true,
          },
        },
      ]
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],      
    }),
  ],
})