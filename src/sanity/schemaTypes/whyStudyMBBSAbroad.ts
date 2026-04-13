export const whyStudyMBBSAbroadSchema = {
  name: 'whyStudyMBBSAbroad',
  title: 'Why Study MBBS Abroad',
  type: 'document',
  preview: {prepare() {
      return {
        title: "/why-study-mbbs-abroad",
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
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
            {
                type: 'object',
                fields: [
                    {
                        name: 'icon',
                        title: 'Icon',
                        type: 'string',
                    },
                    {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                    },
                ],
            },
        ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
}