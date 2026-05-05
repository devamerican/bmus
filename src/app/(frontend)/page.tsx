// Original Components
import Countries from "@/components/home/countries";
import EducationAbroad from "@/components/home/education-abroad";
import Hero from "@/components/home/hero";
import CeecoHero from "@/components/home/ceeco-hero";
import HomeCtaSection from "@/components/home/cta-section";
import StudentsSay from "@/components/home/students-say";
import WhatWeOffer from "@/components/home/what-we-offer";
import VideoReviews from "@/components/home/video-reviews";
import PhotoHighlights from "@/components/home/photo-highlights";
import BlogSection from "@/components/home/blog-section";
import MBBSAbroadForIndians from "@/components/home/MBBSAbroadForIndians";

// New Modern Components
import ModernHero from "@/components/home/modern-hero";
import StatsSection from "@/components/home/stats-section";
import ModernServices from "@/components/home/modern-services";
import WhyChooseUs from "@/components/home/why-choose-us";
import ModernCountries from "@/components/home/modern-countries";
import ModernTestimonials from "@/components/home/modern-testimonials";

import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { RECENT_BLOG_POSTS_QUERY } from "@/sanity/queries/blog";
import type { Metadata } from "next";
import { buildMetadata, type SanitySeo } from "@/lib/seo";


export async function generateMetadata(): Promise<Metadata> {
  const seo = await cachedSanityFetch<SanitySeo>(
    `*[_type == "homepage"][0].seo`,
    {},
    3600,
    ['homepage'],
  )
  return buildMetadata(seo, {
    title: "Best Medical University Services | MBBS Abroad Consultants in India",
    description:
      "BMUS helps Indian students get MBBS admission abroad with trusted consultants, NMC approved universities, affordable fees & end-to-end support.",
  })
}


export default async function Home() {

  const HOMEPAGE_QUERY = `*[_type == "homepage"]`
  const [homepageResult, blogPosts] = await Promise.all([
    cachedSanityFetch<any[]>(HOMEPAGE_QUERY, {}, 3600, ['homepage']),
    cachedSanityFetch<any[]>(RECENT_BLOG_POSTS_QUERY, {}, 3600, ['blog']),
  ])
  const data = homepageResult[0]

  // Toggle between original and modern design
  // Change USE_MODERN_DESIGN to false to use original design
  const USE_MODERN_DESIGN = true;

  if (USE_MODERN_DESIGN) {
    return (
      <main className="space-y-0 mb-10">
        <ModernHero />
        <VideoReviews />
        <PhotoHighlights />
        <StatsSection />
        <EducationAbroad data={data.hero2} />

        {blogPosts && blogPosts.length > 0 && (
          <BlogSection posts={blogPosts} />
        )}

        <MBBSAbroadForIndians />
        <ModernCountries data={data.countrySection} />
        <ModernServices data={data.whatWeOffer} />
        <WhyChooseUs />
        <ModernTestimonials data={data.whatStudentsSay} />
        <HomeCtaSection />
      </main>
    );
  }

  return (
    <main className="space-y-10 md:space-y-16 lg:space-y-32 mb-10" >
      <CeecoHero />

      <VideoReviews />

      <PhotoHighlights />

      <Hero data={data.hero} />
      <EducationAbroad data={data.hero2} />

      {blogPosts && blogPosts.length > 0 && (
        <BlogSection posts={blogPosts} />
      )}

      <MBBSAbroadForIndians />
      <Countries data={data.countrySection} />
      <WhatWeOffer data={data.whatWeOffer} />
      <HomeCtaSection />
      <StudentsSay data={data.whatStudentsSay} />
    </main>
  );
}
