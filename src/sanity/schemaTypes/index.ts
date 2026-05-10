// index.ts
import { introSection, achievementsSection, ourTeamSection, pageSchema } from './aboutUs'
import { directorsMessageSchema } from './directorsMessage'
import { achievementScehma, countrySchema, ctaContainerSchema, hero2Schema, heroSchema, homepageSchema, primaryCTASchema, secondaryCTASchema, serviceSchema, testimonialSchema, whatStudentsSaySchema, whatWeOfferSchema } from './homepage'
import { mbbsFaqsSchema } from './mbbsFaqs'
import { mbbsInCountrySchema } from './mbbsInCountry'
import { navbarSchema } from './navbar'
import { servicesSchema } from './services'
import { whyStudyMBBSAbroadSchema } from './whyStudyMBBSAbroad'
import { prospectusSchema } from './prospectus'
import { gallerySchema } from './gallery'
import { blogPostSchema } from './blogPost'
import { seoSchema } from './objects/seo'
import { admissionProcessPageSchema } from './admissionProcessPage'
import { applyOnlinePageSchema } from './applyOnlinePage'
import { contactUsPageSchema } from './contactUsPage'
import { eligibilityAndDocumentPageSchema } from './eligibilityAndDocumentPage'
import { studentReviewsPageSchema } from './studentReviewsPage'
import { blogListingPageSchema } from './blogListingPage'
import { bookCounselingPageSchemaTypes } from './bookCounselingPage'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoSchema,

    introSection,
    achievementsSection,
    ourTeamSection,
    pageSchema,

    servicesSchema,

    directorsMessageSchema,

    whyStudyMBBSAbroadSchema,

    mbbsFaqsSchema,

    navbarSchema,

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
    achievementScehma,


    mbbsInCountrySchema,

    prospectusSchema,

    gallerySchema,

    blogPostSchema,

    admissionProcessPageSchema,
    applyOnlinePageSchema,
    contactUsPageSchema,
    eligibilityAndDocumentPageSchema,
    studentReviewsPageSchema,
    blogListingPageSchema,

    ...bookCounselingPageSchemaTypes,
  ],

}

// export const schemaTypes = [
//   introSection,
//   achievementsSection,
//   ourTeamSection,
//   pageSchema,

//   servicesSchema,

//   directorsMessageSchema,

//   whyStudyMBBSAbroadSchema,

//   mbbsFaqsSchema,

//   navbarSchema,

//   primaryCTASchema,
//   secondaryCTASchema,
//   ctaContainerSchema,
//   hero2Schema,
//   countrySchema,
//   serviceSchema,
//   testimonialSchema,
//   whatStudentsSaySchema,
//   whatWeOfferSchema,
//   heroSchema,
//   homepageSchema,
//   achievementScehma,


//   mbbsInCountrySchema,

//   prospectusSchema,

//   gallerySchema
// ]