"use client"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Quote } from "lucide-react"

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
export default function StudentsSay(){
     const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    return(
        <section  >
            <h2 className="text-h2 mb-2 text-center" >What Students Are Saying</h2>
            <p className="max-w-4xl mx-auto mb-10 text-center text-muted-foreground" >Over 1000+ students have opted for our counseling services in the past 13 years and are currently living the life they dreamed of.</p>

             <div className="overflow-hidden py-16 select-none" ref={emblaRef}>
                                <div className="flex">
                                    {
                                        testimonials.map((item) => (
                                            <article className="flex-[0_0_25%] min-w-0 flex flex-col rounded-xl shadow-md items-center justify-center gap-4 p-4 border mr-10"  key={item.id}>
                                                <div className="text-center -mt-[50px]" >
                                                    <Image className='rounded-full object-cover mx-auto shadow-md' src={item.image} width={60} height={60} alt={item.name} />  
                                                    <p className="font-medium" >{item.name}</p>
                                                    <p className="text-xs max-w-[150px] text-muted-foreground">{item.university}</p>
                                                </div>
                                                <h3 className="text-sm text-center">
                                                    <Quote className="rotate-180 text-zinc-500 mb-1" />
                                                    {item.content}
                                                </h3>
                                            </article>
                                        ))
                                    }
                        
                                </div>
                            </div>
            

        </section>
    )
}