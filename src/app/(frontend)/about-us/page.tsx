import Image from "next/image";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { PortableText } from "next-sanity";
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Trusted MBBS Abroad Education Consultants",
  description: "Learn about BMUS, a trusted MBBS abroad consultancy helping students study medicine in top global universities.",
  keywords: [
    "about BMUS",
    "medical education consultants",
    "MBBS abroad guidance",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`
  }
}


export default async function AboutUs() {
  const QUERY = `*[_type == "aboutUs"]`
  const data = await cachedSanityFetch<any[]>(QUERY)
  const aboutPageData = data[0]


  return (
    <div>
      {/* Hero Section with Image */}
      <div className="relative w-full h-[400px] md:h-[500px] ">
        <Image
          src={urlFor(aboutPageData?.intro?.introImage)?.url() ?? ""}
          alt="About Us Hero Image"
          fill
          className="object-cover object-top  brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {aboutPageData?.heroTitle || aboutPageData.intro.heading}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              {aboutPageData?.heroSubtitle || aboutPageData.intro.subheading}
            </p>
          </div>
        </div>
      </div>

      {/* Rest of your existing content */}
      <section className="max-w-7xl mx-auto px-4 my-10 lg:my-16 lg:pb-16">
        <h2 className="text-h3 mb-8">{aboutPageData.intro.subheading}</h2>

        <div className="prose !max-w-full">
          {aboutPageData?.intro?.content && <PortableText value={aboutPageData?.intro?.content} />}
        </div>

        <Image src="/certificate.png" alt="BMUS Certification" width={800} height={300} className="my-6" />

        {/* Achievements */}
        <div className="my-24">
          <h2 className="text-h2 mb-12">{aboutPageData?.achievements?.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-center place-items-center gap-4 lg:gap-6">
            {
              aboutPageData.achievements.achievementItems?.map((item: { icon: IconName, title: string, _key: string }) => (
                <div key={item._key} className="hover:shadow transition-shadow p-6 rounded-lg bg-muted w-full min-h-40">
                  <div>
                    <DynamicIcon name={item.icon as IconName} size={32} className=" mb-6 text-blue-500" />
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* our team */}
        <div>
          <h2 className="text-h2 mb-1">{aboutPageData?.ourTeam?.heading}</h2>
          <p className="text-muted-foreground mb-12">{aboutPageData?.ourTeam?.subHeading}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6">
            {
              aboutPageData?.ourTeam?.teamMembers?.map((item: any) => (
                <div key={item._key} className="flex flex-col items-center justify-center">
                  <Image
                    className="w-full mb-2 rounded-2xl aspect-square object-cover"
                    src={urlFor(item.image)?.width(300).height(300).url() ?? ""}
                    alt={item?.name}
                    width={300}
                    height={300}
                  />
                  <h4 className="text-xl font-medium mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.designation}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}