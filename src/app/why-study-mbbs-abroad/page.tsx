// import { camera } from "lucide-react";
import { DynamicIcon, type IconName} from 'lucide-react/dynamic'; 
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

// const studyAbroadBenefits = [
//     { title: "Lower Tuition Fee Than India", image: "book-text" },
//     { title: "NMC and WHO Approved Medical Universities", image: "stethoscope" },
//     { title: "Internationally Trained and Experienced Faculty", image: "shield-check" },
//     { title: "Safe and Secure Countries", image: "shield-check" },
//     { title: "No Donation or Capitation Fee", image: "hand-coins" },
//     { title: "Comfortable Weather for Study", image: "cloud-sun" },
//     { title: "Similar Cost of Living as India", image: "indian-rupee" },
//     { title: "English Medium Study", image: "book-a" },
//     { title: "Availability of Better Medical Equipment", image: "heart-pulse" },
//     { title: "Indian Food Available", image: "apple" },
//     { title: "International Job Options", image: "briefcase-business" }
//   ];
  
export const metadata = {
    title: "Why Study MBBS Abroad",
    description: "Why you should study MBBS abroad",
}

export default async function WhyStudyMbbsAbroad() {

        const QUERY = `*[_type == "whyStudyMBBSAbroad"]`
        const result = await client.fetch<SanityDocument[]>(QUERY, {});
        const data = result[0]

  return (
    <section className="section-container my-10">   
      <h1 className="text-h1 text-center mb-20" >{data.heading}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
        {
            data.items?.map((item: any) => (
                <div key={item._key} className="p-8 sm:p-10 min-h-56  rounded-xl bg-muted"> 
                    <DynamicIcon name={item.icon as IconName} size={42} className='mb-6 text-blue-500' />
                    <h3 className="text-lg font-semibold text-muted-foreground">{item.title}</h3>
                </div>
            ))
        }
      </div>
    </section>
  )
}