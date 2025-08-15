import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long"),
  email: z.string()
    .email("Invalid email address"),
  message: z.string()
    .min(10, "Message too short (min 10 chars)")
    .max(500, "Message too long (max 500 chars)"),
  terms: z.literal(true, {
    message: "You must accept the terms",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;