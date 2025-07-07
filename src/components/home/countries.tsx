import Image from "next/image"
import { urlFor } from "@/sanity/lib/image";

export default function Countries({data}: {data: any}){

    return(
        <section className="section-container" >
            <h2 className="text-center text-h2 mb-8" >{data.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
                {
                    data.countries.map((country: any, i: number) => (
                        <div key={i} >
                            <Image className="object-cover rounded-lg" src={urlFor(country.image)?.width(800).height(600).url() ?? ""} width={800} height={600} alt={country.country} /> 
                            <h4 className="text-center text-lg font-semibold mt-2" >{country.country}</h4>
                        </div>  
                    ))
                }
            </div>
        </section>
    )
}