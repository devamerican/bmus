import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | MBBS Abroad Admission & Visa Support – Counseling",
  description:
    "BMUS offers complete MBBS abroad services counseling, university selection, admission process, visa assistance & student support.",
  keywords: [
    "MBBS abroad services",
    "medical admission support",
    "study abroad services",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
  },
};
export default async function OurServicesPage() {
  const QUERY = `*[_type == "services"]`
  const servicesData = await cachedSanityFetch<any[]>(QUERY, {}, 3600, ['services'])
  const services = servicesData[0]


  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gray-100">
        {services?.heroImage && (
          <Image
            src={urlFor(services.heroImage)?.width(1600).height(800).url() ?? "/default-services.jpg"}
            alt={services?.heroImageAlt || "Our Services"}
            fill
            className="object-cover brightness-50"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {services.heading}
            </h1>
            {/* <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {services.description}
            </p> */}
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="max-w-7xl p-4 mx-auto my-12 md:my-16">
        <p className=" mx-auto mb-10">
          {services.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.servicesItems.map((item: {
            title: string,
            icon: string,
            image?: SanityImageSource,
            description?: string
          }) => (
            <div key={item.title} className="border rounded-md overflow-clip bg-secondary hover:shadow-md" >
              <Image
                src={item?.image ? urlFor(item?.image)?.url() : "/eligibility.jpg"}
                alt={item.title}
                // fill
                width={300}
                height={300}
                className="object-cover w-full h-48 hover:scale-105 transition-all"
              />
              <div className="p-4" >
                <h3 className="text-center  font-medium text-zinc-700">{item.title}</h3>
              </div>

              {/* {item.description && (
                  <p className="text-center text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )} */}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}