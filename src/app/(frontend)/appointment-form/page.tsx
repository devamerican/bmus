import AppointmentForm from "@/components/home/appointment-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
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

export default function AppointmentFormPage() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

      <div className="section-container my-8 md:my-12 lg:my-16 relative">
        <div className="text-center space-y-4 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-200/60">
            <Sparkles className="size-4" />
            Free Counselling Session
          </div>
          <h1 className="text-h1 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Counselling Appointment Form
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Career Counselling and Admission Guidance — book a slot with our
            experts in just a few minutes.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl shadow-blue-500/5 border border-slate-200/80 bg-white/90 backdrop-blur-sm relative overflow-hidden p-0 gap-0">
            <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600" />

            <CardHeader className="relative px-6 md:px-8 pt-8 pb-4 text-center border-b border-slate-100">
              <div className="mx-auto mb-3 inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/25">
                <CalendarCheck className="size-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                Book Your Slot
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Fill out the form below and our counselor will confirm your
                appointment shortly.
              </p>
            </CardHeader>

            <CardContent className="px-6 md:px-8 py-8">
              <AppointmentForm />
            </CardContent>

            <div className="px-6 md:px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="size-4 text-green-600" />
              <span>Your information is secure and will not be shared.</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
