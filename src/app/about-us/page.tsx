// import { Card, CardContent } from "@/components/ui/card";
// import { Globe, Handshake, Landmark, Laugh } from "lucide-react";
import Image from "next/image";
// import { getPayload } from 'payload'
// import config from '@/payload.config'
// import { RichText } from '@payloadcms/richtext-lexical/react'
import { DynamicIcon, IconName } from "lucide-react/dynamic";
// import { Media } from "@/payload-types";
import { type SanityDocument, PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// const achievementsItems = [
//     {
//         id: 1,
//         title: "13+ Years of Experience",
//         icon: "handshake"
//     },
//     {
//         id: 2,
//         title: "15+ Countries for MBBS",
//         icon: "globe" 
//     },
//     {
//         id: 3,
//         title: "100+ Connected Universities",
//         icon: "landmark"
//     },
//     {
//         id: 4,
//         title: "1000+ Happy Students",
//         icon: "laugh" 
//     },
// ]

// const team = [
//     {
//         id: 1,
//         image: '/anik.jpg',
//         name: 'Ajay Gaur',
//         desingnation: 'Director',
//     },
//     {
//         id: 2,
//         image: '/anik.jpg',
//         name: 'Ajay Gaur',
//         desingnation: 'Associate Director',
//     },
//     {
//         id: 3,
//         image: '/anik.jpg',
//         name: 'Ajay Gaur',
//         desingnation: 'Director',
//     },
//     {
//         id: 4,
//         image: '/anik.jpg',
//         name: 'Ajay Gaur',
//         desingnation: 'Director',
//     },
// ]

export const metadata = {
    title: "About Us",
    description: "BMUS helps students to study abroad in the best medical universities of the world.",
}


export default async function AboutUs() {

    // const payload = await getPayload({ config })
    // const data = await payload.find({
    //     collection: 'pages',
    // })
    // const aboutPageData = data.docs.find((item) => item.pageType === 'about')

    const QUERY = `*[_type == "aboutUs"]`

    const data = await client.fetch<SanityDocument[]>(QUERY, {});
    const aboutPageData = data[0]

    const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

  return (
    <section className="max-w-7xl mx-auto px-4 my-10 lg:my-16 lg:pb-16" >
      <h1 className="text-h1 text-center mb-20" >{aboutPageData.intro.heading}</h1> 
      <h2 className="text-h3 mb-8">{aboutPageData.intro.subheading}</h2>
      {/* <div className="flex flex-col lg:flex-row gap-6 items-center *:basis-1/2" > 
        <div>
          <Image src={urlFor(aboutPageData?.intro?.introImage)?.url() ?? ""} width={1920} height={1080} alt="intro image"  />
        </div>   
      </div> */}
        <div className="prose !max-w-full" >
          {aboutPageData?.intro?.content && <PortableText value={aboutPageData?.intro?.content} />}
        </div> 


        {/* Achievements */}
      <div className="my-24" >

        <h2 className="text-h2 mb-12" >{aboutPageData?.achievements?.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-center place-items-center gap-4 lg:gap-6" >
            {
                aboutPageData.achievements.achievementItems?.map((item: { icon: IconName, title: string, _key: string }) => (
                        <div key={item._key} className="hover:shadow transition-shadow p-6 rounded-lg bg-muted w-full min-h-40" >
                            <div>
                                <DynamicIcon name={item.icon as IconName} size={32} className=" mb-6 text-blue-500" />
                                <h4 className="text-lg font-semibold " >{item.title}</h4>
                            </div>
                        </div>
                ))
            }
        </div>

      </div>

        
    {/* our team */}
    <div>

        <h2 className="text-h2 mb-1" >{aboutPageData?.ourTeam?.heading}</h2>
        <p className="text-muted-foreground mb-12" >{aboutPageData?.ourTeam?.subHeading}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6" >
        {
            aboutPageData?.ourTeam?.teamMembers?.map((item: any) => (
                <div key={item._key} className="flex flex-col items-center justify-center">
                    <Image className="w-full mb-2 rounded-2xl aspect-square object-cover" src={urlFor(item.image)?.width(300).height(300).url() ?? "" } alt={item?.name} width={300} height={300} />   
                    <h4 className="text-xl font-medium mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.designation}</p>
                </div>
            ))
        }
        </div>


    </div>


    </section>
  );
}