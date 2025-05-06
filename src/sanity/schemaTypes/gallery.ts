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

    // defineField({
    //   name: 'images',
    //   title: 'Images',
    //   type: 'array',
    //   of: [
    //     defineField({
    //       name: 'imageItem',
    //       type: 'object',
    //       fields: [
    //         defineField({
    //           name: 'image',
    //           title: 'Image',
    //           type: 'image',
    //           options: {
    //             hotspot: true,
    //           },
    //           validation: Rule => Rule.required(),
    //         }),
    //         defineField({
    //           name: 'alt',
    //           title: 'Alt text for image',
    //           type: 'string',
    //           validation: Rule => Rule.required(),
    //         }),
    //       ]
    //     })
    // ]

    // }),

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