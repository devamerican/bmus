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
  PlayCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Trophy,
  Users,
  XIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AppointmentForm from "@/components/home/appointment-form";
import { urlFor } from "@/sanity/lib/image";

// ---------- Icon mapping ----------
const ICONS: Record<string, LucideIcon> = {
  Award,
  BookOpenCheck,
  CalendarCheck,
  Clock3,
  FileBadge,
  Globe2,
  GraduationCap,
  Headphones,
  IndianRupee,
  Languages,
  MapPin,
  Microscope,
  PhoneCall,
  Plane,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Trophy,
  Users,
};

const getIcon = (name?: string): LucideIcon => {
  if (name && ICONS[name]) return ICONS[name];
  return Sparkles;
};

// ---------- Default content (fallback when Sanity data is missing) ----------
const DEFAULTS = {
  header: {
    phoneNumber: "+919354086500",
    phoneDisplay: "+91 93540 86500",
    brandLines: ["Best", "Medical", "University", "Services"],
  },
  hero: {
    badge: "Free MBBS Abroad Counselling — Limited Slots This Week",
    headingPrefix: "Become a",
    headingHighlight: "Doctor",
    headingSuffix:
      "without burning a hole in your family's savings.",
    description:
      "Get end-to-end guidance from BMUS to study MBBS in NMC-approved universities across Russia, Kazakhstan, Bangladesh, Nepal, Poland and more — at a fraction of Indian private college fees.",
    bullets: [
      "NMC-approved universities only",
      "Transparent, all-inclusive fee structure",
      "Visa, travel & hostel handled by us",
      "FMGE / NExT coaching support",
    ],
    studentAvatars: [
      { src: "/anik.jpg", alt: "student" },
      { src: "/naren.jpg", alt: "student" },
      { src: "/camilo-botia.jpg", alt: "student" },
      { src: "/javier-trueba.jpg", alt: "student" },
    ],
    ratingValue: "4.9/5",
    ratingLabel: "Trusted by 5,000+ students & parents",
    ctaLabel: "Yes! Book My Free Counselling",
    ctaSubline: "100% Free • No obligation • Reply within 24 hours",
  },
  videoSection: {
    enabled: true,
    badge: "Watch how we help",
    heading: "See BMUS counselling in action",
    description:
      "A quick look at how our counsellors guide students from first call to campus admission.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    posterUrl: "",
  },
  studentVideosSection: {
    enabled: true,
    badge: "Student stories",
    headingPrefix: "SEE WHAT OUR STUDENTS HAVE TO SAY ABOUT",
    headingHighlight: "BMUS",
    headingSuffix: "MBBS ABROAD JOURNEY",
    description: "Real journeys, real outcomes from our students.",
    videos: [] as Array<{ title?: string; videoUrl?: string; posterUrl?: string }>,
    ctaLabel: "I'M READY TO BOOK MY FREE COUNSELLING",
    ctaSubline: "100% Free • No obligation • Reply within 24 hours",
  },
  stats: [
    { value: "5,000+", label: "Students Placed" },
    { value: "50+", label: "Partner Universities" },
    { value: "8+", label: "Countries Covered" },
    { value: "15+", label: "Years of Expertise" },
  ],
  perksSection: {
    badge: "What you get",
    heading: "Built for students who deserve clear, honest guidance",
    description:
      "Every counselling session is structured to give you clarity on universities, costs, eligibility and the path ahead.",
    perks: [
      {
        icon: "Headphones",
        title: "Free 1-on-1 Counselling",
        desc: "Personal sessions with senior MBBS-abroad advisors who understand your goals.",
        color: "from-blue-500 to-indigo-600",
      },
      {
        icon: "Clock3",
        title: "Response within 24 Hours",
        desc: "Submit the form and our counsellor will reach out the same business day.",
        color: "from-orange-500 to-pink-500",
      },
      {
        icon: "ShieldCheck",
        title: "Verified Universities Only",
        desc: "We recommend NMC-approved, WHO-listed institutions across the globe.",
        color: "from-emerald-500 to-teal-600",
      },
    ],
    ctaLabel: "Talk to a senior counsellor — free, 30 minutes",
    ctaSubline: "",
  },
  whyChooseSection: {
    badge: "Why BMUS",
    heading: "Why thousands of Indian families trust BMUS for MBBS abroad",
    description:
      "BMUS (Best Medical University Services) is a leading consultancy guiding NEET-qualified students to top medical universities since 2009. We bring transparency, experience and genuine care to every step of your journey.",
    features: [
      {
        icon: "Trophy",
        title: "Proven Track Record",
        desc: "15+ years guiding Indian students to top medical universities worldwide.",
      },
      {
        icon: "ShieldCheck",
        title: "Trusted by Families",
        desc: "Transparent pricing, verified universities, and zero hidden charges.",
      },
      {
        icon: "Plane",
        title: "End-to-End Support",
        desc: "From shortlisting to admission, visa, travel and on-arrival assistance.",
      },
      {
        icon: "BookOpenCheck",
        title: "FMGE/NExT Coaching",
        desc: "Free coaching support so you return home licensed to practise in India.",
      },
      {
        icon: "IndianRupee",
        title: "Affordable Tuition",
        desc: "MBBS programs starting from a fraction of Indian private college fees.",
      },
      {
        icon: "Users",
        title: "Active Student Community",
        desc: "Join 5,000+ alumni and current students for guidance at every step.",
      },
    ],
    imageUrl: "/bmus-abroad.jpg",
    imageBadge: "15+ Years of Excellence",
    imageQuote:
      "Empowering future doctors with the right university, the right way.",
    ctaLabel: "Talk to a BMUS Counsellor",
    ctaSubline: "Join 5,000+ students who chose BMUS",
  },
  processSection: {
    badge: "Simple journey",
    heading: "Your 5-step path from counselling to campus",
    description:
      "We've simplified MBBS abroad admission so you and your family never feel lost.",
    steps: [
      {
        step: "01",
        icon: "PhoneCall",
        title: "Book Free Counselling",
        desc: "Share your details and our advisor calls you within 24 hours.",
      },
      {
        step: "02",
        icon: "Globe2",
        title: "Shortlist University",
        desc: "Pick the right country & university based on budget, NEET score and goals.",
      },
      {
        step: "03",
        icon: "FileBadge",
        title: "Admission & Documentation",
        desc: "We handle applications, invitation letters, fee transfer and verification.",
      },
      {
        step: "04",
        icon: "Plane",
        title: "Visa & Travel",
        desc: "End-to-end visa assistance, ticketing and pre-departure briefing.",
      },
      {
        step: "05",
        icon: "GraduationCap",
        title: "On-Campus Support",
        desc: "Hostel, food, local SIM and continuous support till you graduate.",
      },
    ],
    ctaLabel: "Start Step 1 — Book My Free Call",
    ctaSubline: "",
  },
  servicesSection: {
    badge: "What we offer",
    heading: "Complete MBBS-abroad support, in one place",
    description:
      "Beyond admissions, we take care of every detail — so you can focus on becoming a great doctor.",
    services: [
      {
        icon: "Stethoscope",
        title: "MBBS Abroad Admission",
        desc: "Direct admission in 50+ NMC-approved universities across 8+ countries.",
      },
      {
        icon: "Microscope",
        title: "Course & University Selection",
        desc: "Personalised shortlist based on your NEET score, budget, and preference.",
      },
      {
        icon: "FileBadge",
        title: "Visa & Documentation",
        desc: "Complete paperwork, embassy support and fast-tracked student visas.",
      },
      {
        icon: "Languages",
        title: "Language & FMGE Prep",
        desc: "Local-language basics and FMGE/NExT coaching for a smooth return.",
      },
      {
        icon: "MapPin",
        title: "Travel & Forex",
        desc: "Tickets, foreign exchange, and group travel arrangements at student rates.",
      },
      {
        icon: "Award",
        title: "Career & Internship Guidance",
        desc: "Internship, residency and licensing support after graduation.",
      },
    ],
    ctaLabel: "Get End-to-End Help — Free Counselling",
    ctaSubline: "Everything from documentation to FMGE prep — handled.",
  },
  testimonialsSection: {
    badge: "Student stories",
    heading: "Real journeys, real outcomes",
    description:
      "Hear from BMUS students who are already studying or practising medicine across the globe.",
    testimonials: [
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
    ],
    ctaLabel: "Become Our Next Success Story",
    ctaSubline: "",
  },
  faqSection: {
    badge: "FAQ",
    heading: "Questions parents and students ask",
    description:
      "Still unsure? Our counsellors will answer everything in your free session.",
    faqs: [
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
    ],
    ctaLabel: "Ask My Question — Book Free Call",
    ctaSubline: "Get answers tailored to your NEET score and budget",
  },
  finalCtaSection: {
    badge: "Limited free slots this week",
    heading: "Your dream of becoming a doctor is closer than you think.",
    description:
      "Book a free counselling session today and take the first confident step towards an MBBS abroad — at a fraction of the cost and zero compromise on quality.",
    ctaLabel: "Book My Free Counselling Now",
    phoneLabel: "Or call us directly:",
    phoneNumber: "+91 93540 86500",
  },
  dialog: {
    title: "Book Your Free Counselling",
    description:
      "Fill the details and our counsellor will contact you in the next 24 hours.",
    securityNote: "Your information is secure and 100% confidential.",
  },
  footer: {
    brandText: "BMUS — Best Medical University Services",
    paragraphs: [
      "This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. This site is also not a part of Google or YouTube and is not endorsed by Google LLC in any way.",
      "DISCLAIMER: The student outcomes, admission timelines and university fees shared on this page are based on actual cases handled by BMUS counsellors. Please understand that individual results vary and depend on many factors — including but not limited to your NEET qualification, academic background, choice of country and university, embassy decisions, and personal effort. Studying MBBS abroad and clearing FMGE/NExT requires sustained, consistent work. Nothing on this page should be construed as a guarantee of admission, scholarship, visa approval, or future medical practice. All information is shared for educational and counselling purposes only and may be updated as university policies change.",
      "By submitting your details on this page, you consent to be contacted by BMUS counsellors via phone, WhatsApp and email regarding your MBBS-abroad enquiry. Your information is kept strictly confidential and is never sold to third parties.",
    ],
    copyright:
      "© {year} Best Medical University Services (BMUS). All rights reserved.",
  },
};

