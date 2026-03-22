import BookCounseling from "@/components/home/book-counseling";
import Countries from "@/components/home/countries";
import EducationAbroad from "@/components/home/education-abroad";
import Hero from "@/components/home/hero";
import CeecoHero from "@/components/home/ceeco-hero";
import HomeCtaSection from "@/components/home/cta-section";
import StudentsSay from "@/components/home/students-say";
import WhatWeOffer from "@/components/home/what-we-offer";
import VideoReviews from "@/components/home/video-reviews";
import BlogSection from "@/components/home/blog-section";

import MBBSAbroadForIndians from "@/components/home/MBBSAbroadForIndians";
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { RECENT_BLOG_POSTS_QUERY } from "@/sanity/queries/blog";


export default async function Home() {

  const HOMEPAGE_QUERY = `*[_type == "homepage"]`
  const [homepageResult, blogPosts] = await Promise.all([
    cachedSanityFetch<any[]>(HOMEPAGE_QUERY),
    cachedSanityFetch<any[]>(RECENT_BLOG_POSTS_QUERY),
  ])
  const data = homepageResult[0]
  

  return (
    <main className="space-y-10 md:space-y-16 lg:space-y-32 mb-10" >
      <CeecoHero />

      <VideoReviews />

      <Hero data={data.hero} />
      <EducationAbroad data={data.hero2} />

      {blogPosts && blogPosts.length > 0 && (
        <BlogSection posts={blogPosts} />
      )}

      <MBBSAbroadForIndians />
      <Countries data={data.countrySection} />
      <WhatWeOffer data={data.whatWeOffer} />
      <BookCounseling />
      <HomeCtaSection />
      <StudentsSay data={data.whatStudentsSay} />
    </main>
  );
}
