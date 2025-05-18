import { z } from "zod";

const variant = z.object({
  price: z.number().nonnegative(),
  comparePrice: z.number().nonnegative(),
});


export const productSchema = z.object({
  title: z.string().min(1),
  variants: z.array(variant),
  description: z.string(),
  media: z.array(z.instanceof(File)),
});

export type ProductFormValues = z.infer<typeof productSchema>;