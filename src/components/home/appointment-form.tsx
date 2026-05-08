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
  CalendarDays,
  Clock,
  Globe2,
  Loader,
  Mail,
  MessageCircle,
  MessageSquareText,
  Phone,
  Send,
  User,
  UserRound,
  CalendarClock,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import {
  submitAppointmentForm,
  submitCounselingAppointment,
} from "@/app/action";
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
  "h-12 pl-14 pr-3 bg-white border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-blue-500 focus-visible:ring-blue-500/15 focus-visible:ring-[3px] transition-colors rounded-lg shadow-sm";

const triggerClass =
  "w-full h-12 data-[size=default]:h-12 pl-14 pr-3 bg-white border-2 border-slate-200 text-slate-900 data-[placeholder]:text-slate-400 hover:border-slate-300 focus-visible:border-blue-500 focus-visible:ring-blue-500/15 focus-visible:ring-[3px] transition-colors rounded-lg shadow-sm";

const labelClass = "text-sm font-semibold text-slate-700";

function FieldIcon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute left-1.5 top-1/2 -translate-y-1/2 size-9 rounded-md flex items-center justify-center text-white shadow-sm pointer-events-none z-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  iconClass,
}: {
  icon: React.ReactNode;
  title: string;
  iconClass: string;
}) {
  return (
    <div className="flex items-center gap-2.5 pb-1">
      <div
        className={cn(
          "size-7 rounded-md flex items-center justify-center text-white shadow-sm",
          iconClass,
        )}
      >
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-800 tracking-wide uppercase">
        {title}
      </h3>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
    </div>
  );
}

interface AppointmentFormProps {
  variant?: "appointment" | "counseling";
  submitLabel?: string;
}

export default function AppointmentForm({
  variant = "appointment",
  submitLabel,
}: AppointmentFormProps = {}) {
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
      const action =
        variant === "counseling"
          ? submitCounselingAppointment
          : submitAppointmentForm;
      const res = await action({
        ...data,
        page: window.location.pathname,
      });
      if (res.success) {
        if (variant === "counseling") {
          form.reset();
          window.location.href = "/thankyou";
          return;
        }
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="space-y-5">
          <SectionHeader
            icon={<UserRound className="size-3.5" />}
            title="Personal Details"
            iconClass="bg-gradient-to-br from-blue-500 to-indigo-600"
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Selected Country</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <div className="relative">
                      <FieldIcon className="bg-gradient-to-br from-indigo-500 to-purple-600">
                        <Globe2 className="size-4" />
                      </FieldIcon>
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
                    <FieldIcon className="bg-gradient-to-br from-blue-500 to-cyan-600">
                      <User className="size-4" />
                    </FieldIcon>
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
                      <FieldIcon className="bg-gradient-to-br from-emerald-500 to-teal-600">
                        <Phone className="size-4" />
                      </FieldIcon>
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
                      <FieldIcon className="bg-gradient-to-br from-green-500 to-emerald-600">
                        <MessageCircle className="size-4" />
                      </FieldIcon>
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
                <FormLabel className={labelClass}>Email Address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <FieldIcon className="bg-gradient-to-br from-violet-500 to-purple-600">
                      <Mail className="size-4" />
                    </FieldIcon>
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
        </div>

        <div className="space-y-5 pt-2">
          <SectionHeader
            icon={<CalendarClock className="size-3.5" />}
            title="Appointment Schedule"
            iconClass="bg-gradient-to-br from-orange-500 to-amber-600"
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
                      <FieldIcon className="bg-gradient-to-br from-orange-500 to-red-500">
                        <CalendarDays className="size-4" />
                      </FieldIcon>
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
                        <FieldIcon className="bg-gradient-to-br from-pink-500 to-rose-600">
                          <Clock className="size-4" />
                        </FieldIcon>
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
        </div>

        <div className="space-y-5 pt-2">
          <SectionHeader
            icon={<MessageSquareText className="size-3.5" />}
            title="Your Message"
            iconClass="bg-gradient-to-br from-cyan-500 to-blue-600"
          />

          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Tell us more</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Course / Country / Query / Suggestion — share what you'd like to discuss with our counselor."
                    rows={4}
                    className="bg-white border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-blue-500 focus-visible:ring-blue-500/15 focus-visible:ring-[3px] transition-colors rounded-lg shadow-sm resize-none p-4"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          size="lg"
          disabled={form.formState.isSubmitting}
          type="submit"
          className="relative w-full h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          {form.formState.isSubmitting ? (
            <>
              <Loader className="animate-spin" /> Submitting…
            </>
          ) : (
            <>
              <Sparkles className="size-4" />
              {submitLabel ||
                (variant === "counseling"
                  ? "Book My Free Counselling"
                  : "Book My Appointment")}
              <Send className="size-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
