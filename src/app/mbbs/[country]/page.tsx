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
import { SimpleTable } from '@/components/layout/simple-table';

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

const data = {

  overview: {
    title: "Overview",
    content: "For many Indian students, pursuing an MBBS abroad for Indian students at low cost is an attractive option, and an MBBS in Russia fits the bill perfectly. Russian medical universities offer a robust education that adheres to international standards, making them globally recognized. The fee structure for MBBS in Russia is significantly more affordable compared to countries like the UK and the USA, with average annual expenses ranging from 2.4 Lacs to 5.1 Lacs INR. Additionally, the opportunity to gain practical experience through a compulsory one-year internship adds immense value to the educational journey. When considering MBBS abroad admission, students often seek guidance from an MBBS abroad consultant to navigate the application process efficiently. With proper support, students can unlock a world of opportunities that come with a degree from a reputable Russian university, enabling them to establish a successful medical career both in India and abroad."
  },
  "details": {
      heading: "MBBS from Russia Details Information",
      subHeading: "Here is the complete information for Indian students looking for MBBS from Russia",
      content: [
        {
          key: "MBBS course duration in Russia",
          value: "6 months"	
        }
      ]
  },
  "why_choose": {
    "listItems": [
      "Affordable tuition fees.\n",
      "The MBBS and MD degrees from medical colleges in Georgia are acknowledged by international bodies like World Health Organization and UNESCO.\n",
      "Students pursuing their MBBS in Georgia are given chance to get an internship in some of the best multinational companies of the world within the country itself.\n",
      "The hospitals are well equipped with great infrastructure and technology.\n",
      "Medical universities have state-of-the-art technology and efficient infrastructure.\n",
      "There is no donation or capitation fee to get an MBBS seat in the best medical universities.\n"
    ],
    "title": "Why to choose Georgia for MBBS?"
  },
  "heading": "MBBS in Russia",
  "eligibility": {
    "listItems": [
      "Those students who have reached the age of 17 by the end of the year in which they receive their admission.",
      "The student must possess a minimum of 50% mark in Physics, Chemistry, and Biology from a CBSE/ICSE or an equivalent board exam.\n",
      "Students who have qualified for NEET (according to the most recent MCI notification)\n",
      "Good Communication Skills\n"
    ],
    "title": "Eligibility for MBBS in Russia"
  },
  "about": {
    "facts": [
      {
        "icon": "map-pin",
        "_key": "102c84af48af",
        "title": "Capital",
        "value": "Moscow"
      }
    ],
    "content": [
      {
        "style": "normal",
        "_key": "f6b869b35139",
        "markDefs": [],
        "children": [
          {
            "text": "Russia officially known as the Russian Federation is a country in North Eurasia. It has continental air landmass, frozen climate, and borders with Norway, Finland, Estonia, Latvia, Lithuania, Poland, Belarus, and Ukraine.",
            "_key": "ada76d714f43",
            "_type": "span",
            "marks": []
          }
        ],
        "_type": "block"
      },
      {
        "markDefs": [],
        "children": [
          {
            "text": "Russia is the largest country in the world with an estimated area of 17,125,400 square kilometers. Moscow is the capital of Russia. It is located in the European plain. 80% of Russia is in Europe region and the remainder in the Asian Region.",
            "_key": "8bbf96d171b4",
            "_type": "span",
            "marks": []
          }
        ],
        "_type": "block",
        "style": "normal",
        "_key": "4ebb4fd4631c"
      }
    ],
    "title": "About Russia"
  },
  "_originalId": "51eea1e5-2132-4238-a008-83d82b809473",
  "city_attractions": {
    "image": {
      "_type": "image",
      "asset": {
        "_ref": "image-b9d4c73bf8b9969aa02e7b311f6c2ae9dabd03ad-1200x400-jpg",
        "_type": "reference"
      }
    },
    "title": "City Attractions Russia"
  },
  "hero": {
    "logo_image": {
      "_type": "image",
      "asset": {
        "_ref": "image-e1c7306d9b306a828c08484498b77b88649916f9-400x400-png",
        "_type": "reference"
      }
    },
  },
  "universities": {
    "title": "Medical Universities in Russia",
    "table": [
      {
        "_key": "8631ce938125",
        "fees": "2970 USD",
        "year": "1906",
        "name": "Top State Medical University",
        "location": "MOSCOW"
      }
    ]
  },
  "_id": "51eea1e5-2132-4238-a008-83d82b809473",
  "bg_image": {
    "asset": {
      "_ref": "image-2b041efc50d22ccab3734b74298812c25c53bfa0-1200x350-jpg",
      "_type": "reference"
    },
    "_type": "image"
  },
  "_createdAt": "2025-04-09T17:08:00Z",
  "slug": {
    "current": "russia",
    "_type": "slug"
  }
}


