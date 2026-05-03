import {z} from 'zod'

export const counselingFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email(),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string(),
})
export type CounselingFormType = z.infer<typeof counselingFormSchema>

export const appointmentFormSchema = z.object({
  country: z.string().min(1, "Please select a country"),
  name: z.string().trim().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number is required"),
  whatsapp: z.string().min(10, "WhatsApp number is required"),
  email: z.string().email("Please enter a valid email"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  query: z.string().optional(),
})
export type AppointmentFormType = z.infer<typeof appointmentFormSchema>