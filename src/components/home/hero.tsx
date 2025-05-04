"use client"
// import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { ArrowRight, Globe2, GraduationCap } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const heroItems = [
    {
        id: 1,
        img: '/hero-img.jpg'
    },
    {
        id: 2,
        img: '/hero-img.jpg'
    },
    {
        id: 3,
        img: '/hero-img.jpg'
    },
]

export default function Hero({data}: {data: any}){
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const { projectId, dataset } = client.config();
    const urlFor = (source: SanityImageSource) =>
      projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

    return(
        <section className='relative' >
            {/* <div className="overflow-hidden absolute w-full h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {
                        data.bgImage.map((item: any, index: number) => (
                            <div className="flex-[0_0_100%] min-w-0 brightness-[0.4] " key={index}>
                                <Image className='w-full h-full object-cover bg-black' src={urlFor(item)?.url() ?? "" } width={1920} height={1080} alt="hero" />
                            </div>
                        ))
                    }
        
                </div>
            </div> */}


            {/* <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"> */}
            {/* <div className="relative overflow-hidden bg-gradient-to-br from-black via-black/80 to-black"> */}
            <div className="relative overflow-hidden bg-gradient-to-br from-white via-sky-400/10 to-white"> 
                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="text-black space-y-8">
                    <div className="flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full">
                        <GraduationCap className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">Your Future Starts Here</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight " >
                        {data.heading}
                    </h1>
                    
                    <p className="text-lg sm:text-xl  max-w-xl">
                        {data.subheading}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={data.cta.primary.href} >
                        <Button size="lg" variant="blue" className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white ">
                            {data.cta.primary.label}
                        <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        </Link>
                        <Link href={data.cta.secondary.href} >
                        <Button size="lg" variant="ghost" className="bg-black/10 hover:bg-black/20 transition-colors  font-semibold ">
                            {data.cta.secondary.label}
                        </Button>
                        </Link>
                    </div>
                    </div>

                        {/* Right Column - Stats */}
                        <div className="grid grid-cols-2 gap-6">
                        {data.achievements.map((stat: any) => (
                            <div
                            key={stat._key}
                            className="group  backdrop-blur  bg-black/5 hover:bg-black/10  p-6 rounded-xl  transition-colors" 
                            >
                            {/* <div className="mb-4">{stat.icon}</div> */}
                            <DynamicIcon name={stat.icon as IconName} className=" mb-6 group-hover:scale-120  text-blue-500 size-6 transition-all" /> 
                            <div className="text-3xl font-bold  mb-1">{stat.title}</div>
                            <div className="text-sm">{stat.subTitle}</div>
                            </div>
                        ))}
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
}