"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from "motion/react"
import Link from 'next/link'
import { Button } from '../ui/button'

const slides = [
    {
        title: "STUDY MEDICINE ABROAD",
        subtitle: "WHO & ECFMG Accredited Universities",
        description: "Begin your journey to becoming a doctor at world-class medical universities across the globe.",
        image: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=2070&auto=format&fit=crop",
        cta: "Apply Now",
        link: "/apply-online"
    },
    {
        title: "STUDY IN NEPAL",
        subtitle: "Affordable Medical Education",
        description: "Quality education at affordable costs with internationally recognized degrees.",
        image: "/Nepal University.jpg",
        cta: "Explore Programs",
        link: "/mbbs/nepal"
    },
    {
        title: "Batumi Shota Rustaveli State University",
        subtitle: "Best University in Georgia",
        description: "Located in the capital city Tbilisi, offering world-class medical education.",
        image: "/CAMPUS_4ZetiLiiP.webp",
        cta: "Learn More",
        link: "/mbbs/georgia"
    },
    {
        title: "Kazakh National Medical University",
        subtitle: "Located In Almaty, Kazakhstan",
        description: "Leading medical university with excellent infrastructure and experienced faculty.",
        image: "/CAMPUS_nzDCQ2Hw2t.webp",
        cta: "Get Started",
        link: "/mbbs/kazakhstan"
    }
]

export default function ModernHero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
        Autoplay({ delay: 5000, stopOnInteraction: true })
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
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Carousel */}
            <div className="absolute inset-0 z-0" ref={emblaRef}>
                <div className="flex h-full w-full">
                    {slides.map((slide, index) => (
                        <div className="flex-[0_0_100%] min-w-0 relative h-full w-full min-h-screen" key={index}>
                            <Image
                                className="w-full h-full object-cover object-center"
                                src={slide.image.startsWith("/") ? slide.image : `${slide.image}&crop=entropy`}
                                fill
                                priority={index === 0}
                                alt={slide.title}
                                sizes="100vw"
                            />
                            {/* Modern Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border border-white/20 transition-all hover:scale-110 hidden md:block"
                aria-label="Previous slide"
            >
                <ChevronLeft className="size-6" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border border-white/20 transition-all hover:scale-110 hidden md:block"
                aria-label="Next slide"
            >
                <ChevronRight className="size-6" />
            </button>

            {/* Content */}
            <div className="relative z-10 h-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 rounded-full backdrop-blur-sm border border-cyan-500/20"
                        >
                            {slides[selectedIndex].subtitle}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
                        >
                            {slides[selectedIndex].title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mb-8 leading-relaxed"
                        >
                            {slides[selectedIndex].description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href={slides[selectedIndex].link}>
                                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full px-8 h-14 text-lg font-semibold shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40">
                                    {slides[selectedIndex].cta}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/apply-online">
                                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 h-14 text-lg font-semibold backdrop-blur-sm transition-all hover:scale-105">
                                    Talk to an Expert
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`transition-all duration-300 rounded-full h-2.5 ${selectedIndex === index ? "w-12 bg-gradient-to-r from-cyan-500 to-blue-600" : "w-2.5 bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-2 text-white/60"
                >
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div> */}
        </section>
    )
}
