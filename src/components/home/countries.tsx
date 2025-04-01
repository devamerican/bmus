import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// const countries = [
//     {
//         name: 'Kazakhstan',
//         image: '/Kazakhstan.jpg'
//     },
//     {
//         name: 'Kazakhstan',
//         image: '/Kazakhstan.jpg'
//     },
//     {
//         name: 'Kazakhstan',
//         image: '/Kazakhstan.jpg'
//     },
//     {
//         name: 'Kazakhstan',
//         image: '/Kazakhstan.jpg'
//     },
//     {
//         name: 'Kazakhstan',
//         image: '/Kazakhstan.jpg'
//     },
//     {
//         name: 'Kazakhstan',
//         image: '/Kazakhstan.jpg'
//     },
// ]
export default function Countries({data}: {data: any}){
    const { projectId, dataset } = client.config();
    const urlFor = (source: SanityImageSource) =>
      projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
    return(
        <section className="section-container" >
            <h2 className="text-center text-h2 mb-8" >{data.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
                {
                    data.countries.map((country, i: number) => (
                        <div key={i} >
                            <Image className="object-cover" src={urlFor(country.image)?.width(800).height(600).url() ?? ""} width={800} height={600} alt={country.country} /> 
                            <h4 className="text-center text-lg font-semibold mt-2" >{country.country}</h4>
                        </div>  
                    ))
                }
            </div>
        </section>
    )
}