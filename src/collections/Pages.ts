// File: collections/Pages.ts
import type { CollectionConfig, Field } from 'payload'

// Section fields for Home Page
// const homePageSections: Field[] = [
//   {
//     name: 'hero',
//     type: 'group',
//     fields: [
//       {
//         name: 'heading',
//         type: 'text',
//         required: true,
//       },
//       {
//         name: 'subheading',
//         type: 'text',
//       },
//       {
//         name: 'image',
//         type: 'upload',
//         relationTo: 'media',
//       },
//       {
//         name: 'ctaText',
//         type: 'text',
//       },
//       {
//         name: 'ctaLink',
//         type: 'text',
//       },
//     ],
//   },
//   {
//     name: 'featuredSection',
//     type: 'group',
//     fields: [
//       {
//         name: 'title',
//         type: 'text',
//       },
//       {
//         name: 'description',
//         type: 'richText',
//       },
//       {
//         name: 'features',
//         type: 'array',
//         fields: [
//           {
//             name: 'title',
//             type: 'text',
//           },
//           {
//             name: 'description',
//             type: 'textarea',
//           },
//           {
//             name: 'icon',
//             type: 'text',
//           },
//         ],
//       },
//     ],
//   },
// ];

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
          },
          {
            name: 'name',
            type: 'text',
          },
          {
            name: 'designation',
            type: 'text',
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

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'pageType',
      type: 'select',
      options: [
        // {
        //   label: 'Home',
        //   value: 'home',
        // },
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
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'homePageContent',
    //   type: 'group',
    //   admin: {
    //     condition: (data) => data.pageType === 'home',
    //   },
    //   fields: homePageSections,
    // },
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
    }
  ],
};
