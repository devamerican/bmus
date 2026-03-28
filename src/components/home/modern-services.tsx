"use client"
import { motion } from 'motion/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ArrowRight, BookOpen, FileText, GraduationCap, Globe, Heart, Plane } from 'lucide-react'

interface Service {
    _key: string
    title: string
    description?: string
    image: any
}

export default function ModernServices({ data }: { data: { services: Service[], heading: string, subheading: string, content: string } }) {
    // Icon mapping for services
    const getIcon = (title: string) => {
        const t = title.toLowerCase()
        if (t.includes('admission') || t.includes('guidance')) return <BookOpen className="w-8 h-8" />
        if (t.includes('test') || t.includes('preparation') || t.includes('ielts') || t.includes('pte')) return <FileText className="w-8 h-8" />
        if (t.includes('visa') || t.includes('travel')) return <Plane className="w-8 h-8" />
        if (t.includes('career') || t.includes('counselling')) return <GraduationCap className="w-8 h-8" />
        if (t.includes('finance') || t.includes('scholarship')) return <Heart className="w-8 h-8" />
        return <Globe className="w-8 h-8" />
    }

    return (
        <section id="services" className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
                        backgroundSize: '48px 48px'
                    }} />
                </div>
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

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
                        className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20"
                    >
                        What We Offer
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {data.heading}
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
                        {data.subheading}
                    </h3>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto whitespace-pre-wrap">
                        {data.content}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {data.services.map((service, index) => (
                        <motion.div
                            key={service._key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={urlFor(service.image)?.url() ?? ""}
                                        alt={service.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                    {/* Icon Badge */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="absolute bottom-2 left-6 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                                    >
                                        {getIcon(service.title)}
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="pt-10 pb-6 px-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    {service.description && (
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                    )}
                                    {/* <motion.div
                                        className="flex items-center gap-2 text-cyan-400 font-semibold text-sm"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </motion.div> */}
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
