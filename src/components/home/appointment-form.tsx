"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppointmentFormType, appointmentFormSchema } from "@/lib/zod";
import {
  Calendar,
  Clock,
  Globe,
  Loader,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { toast } from "sonner";
import { submitAppointmentForm } from "@/app/action";
import { cn } from "@/lib/utils";

const countries = [
  { value: "india", label: "India", flag: "🇮🇳" },
  { value: "russia", label: "Russia", flag: "🇷🇺" },
  { value: "bangladesh", label: "Bangladesh", flag: "🇧🇩" },
  { value: "kazakhstan", label: "Kazakhstan", flag: "🇰🇿" },
  { value: "poland", label: "Poland", flag: "🇵🇱" },
  { value: "mauritius", label: "Mauritius", flag: "🇲🇺" },
  { value: "nepal", label: "Nepal", flag: "🇳🇵" },
  { value: "canada", label: "Canada", flag: "🇨🇦" },
];

const timeSlots = [
  "9:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 01:30 PM",
  "01:30 PM - 02:00 PM",
  "02:00 PM - 02:30 PM",
  "02:30 PM - 03:00 PM",
  "03:00 PM - 03:30 PM",
  "03:30 PM - 04:00 PM",
  "04:00 PM - 04:30 PM",
  "04:30 PM - 05:00 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM",
];

const inputClass =
  "h-11 pl-10 pr-3 bg-slate-50/60 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:bg-white focus-visible:border-blue-500 focus-visible:ring-blue-500/20 transition-colors";

const triggerClass =
  "w-full h-11 pl-10 pr-3 bg-slate-50/60 border-slate-200 text-slate-900 data-[placeholder]:text-slate-400 focus-visible:bg-white focus-visible:border-blue-500 focus-visible:ring-blue-500/20 transition-colors";

const labelClass = "text-sm font-medium text-slate-700";

const iconClass =
  "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none z-10";

export default function AppointmentForm() {
  const form = useForm<AppointmentFormType>({
    defaultValues: {
      country: "",
      name: "",
      phone: "",
      whatsapp: "",
      email: "",
      date: "",
      time: "",
      query: "",
    },
    resolver: zodResolver(appointmentFormSchema),
  });

  async function onSubmit(data: AppointmentFormType) {
    try {
      const res = await submitAppointmentForm({
        ...data,
        page: window.location.pathname,
      });
      if (res.success) {
        toast.success("Appointment booked successfully!", {
          description: "We will confirm your slot shortly.",
        });
        form.reset();
        return;
      }
      toast.error(res.message || "Something went wrong. Try again later");
    } catch {
      toast.error("Something went wrong. Try again later");
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Selected Country</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <div className="relative">
                    <Globe className={iconClass} />
                    <SelectTrigger className={triggerClass}>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </div>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      <span className="mr-2">{country.flag}</span>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Full Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className={iconClass} />
                  <Input
                    placeholder="John Doe"
                    className={inputClass}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Phone No.</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className={iconClass} />
                    <Input
                      placeholder="+91 9354086500"
                      className={inputClass}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>WhatsApp No.</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MessageSquare className={iconClass} />
                    <Input
                      placeholder="+91 9354086500"
                      className={inputClass}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className={iconClass} />
                  <Input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className={inputClass}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Booking Date</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Calendar className={iconClass} />
                    <Input
                      type="date"
                      min={today}
                      className={cn(inputClass, "date-picker-right")}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Booking Time</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <div className="relative">
                      <Clock className={iconClass} />
                      <SelectTrigger className={triggerClass}>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                    </div>
                  </FormControl>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Your Query</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about the course, country, or any questions you have…"
                  rows={4}
                  className="bg-slate-50/60 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:bg-white focus-visible:border-blue-500 focus-visible:ring-blue-500/20 transition-colors resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size="lg"
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full h-12 text-base font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader className="animate-spin" /> Submitting…
            </>
          ) : (
            <>
              Book Appointment <Send className="size-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
