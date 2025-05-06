"use client"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card" 
import { urlFor } from "@/sanity/lib/image"


export default function StudentsSay({data}: {data: any}){
     const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return(
        <section  >
            <div className="px-4" >
            <h2 className="text-h2 mb-2 text-center" >{data.heading}</h2>
            <p className="max-w-4xl mx-auto mb-10 text-center text-muted-foreground" >{data.content}</p>
            </div>

             <div className="overflow-hidden py-16 select-none" ref={emblaRef}>
                                <div className="flex mx-4">
                                    {
                                        data.testimonials.map((item: any) => (
                                            <Card className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0 p-4 mr-5 md:mr-10"  key={item._key}>
                                                <CardContent className="text-center flex flex-col items-center justify-center" >
                                                <div className="text-center -mt-[50px]" >
                                                    <Image className='rounded-full object-cover mx-auto shadow-md aspect-square' src={urlFor(item.image)?.width(60).height(60).url() ?? "" } width={60} height={60} alt={item.name} />  
                                                    <p className="font-medium" >{item.name}</p>
                                                    <p className="text-xs max-w-[150px] text-muted-foreground">{item.university}</p>
                                                </div>
                                                <h3 className="text-sm text-center text-zinc-700">
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