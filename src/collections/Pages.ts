// File: collections/Pages.ts
import type { CollectionConfig, Field } from 'payload'
import { revalidatePage } from './hooks/revalidatePage';

// Section fields for Home Page
const homePageSections: Field[] = [
  {
    name: 'hero',
    type: 'group',
    fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'subheading',
          type: 'text',
          required: true,
        },
        {
          name: 'cta',
          type: 'group',
          fields: [
            {
              name: 'primary',
              type: 'group',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'secondary',
              type: 'group',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },

          ],
        },
        {
          name: 'hero_2',
          type: 'group',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            }
          ],
        },
        {
          name: 'countries',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'country',
              type: 'text',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            }
          ],
        },
        {
          name: 'what_we_offer',
          type: 'group',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'subheading',
              type: 'text',
              required: true,
            },
            {
              name: 'content',
              type: 'text',
              required: true,
            },
            {
              name: 'services',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
            {
              name: 'what_students_say',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'content',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'testimonials',
                  type: 'array',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                    {
                      name: 'university',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'content',
                      type: 'text',
                      required: true,
                    },
                  ],
                },

              ],
            }
          ],
        },
    ],
  }
];

// Section fields for About Page
const aboutPageSections: Field[] = [
  {
    name: 'intro',
    type: 'group',
    fields: [
      {
        name: 'heading',
        type: 'text',
      },
      {
        name: 'subheading',
        type: 'text',
      },
      {
        name: 'content',
        type: 'richText',
      },
    ],
  },
  {
    name: 'achievements',
    type: 'group',
    fields: [
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'achivementItems',
        type: 'array',
        fields: [
          {
            name: 'icon',
            type: 'text',
          },
          {
            name: 'title',
            type: 'text',
          }
        ],
      },
    ],
  },
  {
    name: 'ourTeam',
    type: 'group',
    fields: [
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'teamMembers',
        type: 'array',
        fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
          {
            name: 'name',
            type: 'text',
            required: true,
          },
          {
            name: 'designation',
            type: 'text',
            required: true,
          },
        ],
      },
    ],
  },
];

// Section fields for Services Page
const servicePageSections: Field[] = [
  {
    name: 'serviceIntro',
    type: 'group',
    fields: [
      {
        name: 'heading',
        type: 'text',
      },
      {
        name: 'description',
        type: 'richText',
      },
      {
        name: 'serviceList',
        type: 'array',
        fields: [
          {
            name: 'title',
            type: 'text',
          },
          {
            name: 'icon',
            type: 'text',
          },
        ],
      },
    ],
  },
];

const directorsMessage: Field[] = [
  {
    name: 'directorsMessage',
    type: 'group',
    fields: [
      {
        name: 'heading',
        type: 'text',
      },
      {
        name: 'content',
        type: 'richText',
      },
    ],
  },
];

const whyStudyMBBSAbroad: Field[] = [
    {
        name: 'whyStudyMBBSAbroad',
        type: 'group',
        fields: [
          {
            name: 'heading',
            type: 'text',
          },
          {
            name: 'listItems',
            type: 'array',
            fields: [
              {
                name: 'title',
                type: 'text',
              },
              {
                name: 'icon',
                type: 'text',
              },
            ],
          },
        ],
      },
];

const mbbsFaqs: Field[] = [
  {
    name: 'mbbsFaqs',
    type: 'group',
    fields: [
      {
        name: 'heading',
        type: 'text',
      },
      {
        name: 'listItems',
        type: 'array',
        fields: [
          {
            name: 'question',
            type: 'text',
          },
          {
            name: 'answer',
            type: 'text',
          },
        ],
      },
    ],
},
]

const mbbsInCountry: Field[] = [
  {
    name: 'mbbsInCountry',
    type: 'group',
    fields: [
      {
        name: 'slug',
        type: 'text',
        required: true,
      },
      {
        name: 'heading',
        type: 'text',
        required: true,
      },
      {
        name: 'bg_image',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'hero',
        type: 'group',
        fields: [
          {
            name: 'logo_image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
          {
            name: 'content',
            type: 'richText',
            required: true,
          },
        ]
      },
      {
        name: 'universities',
        type: 'group',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'table',
            type: 'array',
            fields: [
              {
                name: 'name',
                type: 'text',
                required: true,
              },
              {
                name: 'year',
                type: 'text',
                required: true,
              },
              {
                name: 'location',
                type: 'text',
                required: true,
              },
              {
                name: 'fees',
                type: 'text',
                required: true,
              },
            ]
          },
        ]
      },
      {
        name: 'about',
        type: 'group',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'content',
            type: 'richText',
            required: true,
          },
          {
            name: 'facts',
            type: 'array',
            fields: [
              {
                name: 'title',
                type: 'text',
                required: true,
              },
              {
                name: 'icon',
                type: 'text',
                required: true,
              },
              {
                name: 'value',
                type: 'text',
                required: true,
              }
            ]
          },
        ]
      },
      {
        name: 'eligibility',
        type: 'group',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'content',
            type: 'richText',
            required: true,
          },
        ]
      },
      {
        name: 'why_choose',
        type: 'group',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'content',
            type: 'richText',
            required: true,
          },
        ]
      },
      {
        name: 'city_attractions',
        type: 'group',
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
        ]
      }
    ],
  },
];

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  admin: {
    useAsTitle: 'pageType',
  },
  access: {
    read: () => true,
  },
  fields: [
    // {
    //   name: 'title',
    //   type: 'text',
    //   required: true,
    // },
    {
      name: 'pageType',
      type: 'select',
      options: [
        {
          label: 'Home',
          value: 'home',
        },
        {
          label: 'About',
          value: 'about',
        },
        {
          label: 'Services',
          value: 'services',
        },
        {
            label: 'Directors Message',
            value: 'directorsMessage',
        },
        {
            label: 'Why Study MBBS Abroad',
            value: 'whyStudyMBBSAbroad',
        },
        {
            label: 'MBBS FAQs',
            value: 'mbbsFaqs',
        }    
      ],
      required: true,
      // admin: {
      //   position: 'sidebar',
      // },
    },
    {
      name: 'homePageContent',
      type: 'group',
      admin: {
        condition: (data) => data.pageType === 'home',
      },
      fields: homePageSections,
    },
    {
      name: 'aboutPageContent',
      type: 'group',
      admin: {
        condition: (data) => data.pageType === 'about',
      },
      fields: aboutPageSections,
    },
    {
      name: 'servicePageContent',
      type: 'group',
      admin: {
        condition: (data) => data.pageType === 'services',
      },
      fields: servicePageSections,
    },
    {
        name: 'directorsMessageContent',
        type: 'group',
        admin: {
          condition: (data) => data.pageType === 'directorsMessage',
        },
        fields: directorsMessage,
    },
    {
        name: 'whyStudyMBBSAbroadContent',
        type: 'group',
        admin: {
          condition: (data) => data.pageType === 'whyStudyMBBSAbroad',
        },
        fields: whyStudyMBBSAbroad,
    },
    {
        name: 'mbbsFaqsContent',
        type: 'group',
        admin: {
          condition: (data) => data.pageType === 'mbbsFaqs',
        },
        fields: mbbsFaqs,
    },
    {
        name: 'mbbsInCountryContent',
        type: 'group',
        admin: {
          condition: (data) => data.pageType === 'mbbsInCountry',
        },
        fields: mbbsInCountry,
    }
  ],
  hooks: {
    afterChange:[revalidatePage],
  },
};
