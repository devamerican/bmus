"use client"
import { motion } from 'motion/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Country {
    _key: string
    country: string
    image: any
}

export default function ModernCountries({ data }: { data: { heading: string, countries: Country[] } }) {
    return (
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.1) 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        Study Destinations
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        {data.heading}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover world-class universities across the globe and find your perfect study destination.
                    </p>
                </motion.div>

                {/* Countries Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {data.countries.map((country, index) => (
                        <motion.div
                            key={country._key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={`/mbbs/${country.country.toLowerCase()}`}>
                                <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                                    {/* Background Image */}
                                    <Image
                                        src={urlFor(country.image)?.width(800).height(600).url() ?? ""}
                                        alt={country.country}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        {/* Map Pin Icon */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                                            className="mb-3"
                                        >
                                            <div className="inline-flex p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-300">
                                                <MapPin className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                                            </div>
                                        </motion.div>

                                        {/* Country Name */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {country.country}
                                        </h3>

                                        {/* Explore Link */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.4 }}
                                            className="flex items-center gap-2 text-white/80 group-hover:text-cyan-400 transition-colors"
                                        >
                                            <span className="text-sm font-medium">Explore Universities</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                        </motion.div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500 pointer-events-none" />

                                    {/* Border */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-300" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-slate-600 mb-6">
                        Can't find your preferred destination?
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <span>Contact Us for More Options</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
