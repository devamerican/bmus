import BookCounseling from "@/components/home/book-counseling";
import Countries from "@/components/home/countries";
import EducationAbroad from "@/components/home/education-abroad";
import Hero from "@/components/home/hero";
import StudentsSay from "@/components/home/students-say";
import WhatWeOffer from "@/components/home/what-we-offer";

export default function Home() {
  return (
    <main className="space-y-32 mb-10" >
      <Hero />
      <EducationAbroad />
      <Countries />
      <WhatWeOffer />
      <BookCounseling />
      <StudentsSay />
    </main>
  );
}
