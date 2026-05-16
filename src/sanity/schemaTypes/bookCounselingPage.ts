import { defineType, defineField, defineArrayMember } from 'sanity'

const ICON_DESCRIPTION =
  'Use a Lucide icon name (e.g. Headphones, ShieldCheck, Trophy). Falls back to Sparkles if not recognised.'

// ---------- Reusable item objects ----------

const bookCounselingStat = defineType({
  name: 'bookCounselingStat',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({ name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }),
  ],
})

const bookCounselingPerk = defineType({
  name: 'bookCounselingPerk',
  title: 'Perk',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Card Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Photo shown at the top of the perk card. If omitted, a gradient placeholder is shown.',
    }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
  ],
})

const bookCounselingFeature = defineType({
  name: 'bookCounselingFeature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({ name: 'icon', title: 'Icon', type: 'string', description: ICON_DESCRIPTION }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
  ],
})

const bookCounselingProcessStep = defineType({
  name: 'bookCounselingProcessStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({ name: 'step', title: 'Step Number', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', description: ICON_DESCRIPTION }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
  ],
})

const bookCounselingTestimonial = defineType({
  name: 'bookCounselingTestimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Role / Location', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
  ],
})

const bookCounselingFaq = defineType({
  name: 'bookCounselingFaq',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({ name: 'q', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'a', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
  ],
})

const bookCounselingStudentAvatar = defineType({
  name: 'bookCounselingStudentAvatar',
  title: 'Student Avatar',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
  ],
})

// ---------- Page sections ----------

const bookCounselingHeader = defineType({
  name: 'bookCounselingHeader',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({ name: 'phoneNumber', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'phoneDisplay', title: 'Phone Display Label', type: 'string' }),
    defineField({
      name: 'brandLines',
      title: 'Brand Text Lines',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'Text shown next to the logo, one line per item.',
    }),
  ],
})

const bookCounselingHero = defineType({
  name: 'bookCounselingHero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'headingPrefix', title: 'Heading – Prefix', type: 'string' }),
    defineField({ name: 'headingHighlight', title: 'Heading – Highlight Word', type: 'string' }),
    defineField({ name: 'headingSuffix', title: 'Heading – Suffix', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'studentAvatars',
      title: 'Student Avatars',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingStudentAvatar' })],
    }),
    defineField({ name: 'ratingValue', title: 'Rating Value', type: 'string' }),
    defineField({ name: 'ratingLabel', title: 'Rating Label', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaSubline', title: 'CTA Subline', type: 'string' }),
  ],
})

const bookCounselingVideoSection = defineType({
  name: 'bookCounselingVideoSection',
  title: 'Video Section',
  type: 'object',
  fields: [
    defineField({ name: 'enabled', title: 'Show this section', type: 'boolean', initialValue: true }),
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'videoFile',
      title: 'Upload Video',
      type: 'file',
      options: { accept: 'video/*' },
      description:
        'Upload a video file (MP4, WebM, etc.). If both an upload and a URL are provided, the upload takes precedence.',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description:
        'YouTube/Vimeo embed URL or direct .mp4 file URL. Used only when no video is uploaded above. YouTube/Vimeo links are rendered in an iframe.',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image (for uploaded or direct video files)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})

const bookCounselingStudentVideo = defineType({
  name: 'bookCounselingStudentVideo',
  title: 'Student Video',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'videoFile',
      title: 'Upload Video',
      type: 'file',
      options: { accept: 'video/*' },
      description:
        'Upload a video file (MP4, WebM, etc.). Required for the video to display.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'poster',
      title: 'Poster / Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Shown before the video plays.',
    }),
  ],
  preview: {
    select: { title: 'title', media: 'poster' },
    prepare({ title, media }) {
      return { title: title || 'Student Video', media }
    },
  },
})

const bookCounselingStudentVideosSection = defineType({
  name: 'bookCounselingStudentVideosSection',
  title: 'Student Videos Section',
  type: 'object',
  fields: [
    defineField({ name: 'enabled', title: 'Show this section', type: 'boolean', initialValue: true }),
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'headingPrefix', title: 'Heading – Prefix', type: 'string' }),
    defineField({
      name: 'headingHighlight',
      title: 'Heading – Highlight (red)',
      type: 'string',
      description: 'This portion of the heading will be highlighted in red.',
    }),
    defineField({ name: 'headingSuffix', title: 'Heading – Suffix', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({
      name: 'videos',
      title: 'Videos (recommended: 4, shown in a 2×2 grid)',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingStudentVideo' })],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaSubline', title: 'CTA Subline', type: 'string' }),
  ],
})

const bookCounselingPerksSection = defineType({
  name: 'bookCounselingPerksSection',
  title: 'Perks Section',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'perks',
      title: 'Perks',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingPerk' })],
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
  ],
})

