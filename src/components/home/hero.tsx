"use client"
// import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { ArrowRight, Globe2, GraduationCap } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

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

export default function Hero(){
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    return(
        <section className='relative' >
            <div className="overflow-hidden absolute w-full h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {
                        heroItems.map((item) => (
                            <div className="flex-[0_0_100%] min-w-0 brightness-[0.4] " key={item.id}>
                                <Image className='w-full h-full object-cover bg-black' src={item.img} width={1000} height={500} alt="hero" />
                            </div>
                        ))
                    }
        
                </div>
            </div>


            <div className="relative overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="text-white space-y-8">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full">
                        <GraduationCap className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">Your Future Starts Here</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" >
                        Study Abroad & Transform Your Future
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-gray-200 max-w-xl">
                        Unlock global opportunities with our expert guidance. We help students achieve their dreams of studying at prestigious universities worldwide.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#book_counseling" >
                        <Button size="lg" variant="blue" className="text-base">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        </Link>
                        <Link href="#services" >
                        <Button size="lg" variant="outline" className="text-base bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:text-white">
                            Explore Programs
                        </Button>
                        </Link>
                    </div>
                    </div>

                        {/* Right Column - Stats */}
                        <div className="grid grid-cols-2 gap-6">
                        {[
                            { number: "100+", label: "Partner Universities", icon: <GraduationCap className="h-6 w-6" /> },
                            { number: "15+", label: "Countries", icon: <Globe2 className="h-6 w-6" /> },
                            { number: "1000+", label: "Students Placed", icon: <GraduationCap className="h-6 w-6" /> },
                            { number: "13+", label: "Years of Experience", icon: <GraduationCap className="h-6 w-6" /> }
                        ].map((stat, index) => (
                            <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-white hover:bg-white/20 transition-colors"
                            >
                            <div className="mb-4">{stat.icon}</div>
                            <div className="text-3xl font-bold mb-1">{stat.number}</div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
}