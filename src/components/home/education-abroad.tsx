import { PortableText } from "next-sanity";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

export default function EducationAbroad({data}: {data: any}){

    return(
        <section className="flex flex-col lg:flex-row gap-4 *:basis-1/2 section-container items-center" >
            <div className="space-y-4 " >

                <h2 className="text-h2 text-primary" >{data.heading}</h2>
                <div >
                    <PortableText value={data.content} />
                </div>
            </div>

            <div>
                <Image src={urlFor(data.image)?.url() ?? ""} width={1920} height={1080} alt="students"  />
            </div>

        </section>
    )
}