const bookCounselingWhyChooseSection = defineType({
  name: 'bookCounselingWhyChooseSection',
  title: 'Why Choose Section',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingFeature' })],
    }),
    defineField({
      name: 'image',
      title: 'Side Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'imageBadge', title: 'Image Badge Text', type: 'string' }),
    defineField({ name: 'imageQuote', title: 'Image Overlay Quote', type: 'text', rows: 3 }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaSubline', title: 'CTA Subline', type: 'string' }),
  ],
})

const bookCounselingProcessSection = defineType({
  name: 'bookCounselingProcessSection',
  title: 'Process Section',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingProcessStep' })],
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
  ],
})

const bookCounselingServicesSection = defineType({
  name: 'bookCounselingServicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingFeature' })],
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaSubline', title: 'CTA Subline', type: 'string' }),
  ],
})

const bookCounselingTestimonialsSection = defineType({
  name: 'bookCounselingTestimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingTestimonial' })],
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
  ],
})

const bookCounselingFaqSection = defineType({
  name: 'bookCounselingFaqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingFaq' })],
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaSubline', title: 'CTA Subline', type: 'string' }),
  ],
})

const bookCounselingFinalCtaSection = defineType({
  name: 'bookCounselingFinalCtaSection',
  title: 'Final CTA Section',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'phoneLabel', title: 'Phone Label', type: 'string' }),
    defineField({ name: 'phoneNumber', title: 'Phone Number', type: 'string' }),
  ],
})

const bookCounselingDialogContent = defineType({
  name: 'bookCounselingDialogContent',
  title: 'Counselling Dialog',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'securityNote', title: 'Security Note', type: 'string' }),
  ],
})

const bookCounselingFooterSection = defineType({
  name: 'bookCounselingFooterSection',
  title: 'Footer / Disclaimer',
  type: 'object',
  fields: [
    defineField({ name: 'brandText', title: 'Brand Text', type: 'string' }),
    defineField({
      name: 'paragraphs',
      title: 'Disclaimer Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 4 })],
    }),
    defineField({ name: 'copyright', title: 'Copyright Text', type: 'string' }),
  ],
})

// ---------- Main page document ----------

export const bookCounselingPageSchema = defineType({
  name: 'bookCounselingPage',
  title: 'Book Counseling Page',
  type: 'document',
  preview: {
    prepare() {
      return { title: '/' }
    },
  },
  fields: [
    defineField({ name: 'header', title: 'Header', type: 'bookCounselingHeader' }),
    defineField({ name: 'hero', title: 'Hero', type: 'bookCounselingHero' }),
    defineField({ name: 'videoSection', title: 'Video Section', type: 'bookCounselingVideoSection' }),
    defineField({
      name: 'studentVideosSection',
      title: 'Student Videos Section',
      type: 'bookCounselingStudentVideosSection',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [defineArrayMember({ type: 'bookCounselingStat' })],
    }),
    defineField({ name: 'perksSection', title: 'Perks Section', type: 'bookCounselingPerksSection' }),
    defineField({ name: 'whyChooseSection', title: 'Why Choose Section', type: 'bookCounselingWhyChooseSection' }),
    defineField({ name: 'processSection', title: 'Process Section', type: 'bookCounselingProcessSection' }),
    defineField({ name: 'servicesSection', title: 'Services Section', type: 'bookCounselingServicesSection' }),
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'bookCounselingTestimonialsSection',
    }),
    defineField({ name: 'faqSection', title: 'FAQ Section', type: 'bookCounselingFaqSection' }),
    defineField({ name: 'finalCtaSection', title: 'Final CTA Section', type: 'bookCounselingFinalCtaSection' }),
    defineField({ name: 'dialog', title: 'Counselling Dialog', type: 'bookCounselingDialogContent' }),
    defineField({ name: 'footer', title: 'Footer / Disclaimer', type: 'bookCounselingFooterSection' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
})

export const bookCounselingPageSchemaTypes = [
  bookCounselingStat,
  bookCounselingPerk,
  bookCounselingFeature,
  bookCounselingProcessStep,
  bookCounselingTestimonial,
  bookCounselingFaq,
  bookCounselingStudentAvatar,
  bookCounselingHeader,
  bookCounselingHero,
  bookCounselingVideoSection,
  bookCounselingStudentVideo,
  bookCounselingStudentVideosSection,
  bookCounselingPerksSection,
  bookCounselingWhyChooseSection,
  bookCounselingProcessSection,
  bookCounselingServicesSection,
  bookCounselingTestimonialsSection,
  bookCounselingFaqSection,
  bookCounselingFinalCtaSection,
  bookCounselingDialogContent,
  bookCounselingFooterSection,
  bookCounselingPageSchema,
]
