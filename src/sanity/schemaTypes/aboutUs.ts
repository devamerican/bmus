import { defineType, defineField, defineArrayMember } from 'sanity'

export const introSection = defineType({
  name: 'intro',
  title: 'Intro',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array', // Assumes you have a blockContent type defined for rich text
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    })
  ],
})

export const achievementsSection = defineType({
  name: 'achievements',
  title: 'Achievements',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'achievementItems',
      title: 'Achievement Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})

export const ourTeamSection = defineType({
  name: 'ourTeam',
  title: 'Our Team',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'designation',
              title: 'Designation',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})

// Main page schema that uses all the sections
export const pageSchema = defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  preview: {prepare(value, viewOptions) {
      return {
        title: "/about-us",
        // subtitle: "what",
      }
  },},
  fields: [
    defineField({
      name: 'intro',
      title: 'Introduction Section',
      type: "intro",
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements Section',
      type: 'achievements',
    }),
    defineField({
      name: 'ourTeam',
      title: 'Our Team Section',
      type: 'ourTeam',
    }),
  ],
})

// Make sure to include this in your schema.js or index.js file
export const schemaTypes = [
  introSection,
  achievementsSection,
  ourTeamSection,
  pageSchema,
]