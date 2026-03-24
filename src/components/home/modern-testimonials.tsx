"use client"
import { motion } from 'motion/react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface Testimonial {
    _key: string
    name: string
    content: string  // Changed from 'review' to 'content'
    university?: string  // Changed from 'country' to 'university'
    image?: any
}

export default function ModernTestimonials({ data }: { data: { heading: string, content?: string, testimonials: Testimonial[] } }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false,
        dragFree: true,
        containScroll: 'trimSnaps'
    })

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
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20"
                    >
                        Student Reviews
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        {data.heading}
                    </h2>
                    {data.content && (
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {data.content}
                        </p>
                    )}
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-3 mb-6">
                    <button
                        onClick={scrollPrev}
                        className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-slate-200 group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-cyan-600" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-slate-200 group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-600" />
                    </button>
                </div>

                {/* Testimonials Carousel */}
                <div className="overflow-hidden -mx-4 px-4">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6 py-4">
                            {data.testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial._key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
                                >
                                    <div className="bg-white rounded-2xl p-6 shadow-lg  transition-all duration-300 h-full border border-slate-100 hover:border-cyan-200 group flex flex-col">
                                        {/* Quote Icon */}
                                        <div className="mb-3 flex-shrink-0">
                                            <Quote className="w-8 h-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors" />
                                        </div>

                                        {/* Review Content */}
                                        <div className="flex-1 min-h-0 mb-4">
                                            <p className="text-slate-700 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300 overflow-hidden">
                                                "{testimonial.content}"
                                            </p>
                                        </div>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 flex-shrink-0">
                                            {/* Student Photo */}
                                            {testimonial.image ? (
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-cyan-500/20 group-hover:ring-cyan-500/40 transition-all">
                                                    <Image
                                                        src={urlFor(testimonial.image)?.width(60).height(60).url() ?? ""}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="60px"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors truncate text-sm">
                                                    {testimonial.name}
                                                </h4>
                                                {testimonial.university && (
                                                    <p className="text-xs text-slate-500 truncate">
                                                        {testimonial.university}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Indicators */}
                {/* <div className="flex justify-center gap-2 mt-8">
                    {data.testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? 'w-8 bg-cyan-500' : 'w-2 bg-slate-300'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    )
}
