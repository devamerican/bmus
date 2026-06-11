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
      videoFile{
        asset->{ _id, url, mimeType, originalFilename }
      },
      poster{
        ...,
        asset->{ _id, url }
      }
    },
    studentVideosSection{
      ...,
      videos[]{
        title,
        videoFile{
          asset->{ _id, url, mimeType, originalFilename }
        },
        poster{
          ...,
          asset->{ _id, url }
        }
      }
    },
    stats,
    perksSection{
      ...,
      perks[]{
        ...,
        image{
          ...,
          asset->{ _id, url }
        }
      }
    },
    whyChooseSection{
      ...,
      image{
        ...,
        asset->{ _id, url }
      }
    },
    processSection{
      ...,
      steps[]{
        ...,
        image{
          ...,
          asset->{ _id, url }
        }
      }
    },
    servicesSection,
    testimonialsSection,
    googleReviewsSection{
      ...,
      reviews[]{
        ...,
        profileImage{
          ...,
          asset->{ _id, url }
        }
      }
    },
    faqSection,
    finalCtaSection,
    dialog,
    footer
  }
`

export const BOOK_COUNSELING_PAGE_SEO_QUERY = groq`
  *[_type == "bookCounselingPage"][0].seo
`
