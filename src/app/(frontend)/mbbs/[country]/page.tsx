import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';
import { SimpleTable } from '@/components/layout/simple-table';
import { cachedSanityFetch } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';
import type { Metadata } from 'next';



type MBBSInCountryPageProps = {
  params: Promise<{ country: string }>
}


export async function generateMetadata({ params }: MBBSInCountryPageProps) {
  const countrySlug = (await params).country
  const country = countrySlug.charAt(0).toUpperCase() + countrySlug.slice(1)

  return {
    title: `MBBS in ${country} | MBBS in ${country} for Indian Students`,
    description:
      `Study MBBS in ${country} with BMUS. NMC approved universities, affordable tuition fees, English-medium education & high-quality medical training.`,
    keywords: [
      `MBBS in ${country}`,
      `study medicine in ${country}`,
      `MBBS ${country} fees`,
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/mbbs-in-russia`,
    },
  };

}



export default async function MBBSInCountryPage({ params }: MBBSInCountryPageProps) {
  const { country } = await params
  const QUERY = `*[_type == "mbbsInCountry"][slug.current == $country][0]`

  const pageContent = await cachedSanityFetch<any>(QUERY, { country }, 3600, [`mbbs-${country}`])

  if (!pageContent) return notFound()


  return (
    <div className=" bg-gray-50">
      {/* Hero Section with Russian Landmark */}
      <section className="relative h-96">
        <Image
          src={urlFor(pageContent.bg_image)?.url() ?? ""}
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
            src={urlFor(pageContent.hero.logo_image)?.url() ?? ""}
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

      </main>
    </div>
  );
}


function TableSection({ data }: { data: any }) {
  const formatedTableData = formatTableData(data?.data)
  return <div key={data._key} >
    <div className='mb-6' >
      <h3 className="text-h3 mb-2">{data?.heading}</h3>
      <p>{data?.description}</p>
    </div>
    <SimpleTable data={formatedTableData} />
  </div>
}

function ContentSection({ data }: { data: any }) {
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

function LabelValueSection({ data }: { data: any }) {
  return (
    <div key={data._key} >
      <div className='mb-6' >
        <h3 className="text-h3 mb-2">{data.heading}</h3>
        <p >{data.description}</p>
      </div>
      <div className="border-2 rounded-md" >
        {
          data?.label_value?.map((item: { label: string, value: string }, index: number) => (
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

