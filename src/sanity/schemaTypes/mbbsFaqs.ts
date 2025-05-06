export const mbbsFaqsSchema = {
  name: 'mbbsFaqs',
  title: 'MBBS FAQs',
  type: 'document',
  preview: {prepare() {
      return {
        title: "/mbbs-faqs",
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
                        name: 'question',
                        title: 'Question',
                        type: 'string',
                    },
                    {
                        name: 'answer',
                        title: 'Answer',
                        type: 'text',
                    },
                ],
            },
        ],
    }
  ],
}