type MBBSInCountryPageProps = {
  params: {
    country: string
  }
}

export default async function MBBSInCountryPage({params}: MBBSInCountryPageProps) {
  // All content stored in a variable
  const slugParam = await params 
  const countryFromParam = slugParam.country

  const QUERY = `*[_type == "mbbsInCountry"][slug.current == $slug][0]`

  const pageContent = await client.fetch<SanityDocument>(QUERY, {
    slug: countryFromParam
  })
  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  // console.log('pageContent', pageContents)

  if(!pageContent) return notFound()

    console.log('pageContent', pageContent)

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
        </div>
      </section>


      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 py-8">

          {/* Main Content Area */}
          <div className='mt-14' >

              <Image 
                src={urlFor(pageContent.hero.logo_image)?.url() ?? "" }
                alt="Russian Flag" 
                width={200} 
                height={120} 
                className="rounded-md float-left clear-both"
                />
                <PortableText value={pageContent.hero.content} />

          </div>

        <div className='my-20 space-y-20 w-full' >

          {pageContent?.sections?.map((section: any, i: number) => { 
            switch (section.type) {
              case 'table':
                return <TableSection key={i} data={section} />
              case 'content':
                return <ContentSection key={i} data={section} />
              case 'labelValue':
                return <LabelValueSection key={i} data={section} />
              default:
                return null
                }
              })}
          </div>
          {/* <div className='space-y-20 my-20 w-full' >
              { 
                pageContent?.table_sections?.map((section: any, index: number) => {
                  const formatedTableData = formatTableData(section?.table_section?.data)
                  return <div key={index}>
                    <h3 className="text-h3 mb-4">{section?.table_section.heading}</h3>
                    <SimpleTable data={formatedTableData} />
                  </div>
                })
              }
          </div>

          <div>
            {
              pageContent?.label_value_sections?.map((section: any, index: number) => {
                return <div key={index}>
                  <h3 className="text-h3 mb-4">{section?.label_values_section.heading}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6" >
                    {
                      section?.label_values_section?.label_value?.map((item: {label: string, value: string}, index: number) => ( 
                        <div key={index} className="hover:shadow transition-shadow p-6 rounded-lg bg-muted w-full" >
                          <p>{item.label}</p>
                          <p>{item.value}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              })
            }
          </div>

          <div className='space-y-20 my-20 w-full' >
            { 
              pageContent?.content_sections?.map((section: any, index: number) => {
                return <div key={index}>
                  <h3 className="text-h3 mb-4">{section?.content_section.heading}</h3>
                  <div className="!prose min-w-full bg-white p-4 rounded-lg " >
                    <PortableText value={section?.content_section?.content} />
                  </div>
                </div>
              })
            }
          </div> */}
            
      </main>
    </div>
  );
}


function TableSection({data}: {data: any}){
  const formatedTableData = formatTableData(data?.data)
  return <div key={data._key} >
    <div className='mb-6' >
      <h3 className="text-h3 mb-2">{data?.heading}</h3>
      <p>{data?.description}</p>
    </div>
  <SimpleTable data={formatedTableData} />
</div>
}

function ContentSection({data}: {data: any}){
  return (
      <div key={data._key} >
       <div className='mb-6' >
        <h3 className="text-h3 mb-2">{data?.heading}</h3>
        <p>{data?.description}</p>
      </div>
        <div className="!prose min-w-full " >
          <PortableText value={data?.content} />
        </div>
      </div>
  )
}

function LabelValueSection({data}: {data: any}){
  return (
    <div key={data._key} >
      <div className='mb-6' >
          <h3 className="text-h3 mb-2">{data.heading}</h3>
          <p >{data.description}</p>
      </div>
        <div className="border-2 rounded-md" >
          {
            data?.label_value?.map((item: {label: string, value: string}, index: number) => ( 
              <div key={index} className="grid grid-cols-2 *:p-3 text-sm border-b-2 last:border-none divide-x-2 " >
                <p>{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))
          }
        </div>
      </div>
  )
}


type TableData = {
  headers: string[];
  rows: { columns: string[] }[];
};

type FormattedRow = Record<string, string>;

function formatTableData(data: TableData): FormattedRow[] {
  const { headers, rows } = data;

  return rows.map(row => {
    const formattedRow: FormattedRow = {};

    headers.forEach((header, index) => {
      formattedRow[header] = row.columns[index] || '';
    });

    return formattedRow;
  });
}

