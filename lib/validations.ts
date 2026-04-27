import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(80, "Name is too long"),
  email: z.string().email("Enter a valid email").max(120, "Email is too long"),
  message: z.string().min(10, "Message is too short").max(4000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

