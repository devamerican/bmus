import { groq } from 'next-sanity'

export const BOOK_COUNSELING_PAGE_QUERY = groq`
  *[_type == "bookCounselingPage"][0]{
    header,
    hero{
      ...,
      studentAvatars[]{
        alt,
        image{
          ...,
          asset->{ _id, url }
        }
      }
    },
    videoSection{
      ...,
      poster{
        ...,
        asset->{ _id, url }
      }
    },
    stats,
    perksSection,
    whyChooseSection{
      ...,
      image{
        ...,
        asset->{ _id, url }
      }
    },
    processSection,
    servicesSection,
    testimonialsSection,
    faqSection,
    finalCtaSection,
    dialog,
    footer
  }
`

export const BOOK_COUNSELING_PAGE_SEO_QUERY = groq`
  *[_type == "bookCounselingPage"][0].seo
`
