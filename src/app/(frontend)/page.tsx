import BookCounseling from "@/components/home/book-counseling";
import Countries from "@/components/home/countries";
import EducationAbroad from "@/components/home/education-abroad";
import Hero from "@/components/home/hero";
import CeecoHero from "@/components/home/ceeco-hero";
import HomeCtaSection from "@/components/home/cta-section";
import StudentsSay from "@/components/home/students-say";
import WhatWeOffer from "@/components/home/what-we-offer";

import MBBSAbroadForIndians from "@/components/home/MBBSAbroadForIndians";
import { sanityFetch } from "@/sanity/lib/live";


export default async function Home() {

  const QUERY = `*[_type == "homepage"]`
  const { data: result } = await sanityFetch({ query: QUERY })
  const data = result[0]


  return (
    <main className="space-y-10 md:space-y-16 lg:space-y-32 mb-10" >
      <CeecoHero />
      <Hero data={data.hero} />
      <EducationAbroad data={data.hero2} />
      <MBBSAbroadForIndians />
      <Countries data={data.countrySection} />
      <WhatWeOffer data={data.whatWeOffer} />
      <BookCounseling />
      <HomeCtaSection />
      <StudentsSay data={data.whatStudentsSay} />
    </main>
  );
}
