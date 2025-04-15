// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, MapPin, Globe, Clock, PhoneCall, Currency, Thermometer } from 'lucide-react';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import { client } from '@/sanity/client';
import { PortableText, SanityDocument } from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { notFound } from 'next/navigation';

// const pageContent = {
//   hero: {
//     title: "MBBS in Russia",
//     subtitle: "Top-rated medical education with world-class facilities and global recognition"
//   },
//   introduction: {
//     paragraphs: [
//       "The Russian government has established admission criteria where a student must attain 50-55 % marks in Physics, Chemistry, and Biology/Mathematics. A proper courtesy of study for all students where a big success for international students. Russian medical institutions are recognized by MCI, WHO, and many countries.",
//       "Government institutions internationally recognized degrees are accredited by the Medical Council of India and WHO making no obstacles in order to study in such medical institutions. European and USA standard education system makes Russian institutions more valuable worldwide.",
//       "Our specialists drop all they find in our outstanding venture. All MBBS courses in Russia are Federal Government-funded allowing an annual increment of a good number of seats for international students. Russia was a super-power in our world during that time and still possesses that same charm at the 21st century world. Western European powers are shaped with commodities with professors in the hospitals during the time of medical practice.",
//       "One should have a good command of the Russian language or should be taught to target the Russian Language alongside his study in common with the Basic sciences. During the path, the number one, i.e., academic lecturers should also organize a FREE course in the Russian Language so that there would be huge encouragement for the students to tackle the hospital and better serve the community. Professors and Teachers would attend the subject theory state exams arranged for hospital work, clinical cases and there would be less discouragement observing the time and results of such at least important marks in the admissions in Russian Education Universities."
//     ]
//   },
//   universities: [
//     { name: "Top State Medical University", year: "1906", location: "MOSCOW", fees: "2970 USD" },
//     { name: "Top AI State Medical University", year: "1930", location: "ST.PETERSBURG", fees: "3300 USD" },
//     { name: "Siberian State Medical University", year: "1888", location: "TOMSK", fees: "3700 USD" },
//     { name: "Northern State University", year: "1936", location: "SAINT PETERSBURG", fees: "3720 USD" },
//     { name: "Perm State Medical University", year: "1916", location: "PERM", fees: "3500 USD" },
//     { name: "Smolensk State Medical Academy", year: "1920", location: "SMOLENSK", fees: "3200 USD" },
//     { name: "Kazan State Medical University", year: "1930", location: "KAZAN", fees: "3570 USD" }
//   ],
//   aboutRussia: {
//     paragraphs: [
//       "Russia officially known as the Russian Federation is a country in North Eurasia. It has continental air landmass, frozen climate, and borders with Norway, Finland, Estonia, Latvia, Lithuania, Poland, Belarus, and Ukraine.",
//       "Russia is the largest country in the world with an estimated area of 17,125,400 square kilometers. Moscow is the capital of Russia. It is located in the European plain. 80% of Russia is in Europe region and the remainder in the Asian Region."
//     ],
//     facts: [
//       { title: "Capital", value: "Moscow", icon: MapPin },
//       { title: "Language", value: "Russian", icon: Globe },
//       { title: "Time Zone", value: "UTC+3 to UTC+12", icon: Clock },
//       { title: "Currency", value: "Russian Ruble", icon: Currency },
//       { title: "Timezone", value: "UTC+3 to UTC+12", icon: Clock },
//       { title: "Temperature", value: "-10 to +40 Celsius", icon: Thermometer  },
//       { title: "Calling Code", value: "+7", icon: PhoneCall },
//     ]
//   },
//   eligibility: [
//     "There should not be a gap of more than 3 years if student wants to join the college after their +2 appearance.",
//     "The student must possess a minimum of 50% marks in subjects including Physics, Chemistry, and Biology/ Mathematics.",
//     "Students must have qualified NEET (According to the norms of MCI certificate).",
//     "Should have completed 17 years."
//   ],
//   whyChooseRussia: [
//     "All MBBS programs from medical colleges in Russia are acknowledged by American Council On Medical Education (ACME/ECFMG).",
//     "Students who study MBBS in Russia are given priority to get an internship in some of the best multi-specialty hospitals of the country.",
//     "The institutes are well equipped with great infrastructure and technology.",
//     "Medical universities have state-of-the-art technology and effective infrastructure.",
//     "There is no donation or capitation fee to get an MBBS seat in the best medical universities."
//   ],
//   cityAttractions: [
//     { name: "Red Square, Moscow", image: "/moscow-red-square.jpg" },
//     { name: "St. Basil's Cathedral", image: "/st-basils-cathedral.jpg" },
//     { name: "Kremlin", image: "/kremlin.jpg" }
//   ]
// };

type MBBSInCountryPageProps = {
  params: {
    country: string
  }
}

