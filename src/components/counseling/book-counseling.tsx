"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Award,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileBadge,
  Globe2,
  GraduationCap,
  Headphones,
  IndianRupee,
  Languages,
  MapPin,
  Microscope,
  Phone,
  PhoneCall,
  Plane,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Trophy,
  Users,
  XIcon,
} from "lucide-react";
import AppointmentForm from "@/components/home/appointment-form";

const stats = [
  { value: "5,000+", label: "Students Placed" },
  { value: "50+", label: "Partner Universities" },
  { value: "8+", label: "Countries Covered" },
  { value: "15+", label: "Years of Expertise" },
];

const perks = [
  {
    icon: Headphones,
    title: "Free 1-on-1 Counselling",
    desc: "Personal sessions with senior MBBS-abroad advisors who understand your goals.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Clock3,
    title: "Response within 24 Hours",
    desc: "Submit the form and our counsellor will reach out the same business day.",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: ShieldCheck,
    title: "Verified Universities Only",
    desc: "We recommend NMC-approved, WHO-listed institutions across the globe.",
    color: "from-emerald-500 to-teal-600",
  },
];

const whyChoose = [
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "15+ years guiding Indian students to top medical universities worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Families",
    desc: "Transparent pricing, verified universities, and zero hidden charges.",
  },
  {
    icon: Plane,
    title: "End-to-End Support",
    desc: "From shortlisting to admission, visa, travel and on-arrival assistance.",
  },
  {
    icon: BookOpenCheck,
    title: "FMGE/NExT Coaching",
    desc: "Free coaching support so you return home licensed to practise in India.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Tuition",
    desc: "MBBS programs starting from a fraction of Indian private college fees.",
  },
  {
    icon: Users,
    title: "Active Student Community",
    desc: "Join 5,000+ alumni and current students for guidance at every step.",
  },
];

const countries = [
  {
    name: "Russia",
    duration: "6 Years",
    feeRange: "₹18 – 30 Lakh",
    highlight: "MCI/NMC approved, WHO listed",
    flag: "🇷🇺",
  },
  {
    name: "Kazakhstan",
    duration: "5 Years",
    feeRange: "₹16 – 22 Lakh",
    highlight: "English medium, low cost of living",
    flag: "🇰🇿",
  },
  {
    name: "Bangladesh",
    duration: "5 Years",
    feeRange: "₹25 – 40 Lakh",
    highlight: "Indian curriculum match",
    flag: "🇧🇩",
  },
  {
    name: "Nepal",
    duration: "5.5 Years",
    feeRange: "₹40 – 65 Lakh",
    highlight: "Closest to India, no language barrier",
    flag: "🇳🇵",
  },
  {
    name: "Poland",
    duration: "6 Years",
    feeRange: "₹50 – 75 Lakh",
    highlight: "EU recognised, premium quality",
    flag: "🇵🇱",
  },
  {
    name: "Mauritius",
    duration: "5 Years",
    feeRange: "₹30 – 45 Lakh",
    highlight: "English medium, GMC affiliated",
    flag: "🇲🇺",
  },
];

const process = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Book Free Counselling",
    desc: "Share your details and our advisor calls you within 24 hours.",
  },
  {
    step: "02",
    icon: Globe2,
    title: "Shortlist University",
    desc: "Pick the right country & university based on budget, NEET score and goals.",
  },
  {
    step: "03",
    icon: FileBadge,
    title: "Admission & Documentation",
    desc: "We handle applications, invitation letters, fee transfer and verification.",
  },
  {
    step: "04",
    icon: Plane,
    title: "Visa & Travel",
    desc: "End-to-end visa assistance, ticketing and pre-departure briefing.",
  },
  {
    step: "05",
    icon: GraduationCap,
    title: "On-Campus Support",
    desc: "Hostel, food, local SIM and continuous support till you graduate.",
  },
];

const services = [
  {
    icon: Stethoscope,
    title: "MBBS Abroad Admission",
    desc: "Direct admission in 50+ NMC-approved universities across 8+ countries.",
  },
  {
    icon: Microscope,
    title: "Course & University Selection",
    desc: "Personalised shortlist based on your NEET score, budget, and preference.",
  },
  {
    icon: FileBadge,
    title: "Visa & Documentation",
    desc: "Complete paperwork, embassy support and fast-tracked student visas.",
  },
  {
    icon: Languages,
    title: "Language & FMGE Prep",
    desc: "Local-language basics and FMGE/NExT coaching for a smooth return.",
  },
  {
    icon: MapPin,
    title: "Travel & Forex",
    desc: "Tickets, foreign exchange, and group travel arrangements at student rates.",
  },
  {
    icon: Award,
    title: "Career & Internship Guidance",
    desc: "Internship, residency and licensing support after graduation.",
  },
];

