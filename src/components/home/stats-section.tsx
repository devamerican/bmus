"use client"
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

interface Stat {
    value: number
    suffix: string
    label: string
    description: string
    icon: string
}

const stats: Stat[] = [
    { value: 16, suffix: '+', label: 'Years Experience', description: 'Guiding students since 2008', icon: '🎓' },
    { value: 5000, suffix: '+', label: 'Students Placed', description: 'Successfully placed worldwide', icon: '🌍' },
    { value: 98, suffix: '%', label: 'Success Rate', description: 'Visa approval success', icon: '✓' },
    { value: 50, suffix: '+', label: 'Partner Universities', description: 'Across multiple countries', icon: '🏛️' }
]

function Counter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    useEffect(() => {
        if (!isInView) return

        let startTime: number | null = null
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(value * easeOutQuart))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            } else {
                setCount(value)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [isInView, value, duration])

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    )
}

export default function StatsSection() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Trusted by Thousands of Students
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Our track record speaks for itself. Join thousands of successful students who achieved their dreams.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden">
                                {/* Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="text-5xl mb-4"
                                    >
                                        {stat.icon}
                                    </motion.div>

                                    {/* Counter */}
                                    <div className="mb-2">
                                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                            <Counter value={stat.value} suffix={stat.suffix} />
                                        </div>
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                                        {stat.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
