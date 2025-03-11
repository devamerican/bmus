import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    // useAsTitle: 'Our Services',
  },
  fields: [
    // add service title, descriptions and then items -> service name, service icons
    {
        name: 'service_heading',
        type: 'text',
        label: 'Service Heading',
        required: true,
    },
    {
        name: 'service_description',
        type: 'text',
        label: 'Service Description',
        required: true,
    },
    {  
      name: 'services',
      label: 'Services',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'service_icon',
          label: 'Service Icon',
          type: 'upload',
        //   required: true,
          relationTo: 'media'
        },
        {
          name: 'service_name',
          label: 'Service Name',
          type: 'text',
          required: true,
        }
      ],
    },
  ],
}   