import { defineField } from "sanity"

export const navbarSchema = {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  preview: {prepare() {
      return {
        title: "navbar",
        // subtitle: "what",
      }
  },},
 fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'navItems',
      title: 'Nav Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'href',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'href',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'string',
                    //   validation: Rule => Rule.required(),
                    })
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
 ]
}