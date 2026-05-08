import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | BMUS Counselling",
  description:
    "Your free MBBS abroad counselling request has been received. Our BMUS counsellor will reach out within 24 hours.",
  alternates: {
    canonical: "https://counseling.bmus.co.in/thankyou",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const nextSteps = [
  {
    icon: Phone,
    title: "Counsellor Call",
    desc: "A senior BMUS advisor will call you within the next 24 hours to understand your goals.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Update",
    desc: "We'll also send a WhatsApp message so you have our details handy at every step.",
  },
  {
    icon: Mail,
    title: "Personalised Plan",
    desc: "Get a tailored shortlist of NMC-approved universities, fees and timelines.",
  },
];

export default async function ThankYouPage() {
  const QUERY = `*[_type == "navbar"]`;
  const navbarData = await cachedSanityFetch(QUERY, {}, 3600, ["navbar"]);
  const navbar = (navbarData as Array<{ logo?: unknown }>)[0];
  const logoUrl =
    (navbar?.logo && urlFor(navbar.logo)?.width(200).height(200).url()) ?? "";

  return (
    <main>
      <header className="bg-white border-b border-slate-200">
        <div className="section-container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>
          <a
            href="tel:+919354086500"
            className="hidden sm:inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-blue-700"
          >
            <Phone className="size-4" />
            +91 93540 86500
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(99 102 241 / 0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="section-container relative py-16 md:py-24 text-center max-w-3xl mx-auto">
          <div className="mx-auto inline-flex items-center justify-center size-20 md:size-24 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 text-white shadow-2xl shadow-emerald-500/30 ring-8 ring-white">
            <CheckCircle2 className="size-10 md:size-12" />
          </div>

          <div className="inline-flex items-center gap-2 mt-8 bg-white/85 backdrop-blur-sm text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald-200 shadow-sm">
            <Sparkles className="size-4 text-amber-500" />
            Your counselling request is confirmed
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mt-6 text-slate-900">
            Thank you!{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              We&apos;ve got your details.
            </span>
          </h1>

          <p className="text-slate-600 text-base md:text-xl mt-6 max-w-2xl mx-auto">
            A senior BMUS counsellor will reach out within the next 24 hours to
            help you plan your MBBS abroad journey — universities, fees,
            eligibility and the path ahead.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919354086500"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-8 py-4 text-base md:text-lg font-extrabold text-white shadow-xl shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              <Phone className="size-5" />
              Call Us Now: +91 93540 86500
            </a>
            <a
              href="https://wa.me/919354086500"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base md:text-lg font-extrabold text-emerald-700 ring-2 ring-emerald-200 shadow-md hover:bg-emerald-50 transition-colors"
            >
              <MessageCircle className="size-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-xs md:text-sm text-slate-500">
            <Clock3 className="size-4" />
            We typically respond in under 24 hours on business days.
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <CalendarCheck className="size-3.5" /> What happens next
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
              Here&apos;s what to expect from BMUS
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg">
              We keep things simple, transparent and tailored to your goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="size-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-md mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Back to Home
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              Have an urgent query? Call us at +91 93540 86500.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300">
        <div className="section-container py-10 md:py-14">
          <div className="flex items-center justify-center gap-3 mb-4">
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
          <div className="max-w-2xl mx-auto text-center text-xs md:text-sm leading-relaxed text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="size-4 text-emerald-400" />
            Your information is secure and 100% confidential.
          </div>
          <div className="mt-6 pt-5 border-t border-white/10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Best Medical University Services
            (BMUS). All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
