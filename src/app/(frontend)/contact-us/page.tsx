import CounselingForm from "@/components/home/counseling-form";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact BMUS | MBBS Abroad Counseling & Admissions Support",
  description:
    "Contact BMUS for expert MBBS abroad counseling. Get personalized guidance, university selection & admission support today.",
  keywords: [
    "contact BMUS",
    "MBBS abroad counseling",
    "medical admission help",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
  },
};


export default function ContactUs() {
  return (
    <section className="section-container my-10">
      <h1 className="text-center text-h1 mb-16">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Contact Info */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Dubai Office */}
          <Card className="bg-muted shadow-none border-none">
            <CardContent className="space-y-2 pl-10">
            <div className="flex items-center gap-3">
              <Building className="text-green-600" />
              <h3 className="text-lg font-semibold">Dubai Office</h3>
            </div>
            <div>
              <p>Flat no - 304, Bhueira Corniche, Shaheen Tower, Dubai, UAE</p>
            </div>
              <div className="flex items-center gap-2">
                <Phone className="text-red-500" size={16} />
                <Link href="tel:+971508786484" className="hover:text-blue-600">
                  +971 508786484
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* India Offices */}
          <Card className="bg-muted shadow-none border-none">
            <CardContent className="space-y-3 pl-10">
            <div className="flex items-center gap-3">
              <Building className="text-green-600" />
              <h3 className="text-lg font-semibold">India Offices</h3>
            </div>
              {[
                "Opposite Indian Overseas Bank, Near Vivekanand School, Railway Road, Palwal - 121102",
                "Kidzee School, 221/8, Sector - 8, Garh Road, Jagriti Vihar, Meerut, Uttar Pradesh - 250001",
                "M. S. Public School Sector 7, Raj Nagar, Ghaziabad, Uttar Pradesh - 201002",
              ].map((addr, i) => (
                <p key={i}>{addr}</p>
              ))}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="text-red-500" size={16} />
                  <Link href="tel:+919050086500" className="hover:text-blue-600">
                    +91 9050086500
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-red-500" size={16} />
                  <Link href="tel:+917015303343" className="hover:text-blue-600">
                    +91 7015303343
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-muted shadow-none border-none">
            <CardContent className="pl-10 space-y-2">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
              <Link href="mailto:info@eduabroadservices.com" className="hover:text-blue-600">
                info@eduabroadservices.com
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: Counseling Form */}
        <Card className="p-6 py-10 max-w-3xl mx-auto w-full shadow-none border-2 border-muted">
          <CardHeader className="mb-4">
            <h2 className="text-h2">We&apos;d love to hear from you!</h2>
          </CardHeader>
          <CardContent>
            <CounselingForm />
          </CardContent>
        </Card>
      </div>

      {/* Map */}
      <div className="mt-32">
        <h2 className="text-h2 mb-8 text-center flex justify-center items-center gap-3">
          <MapPin size={32} /> Find Us on Map
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.960262587472!2d77.33471047576815!3d28.147697875932984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd24a4aaa4139%3A0x4e42f7f2f52396d7!2sAmerican%20Spoken%20English%20Classes!5e0!3m2!1sen!2sin!4v1740835136432!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0", width: "100%", borderRadius: "16px", overflow: "hidden" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
