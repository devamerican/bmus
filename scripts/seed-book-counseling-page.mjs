// Seeds the bookCounselingPage singleton with the existing static content
// from src/components/counseling/book-counseling.tsx.
//
// Usage:
//   SANITY_WRITE_TOKEN=sk... node scripts/seed-book-counseling-page.mjs

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o56xr1r5'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2025-05-06'
const token = process.env.SANITY_WRITE_TOKEN

if (!token) {
  console.error('❌ Missing SANITY_WRITE_TOKEN environment variable.')
  process.exit(1)
}

const apiUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`

const doc = {
  _id: 'bookCounselingPage',
  _type: 'bookCounselingPage',
  header: {
    _type: 'bookCounselingHeader',
    phoneNumber: '+919354086500',
    phoneDisplay: '+91 93540 86500',
    brandLines: ['Best', 'Medical', 'University', 'Services'],
  },
  hero: {
    _type: 'bookCounselingHero',
    badge: 'Free MBBS Abroad Counselling — Limited Slots This Week',
    headingPrefix: 'Become a',
    headingHighlight: 'Doctor',
    headingSuffix: "without burning a hole in your family's savings.",
    description:
      'Get end-to-end guidance from BMUS to study MBBS in NMC-approved universities across Russia, Kazakhstan, Bangladesh, Nepal, Poland and more — at a fraction of Indian private college fees.',
    bullets: [
      'NMC-approved universities only',
      'Transparent, all-inclusive fee structure',
      'Visa, travel & hostel handled by us',
      'FMGE / NExT coaching support',
    ],
    ratingValue: '4.9/5',
    ratingLabel: 'Trusted by 5,000+ students & parents',
    ctaLabel: 'Yes! Book My Free Counselling',
    ctaSubline: '100% Free • No obligation • Reply within 24 hours',
  },
  videoSection: {
    _type: 'bookCounselingVideoSection',
    enabled: true,
    badge: 'Watch how we help',
    heading: 'See BMUS counselling in action',
    description:
      'A quick look at how our counsellors guide students from first call to campus admission.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  stats: [
    { _type: 'bookCounselingStat', _key: 'stat-1', value: '5,000+', label: 'Students Placed' },
    { _type: 'bookCounselingStat', _key: 'stat-2', value: '50+', label: 'Partner Universities' },
    { _type: 'bookCounselingStat', _key: 'stat-3', value: '8+', label: 'Countries Covered' },
    { _type: 'bookCounselingStat', _key: 'stat-4', value: '15+', label: 'Years of Expertise' },
  ],
  perksSection: {
    _type: 'bookCounselingPerksSection',
    badge: 'What you get',
    heading: 'Built for students who deserve clear, honest guidance',
    description:
      'Every counselling session is structured to give you clarity on universities, costs, eligibility and the path ahead.',
    perks: [
      {
        _type: 'bookCounselingPerk',
        _key: 'perk-1',
        icon: 'Headphones',
        title: 'Free 1-on-1 Counselling',
        desc: 'Personal sessions with senior MBBS-abroad advisors who understand your goals.',
        color: 'from-blue-500 to-indigo-600',
      },
      {
        _type: 'bookCounselingPerk',
        _key: 'perk-2',
        icon: 'Clock3',
        title: 'Response within 24 Hours',
        desc: 'Submit the form and our counsellor will reach out the same business day.',
        color: 'from-orange-500 to-pink-500',
      },
      {
        _type: 'bookCounselingPerk',
        _key: 'perk-3',
        icon: 'ShieldCheck',
        title: 'Verified Universities Only',
        desc: 'We recommend NMC-approved, WHO-listed institutions across the globe.',
        color: 'from-emerald-500 to-teal-600',
      },
    ],
    ctaLabel: 'Claim My Free Counselling Session',
    ctaSubline: 'Talk to a senior counsellor — free, 30 minutes',
  },
  whyChooseSection: {
    _type: 'bookCounselingWhyChooseSection',
    badge: 'Why BMUS',
    heading: 'Why thousands of Indian families trust BMUS for MBBS abroad',
    description:
      'BMUS (Best Medical University Services) is a leading consultancy guiding NEET-qualified students to top medical universities since 2009. We bring transparency, experience and genuine care to every step of your journey.',
    features: [
      {
        _type: 'bookCounselingFeature',
        _key: 'why-1',
        icon: 'Trophy',
        title: 'Proven Track Record',
        desc: '15+ years guiding Indian students to top medical universities worldwide.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'why-2',
        icon: 'ShieldCheck',
        title: 'Trusted by Families',
        desc: 'Transparent pricing, verified universities, and zero hidden charges.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'why-3',
        icon: 'Plane',
        title: 'End-to-End Support',
        desc: 'From shortlisting to admission, visa, travel and on-arrival assistance.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'why-4',
        icon: 'BookOpenCheck',
        title: 'FMGE/NExT Coaching',
        desc: 'Free coaching support so you return home licensed to practise in India.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'why-5',
        icon: 'IndianRupee',
        title: 'Affordable Tuition',
        desc: 'MBBS programs starting from a fraction of Indian private college fees.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'why-6',
        icon: 'Users',
        title: 'Active Student Community',
        desc: 'Join 5,000+ alumni and current students for guidance at every step.',
      },
    ],
    imageBadge: '15+ Years of Excellence',
    imageQuote:
      'Empowering future doctors with the right university, the right way.',
    ctaLabel: 'Talk to a BMUS Counsellor',
    ctaSubline: 'Join 5,000+ students who chose BMUS',
  },
  processSection: {
    _type: 'bookCounselingProcessSection',
    badge: 'Simple journey',
    heading: 'Your 5-step path from counselling to campus',
    description:
      "We've simplified MBBS abroad admission so you and your family never feel lost.",
    steps: [
      {
        _type: 'bookCounselingProcessStep',
        _key: 'step-1',
        step: '01',
        icon: 'PhoneCall',
        title: 'Book Free Counselling',
        desc: 'Share your details and our advisor calls you within 24 hours.',
      },
      {
        _type: 'bookCounselingProcessStep',
        _key: 'step-2',
        step: '02',
        icon: 'Globe2',
        title: 'Shortlist University',
        desc: 'Pick the right country & university based on budget, NEET score and goals.',
      },
      {
        _type: 'bookCounselingProcessStep',
        _key: 'step-3',
        step: '03',
        icon: 'FileBadge',
        title: 'Admission & Documentation',
        desc: 'We handle applications, invitation letters, fee transfer and verification.',
      },
      {
        _type: 'bookCounselingProcessStep',
        _key: 'step-4',
        step: '04',
        icon: 'Plane',
        title: 'Visa & Travel',
        desc: 'End-to-end visa assistance, ticketing and pre-departure briefing.',
      },
      {
        _type: 'bookCounselingProcessStep',
        _key: 'step-5',
        step: '05',
        icon: 'GraduationCap',
        title: 'On-Campus Support',
        desc: 'Hostel, food, local SIM and continuous support till you graduate.',
      },
    ],
    ctaLabel: 'Start Step 1 — Book My Free Call',
    ctaSubline: 'Step 1 starts the moment you book — 100% free',
  },
  servicesSection: {
    _type: 'bookCounselingServicesSection',
    badge: 'What we offer',
    heading: 'Complete MBBS-abroad support, in one place',
    description:
      'Beyond admissions, we take care of every detail — so you can focus on becoming a great doctor.',
    services: [
      {
        _type: 'bookCounselingFeature',
        _key: 'svc-1',
        icon: 'Stethoscope',
        title: 'MBBS Abroad Admission',
        desc: 'Direct admission in 50+ NMC-approved universities across 8+ countries.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'svc-2',
        icon: 'Microscope',
        title: 'Course & University Selection',
        desc: 'Personalised shortlist based on your NEET score, budget, and preference.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'svc-3',
        icon: 'FileBadge',
        title: 'Visa & Documentation',
        desc: 'Complete paperwork, embassy support and fast-tracked student visas.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'svc-4',
        icon: 'Languages',
        title: 'Language & FMGE Prep',
        desc: 'Local-language basics and FMGE/NExT coaching for a smooth return.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'svc-5',
        icon: 'MapPin',
        title: 'Travel & Forex',
        desc: 'Tickets, foreign exchange, and group travel arrangements at student rates.',
      },
      {
        _type: 'bookCounselingFeature',
        _key: 'svc-6',
        icon: 'Award',
        title: 'Career & Internship Guidance',
        desc: 'Internship, residency and licensing support after graduation.',
      },
    ],
    ctaLabel: 'Get End-to-End Help — Free Counselling',
    ctaSubline: 'Everything from documentation to FMGE prep — handled.',
  },
  testimonialsSection: {
    _type: 'bookCounselingTestimonialsSection',
    badge: 'Student stories',
    heading: 'Real journeys, real outcomes',
    description:
      'Hear from BMUS students who are already studying or practising medicine across the globe.',
    testimonials: [
      {
        _type: 'bookCounselingTestimonial',
        _key: 'tst-1',
        name: 'Aman Verma',
        role: 'MBBS Student • Russia',
        quote:
          'BMUS made the whole admission process smooth. From documentation to landing in Russia, every step was handled professionally.',
        rating: 5,
      },
      {
        _type: 'bookCounselingTestimonial',
        _key: 'tst-2',
        name: 'Priya Sharma',
        role: 'MBBS Graduate • Kazakhstan',
        quote:
          'Honest fee structure and constant support from the BMUS team. I cleared FMGE on the first attempt thanks to their guidance.',
        rating: 5,
      },
      {
        _type: 'bookCounselingTestimonial',
        _key: 'tst-3',
        name: 'Rohit Singh',
        role: 'MBBS Student • Bangladesh',
        quote:
          "I was confused between countries. The free counselling session helped me pick the right university within my family's budget.",
        rating: 5,
      },
    ],
    ctaLabel: 'Become Our Next Success Story',
    ctaSubline: 'Your story could be next — start with a free call',
  },
  faqSection: {
    _type: 'bookCounselingFaqSection',
    badge: 'FAQ',
    heading: 'Questions parents and students ask',
    description:
      'Still unsure? Our counsellors will answer everything in your free session.',
    faqs: [
      {
        _type: 'bookCounselingFaq',
        _key: 'faq-1',
        q: 'Is studying MBBS abroad recognised in India?',
        a: 'Yes. BMUS partners only with universities recognised by the National Medical Commission (NMC) and listed by the WHO. After graduation, you can appear for FMGE/NExT and practise medicine in India.',
      },
      {
        _type: 'bookCounselingFaq',
        _key: 'faq-2',
        q: 'How much does MBBS abroad cost?',
        a: 'Total cost ranges from ₹18 lakh to ₹75 lakh for the entire course depending on the country and university. Our counsellors share a transparent breakdown of tuition, hostel, food, and visa fees during your free session.',
      },
      {
        _type: 'bookCounselingFaq',
        _key: 'faq-3',
        q: 'Do I need NEET to study MBBS abroad?',
        a: 'Yes. As per NMC regulations, qualifying NEET is mandatory for any Indian student pursuing MBBS abroad and intending to practise in India.',
      },
      {
        _type: 'bookCounselingFaq',
        _key: 'faq-4',
        q: 'What language is the course taught in?',
        a: 'Most BMUS-recommended universities offer MBBS fully in English medium. Local-language classes are provided in the first year only for clinical interaction with patients.',
      },
      {
        _type: 'bookCounselingFaq',
        _key: 'faq-5',
        q: 'Will BMUS help with visa and travel?',
        a: 'Absolutely. We handle invitation letters, embassy paperwork, visa filing, ticketing, forex and pre-departure briefing — completely end to end.',
      },
      {
        _type: 'bookCounselingFaq',
        _key: 'faq-6',
        q: 'Is the counselling really free?',
        a: 'Yes. Our counselling sessions are 100% free with no obligation. You only pay university fees once you choose to enrol.',
      },
    ],
    ctaLabel: 'Ask My Question — Book Free Call',
    ctaSubline: 'Get answers tailored to your NEET score and budget',
  },
  finalCtaSection: {
    _type: 'bookCounselingFinalCtaSection',
    badge: 'Limited free slots this week',
    heading: 'Your dream of becoming a doctor is closer than you think.',
    description:
      'Book a free counselling session today and take the first confident step towards an MBBS abroad — at a fraction of the cost and zero compromise on quality.',
    ctaLabel: 'Book My Free Counselling Now',
    phoneLabel: 'Or call us directly:',
    phoneNumber: '+91 93540 86500',
  },
  dialog: {
    _type: 'bookCounselingDialogContent',
    title: 'Book Your Free Counselling',
    description:
      'Fill the details and our counsellor will contact you in the next 24 hours.',
    securityNote: 'Your information is secure and 100% confidential.',
  },
  footer: {
    _type: 'bookCounselingFooterSection',
    brandText: 'BMUS — Best Medical University Services',
    paragraphs: [
      'This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. This site is also not a part of Google or YouTube and is not endorsed by Google LLC in any way.',
      'DISCLAIMER: The student outcomes, admission timelines and university fees shared on this page are based on actual cases handled by BMUS counsellors. Please understand that individual results vary and depend on many factors — including but not limited to your NEET qualification, academic background, choice of country and university, embassy decisions, and personal effort. Studying MBBS abroad and clearing FMGE/NExT requires sustained, consistent work. Nothing on this page should be construed as a guarantee of admission, scholarship, visa approval, or future medical practice. All information is shared for educational and counselling purposes only and may be updated as university policies change.',
      'By submitting your details on this page, you consent to be contacted by BMUS counsellors via phone, WhatsApp and email regarding your MBBS-abroad enquiry. Your information is kept strictly confidential and is never sold to third parties.',
    ],
    copyright: '© {year} Best Medical University Services (BMUS). All rights reserved.',
  },
  seo: {
    _type: 'seo',
    title: 'Book Free MBBS Abroad Counselling | BMUS',
    description:
      'Book your free 1-on-1 MBBS abroad counselling session with BMUS. Get expert guidance on NMC-approved universities, fees, eligibility, visa and admission.',
    keywords: [
      'book counselling',
      'MBBS counselling',
      'MBBS abroad guidance',
      'admission counselling',
      'BMUS counselling',
    ],
  },
}

console.log(`🔗 Project: ${projectId} / ${dataset}`)
console.log('📝 Seeding bookCounselingPage singleton...')

const res = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    mutations: [{ createOrReplace: doc }],
  }),
})

if (!res.ok) {
  const text = await res.text()
  console.error(`❌ HTTP ${res.status}: ${text}`)
  process.exit(1)
}

const json = await res.json()
console.log('✅ Done.', JSON.stringify(json.results ?? json, null, 2))
