import BookCounseling from "@/components/home/book-counseling";
import Countries from "@/components/home/countries";
import EducationAbroad from "@/components/home/education-abroad";
import Hero from "@/components/home/hero";
import StudentsSay from "@/components/home/students-say";
import WhatWeOffer from "@/components/home/what-we-offer";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import MBBSAbroadForIndians from "@/components/home/MBBSAbroadForIndians";


export default async function Home() {

      const QUERY = `*[_type == "homepage"]`
      const result = await client.fetch<SanityDocument[]>(QUERY, {});
      const data = result[0]

      // console.log({ data })

  return (
    <main className="space-y-10 md:space-y-16 lg:space-y-32 mb-10" >
      <Hero data={data.hero} />
      <EducationAbroad data={data.hero2} />
      <MBBSAbroadForIndians />
      <Countries data={data.countrySection} />
      <WhatWeOffer data={data.whatWeOffer} />
      <BookCounseling />
      <StudentsSay data={data.whatStudentsSay} />
    </main>
  );
}
