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
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
  
    gallerySchema
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