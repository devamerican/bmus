import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';
import { SimpleTable } from '@/components/layout/simple-table';
import { sanityFetch } from '@/sanity/lib/live';
import { urlFor } from '@/sanity/lib/image';



type MBBSInCountryPageProps = {
  params: Promise<{country: string}>
}

export default async function MBBSInCountryPage({params}: MBBSInCountryPageProps) {
  // All content stored in a variable
  const slugParam = await params 
  const countryFromParam = slugParam.country

  const QUERY = `*[_type == "mbbsInCountry"][slug.current == $slug][0]`

  const { data: pageContent } = await sanityFetch({query: QUERY, params: await params })

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

