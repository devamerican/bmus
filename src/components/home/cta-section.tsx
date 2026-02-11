"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { motion } from "motion/react"
import Link from 'next/link'

export default function HomeCtaSection() {
    return (
        <section className="relative w-full h-auto min-h-[450px] overflow-hidden group">
            {/* Background Image (Full Width) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/students.jpg"
                    alt="Students graduation"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Tilted Pink Overlay Section */}
            <div
                className="relative z-10 w-full md:w-[65%] lg:w-[55%] min-h-[450px] bg-[#e91e63] flex items-center"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0 100%)'
                }}
            >
                <div className="w-full px-8 sm:px-12 md:px-20 lg:px-24 py-16 text-white text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:pr-12 lg:pr-20"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] drop-shadow-lg">
                            Want to Study <br className="hidden lg:block" /> MBBS in Russia?
                        </h2>

                        <p className="text-xl md:text-2xl font-semibold text-pink-100 italic tracking-wide">
                            still unsure? many queries unanswered?
                        </p>

                        <div className="pt-6">
                            <Link href="/contact-us">
                                <Button
                                    size="lg"
                                    className="bg-white text-[#e91e63] hover:bg-white/95 rounded-xl px-12 py-8 h-auto text-xl md:text-2xl font-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95 border-b-[6px] border-pink-200"
                                >
                                    YES, I WANT TO TALK!
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Responsive Fallback: On small screens, hide the tilt and use full overlay if needed */}
            <style jsx>{`
                @media (max-width: 767px) {
                    section > div:nth-child(2) {
                        width: 100% !important;
                        clip-path: none !important;
                        background: rgba(233, 30, 99, 0.95) !important;
                    }
                }
            `}</style>
        </section>
    )
}