// ---------- Helpers ----------

const ctaPrimary =
  "inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-8 md:px-12 py-5 md:py-6 text-base md:text-xl font-extrabold uppercase tracking-wide text-white shadow-2xl shadow-orange-500/30 ring-2 ring-white/30 hover:scale-[1.02] active:scale-[0.99] transition-transform";

function CtaButton({
  onClick,
  children,
  subline,
  sublineClass = "text-slate-500",
}: {
  onClick: () => void;
  children: React.ReactNode;
  subline?: string;
  sublineClass?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center mt-8 md:mt-10">
      <button type="button" onClick={onClick} className={ctaPrimary}>
        <Sparkles className="size-5 md:size-6" />
        <span>{children}</span>
        <ChevronRight className="size-5 md:size-6" />
      </button>
      {subline && (
        <p className={`mt-3 text-sm ${sublineClass}`}>{subline}</p>
      )}
    </div>
  );
}

const safeImageUrl = (img: any): string | null => {
  if (!img) return null;
  try {
    return urlFor(img).width(1600).url();
  } catch {
    return null;
  }
};

const isIframeUrl = (url: string) =>
  /youtube\.com|youtu\.be|vimeo\.com/i.test(url);

const toEmbedUrl = (url: string): string => {
  // YouTube watch link → embed
  const ytWatch = url.match(/youtube\.com\/watch\?v=([\w-]+)/);
  if (ytWatch) return `https://www.youtube.com/embed/${ytWatch[1]}`;
  const ytShort = url.match(/youtu\.be\/([\w-]+)/);
  if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}`;
  // Vimeo plain → embed
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return url;
};

// ---------- Component ----------

export default function BookCounseling({
  logoUrl,
  data,
}: {
  logoUrl: string;
  data?: any;
}) {
  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);

  const header = { ...DEFAULTS.header, ...(data?.header ?? {}) };
  const brandLines = header.brandLines?.length
    ? header.brandLines
    : DEFAULTS.header.brandLines;

  const hero = { ...DEFAULTS.hero, ...(data?.hero ?? {}) };
  const heroBullets = hero.bullets?.length
    ? hero.bullets
    : DEFAULTS.hero.bullets;
  const heroAvatars: { src: string; alt: string }[] = (() => {
    const sanityAvatars = data?.hero?.studentAvatars;
    if (Array.isArray(sanityAvatars) && sanityAvatars.length > 0) {
      return sanityAvatars
        .map((a: any) => ({
          src: safeImageUrl(a?.image) ?? "",
          alt: a?.alt ?? "student",
        }))
        .filter((a) => a.src);
    }
    return DEFAULTS.hero.studentAvatars;
  })();

  const videoSection = { ...DEFAULTS.videoSection, ...(data?.videoSection ?? {}) };
  const uploadedVideoUrl: string | null =
    data?.videoSection?.videoFile?.asset?.url ?? null;
  const uploadedVideoMime: string | null =
    data?.videoSection?.videoFile?.asset?.mimeType ?? null;
  const resolvedVideoUrl: string = uploadedVideoUrl || videoSection.videoUrl;
  const videoPosterUrl =
    safeImageUrl(data?.videoSection?.poster) ?? videoSection.posterUrl ?? "";

  const studentVideosSection = {
    ...DEFAULTS.studentVideosSection,
    ...(data?.studentVideosSection ?? {}),
  };
  const studentVideos: Array<{
    title?: string;
    videoUrl: string;
    mimeType?: string;
    posterUrl: string;
  }> = (() => {
    const items = data?.studentVideosSection?.videos;
    if (!Array.isArray(items)) return [];
    return items
      .map((v: any) => ({
        title: v?.title,
        videoUrl: v?.videoFile?.asset?.url ?? "",
        mimeType: v?.videoFile?.asset?.mimeType ?? undefined,
        posterUrl: safeImageUrl(v?.poster) ?? "",
      }))
      .filter((v) => v.videoUrl);
  })();

  const stats = data?.stats?.length ? data.stats : DEFAULTS.stats;

  const perksSection = {
    ...DEFAULTS.perksSection,
    ...(data?.perksSection ?? {}),
  };
  const perks = perksSection.perks?.length
    ? perksSection.perks
    : DEFAULTS.perksSection.perks;

  const whyChooseSection = {
    ...DEFAULTS.whyChooseSection,
    ...(data?.whyChooseSection ?? {}),
  };
  const whyChooseFeatures = whyChooseSection.features?.length
    ? whyChooseSection.features
    : DEFAULTS.whyChooseSection.features;
  const whyChooseImageUrl =
    safeImageUrl(data?.whyChooseSection?.image) ??
    DEFAULTS.whyChooseSection.imageUrl;

  const processSection = {
    ...DEFAULTS.processSection,
    ...(data?.processSection ?? {}),
  };
  const processSteps = processSection.steps?.length
    ? processSection.steps
    : DEFAULTS.processSection.steps;

  const servicesSection = {
    ...DEFAULTS.servicesSection,
    ...(data?.servicesSection ?? {}),
  };
  const services = servicesSection.services?.length
    ? servicesSection.services
    : DEFAULTS.servicesSection.services;

  const testimonialsSection = {
    ...DEFAULTS.testimonialsSection,
    ...(data?.testimonialsSection ?? {}),
  };
  const testimonials = testimonialsSection.testimonials?.length
    ? testimonialsSection.testimonials
    : DEFAULTS.testimonialsSection.testimonials;

  const faqSection = { ...DEFAULTS.faqSection, ...(data?.faqSection ?? {}) };
  const faqs = faqSection.faqs?.length
    ? faqSection.faqs
    : DEFAULTS.faqSection.faqs;

  const finalCtaSection = {
    ...DEFAULTS.finalCtaSection,
    ...(data?.finalCtaSection ?? {}),
  };

  const dialog = { ...DEFAULTS.dialog, ...(data?.dialog ?? {}) };
  const footer = { ...DEFAULTS.footer, ...(data?.footer ?? {}) };
  const footerParagraphs = footer.paragraphs?.length
    ? footer.paragraphs
    : DEFAULTS.footer.paragraphs;
  const copyrightText = (footer.copyright ?? DEFAULTS.footer.copyright).replace(
    "{year}",
    String(new Date().getFullYear()),
  );

  const phoneHref = `tel:${header.phoneNumber?.replace(/\s+/g, "")}`;

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
              {brandLines.map((line: string, i: number) => (
                <span key={`${line}-${i}`}>
                  {line}
                  {i < brandLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </span>
          </div>
          {header.phoneDisplay ? (
            <a
              href={phoneHref}
              className="hidden sm:inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-blue-700"
            >
              <Phone className="size-4" />
              {header.phoneDisplay}
            </a>
          ) : null}
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
          {hero.badge ? (
            <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
              <Sparkles className="size-4 text-amber-500" />
              {hero.badge}
            </div>
          ) : null}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mt-6 text-slate-900">
            {hero.headingPrefix}{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              {hero.headingHighlight}
            </span>{" "}
            {hero.headingSuffix}
          </h1>

          <p className="text-slate-600 text-base md:text-xl mt-6 max-w-2xl mx-auto">
            {hero.description}
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mt-8 text-left">
            {heroBullets.map((item: string) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm md:text-base text-slate-700"
              >
                <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-6 md:size-7 fill-current" />
                ))}
                {hero.ratingValue ? (
                  <span className="ml-2 text-2xl md:text-3xl font-extrabold text-slate-900">
                    {hero.ratingValue}
                  </span>
                ) : null}
              </div>
              {hero.ratingLabel ? (
                <p className="text-lg md:text-xl font-semibold text-slate-700 mt-2">
                  {hero.ratingLabel}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto">
              {heroAvatars.slice(0, 4).map((avatar, i) => (
                <div
                  key={`${avatar.src}-${i}`}
                  className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-md bg-slate-200"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    sizes="(min-width: 768px) 224px, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <CtaButton onClick={openForm} subline={hero.ctaSubline}>
            {hero.ctaLabel}
          </CtaButton>
        </div>
      </section>

      {/* VIDEO SECTION */}
      {videoSection.enabled !== false && resolvedVideoUrl ? (
        <section className="relative bg-white py-14 md:py-20">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
              {videoSection.badge ? (
                <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <PlayCircle className="size-3.5" /> {videoSection.badge}
                </span>
              ) : null}
              {videoSection.heading ? (
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 text-slate-900">
                  {videoSection.heading}
                </h2>
              ) : null}
              {videoSection.description ? (
                <p className="text-slate-600 mt-3 text-base md:text-lg">
                  {videoSection.description}
                </p>
              ) : null}
            </div>

            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-slate-900 aspect-video">
              {!uploadedVideoUrl && isIframeUrl(resolvedVideoUrl) ? (
                <iframe
                  src={toEmbedUrl(resolvedVideoUrl)}
                  title={videoSection.heading || "BMUS counselling video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <video
                  src={resolvedVideoUrl}
                  controls
                  preload="metadata"
                  poster={videoPosterUrl || undefined}
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  {uploadedVideoMime ? (
                    <source src={resolvedVideoUrl} type={uploadedVideoMime} />
                  ) : null}
                </video>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {/* STATS STRIP */}
      <section className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white">
        <div className="section-container py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((s: any) => (
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
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute -top-32 -left-32 size-80 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 size-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(255 255 255 / 0.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="section-container relative py-14 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            {perksSection.badge ? (
              <span className="inline-flex items-center gap-2 text-blue-200 bg-blue-500/15 ring-1 ring-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="size-3.5" /> {perksSection.badge}
              </span>
            ) : null}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 text-white">
              {perksSection.heading}
            </h2>
            <p className="text-slate-300 mt-3 text-base md:text-lg">
              {perksSection.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk: any) => {
              const Icon = getIcon(perk.icon);
              return (
                <div
                  key={perk.title}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                >
                  <div
                    className={`mb-4 size-12 rounded-xl bg-gradient-to-br ${
                      perk.color || "from-blue-500 to-indigo-600"
                    } text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <CtaButton
            onClick={openForm}
            sublineClass="text-slate-400"
          >
            {perksSection.ctaLabel}
          </CtaButton>
        </div>
      </section>

      {/* WHY CHOOSE BMUS */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              {whyChooseSection.badge ? (
                <span className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Trophy className="size-3.5" /> {whyChooseSection.badge}
                </span>
              ) : null}
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 mb-4">
                {whyChooseSection.heading}
              </h2>
              <p className="text-slate-600 max-w-xl text-base md:text-lg">
                {whyChooseSection.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-7">
                {whyChooseFeatures.map((item: any) => {
                  const Icon = getIcon(item.icon);
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
                src={whyChooseImageUrl}
                alt="BMUS counselling team"
                width={1200}
                height={1400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                {whyChooseSection.imageBadge ? (
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    <Award className="size-3.5" /> {whyChooseSection.imageBadge}
                  </div>
                ) : null}
                {whyChooseSection.imageQuote ? (
                  <p className="text-lg font-semibold leading-snug">
                    &ldquo;{whyChooseSection.imageQuote}&rdquo;
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <CtaButton onClick={openForm} subline={whyChooseSection.ctaSubline}>
            {whyChooseSection.ctaLabel}
          </CtaButton>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {processSection.badge ? (
              <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <CalendarCheck className="size-3.5" /> {processSection.badge}
              </span>
            ) : null}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
              {processSection.heading}
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg">
              {processSection.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((p: any) => {
              const Icon = getIcon(p.icon);
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

          <CtaButton onClick={openForm}>
            {processSection.ctaLabel}
          </CtaButton>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute -top-32 right-0 size-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-0 size-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="section-container relative py-14 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            {servicesSection.badge ? (
              <span className="inline-flex items-center gap-2 text-purple-200 bg-purple-500/15 ring-1 ring-purple-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="size-3.5" /> {servicesSection.badge}
              </span>
            ) : null}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 text-white">
              {servicesSection.heading}
            </h2>
            <p className="text-slate-300 mt-3 text-base md:text-lg">
              {servicesSection.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s: any) => {
              const Icon = getIcon(s.icon);
              return (
                <div
                  key={s.title}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                >
                  <div className="size-11 rounded-xl bg-blue-500/20 text-blue-200 ring-1 ring-blue-400/30 flex items-center justify-center mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <CtaButton
            onClick={openForm}
            subline={servicesSection.ctaSubline}
            sublineClass="text-slate-400"
          >
            {servicesSection.ctaLabel}
          </CtaButton>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-14 md:py-20">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            {testimonialsSection.badge ? (
              <span className="inline-flex items-center gap-2 text-amber-700 bg-amber-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Star className="size-3.5" /> {testimonialsSection.badge}
              </span>
            ) : null}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
              {testimonialsSection.heading}
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg">
              {testimonialsSection.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t: any) => (
              <div
                key={t.name}
                className="relative p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <Quote className="absolute top-5 right-5 size-8 text-blue-100" />
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
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

          <CtaButton onClick={openForm}>
            {testimonialsSection.ctaLabel}
          </CtaButton>
        </div>
      </section>

      {/* STUDENT VIDEOS (2x2 grid of uploaded videos) */}
      {studentVideosSection.enabled !== false && studentVideos.length > 0 ? (
        <section className="bg-white py-14 md:py-20">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              {studentVideosSection.badge ? (
                <span className="inline-flex items-center gap-2 text-rose-700 bg-rose-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <PlayCircle className="size-3.5" />{" "}
                  {studentVideosSection.badge}
                </span>
              ) : null}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-3 text-slate-900 uppercase">
                {studentVideosSection.headingPrefix ? (
                  <span>{studentVideosSection.headingPrefix} </span>
                ) : null}
                {studentVideosSection.headingHighlight ? (
                  <span className="text-rose-600">
                    {studentVideosSection.headingHighlight}
                  </span>
                ) : null}
                {studentVideosSection.headingSuffix ? (
                  <span> {studentVideosSection.headingSuffix}</span>
                ) : null}
              </h2>
              {studentVideosSection.description ? (
                <p className="text-slate-600 mt-3 text-base md:text-lg">
                  {studentVideosSection.description}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
              {studentVideos.slice(0, 4).map((v, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-slate-900 aspect-video"
                >
                  <video
                    src={v.videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    poster={v.posterUrl || undefined}
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    {v.mimeType ? (
                      <source src={v.videoUrl} type={v.mimeType} />
                    ) : null}
                  </video>
                </div>
              ))}
            </div>

            {studentVideosSection.ctaLabel ? (
              <CtaButton
                onClick={openForm}
                subline={studentVideosSection.ctaSubline}
              >
                {studentVideosSection.ctaLabel}
              </CtaButton>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="section-container py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            {faqSection.badge ? (
              <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <BookOpenCheck className="size-3.5" /> {faqSection.badge}
              </span>
            ) : null}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
              {faqSection.heading}
            </h2>
            <p className="text-slate-600 mt-3 text-base md:text-lg">
              {faqSection.description}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq: any, idx: number) => (
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

        <CtaButton onClick={openForm} subline={faqSection.ctaSubline}>
          {faqSection.ctaLabel}
        </CtaButton>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 text-white">
        <div className="absolute -top-24 -right-24 size-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 size-72 bg-cyan-300/20 rounded-full blur-3xl" />

        <div className="section-container relative py-16 md:py-24 text-center max-w-3xl mx-auto">
          {finalCtaSection.badge ? (
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Sparkles className="size-3.5" /> {finalCtaSection.badge}
            </div>
          ) : null}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            {finalCtaSection.heading}
          </h2>
          <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto">
            {finalCtaSection.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <button type="button" onClick={openForm} className={ctaPrimary}>
              <CalendarCheck className="size-5 md:size-6" />
              {finalCtaSection.ctaLabel}
              <ChevronRight className="size-5 md:size-6" />
            </button>
            {finalCtaSection.phoneNumber ? (
              <a
                href={`tel:${finalCtaSection.phoneNumber.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-base font-semibold"
              >
                <Phone className="size-4" />
                {finalCtaSection.phoneLabel} {finalCtaSection.phoneNumber}
              </a>
            ) : null}
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
              {footer.brandText}
            </span>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-5 text-xs md:text-sm leading-relaxed text-slate-400">
            {footerParagraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
            {copyrightText}
          </div>
        </div>
      </footer>

      {/* COUNSELING FORM DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showClose={false}
          className="sm:max-w-xl bg-white p-0 overflow-hidden border-0 max-h-[92vh] flex flex-col gap-0"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 shrink-0" />

          <div className="relative px-6 md:px-8 pt-7 pb-5 text-center border-b border-slate-100 bg-gradient-to-b from-blue-50/60 to-transparent shrink-0">
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
              {dialog.title}
            </DialogTitle>
            <p className="text-slate-600 mt-1 text-sm">{dialog.description}</p>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto px-6 md:px-8 py-7">
            <AppointmentForm variant="counseling" />
          </div>

          <div className="px-6 md:px-8 py-3 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 border-t border-emerald-100 flex items-center justify-center gap-2 text-xs font-medium text-emerald-800 shrink-0">
            <ShieldCheck className="size-4 text-emerald-600" />
            <span>{dialog.securityNote}</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
