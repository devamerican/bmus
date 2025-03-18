import { GlobalConfig } from "payload";

export const Navbar: GlobalConfig = {
    slug: 'navbar',
    access: {
      read: () => true,
    },
    fields: [
      {
        name: 'navItems',
        type: 'array',
        fields: [
            {
                name: 'name',
                type: 'text',
                required: true,
            },
            {
                name: 'href',
                type: 'text',
                // required: true,
            },
            {
                name: 'items',
                type: 'array',
                fields: [
                    {
                        name: 'title',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'href',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'description',
                        type: 'text',
                        required: true,
                    }, 
                ],
            },
        ],
      },
    ],
  }