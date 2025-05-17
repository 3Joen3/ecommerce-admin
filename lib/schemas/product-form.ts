import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  price: z.number().nonnegative(),
  comparePrice: z.number().nonnegative(),
  media: z.array(z.instanceof(File)),
});

export type ProductFormValues = z.infer<typeof productSchema>;