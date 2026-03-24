"use client"
import { motion } from 'motion/react'
import { CheckCircle2, ArrowRight, Target, FileCheck, DollarSign, Plane } from 'lucide-react'

const processSteps = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "Expert Guidance",
        description: "Our overseas educational counselling team provides expert guidance to help you choose the ideal course and university that aligns with your career goals.",
        color: "from-cyan-500 to-blue-600",
        bgColor: "bg-cyan-500/10"
    },
    {
        icon: <FileCheck className="w-8 h-8" />,
        title: "Application Processing",
        description: "Our admission team ensures error-free paperwork and handles the entire application process to your selected universities seamlessly.",
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-500/10"
    },
    {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Financial Guidance",
        description: "We provide comprehensive financial advice on currency exchange, scholarships, loan assistance, and more for a stress-free experience.",
        color: "from-indigo-500 to-purple-600",
        bgColor: "bg-indigo-500/10"
    },
    {
        icon: <Plane className="w-8 h-8" />,
        title: "Visa & Orientation",
        description: "Our visa team diligently processes your file and provides pre and post-arrival orientation to ensure a smooth transition.",
        color: "from-purple-500 to-pink-600",
        bgColor: "bg-purple-500/10"
    }
]

const features = [
    "100% Genuine Assistance",
    "Faster & Reliable Execution",
    "Accurate & Expert Advice",
    "Personalized Counseling",
    "University Tie-ups",
    "Post-arrival Support"
]

export default function WhyChooseUs() {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }} />
            </div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

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
                        Why Choose Us
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Your Journey to Success
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        We offer comprehensive support at every step of your study abroad journey, ensuring a seamless and successful experience.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Connection Line (for desktop) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-[80%] w-[60%] h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300" />
                            )}

                            <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-slate-100 hover:border-cyan-200 group">
                                {/* Number Badge */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-xl ${step.bgColor} mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={step.color}>
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="flex items-center gap-3 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                </motion.div>
                                <span className="text-slate-700 font-medium group-hover:text-cyan-600 transition-colors">
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <span>Start Your Journey Today</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
