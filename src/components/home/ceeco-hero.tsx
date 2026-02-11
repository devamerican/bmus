"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { motion, AnimatePresence } from "motion/react"
import Link from 'next/link'

const slides = [
    {
        title: "STUDY MEDICINE ABROAD",
        subtitle: "WHO & ECFMG Accredited Universities",
        image: "/students.jpg",
        cta: "Apply Now",
        link: "/contact"
    },
    {
        title: "STUDY IN UK, USA, GERMANY, CANADA",
        subtitle: "STUDY ABROAD PROGRAMS",
        image: "/bmus-abroad.jpg",
        cta: "Explore Programs",
        link: "/courses"
    },
    {
        title: "CAUCASUS UNIVERSITY, GEORGIA",
        subtitle: "Best University in Georgia located in the Capital City Tbilisi",
        image: "/hero-img.jpg",
        cta: "Learn More",
        link: "/georgia"
    },
    {
        title: "EAST WEST UNIVERSITY GEORGIA",
        subtitle: "Where Excellence Meets Diversity",
        image: "/Kazakhstan.jpg",
        cta: "View Campus",
        link: "/georgia"
    },
    {
        title: "INTERNATIONAL BLACK SEA UNIVERSITY",
        subtitle: "Located In Capital City Of Georgia, Tbilisi",
        image: "/russia.jpg",
        cta: "Get Started",
        link: "/georgia"
    }
]

export default function CeecoHero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ])

    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden group">
            {/* Carousel */}
            <div className="absolute inset-0 z-0 h-full w-full" ref={emblaRef}>
                <div className="flex h-full w-full">
                    {slides.map((slide, index) => (
                        <div className="flex-[0_0_100%] min-w-0 relative h-full w-full" key={index}>
                            <Image
                                className="w-full h-full object-cover brightness-[0.6]"
                                src={slide.image}
                                fill
                                priority={index === 0}
                                alt={slide.title}
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                aria-label="Previous slide"
            >
                <ChevronLeft className="size-6" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                aria-label="Next slide"
            >
                <ChevronRight className="size-6" />
            </button>

            {/* Content Overflow */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-4 md:space-y-6 max-w-4xl"
                    >
                        <motion.h2
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="text-white text-sm md:text-lg font-bold tracking-[0.2em] uppercase"
                        >
                            Quality Higher Education at Affordable Costs
                        </motion.h2>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-xl">
                            {slides[selectedIndex].title}
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium drop-shadow-md">
                            {slides[selectedIndex].subtitle}
                        </p>

                        {/* <div className="pt-8">
                            <Link href={slides[selectedIndex].link} >
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 md:h-16 text-lg font-bold shadow-2xl transition-transform hover:scale-105 active:scale-95">
                                    {slides[selectedIndex].cta}
                                    <ArrowRight className="ml-2 h-6 w-6" />
                                </Button>
                            </Link>
                        </div> */}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        // onClick={() => emblaApi?.scrollTo(index)}
                        className={`transition-all duration-300 rounded-full h-2 ${selectedIndex === index ? "w-10 bg-blue-500" : "w-2 bg-white/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
