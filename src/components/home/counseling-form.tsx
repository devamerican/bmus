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
import { CounselingFormType, counselingFormSchema } from "@/lib/zod";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import {toast} from "sonner";
import { submitForm } from "@/app/action";

interface CounselingFormProps {
  theme?: "light" | "dark";
}

export default function CounselingForm({ theme = "light" }: CounselingFormProps) {
  const form = useForm<CounselingFormType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(counselingFormSchema),
  });

  const inputClass = theme === "dark" ? "bg-secondary/10 border-none" : "";

  async function onSubmit(data: CounselingFormType) {
    try {
      const res = await submitForm({...data, page: window.location.pathname})
      if(res.success){
          // toast.success(res.message)
          toast.success('Thank you for your message!', {
            description: 'We will get back to you soon.'
          })
          form.reset()
          return
      }
      toast.error(res.message || "Something went wrong. Try again later")
      
  } catch (error) {
      // console.log(error)
      toast.error("Something went wrong. Try again later")
  }

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input className={inputClass} placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className={inputClass} placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input className={inputClass} placeholder="+91-9910180049" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea className={inputClass} placeholder="Course/Country/Query/Suggestion" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"blue"} disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? (
            <>
              <Loader className="animate-spin" /> Submitting
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
