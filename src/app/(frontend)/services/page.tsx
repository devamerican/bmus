import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

export const metadata = {
  title: "Our Services",
  description: "Different Services provided by BMUS",
}

export default async function OurServicesPage() {
  const QUERY = `*[_type == "services"]`
  const { data: servicesData } = await sanityFetch({query: QUERY})
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.servicesItems.map((item: { 
            title: string, 
            icon: string,
            image?: SanityImageSource,
            description?: string 
          }) => (
            <Card key={item.title} className="hover:shadow-md transition-shadow h-full">
              <CardContent className="flex flex-col justify-center items-center gap-6 p-6 h-full">
                {/* Image with fallback to icon */}
                {item.image ? (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
                    <Image
                      src={urlFor(item.image)?.width(200).height(200).url() ?? ""}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <DynamicIcon 
                    name={item.icon as IconName} 
                    size={60} 
                    className="text-blue-500" 
                  />
                )}
                
                <h3 className="text-center  font-medium text-zinc-700">{item.title}</h3>
                
                {item.description && (
                  <p className="text-center text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}