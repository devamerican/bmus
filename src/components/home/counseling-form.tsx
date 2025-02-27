"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CounselingFormType, counselingFormSchema } from "@/lib/zod";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";

export default function CounselingForm() {
  const form = useForm<CounselingFormType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(counselingFormSchema),
  });

  function onSubmit(data: CounselingFormType) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Ajay Gaur" {...field} className="w-full" />
              </FormControl>
              {/* <FormDescription>Enter your full name.</FormDescription> */}
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
                <Input placeholder="ajay@example.com" {...field} />
              </FormControl>
              {/* <FormDescription>Enter your email address.</FormDescription> */}
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
                <Input placeholder="+91-9910180049" {...field} />
              </FormControl>
              {/* <FormDescription>Enter your phone number.</FormDescription> */}
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
                <Textarea
                  placeholder="Course/Country/Query/Suggestion"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Enter your query or message.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
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
