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
            <div className="overflow-hidden absolute w-full h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {
                        data.bgImage.map((item: any, index: number) => (
                            <div className="flex-[0_0_100%] min-w-0 brightness-[0.4] " key={index}>
                                <Image className='w-full h-full object-cover bg-black' src={urlFor(item)?.width(1000).height(500).url() ?? "" } width={1000} height={500} alt="hero" />
                            </div>
                        ))
                    }
        
                </div>
            </div>


            <div className="relative overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="text-white space-y-8">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full">
                        <GraduationCap className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">Your Future Starts Here</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" >
                        {data.heading}
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-gray-200 max-w-xl">
                        {data.subheading}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={data.cta.primary.href} >
                        <Button size="lg" variant="blue" className="text-base">
                            {data.cta.primary.label}
                        <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        </Link>
                        <Link href={data.cta.secondary.href} >
                        <Button size="lg" variant="outline" className="text-base bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:text-white">
                            {data.cta.secondary.label}
                        </Button>
                        </Link>
                    </div>
                    </div>

                        {/* Right Column - Stats */}
                        <div className="grid grid-cols-2 gap-6">
                        {data.achievements.map((stat) => (
                            <div
                            key={stat._key}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-white hover:bg-white/20 transition-colors"
                            >
                            {/* <div className="mb-4">{stat.icon}</div> */}
                            <DynamicIcon name={stat.icon as IconName} className=" mb-6 text-blue-500 size-6" /> 
                            <div className="text-3xl font-bold mb-1">{stat.title}</div>
                            <div className="text-sm text-gray-300">{stat.subTitle}</div>
                            </div>
                        ))}
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
}