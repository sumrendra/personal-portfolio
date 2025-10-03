import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must not exceed 100 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must not exceed 255 characters' }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters' })
    .max(200, { message: 'Subject must not exceed 200 characters' }),
  message: z
    .string()
    .min(20, { message: 'Message must be at least 20 characters' })
    .max(2000, { message: 'Message must not exceed 2000 characters' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
