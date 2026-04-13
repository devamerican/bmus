import { defineType, defineField, defineArrayMember } from 'sanity'

export const mbbsInCountrySchema = defineType({
  name: 'mbbsInCountry',
  title: 'MBBS In Country',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'heading', maxLength: 200 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'bg_image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional - will use gradient background if not provided',
    }),

    // ✅ Fixed Hero section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'logo_image', title: 'Logo Image', type: 'image', options: { hotspot: true }, description: 'Optional - will be hidden if not provided' }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'block' }],
          validation: Rule => Rule.required(),
        }),
      ],
    }),

    // ✅ Reorderable sections
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        // Table Section
        defineArrayMember({
          type: 'object',
          name: 'tableSection',
          title: 'Table Section',
          fields: [
            defineField({ name: 'type', type: 'string', initialValue: 'table', hidden: true }),
            defineField({ name: 'heading', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'description', type: 'string' }),
            defineField({
              name: 'data',
              type: 'object',
              fields: [
                defineField({
                  name: 'headers',
                  type: 'array',
                  of: [{ type: 'string' }],
                  validation: Rule => Rule.required(),
                }),
                defineField({
                  name: 'rows',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'columns',
                          type: 'array',
                          of: [{ type: 'string' }],
                          validation: Rule => Rule.required(),
                        }),
                      ],
                    }),
                  ],
                  validation: Rule => Rule.required(),
                }),
              ],
            }),
          ],
        }),

        // Content Section
        defineArrayMember({
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            defineField({ name: 'type', type: 'string', initialValue: 'content', hidden: true }),
            defineField({ name: 'heading', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'description', type: 'string' }),
            defineField({
              name: 'content',
              type: 'array',
              of: [{ type: 'block' }],
              validation: Rule => Rule.required(),
            }),
          ],
        }),

        // Label Value Section
        defineArrayMember({
          type: 'object',
          name: 'labelValueSection',
          title: 'Label Value Section',
          fields: [
            defineField({ name: 'type', type: 'string', initialValue: 'labelValue', hidden: true }),
            defineField({ name: 'heading', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'description', type: 'string' }),
            defineField({
              name: 'label_value',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', type: 'string', validation: Rule => Rule.required() }),
                    defineField({ name: 'value', type: 'string', validation: Rule => Rule.required() }),
                  ],
                }),
              ],
              validation: Rule => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