const testimonials = [
  {
    name: "Aman Verma",
    role: "MBBS Student • Russia",
    quote:
      "BMUS made the whole admission process smooth. From documentation to landing in Russia, every step was handled professionally.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "MBBS Graduate • Kazakhstan",
    quote:
      "Honest fee structure and constant support from the BMUS team. I cleared FMGE on the first attempt thanks to their guidance.",
    rating: 5,
  },
  {
    name: "Rohit Singh",
    role: "MBBS Student • Bangladesh",
    quote:
      "I was confused between countries. The free counselling session helped me pick the right university within my family's budget.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is studying MBBS abroad recognised in India?",
    a: "Yes. BMUS partners only with universities recognised by the National Medical Commission (NMC) and listed by the WHO. After graduation, you can appear for FMGE/NExT and practise medicine in India.",
  },
  {
    q: "How much does MBBS abroad cost?",
    a: "Total cost ranges from ₹18 lakh to ₹75 lakh for the entire course depending on the country and university. Our counsellors share a transparent breakdown of tuition, hostel, food, and visa fees during your free session.",
  },
  {
    q: "Do I need NEET to study MBBS abroad?",
    a: "Yes. As per NMC regulations, qualifying NEET is mandatory for any Indian student pursuing MBBS abroad and intending to practise in India.",
  },
  {
    q: "What language is the course taught in?",
    a: "Most BMUS-recommended universities offer MBBS fully in English medium. Local-language classes are provided in the first year only for clinical interaction with patients.",
  },
  {
    q: "Will BMUS help with visa and travel?",
    a: "Absolutely. We handle invitation letters, embassy paperwork, visa filing, ticketing, forex and pre-departure briefing — completely end to end.",
  },
  {
    q: "Is the counselling really free?",
    a: "Yes. Our counselling sessions are 100% free with no obligation. You only pay university fees once you choose to enrol.",
  },
];

const ctaPrimary =
  "inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-8 md:px-12 py-5 md:py-6 text-base md:text-xl font-extrabold uppercase tracking-wide text-white shadow-2xl shadow-orange-500/30 ring-2 ring-white/30 hover:scale-[1.02] active:scale-[0.99] transition-transform";

function CtaButton({
  onClick,
  children,
  subline,
}: {
  onClick: () => void;
  children: React.ReactNode;
  subline?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center my-10 md:my-14">
      <button type="button" onClick={onClick} className={ctaPrimary}>
        <Sparkles className="size-5 md:size-6" />
        <span>{children}</span>
        <ChevronRight className="size-5 md:size-6" />
      </button>
      {subline && (
        <p className="mt-3 text-sm text-slate-500">{subline}</p>
      )}
    </div>
  );
}

