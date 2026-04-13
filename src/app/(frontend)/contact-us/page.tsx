import CounselingForm from "@/components/home/counseling-form";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { buildMetadata, type SanitySeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await cachedSanityFetch<SanitySeo>(
    `*[_type == "contactUsPage"][0].seo`,
    {},
    3600,
    ['contact-us'],
  )
  return {
    ...buildMetadata(seo, {
      title: "Contact BMUS | MBBS Abroad Counseling & Admissions Support",
      description:
        "Contact BMUS for expert MBBS abroad counseling. Get personalized guidance, university selection & admission support today.",
      keywords: [
        "contact BMUS",
        "MBBS abroad counseling",
        "medical admission help",
      ],
    }),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    },
  }
}


export default function ContactUs() {
  const indiaOffices = [
    {
      city: "Palwal",
      state: "Haryana",
      address: "Opposite Indian Overseas Bank, Near Vivekanand School, Railway Road, Palwal - 121102",
    },
    {
      city: "Bhiwani",
      state: "Haryana",
      address:
        "Star Sainik Defence Academy, Rahul gas wali Gali, CR Resort k samne Mini by pass Shanti nagar Bhiwani Haryana",
    },
    {
      city: "Punhana",
      state: "Haryana",
      address: "Kasba Pinangwan, Dhanna Road, Tehsil Punhana, District Nuh, Haryana - 122508",
    },
    {
      city: "Nuh",
      state: "Haryana",
      address: "Bright Vision Academy, Ward No. 7, Near New Bus Stand, Nuh, Distt. Nuh, Haryana",
    },
    {
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      address: "M.S Public School, Sector-7, Sector-10, Raj Nagar, Ghaziabad, Uttar Pradesh - 201002",
    },
    {
      city: "Meerut",
      state: "Uttar Pradesh",
      address: "Kidzee Jagriti Vihar 221, 8, Garg Road, Sector-8, Jagriti Vihar, Meerut, Uttar Pradesh - 250004",
    },
  ];

  return (
    <section className="section-container my-12 space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-h1">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Reach out to us for expert MBBS abroad counseling and admission support. 
          Our team is here to guide you through every step of your medical journey.
        </p>
      </div>

      {/* PRIMARY CONTACT & FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* LEFT: Core Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Dubai Office */}
          <Card className="overflow-hidden border border-muted/30 shadow-sm bg-gradient-to-br from-white to-blue-50/30 dark:from-zinc-900 dark:to-zinc-900/30">
            <CardHeader className="pb-2 border-b border-blue-100/30 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Building className="text-green-600" size={20} />
                </div>
                <h3 className="text-lg font-bold">Dubai Office</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Flat no - 304, Bhueira Corniche, Shaheen Tower, Dubai, UAE
              </p>
              <div className="flex items-center gap-3 p-3 bg-white/40 dark:bg-black/20 rounded-xl border border-blue-50/50 dark:border-zinc-800">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <Phone className="text-red-500" size={16} />
                </div>
                <Link href="tel:+971508786484" className="font-semibold hover:text-primary transition-colors">
                  +971 508786484
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* General Support & Email */}
          <Card className="overflow-hidden border border-muted/30 shadow-sm bg-gradient-to-br from-white to-green-50/30 dark:from-zinc-900 dark:to-zinc-900/30">
            <CardHeader className="pb-2 border-b border-green-100/30 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <h3 className="text-lg font-bold">Quick Connect</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-5">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Email Us</p>
                <Link href="mailto:bmus.helpdesk@gmail.com" className="text-lg font-medium hover:text-primary transition-colors block">
                  bmus.helpdesk@gmail.com
                </Link>
              </div>
              
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">India Support</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link href="tel:+919354086500" className="flex items-center gap-2 p-2 px-3 bg-white/40 dark:bg-black/20 rounded-lg border border-green-50/50 dark:border-zinc-800 hover:border-primary/30 transition-all group">
                    <Phone size={14} className="text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">+91 9354086500</span>
                  </Link>
                  <Link href="tel:+917015303343" className="flex items-center gap-2 p-2 px-3 bg-white/40 dark:bg-black/20 rounded-lg border border-green-50/50 dark:border-zinc-800 hover:border-primary/30 transition-all group">
                    <Phone size={14} className="text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">+91 7015303343</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: Counseling Form */}
        <div className="lg:col-span-3 h-full">
          <Card className="p-8 h-full shadow-md border border-muted/40 bg-background flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/5 rounded-full -ml-12 -mb-12 transition-transform group-hover:scale-110 duration-500" />
            
            <CardHeader className="relative px-0 pt-0 mb-8 text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight">We&apos;d love to hear from you!</h2>
              <p className="text-muted-foreground mt-2">Fill out the form below and our counselor will get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <CounselingForm />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* INDIA NETWORK / BRANCHES */}
      <div className="space-y-10 group/locations">
        <div className="flex flex-col items-center gap-3">
          <div className="h-1 w-20 bg-primary/20 rounded-full group-hover/locations:w-32 transition-all duration-500" />
          <h2 className="text-3xl font-bold text-center">Our India Network</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {indiaOffices.map((office, i) => (
            <Card key={i} className="hover-card-glass flex flex-col border-muted/30 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">{office.state}</span>
                    <h4 className="text-xl font-bold">{office.city}</h4>
                  </div>
                  <div className="p-2 transition-colors duration-300 group-hover:bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={20} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {office.address}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="space-y-8">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <MapPin size={24} className="text-red-500 animate-bounce" /> 
            Find Us on Map
          </h2>
        </div>
        <div className="rounded-3xl border border-muted/50 overflow-hidden shadow-md bg-muted h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.9652196791862!2d77.33465947576816!3d28.147546975933043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd3d55e3004a1%3A0x8e3398a6b5171328!2sBMUS-%20Abroad%20MBBS%20Consultant%20%7C%20MBBS%20Consultancy%20in%20Palwal%20Haryana!5e0!3m2!1sen!2sin!4v1773571860127!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
