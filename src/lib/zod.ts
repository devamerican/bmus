import {z} from 'zod'

export const counselingFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email(),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string(),
})
export type CounselingFormType = z.infer<typeof counselingFormSchema>