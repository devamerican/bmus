"use client"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { PortableText } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
// import Autoplay from 'embla-carousel-autoplay'
const items = [
    {
        id: 1,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 2,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 3,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 4,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 5,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 6,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 7,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 8,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 9,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 10,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
    {
        id: 11,
        title: 'Education Abroad Services',
        image: '/customer-support.jpg'
    },
]

export default function WhatWeOffer({data}: {data: any}){
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' })

    const { projectId, dataset } = client.config();
    const urlFor = (source: SanityImageSource) =>
      projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
    return(
        <div id="services" className="bg-muted py-20 scroll-mt-16" >

        <section className="section-container text-center " >
            <h2 className="text-h2 mb-6" >{data.heading}</h2>
            <h3 className="text-h3 mb-2" >{data.subheading}</h3>
            {/* <p className="max-w-4xl mx-auto mb-10 text-muted-foreground" >Education Abroad Services, offer a wide-ranging portfolio of outstanding and brilliantly managed services right from pre-admission to post landing services designed to suit the individual needs of the students.</p> */}
            <PortableText value={data.content} />



            <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {
                            data.services.map((item: any) => (
                                <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0 flex flex-col items-center justify-center gap-4 p-4" key={item._key}>
                                    <Image className='w-full' src={urlFor(item.image)?.width(150).height(150).url() ?? "" } width={150} height={150} alt="hero" /> 
                                    <h3 className="text-lg">{item.title}</h3>
                                </div>
                            ))
                        }
            
                    </div>
                </div>

        </section>
    </div>
    )

}