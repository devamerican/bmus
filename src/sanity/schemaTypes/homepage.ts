// File: homePageSchema.js
import { defineType, defineField, defineArrayMember } from 'sanity'

// Primary CTA schema
export const primaryCTASchema = defineType({
  name: 'primaryCTA',
  title: 'Primary CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})

// Secondary CTA schema
export const secondaryCTASchema = defineType({
  name: 'secondaryCTA',
  title: 'Secondary CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})

// CTA Container schema
export const ctaContainerSchema = defineType({
  name: 'ctaContainer',
  title: 'CTA Container',
  type: 'object',
  fields: [
    defineField({
      name: 'primary',
      title: 'Primary CTA',
      type: 'primaryCTA',
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary CTA',
      type: 'secondaryCTA',
    }),
    // defineField({
    //   name: 'href',
    //   title: 'Container Link URL',
    //   type: 'string',
    //   validation: Rule => Rule.required(),
    // }),
  ],
})

// Hero 2 schema
export const hero2Schema = defineType({
  name: 'hero2',
  title: 'Hero 2',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
  ],
})

// Country schema
export const countrySchema = defineType({
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    defineField({
        name: 'heading',
        title: 'Heading',
        type: 'string',
        validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'countries',
        title: 'Countries',
        type: 'array',
        of: [
              defineArrayMember({
                type: 'object',
                fields: [
                    defineField({
                        name: 'country',
                        title: 'Country Name',
                        type: 'string',
                        validation: Rule => Rule.required(),
                      }),
                      defineField({
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: {
                          hotspot: true,
                        },
                        validation: Rule => Rule.required(),
                      }),
                ],
            }),
        ],
        validation: Rule => Rule.required(),
    })

  ],
})

// Service schema
export const serviceSchema = defineType({
  name: 'service',
  title: 'Service',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
  ],
})

// Testimonial schema
export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
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
      name: 'university',
      title: 'University',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
  ],
})

// What Students Say schema
export const whatStudentsSaySchema = defineType({
  name: 'whatStudentsSay',
  title: 'What Students Say',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'testimonial',
        }),
      ],
    }),
  ],
})

// What We Offer schema
export const whatWeOfferSchema = defineType({
  name: 'whatWeOffer',
  title: 'What We Offer',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'service',
        }),
      ],
    }),
    // defineField({
    //   name: 'whatStudentsSay',
    //   title: 'What Students Say',
    //   type: 'whatStudentsSay',
    // }),
  ],
})

export const achievementScehma = defineType({
    name: 'achievement',
    title: 'Achievements',
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
                defineField({
                    name: 'subTitle',
                    title: 'Sub Title',
                    type: 'string',
                }),
            ],
        }),
    ],
})

// Main Hero schema
export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({

        name: 'bgImage',
        title: 'Background Images',
        type: 'array',
        of: [
            defineArrayMember({
                type: 'image',
                options: {
                    hotspot: true,
                },
            }),
        ],
        validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'ctaContainer',
    }),
    defineField({
        name: 'achievements',
        title: 'Achievements',
        type: 'achievement',
    })
    // defineField({
    //   name: 'hero_2',
    //   title: 'Hero 2',
    //   type: 'hero2',
    // }),
    // defineField({
    //   name: 'countries',
    //   title: 'Countries',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'country',
    //     }),
    //   ],
    //   validation: Rule => Rule.required(),
    // }),
    // defineField({
    //   name: 'what_we_offer',
    //   title: 'What We Offer',
    //   type: 'whatWeOffer',
    // }),
  ],
})

// Homepage schema
export const homepageSchema = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  preview: {prepare() {
    return {
      title: "/",
    }
    }},
  fields: [
    // defineField({
    //   name: 'title',
    //   title: 'Page Title',
    //   type: 'string',
    //   validation: Rule => Rule.required(),
    // }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'hero',
    }),
    defineField({
        name: 'hero2',
        title: 'Hero 2',
        type: 'hero2',
    }),
    defineField({
        name: 'countrySection',
        title: 'Countries',
        type: 'country',
    }),
    defineField({
        name: 'whatWeOffer',
        title: 'What We Offer',
        type: 'whatWeOffer',
    }),
    defineField({
        name: 'whatStudentsSay',
        title: 'What Students Say',
        type: 'whatStudentsSay',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})

// Export all schemas
export const homePageSchemaTypes = [
    achievementScehma,
  primaryCTASchema,
  secondaryCTASchema,
  ctaContainerSchema,
  hero2Schema,
  countrySchema,
  serviceSchema,
  testimonialSchema,
  whatStudentsSaySchema,
  whatWeOfferSchema,
  heroSchema,
  homepageSchema,
]