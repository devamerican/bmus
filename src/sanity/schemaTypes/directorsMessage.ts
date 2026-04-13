export const directorsMessageSchema = {
  name: 'directorsMessage',
  title: 'Directors Message',
  type: 'document',
  preview: {prepare() {
      return {
        title: "/directors-message",
        // subtitle: "what",
      }
  },},
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
}