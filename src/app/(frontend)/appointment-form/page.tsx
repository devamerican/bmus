import AppointmentForm from "@/components/home/appointment-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <section className="section-container my-8 md:my-12 lg:my-16">
      <div className="text-center space-y-4 mb-10 md:mb-14 lg:mb-20">
        <h1 className="text-h1">Counselling Appointment Form</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          Career Counselling and Admission Guidance
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-md border border-muted/40 bg-background relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/5 rounded-full -ml-12 -mb-12 transition-transform group-hover:scale-110 duration-500" />

          <CardHeader className="relative px-6 pt-8 pb-2 text-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Book Your Slot
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Fill out the form below and our counselor will confirm your
              appointment.
            </p>
          </CardHeader>

          <CardContent className="px-6 pb-8 pt-4">
            <AppointmentForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