export default async function MBBSInCountryPage({params}: MBBSInCountryPageProps) {
  // All content stored in a variable
  const paramSlug = await params.country

  const QUERY = `*[_type == "mbbsInCountry"][slug.current == $slug][0]`

  const pageContent = await client.fetch<SanityDocument>(QUERY, {
    slug: paramSlug
  })
  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  // console.log('pageContent', pageContents)

  if(!pageContent) return notFound()

  return (
    <div className=" bg-gray-50">
      {/* Hero Section with Russian Landmark */}
      <section className="relative h-96">
        <Image 
          src={urlFor(pageContent.bg_image)?.url() ?? "" }
          alt="Saint Basil's Cathedral in Moscow" 
          fill 
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{pageContent.heading}</h3>
          {/* <p className="text-lg md:text-xl max-w-3xl drop-shadow-md">
            {pageContent.hero.subtitle}
          </p> */}
        </div>
      </section>


      {/* Main Content */}
      <main className="section-container mx-auto px-4 py-8">
        <div className="">
          {/* Main Content Area */}
          <div>
            {/* <h1 className="text-h1 text-center mb-8">{pageContent.hero.title}</h1> */}
            
            {/* <Card className="mb-8">
              <CardContent className="pt-6"> */}
              <div className='mt-14' >

                  <Image 
                    src={urlFor(pageContent.hero.logo_image)?.url() ?? "" }
                    alt="Russian Flag" 
                    width={200} 
                    height={120} 
                    className="rounded-md float-left clear-both"
                    />
                    <PortableText value={pageContent.hero.content} />

                    {/* {
                        pageContent.introduction.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                        ))
                    } */}
                        {/* <p className="text-gray-700 mb-4">{pageContent.introduction.paragraphs[0]}</p>
                        <p className="text-gray-700">{pageContent.introduction.paragraphs[1]}</p>
                        <p className="text-gray-700 mb-4">{pageContent.introduction.paragraphs[2]}</p>
                        <p className="text-gray-700">{pageContent.introduction.paragraphs[3]}</p> */}
                    </div>
              {/* </CardContent>
            </Card> */}

            <h2 className="text-h2 mb-6 mt-20">{pageContent.universities.title}</h2>
            
            <div className="rounded-lg border overflow-hidden mb-8">
                <Card className='p-0' >
            <CardContent className='p-0' >

              <Table  >
                <TableHeader >
                  <TableRow className="bg-blue-50 *:p-4">
                    <TableHead className="font-semibold">UNIVERSITY NAME</TableHead>
                    <TableHead className="font-semibold">ESTD. YEAR</TableHead>
                    <TableHead className="font-semibold">LOCATION</TableHead>
                    <TableHead className="font-semibold">TUTION FEES/YEAR</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody >
                  {pageContent.universities.table.map((university: any, index: number) => (
                    <TableRow key={index} className='*:p-4' >
                      <TableCell>{university.name}</TableCell>
                      <TableCell>{university.year}</TableCell>
                      <TableCell>{university.location}</TableCell>
                      <TableCell>{university.fees}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
                </Card>
            </div>

            <h2 className="text-h2 mb-6 mt-20">{pageContent.about.title}</h2>
            <Card className="mb-8 shadow-none border-none">
              <CardContent className="pt-6">
                {/* {pageContent.aboutRussia.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))} */}
                <PortableText value={pageContent.about.content} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {pageContent.about.facts.map((fact: any, index: number) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{fact.title}</h4>
                      <div className="flex items-center gap-2">
                        <DynamicIcon name={fact.icon as IconName} className='h-4 w-4 text-blue-600' />
                        {/* {fact.icon === "MapPin" && <MapPin className="h-4 w-4 text-blue-600" />}
                        {fact.icon === "Globe" && <Globe className="h-4 w-4 text-blue-600" />}
                        {fact.icon === "Clock" && <Clock className="h-4 w-4 text-blue-600" />} */}
                        <span>{fact.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className='grid lg:grid-cols-2 gap-6' >

            <Card className="mb-8 shadow-none border-none">
                <CardHeader>
                    <CardTitle>
                        <h4 className="text-h4">{pageContent.eligibility.title}</h4>
                    </CardTitle>
                </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {pageContent.eligibility.listItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 shadow-none border-none" >
                <CardHeader>
                  <CardTitle>
                    <h4 className="text-h4">{pageContent.why_choose.title}</h4> 
                  </CardTitle>
                </CardHeader>
              <CardContent className="">
                <ul className="space-y-4">
                  {pageContent.why_choose.listItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </div>

            <h3 className="text-h3 mb-6">{pageContent.city_attractions.title}</h3>
            <div className=" mb-8">
                <Image 
                  src={urlFor(pageContent.city_attractions.image)?.url() ?? "" }
                  alt="city attraction" 
                  width={400} 
                  height={300} 
                  className="rounded-lg shadow-md object-cover w-full"
                />
            </div>
          </div>

          {/* Sidebar */}
          {/* <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader className="bg-blue-700 text-white">
                <CardTitle>Request Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500" 
                      placeholder="Your questions or requirements..."
                    ></textarea>
                  </div>
                  <Button className="w-full">Submit Request</Button>
                </form>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </main>
    </div>
  );
}