export default function BookCounseling({ logoUrl }: { logoUrl: string }) {
  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);

  return (
    <>
      {/* LOGO STRIP */}
      <header className="bg-white border-b border-slate-200">
        <div className="section-container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="BMUS — Best Medical University Services"
                width={56}
                height={56}
                priority
                className="size-12 md:size-14 object-contain"
              />
            ) : null}
            <span className="font-semibold leading-tight tracking-widest font-(family-name:--font-poppins) text-[10px] md:text-xs text-blue-800">
              Best <br /> Medical <br /> University <br /> Services
            </span>
          </div>
          <a
            href="tel:+919354086500"
            className="hidden sm:inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-blue-700"
          >
            <Phone className="size-4" />
            +91 93540 86500
          </a>
        </div>
      </header>

      {/* HERO (no form) */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/40 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(99 102 241 / 0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="section-container relative py-12 md:py-20 lg:py-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
            <Sparkles className="size-4 text-amber-500" />
            Free MBBS Abroad Counselling — Limited Slots This Week
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mt-6 text-slate-900">
            Become a{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Doctor
            </span>{" "}
            without burning a hole in your family&apos;s savings.
          </h1>

          <p className="text-slate-600 text-base md:text-xl mt-6 max-w-2xl mx-auto">
            Get end-to-end guidance from BMUS to study MBBS in NMC-approved
            universities across Russia, Kazakhstan, Bangladesh, Nepal, Poland
            and more — at a fraction of Indian private college fees.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mt-8 text-left">
            {[
              "NMC-approved universities only",
              "Transparent, all-inclusive fee structure",
              "Visa, travel & hostel handled by us",
              "FMGE / NExT coaching support",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm md:text-base text-slate-700"
              >
                <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <div className="flex -space-x-3">
              {[
                "/anik.jpg",
                "/naren.jpg",
                "/camilo-botia.jpg",
                "/javier-trueba.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="size-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 shadow"
                >
                  <Image
                    src={src}
                    alt="student"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-slate-800">
                  4.9/5
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Trusted by 5,000+ students &amp; parents
              </p>
            </div>
          </div>

          <CtaButton
            onClick={openForm}
            subline="100% Free • No obligation • Reply within 24 hours"
          >
            Yes! Book My Free Counselling
          </CtaButton>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white">
        <div className="section-container py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm md:text-base text-white/85 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS / WHAT YOU GET */}
      <section className="section-container py-14 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="size-3.5" /> What you get
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
            Built for students who deserve clear, honest guidance
          </h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg">
            Every counselling session is structured to give you clarity on
            universities, costs, eligibility and the path ahead.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.title}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
              >
                <div
                  className={`mb-4 size-12 rounded-xl bg-gradient-to-br ${perk.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  {perk.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

        <CtaButton
          onClick={openForm}
          subline="Talk to a senior counsellor — free, 30 minutes"
        >
          Claim My Free Counselling Session
        </CtaButton>
      </section>

      {/* WHY CHOOSE BMUS */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Trophy className="size-3.5" /> Why BMUS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 mb-4">
                Why thousands of Indian families trust BMUS for MBBS abroad
              </h2>
              <p className="text-slate-600 max-w-xl text-base md:text-lg">
                BMUS (Best Medical University Services) is a leading consultancy
                guiding NEET-qualified students to top medical universities
                since 2009. We bring transparency, experience and genuine care
                to every step of your journey.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-7">
                {whyChoose.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200"
                    >
                      <div className="shrink-0 size-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/bmus-abroad.jpg"
                alt="BMUS counselling team"
                width={1200}
                height={1400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  <Award className="size-3.5" /> 15+ Years of Excellence
                </div>
                <p className="text-lg font-semibold leading-snug">
                  &ldquo;Empowering future doctors with the right university,
                  the right way.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <CtaButton
            onClick={openForm}
            subline="Join 5,000+ students who chose BMUS"
          >
            Talk to a BMUS Counsellor
          </CtaButton>
        </div>
      </section>

      {/* COUNTRIES / PROGRAMS */}
      <section className="section-container py-14 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Globe2 className="size-3.5" /> Top destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
            Study MBBS in 8+ countries — pick what fits you best
          </h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg">
            All universities are NMC-approved and WHO-listed. Choose your
            destination based on tuition fees, duration and lifestyle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {countries.map((c) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">{c.flag}</span>
                    <h3 className="font-semibold text-lg text-slate-900">
                      MBBS in {c.name}
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between text-slate-700 border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Duration</span>
                    <span className="font-semibold">{c.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Total Fees</span>
                    <span className="font-semibold">{c.feeRange}</span>
                  </div>
                  <p className="text-slate-600 pt-1 text-sm">{c.highlight}</p>
                </div>
                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 mt-5"
                >
                  Get details
                  <ChevronRight className="size-4" />
                </button>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <CtaButton
          onClick={openForm}
          subline="Get a personalised university shortlist for your NEET score"
        >
          Show Me The Best Country For Me
        </CtaButton>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <CalendarCheck className="size-3.5" /> Simple journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
              Your 5-step path from counselling to campus
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg">
              We&apos;ve simplified MBBS abroad admission so you and your family
              never feel lost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all"
                >
                  <div className="absolute top-4 right-4 text-5xl font-black text-slate-100 leading-none select-none">
                    {p.step}
                  </div>
                  <div className="relative size-11 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="relative font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="relative text-sm text-slate-600 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <CtaButton
            onClick={openForm}
            subline="Step 1 starts the moment you book — 100% free"
          >
            Start Step 1 — Book My Free Call
          </CtaButton>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-container py-14 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-purple-700 bg-purple-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="size-3.5" /> What we offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
            Complete MBBS-abroad support, in one place
          </h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg">
            Beyond admissions, we take care of every detail — so you can focus
            on becoming a great doctor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="size-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        <CtaButton
          onClick={openForm}
          subline="Everything from documentation to FMGE prep — handled."
        >
          Get End-to-End Help — Free Counselling
        </CtaButton>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-14 md:py-20">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 text-amber-700 bg-amber-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Star className="size-3.5" /> Student stories
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
              Real journeys, real outcomes
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg">
              Hear from BMUS students who are already studying or practising
              medicine across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <Quote className="absolute top-5 right-5 size-8 text-blue-100" />
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <CtaButton
            onClick={openForm}
            subline="Your story could be next — start with a free call"
          >
            Become Our Next Success Story
          </CtaButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <BookOpenCheck className="size-3.5" /> FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
              Questions parents and students ask
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg">
              Still unsure? Our counsellors will answer everything in your free
              session.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={faq.q} value={`item-${idx}`}>
                <AccordionTrigger className="text-base md:text-lg font-semibold text-slate-900 py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <CtaButton
          onClick={openForm}
          subline="Get answers tailored to your NEET score and budget"
        >
          Ask My Question — Book Free Call
        </CtaButton>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 text-white">
        <div className="absolute -top-24 -right-24 size-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 size-72 bg-cyan-300/20 rounded-full blur-3xl" />

        <div className="section-container relative py-16 md:py-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold mb-4">
            <Sparkles className="size-3.5" /> Limited free slots this week
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            Your dream of becoming a doctor is closer than you think.
          </h2>
          <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto">
            Book a free counselling session today and take the first confident
            step towards an MBBS abroad — at a fraction of the cost and zero
            compromise on quality.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <button type="button" onClick={openForm} className={ctaPrimary}>
              <CalendarCheck className="size-5 md:size-6" />
              Book My Free Counselling Now
              <ChevronRight className="size-5 md:size-6" />
            </button>
            <a
              href="tel:+919354086500"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-base font-semibold"
            >
              <Phone className="size-4" />
              Or call us directly: +91 93540 86500
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER FOOTER */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="section-container py-12 md:py-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="BMUS logo"
                width={48}
                height={48}
                className="size-10 object-contain bg-white/10 rounded-lg p-1"
              />
            ) : null}
            <span className="font-bold text-white tracking-wide">
              BMUS — Best Medical University Services
            </span>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-5 text-xs md:text-sm leading-relaxed text-slate-400">
            <p>
              This site is not a part of the Facebook website or Facebook Inc.
              Additionally, this site is NOT endorsed by Facebook in any way.
              FACEBOOK is a trademark of FACEBOOK, Inc. This site is also not a
              part of Google or YouTube and is not endorsed by Google LLC in any
              way.
            </p>
            <p>
              <span className="font-semibold text-slate-200">DISCLAIMER:</span>{" "}
              The student outcomes, admission timelines and university fees
              shared on this page are based on actual cases handled by BMUS
              counsellors. Please understand that individual results vary and
              depend on many factors — including but not limited to your NEET
              qualification, academic background, choice of country and
              university, embassy decisions, and personal effort. Studying MBBS
              abroad and clearing FMGE/NExT requires sustained, consistent work.
              Nothing on this page should be construed as a guarantee of
              admission, scholarship, visa approval, or future medical practice.
              All information is shared for educational and counselling purposes
              only and may be updated as university policies change.
            </p>
            <p>
              By submitting your details on this page, you consent to be
              contacted by BMUS counsellors via phone, WhatsApp and email
              regarding your MBBS-abroad enquiry. Your information is kept
              strictly confidential and is never sold to third parties.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Best Medical University Services
            (BMUS). All rights reserved.
          </div>
        </div>
      </footer>

      {/* COUNSELING FORM DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showClose={false}
          className="sm:max-w-xl bg-white p-0 overflow-hidden border-0"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500" />

          <div className="relative px-6 md:px-8 pt-7 pb-5 text-center border-b border-slate-100 bg-gradient-to-b from-blue-50/60 to-transparent">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 shadow ring-1 ring-slate-200 text-slate-600 hover:text-slate-900"
            >
              <XIcon className="size-4" />
            </button>

            <div className="mx-auto mb-3 inline-flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 ring-4 ring-white">
              <CalendarCheck className="size-7" />
            </div>
            <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              Book Your Free Counselling
            </DialogTitle>
            <p className="text-slate-600 mt-1 text-sm">
              Fill the details and our counsellor will contact you in the next
              24 hours.
            </p>
          </div>

          <div className="px-6 md:px-8 py-7 max-h-[70vh] overflow-y-auto">
            <AppointmentForm variant="counseling" />
          </div>

          <div className="px-6 md:px-8 py-3 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 border-t border-emerald-100 flex items-center justify-center gap-2 text-xs font-medium text-emerald-800">
            <ShieldCheck className="size-4 text-emerald-600" />
            <span>Your information is secure and 100% confidential.</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
