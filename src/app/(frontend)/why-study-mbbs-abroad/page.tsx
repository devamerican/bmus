// import { camera } from "lucide-react";
import { cachedSanityFetch } from '@/sanity/lib/fetch';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { type SanityDocument } from "next-sanity";
import WhyStudyMbbsAbroadCard from './why-study-mbbs-abroad-card';


export const metadata = {
  title: "Why Study MBBS Abroad",
  description: "Why you should study MBBS abroad",
}

export default async function WhyStudyMbbsAbroad() {

  const QUERY = `*[_type == "whyStudyMBBSAbroad"]`
  // const result = await client.fetch<SanityDocument[]>(QUERY, {});
  const result = await cachedSanityFetch<any[]>(QUERY)
  const data = result[0]

  return (
    <section className="section-container my-10">
      <h1 className="text-h1 text-center mb-20" >{data.heading}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
        {
          data.items?.map((item: any) => (
            <WhyStudyMbbsAbroadCard key={item._key} item={item} />
            // <div key={item._key} className="p-8 sm:p-10 min-h-56  rounded-xl bg-muted"> 
            //     <DynamicIcon name={item.icon as IconName} size={42} className='mb-6 text-blue-500' />
            //     <h3 className="text-lg font-semibold text-muted-foreground">{item.title}</h3>
            // </div>
          ))
        }
      </div>
    </section>
  )
}