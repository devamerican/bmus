"use client"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card" 
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const testimonials = [
    {
        id: 1,
        name: 'Ajay Gaur',
        image: '/student.png',
        university: "MBBS Student at Anhui Medical University, China",
        content: " I have been a student of BMUS for the past 13 years. I have been in the MBBS program for the past 12 years and I am currently pursuing my MBBS degree from the same institution. I have always been a student-athlete and I am very passionate about sports. I have always been a fan of BMUS and I am very happy to be associated with such a great institution. I would highly recommend BMUS to anyone who is looking for a top-notch MBBS program."
    },
    {
        id: 2,
        name: 'Ajay Gaur',
        image: '/student.png',
        university: "MBBS Student at Anhui Medical University, China",
        content: " I have been a student of BMUS for the past 13 years. I have been in the MBBS program for the past 12 years and I am currently pursuing my MBBS degree from the same institution. I have always been a student-athlete and I am very passionate about sports. I have always been a fan of BMUS and I am very happy to be associated with such a great institution. I would highly recommend BMUS to anyone who is looking for a top-notch MBBS program."
    },
    {
        id: 3,
        name: 'Ajay Gaur',
        image: '/student.png',
        university: "MBBS Student at Anhui Medical University, China",
        content: " I have been a student of BMUS for the past 13 years. I have been in the MBBS program for the past 12 years and I am currently pursuing my MBBS degree from the same institution. I have always been a student-athlete and I am very passionate about sports. I have always been a fan of BMUS and I am very happy to be associated with such a great institution. I would highly recommend BMUS to anyone who is looking for a top-notch MBBS program."
    },
    {
        id: 4,
        name: 'Ajay Gaur',
        image: '/student.png',
        university: "MBBS Student at Anhui Medical University, China",
        content: " I have been a student of BMUS for the past 13 years. I have been in the MBBS program for the past 12 years and I am currently pursuing my MBBS degree from the same institution. I have always been a student-athlete and I am very passionate about sports. I have always been a fan of BMUS and I am very happy to be associated with such a great institution. I would highly recommend BMUS to anyone who is looking for a top-notch MBBS program."
    },
    {
        id: 5,
        name: 'Ajay Gaur',
        image: '/student.png',
        university: "MBBS Student at Anhui Medical University, China",
        content: " I have been a student of BMUS for the past 13 years. I have been in the MBBS program for the past 12 years and I am currently pursuing my MBBS degree from the same institution. I have always been a student-athlete and I am very passionate about sports. I have always been a fan of BMUS and I am very happy to be associated with such a great institution. I would highly recommend BMUS to anyone who is looking for a top-notch MBBS program."
    },
]
export default function StudentsSay({data}: {data: any}){
     const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

     const { projectId, dataset } = client.config();
     const urlFor = (source: SanityImageSource) =>
       projectId && dataset
         ? imageUrlBuilder({ projectId, dataset }).image(source)
         : null;
    return(
        <section  >
            <div className="px-4" >
            <h2 className="text-h2 mb-2 text-center" >{data.heading}</h2>
            <p className="max-w-4xl mx-auto mb-10 text-center text-muted-foreground" >{data.content}</p>
            </div>

             <div className="overflow-hidden py-16 select-none" ref={emblaRef}>
                                <div className="flex mx-4">
                                    {
                                        data.testimonials.map((item) => (
                                            <Card className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0 p-4 mr-5 md:mr-10"  key={item._key}>
                                                <CardContent className="text-center flex flex-col items-center justify-center" >
                                                <div className="text-center -mt-[50px]" >
                                                    <Image className='rounded-full object-cover mx-auto shadow-md aspect-square' src={urlFor(item.image)?.width(60).height(60).url() ?? "" } width={60} height={60} alt={item.name} />  
                                                    <p className="font-medium" >{item.name}</p>
                                                    <p className="text-xs max-w-[150px] text-muted-foreground">{item.university}</p>
                                                </div>
                                                <h3 className="text-sm text-center">
                                                    <Quote className="rotate-180 text-zinc-500 mb-1" />
                                                    {item.content}
                                                </h3>
                                                </CardContent>
                                            </Card>
                                        ))
                                    }
                        
                                </div>
                            </div>
            

        </section>
    )
}