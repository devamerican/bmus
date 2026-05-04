import AppointmentForm from "@/components/home/appointment-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CalendarCheck,
  Clock3,
  Headphones,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | BMUS - Career Counselling & Admission Guidance",
  description:
    "Book a counselling appointment with BMUS for expert MBBS abroad guidance. Choose your preferred date, time slot, and get personalized admission support.",
  keywords: [
    "BMUS appointment",
    "MBBS counselling",
    "career counselling appointment",
    "MBBS abroad guidance",
    "admission counselling booking",
  ],
};

const perks = [
  {
    icon: Headphones,
    title: "Free Expert Counselling",
    desc: "1-on-1 session with experienced advisors",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Clock3,
    title: "Flexible Time Slots",
    desc: "Pick a time that works best for you",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: Star,
    title: "Trusted Guidance",
    desc: "5,000+ students placed worldwide",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function AppointmentFormPage() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(99 102 241 / 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="section-container my-8 md:my-12 lg:my-16 relative">
        <div className="text-center space-y-4 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
            <Sparkles className="size-4 text-amber-500" />
            Free Counselling Session
          </div>
          <h1 className="text-h1 bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
            Counselling Appointment Form
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Career Counselling and Admission Guidance — book a slot with our
            experts in just a few minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 max-w-6xl mx-auto items-start">
          {/* Form card */}
          <Card className="shadow-2xl shadow-blue-500/10 border border-slate-200/80 bg-white/95 backdrop-blur-sm relative overflow-hidden p-0 gap-0 order-2 lg:order-1">
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500" />

            <CardHeader className="relative px-6 md:px-8 pt-8 pb-5 text-center border-b border-slate-100 bg-gradient-to-b from-blue-50/50 to-transparent">
              <div className="absolute top-4 right-4 size-20 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-4 left-4 size-20 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="mx-auto mb-3 inline-flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 ring-4 ring-white">
                <CalendarCheck className="size-7" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                Book Your Slot
              </h2>
              <p className="text-slate-600 mt-1 text-sm">
                Fill out the form below and our counselor will confirm your
                appointment shortly.
              </p>
            </CardHeader>

            <CardContent className="px-6 md:px-8 py-8">
              <AppointmentForm />
            </CardContent>

            <div className="px-6 md:px-8 py-4 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 border-t border-emerald-100 flex items-center justify-center gap-2 text-xs font-medium text-emerald-800">
              <ShieldCheck className="size-4 text-emerald-600" />
              <span>Your information is secure and will not be shared.</span>
            </div>
          </Card>

          {/* Side panel */}
          <aside className="order-1 lg:order-2 space-y-4 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 p-6 text-white shadow-xl shadow-blue-500/25">
              <div className="absolute -top-8 -right-8 size-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 size-32 bg-cyan-300/20 rounded-full blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  <Sparkles className="size-3" /> Why book with us
                </div>
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  Your future starts with one conversation.
                </h3>
                <p className="text-sm text-white/85">
                  Get personalized guidance from advisors who&apos;ve helped
                  thousands of students secure admissions abroad.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="group relative flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
                  >
                    <div
                      className={`shrink-0 size-10 rounded-lg bg-gradient-to-br ${perk.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-900 text-sm">
                        {perk.title}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {perk.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
