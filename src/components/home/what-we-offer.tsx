"use client"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { PortableText } from "next-sanity"

import { urlFor } from "@/sanity/lib/image";

export default function WhatWeOffer({data}: {data: any}){
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true })

    return(
        <div id="services" className=" py-10 xl:py-20 scroll-mt-16 bg-blue-900 text-white" >

        <section className="section-container text-center " >
            <h2 className="text-h2 mb-6 " >{data.heading}</h2>
            <h3 className="text-h3 mb-2 " >{data.subheading}</h3> 
            {/* <p className="max-w-4xl mx-auto mb-10 text-muted-foreground" >Education Abroad Services, offer a wide-ranging portfolio of outstanding and brilliantly managed services right from pre-admission to post landing services designed to suit the individual needs of the students.</p> */}
            <div className="mb-8" >
                <p className="max-w-4xl mx-auto whitespace-pre-wrap" >{data.content}</p>
            </div>



            <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex items-start min-h-0">
                        {
                            data.services.map((item: any) => (
                                <div className=" flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0 flex flex-col items-center justify-center gap-4 p-4" key={item._key}>
                                    <Image className='w-full aspect-[400/300] object-cover rounded-md' src={urlFor(item.image)?.url() ?? "" } width={400} height={300} alt="hero" /> 
                                    <h3 className="text-lg ">{item.title}</h3>
                                </div>
                            ))
                        }
            
                    </div>
                </div>

        </section>
    </div>
    )

}