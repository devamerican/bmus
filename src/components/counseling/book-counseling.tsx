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
  FileBadge,
  Globe2,
  GraduationCap,
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
  FileBadge,
  Globe2,
  GraduationCap,
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
    heading: "See BMUS Counselling in Action",
    headingPrefix: "See BMUS Counselling",
    headingHighlight: "in Action",
    headingSuffix: "",
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
    heading: "Built for Students Who Deserve Clear, Honest Guidance",
    headingPrefix: "Built for Students Who Deserve",
    headingHighlight: "Clear, Honest Guidance",
    headingSuffix: "",
    description:
      "Every counselling session is structured to give you clarity on universities, costs, eligibility and the path ahead.",
    perks: [
      {
        title: "Free 1-on-1 Counselling",
        desc: "Personal sessions with senior MBBS-abroad advisors who understand your goals.",
      },
      {
        title: "Response within 24 Hours",
        desc: "Submit the form and our counsellor will reach out the same business day.",
      },
      {
        title: "Verified Universities Only",
        desc: "We recommend NMC-approved, WHO-listed institutions across the globe.",
      },
    ],
    ctaLabel: "Talk to a senior counsellor — free, 30 minutes",
    ctaSubline: "",
  },
  whyChooseSection: {
    badge: "Why BMUS",
    heading: "Why Thousands of Indian Families Trust BMUS",
    headingPrefix: "Why Thousands of Indian Families",
    headingHighlight: "Trust BMUS",
    headingSuffix: "for MBBS Abroad",
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
    heading: "Your 5-Step Path from Counselling to Campus",
    headingPrefix: "Your 5-Step Path from",
    headingHighlight: "Counselling to Campus",
    headingSuffix: "",
    description:
      "We've simplified MBBS abroad admission so you and your family never feel lost.",
    steps: [
      {
        step: "01",
        icon: "PhoneCall",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=280&fit=crop&auto=format",
        title: "Book Free Counselling",
        desc: "Share your details and our advisor calls you within 24 hours.",
      },
      {
        step: "02",
        icon: "Globe2",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=280&fit=crop&auto=format",
        title: "Shortlist University",
        desc: "Pick the right country & university based on budget, NEET score and goals.",
      },
      {
        step: "03",
        icon: "FileBadge",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=280&fit=crop&auto=format",
        title: "Admission & Documentation",
        desc: "We handle applications, invitation letters, fee transfer and verification.",
      },
      {
        step: "04",
        icon: "Plane",
        imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=280&fit=crop&auto=format",
        title: "Visa & Travel",
        desc: "End-to-end visa assistance, ticketing and pre-departure briefing.",
      },
      {
        step: "05",
        icon: "GraduationCap",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=280&fit=crop&auto=format",
        title: "On-Campus Support",
        desc: "Hostel, food, local SIM and continuous support till you graduate.",
      },
    ],
    ctaLabel: "Start Step 1 — Book My Free Call",
    ctaSubline: "",
  },
  servicesSection: {
    badge: "What we offer",
    heading: "Complete MBBS-Abroad Support, in One Place",
    headingPrefix: "Complete MBBS-Abroad Support,",
    headingHighlight: "in One Place",
    headingSuffix: "",
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
    heading: "Real Journeys, Real Outcomes",
    headingPrefix: "Real Journeys,",
    headingHighlight: "Real Outcomes",
    headingSuffix: "",
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
  googleReviewsSection: {
    enabled: true,
    badge: "Google Reviews",
    headingPrefix: "What Our Students",
    headingHighlight: "Say on Google",
    headingSuffix: "",
    description:
      "Real reviews from students and parents who trusted BMUS for their MBBS abroad journey.",
    overallRating: "4.9",
    totalReviews: "Based on 150+ Google Reviews",
    reviews: [
      {
        reviewerName: "Rohit Kumar",
        rating: 5,
        reviewText:
          "BMUS is the best MBBS abroad consultant in Palwal. They helped my daughter get admission in a top medical university in Russia. The entire process from documentation to visa was handled seamlessly. Highly recommend!",
        reviewDate: "2 months ago",
      },
      {
        reviewerName: "Sunita Devi",
        rating: 5,
        reviewText:
          "Excellent service! My son is now studying MBBS in Kazakhstan thanks to BMUS. The counsellors were very knowledgeable and transparent about all fees. No hidden charges at all.",
        reviewDate: "3 months ago",
      },
      {
        reviewerName: "Rajesh Yadav",
        rating: 5,
        reviewText:
          "Best consultancy for MBBS abroad in Haryana. They guided us through every step including NEET requirements, university selection and visa process. Very professional team.",
        reviewDate: "1 month ago",
      },
      {
        reviewerName: "Pooja Sharma",
        rating: 5,
        reviewText:
          "I was confused about studying MBBS abroad but BMUS counsellors gave me complete clarity. Now I'm in my 2nd year at a great university in Bangladesh. Thank you BMUS!",
        reviewDate: "4 months ago",
      },
      {
        reviewerName: "Amit Gupta",
        rating: 5,
        reviewText:
          "Genuinely trustworthy MBBS consultants. They were honest about which universities are NMC approved and which ones to avoid. My daughter is very happy at her university in Kyrgyzstan.",
        reviewDate: "5 months ago",
      },
      {
        reviewerName: "Meena Verma",
        rating: 5,
        reviewText:
          "BMUS team is outstanding. They provide end-to-end support including pre-departure briefing and on-campus assistance. Very helpful even after admission.",
        reviewDate: "6 months ago",
      },
    ],
  },
  faqSection: {
    badge: "FAQ",
    heading: "Questions Parents and Students Ask",
    headingPrefix: "Questions Parents and",
    headingHighlight: "Students Ask",
    headingSuffix: "",
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
    heading: "Your Dream of Becoming a Doctor is Closer Than You Think.",
    headingPrefix: "Your Dream of Becoming a",
    headingHighlight: "Doctor",
    headingSuffix: "is Closer Than You Think.",
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
  "inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-8 md:px-12 py-5 md:py-6 text-base md:text-xl font-extrabold uppercase tracking-wide text-white shadow-2xl shadow-orange-500/30 ring-2 ring-white/20 hover:scale-[1.02] active:scale-[0.99] transition-transform";

const sectionBadge =
  "inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest";

const sectionBadgeDark =
  "inline-flex items-center gap-2 bg-amber-500/15 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest";

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

function SplitHeading({
  prefix,
  highlight,
  suffix,
  heading,
  className,
}: {
  prefix?: string;
  highlight?: string;
  suffix?: string;
  heading?: string;
  className?: string;
}) {
  if (highlight) {
    return (
      <h2 className={className}>
        {prefix ? <>{prefix} </> : null}
        <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
          {highlight}
        </span>
        {suffix ? <> {suffix}</> : null}
      </h2>
    );
  }
  return <h2 className={className}>{heading}</h2>;
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
  const ytWatch = url.match(/youtube\.com\/watch\?v=([\w-]+)/);
  if (ytWatch) return `https://www.youtube.com/embed/${ytWatch[1]}`;
  const ytShort = url.match(/youtu\.be\/([\w-]+)/);
  if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return url;
};

function GoogleLogo({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

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

  const showVideo = videoSection.enabled !== false && !!resolvedVideoUrl;

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
  const processSteps = (() => {
    const rawSteps = processSection.steps?.length
      ? processSection.steps
      : DEFAULTS.processSection.steps;
    return rawSteps.map((step: any, idx: number) => ({
      ...step,
      imageUrl: step.imageUrl ?? DEFAULTS.processSection.steps[idx]?.imageUrl ?? null,
    }));
  })();

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

  const googleReviewsSection = {
    ...DEFAULTS.googleReviewsSection,
    ...(data?.googleReviewsSection ?? {}),
  };
  const googleReviews = googleReviewsSection.reviews?.length
    ? googleReviewsSection.reviews
    : DEFAULTS.googleReviewsSection.reviews;

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
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="section-container flex items-center justify-between py-3">
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
              className="hidden sm:inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-amber-600 transition-colors"
            >
              <Phone className="size-4" />
              {header.phoneDisplay}
            </a>
          ) : null}
        </div>
      </header>

      {/* HERO — dark navy, single column centered */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(255 255 255 / 0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="section-container relative py-14 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {hero.badge ? (
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold">
                  <Sparkles className="size-4 text-amber-400" />
                  {hero.badge}
                </div>
              </div>
            ) : null}

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">
              {hero.headingPrefix}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                {hero.headingHighlight}
              </span>{" "}
              <span className="text-slate-200">{hero.headingSuffix}</span>
            </h1>

            {/* Video below heading */}
            {showVideo ? (
              <div className="mt-8 mb-8 max-w-3xl mx-auto w-full">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="flex items-center justify-center size-7 rounded-full bg-amber-500/20 border border-amber-500/40">
                    <PlayCircle className="size-4 text-amber-400" />
                  </div>
                  <span className="text-amber-300 text-sm font-semibold uppercase tracking-wider">
                    {videoSection.badge || "Watch how we help"}
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-amber-500/25 bg-slate-900 aspect-video">
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
                {/* Avatar strip below video */}
                {heroAvatars.length > 0 ? (
                  <div className="mt-5 grid grid-cols-4 gap-3">
                    {heroAvatars.slice(0, 4).map((avatar, i) => (
                      <div
                        key={`${avatar.src}-${i}`}
                        className="relative aspect-square rounded-xl overflow-hidden ring-2 ring-white/10 bg-slate-800"
                      >
                        <Image
                          src={avatar.src}
                          alt={avatar.alt}
                          fill
                          sizes="120px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : heroAvatars.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 max-w-2xl mx-auto mt-8 mb-8">
                {heroAvatars.slice(0, 4).map((avatar, i) => (
                  <div
                    key={`${avatar.src}-${i}`}
                    className="relative aspect-square rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-xl bg-slate-800"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="(min-width: 640px) 160px, 46vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <p className="text-slate-300 text-base md:text-lg lg:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              {hero.description}
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mt-8 max-w-2xl mx-auto text-left">
              {heroBullets.map((item: string) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm md:text-base text-slate-200"
                >
                  <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 text-amber-400 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 md:size-6 fill-current" />
                ))}
                {hero.ratingValue ? (
                  <span className="ml-2 text-xl md:text-2xl font-extrabold text-white">
                    {hero.ratingValue}
                  </span>
                ) : null}
              </div>
              {hero.ratingLabel ? (
                <p className="text-slate-300 text-sm md:text-base mt-1.5 text-center">
                  {hero.ratingLabel}
                </p>
              ) : null}
            </div>

            <div className="mt-8 md:mt-10 flex flex-col items-center">
              <button type="button" onClick={openForm} className={ctaPrimary}>
                <Sparkles className="size-5 md:size-6" />
                <span>{hero.ctaLabel}</span>
                <ChevronRight className="size-5 md:size-6" />
              </button>
              {hero.ctaSubline && (
                <p className="mt-3 text-sm text-slate-400">{hero.ctaSubline}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 text-white">
        <div className="section-container py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((s: any) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm md:text-base text-white/85 mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS / WHAT YOU GET */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute -top-32 -left-32 size-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 size-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(255 255 255 / 0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="section-container relative py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {perksSection.badge ? (
              <span className={sectionBadgeDark}>
                <Sparkles className="size-3.5" /> {perksSection.badge}
              </span>
            ) : null}
            <SplitHeading
              prefix={perksSection.headingPrefix}
              highlight={perksSection.headingHighlight}
              suffix={perksSection.headingSuffix}
              heading={perksSection.heading}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 text-white leading-tight"
            />
            <p className="text-slate-300 mt-4 text-base md:text-lg">
              {perksSection.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk: any) => {
              const perkImgUrl = safeImageUrl(perk.image) ?? null;
              return (
                <div
                  key={perk.title}
                  className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/8 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
                >
                  <div className="relative h-44 w-full shrink-0">
                    {perkImgUrl ? (
                      <Image
                        src={perkImgUrl}
                        alt={perk.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-amber-500/20" />
                    )}
                  </div>
                  <div className="p-7 flex flex-col gap-2 flex-1">
                    <h3 className="font-bold text-white text-lg">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
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
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute -top-32 -right-32 size-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 size-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              {whyChooseSection.badge ? (
                <span className={sectionBadgeDark}>
                  <Trophy className="size-3.5" /> {whyChooseSection.badge}
                </span>
              ) : null}
              <SplitHeading
                prefix={whyChooseSection.headingPrefix}
                highlight={whyChooseSection.headingHighlight}
                suffix={whyChooseSection.headingSuffix}
                heading={whyChooseSection.heading}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-5 text-white leading-tight"
              />
              <p className="text-slate-300 max-w-xl text-base md:text-lg leading-relaxed">
                {whyChooseSection.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {whyChooseFeatures.map((item: any) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/8 transition-colors"
                    >
                      <div className="shrink-0 size-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-sm">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={whyChooseImageUrl}
                alt="BMUS counselling team"
                width={1200}
                height={1400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                {whyChooseSection.imageBadge ? (
                  <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur border border-amber-400/40 px-3 py-1.5 rounded-full text-xs font-bold mb-3">
                    <Award className="size-3.5 text-amber-400" /> {whyChooseSection.imageBadge}
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

      {/* PROCESS / SIMPLE JOURNEY */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            {processSection.badge ? (
              <span className={sectionBadge}>
                <CalendarCheck className="size-3.5" /> {processSection.badge}
              </span>
            ) : null}
            <SplitHeading
              prefix={processSection.headingPrefix}
              highlight={processSection.headingHighlight}
              suffix={processSection.headingSuffix}
              heading={processSection.heading}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 text-slate-900 leading-tight"
            />
            <p className="text-slate-600 mt-4 text-base md:text-lg">
              {processSection.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((p: any) => {
              const stepImageUrl: string | null =
                safeImageUrl(p.image) ?? p.imageUrl ?? null;
              return (
                <div
                  key={p.step}
                  className="relative rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full h-44 shrink-0 overflow-hidden">
                    {stepImageUrl ? (
                      <Image
                        src={stepImageUrl}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 right-3 text-3xl font-black text-white/70 leading-none select-none drop-shadow">
                      {p.step}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
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
      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute -top-32 right-0 size-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-0 size-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="section-container relative py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {servicesSection.badge ? (
              <span className={sectionBadgeDark}>
                <Sparkles className="size-3.5" /> {servicesSection.badge}
              </span>
            ) : null}
            <SplitHeading
              prefix={servicesSection.headingPrefix}
              highlight={servicesSection.headingHighlight}
              suffix={servicesSection.headingSuffix}
              heading={servicesSection.heading}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 text-white leading-tight"
            />
            <p className="text-slate-300 mt-4 text-base md:text-lg">
              {servicesSection.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s: any) => {
              const Icon = getIcon(s.icon);
              const svcImgUrl = safeImageUrl(s.image) ?? null;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  <div className="relative h-44 w-full shrink-0">
                    {svcImgUrl ? (
                      <Image
                        src={svcImgUrl}
                        alt={s.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 size-10 rounded-xl bg-gradient-to-br from-amber-400/30 to-orange-500/30 text-amber-300 ring-1 ring-amber-400/40 flex items-center justify-center backdrop-blur-sm">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-2 flex-1">
                    <h3 className="font-bold text-white text-lg">{s.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
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
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute -top-32 -left-32 size-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 size-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="section-container relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {testimonialsSection.badge ? (
              <span className={sectionBadgeDark}>
                <Star className="size-3.5" /> {testimonialsSection.badge}
              </span>
            ) : null}
            <SplitHeading
              prefix={testimonialsSection.headingPrefix}
              highlight={testimonialsSection.headingHighlight}
              suffix={testimonialsSection.headingSuffix}
              heading={testimonialsSection.heading}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 text-white leading-tight"
            />
            <p className="text-slate-300 mt-4 text-base md:text-lg">
              {testimonialsSection.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t: any) => (
              <div
                key={t.name}
                className="relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300"
              >
                <Quote className="absolute top-5 right-5 size-8 text-amber-500/40" />
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="font-bold text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <CtaButton onClick={openForm}>
            {testimonialsSection.ctaLabel}
          </CtaButton>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      {googleReviewsSection.enabled !== false ? (
        <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute -top-32 -right-32 size-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 size-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="section-container relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GoogleLogo className="size-6" />
                <span className={sectionBadgeDark}>
                  {googleReviewsSection.badge || "Google Reviews"}
                </span>
              </div>
              <SplitHeading
                prefix={googleReviewsSection.headingPrefix}
                highlight={googleReviewsSection.headingHighlight}
                suffix={googleReviewsSection.headingSuffix}
                heading="What Our Students Say on Google"
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
              />
              <p className="text-slate-300 mt-4 text-base md:text-lg">
                {googleReviewsSection.description}
              </p>

              {/* Overall rating display */}
              <div className="mt-8 inline-flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-white">
                    {googleReviewsSection.overallRating || "4.9"}
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500 mt-1 justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <GoogleLogo className="size-5" />
                    <span className="font-bold text-white text-sm">Google</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {googleReviewsSection.totalReviews || "Based on 150+ reviews"}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {googleReviews.slice(0, 6).map((review: any, idx: number) => {
                const initials = (review.reviewerName || "U")
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();
                const profileImgUrl = review.profileImage?.asset?.url
                  ? safeImageUrl(review.profileImage)
                  : null;
                const avatarColors = [
                  "from-blue-500 to-indigo-600",
                  "from-emerald-500 to-teal-600",
                  "from-purple-500 to-violet-600",
                  "from-rose-500 to-pink-600",
                  "from-amber-500 to-orange-600",
                  "from-cyan-500 to-blue-600",
                ];
                const colorClass = avatarColors[idx % avatarColors.length];

                return (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-amber-500/30 hover:bg-white/8 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {profileImgUrl ? (
                          <div className="relative size-10 rounded-full overflow-hidden shrink-0">
                            <Image
                              src={profileImgUrl}
                              alt={review.reviewerName}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className={`size-10 rounded-full bg-gradient-to-br ${colorClass} text-white flex items-center justify-center text-sm font-bold shrink-0`}>
                            {initials}
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-white text-sm leading-tight">
                            {review.reviewerName}
                          </p>
                          {review.reviewDate ? (
                            <p className="text-xs text-slate-400 mt-0.5">{review.reviewDate}</p>
                          ) : null}
                        </div>
                      </div>
                      <GoogleLogo className="size-5 shrink-0" />
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-500 mb-3">
                      {Array.from({ length: review.rating ?? 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 flex-1">
                      {review.reviewText}
                    </p>
                  </div>
                );
              })}
            </div>

            <CtaButton onClick={openForm}>
              {hero.ctaLabel}
            </CtaButton>
          </div>
        </section>
      ) : null}

      {/* STUDENT VIDEOS (2x2 grid of uploaded videos) */}
      {studentVideosSection.enabled !== false && studentVideos.length > 0 ? (
        <section className="relative bg-slate-950 text-white overflow-hidden py-16 md:py-24">
          <div className="absolute -top-32 -right-32 size-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 size-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="section-container relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              {studentVideosSection.badge ? (
                <span className={sectionBadgeDark}>
                  <PlayCircle className="size-3.5" />{" "}
                  {studentVideosSection.badge}
                </span>
              ) : null}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 text-white uppercase leading-tight">
                {studentVideosSection.headingPrefix ? (
                  <span>{studentVideosSection.headingPrefix} </span>
                ) : null}
                {studentVideosSection.headingHighlight ? (
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    {studentVideosSection.headingHighlight}
                  </span>
                ) : null}
                {studentVideosSection.headingSuffix ? (
                  <span> {studentVideosSection.headingSuffix}</span>
                ) : null}
              </h2>
              {studentVideosSection.description ? (
                <p className="text-slate-300 mt-4 text-base md:text-lg">
                  {studentVideosSection.description}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
              {studentVideos.slice(0, 4).map((v, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 bg-slate-800 aspect-video"
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
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
            <div>
              {faqSection.badge ? (
                <span className={sectionBadge}>
                  <BookOpenCheck className="size-3.5" /> {faqSection.badge}
                </span>
              ) : null}
              <SplitHeading
                prefix={faqSection.headingPrefix}
                highlight={faqSection.headingHighlight}
                suffix={faqSection.headingSuffix}
                heading={faqSection.heading}
                className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-slate-900 leading-tight"
              />
              <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed">
                {faqSection.description}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq: any, idx: number) => (
                <AccordionItem key={faq.q} value={`item-${idx}`}>
                  <AccordionTrigger className="text-base md:text-lg font-semibold text-slate-900 py-5 text-left">
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="absolute -top-24 -right-24 size-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 size-80 bg-blue-500/15 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(255 255 255 / 0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="section-container relative py-20 md:py-28 text-center max-w-4xl mx-auto">
          {finalCtaSection.badge ? (
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="size-3.5" /> {finalCtaSection.badge}
            </div>
          ) : null}
          <SplitHeading
            prefix={finalCtaSection.headingPrefix}
            highlight={finalCtaSection.headingHighlight}
            suffix={finalCtaSection.headingSuffix}
            heading={finalCtaSection.heading}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white"
          />
          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            {finalCtaSection.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-5">
            <button type="button" onClick={openForm} className={ctaPrimary}>
              <CalendarCheck className="size-5 md:size-6" />
              {finalCtaSection.ctaLabel}
              <ChevronRight className="size-5 md:size-6" />
            </button>
            {finalCtaSection.phoneNumber ? (
              <a
                href={`tel:${finalCtaSection.phoneNumber.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-300 text-sm md:text-base font-semibold transition-colors"
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
        <div className="section-container py-14 md:py-18">
          <div className="flex items-center justify-center gap-3 mb-8">
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
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 shrink-0" />

          <div className="relative px-6 md:px-8 pt-7 pb-5 text-center border-b border-slate-100 bg-gradient-to-b from-amber-50/60 to-transparent shrink-0">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 shadow ring-1 ring-slate-200 text-slate-600 hover:text-slate-900"
            >
              <XIcon className="size-4" />
            </button>

            <div className="mx-auto mb-3 inline-flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/30 ring-4 ring-white">
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
