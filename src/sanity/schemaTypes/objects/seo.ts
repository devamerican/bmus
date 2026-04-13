import { defineType, defineField } from 'sanity'

export const seoSchema = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      description: 'Overrides the default page title (under 70 characters recommended).',
      validation: (Rule) => Rule.max(70).warning('Keep meta titles under 70 characters.'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Shown in search results (under 160 characters recommended).',
      validation: (Rule) => Rule.max(160).warning('Keep meta descriptions under 160 characters.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
  ],
})
