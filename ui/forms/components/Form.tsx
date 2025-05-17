import type { ZodSchema } from "zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/lib/schemas/product-form";

interface Props<TSchema extends ZodSchema> {
  className?: string;
  onSubmit: SubmitHandler<any>;
  children: React.ReactNode;
  schema: TSchema;
}

export default function Form<TSchema extends ZodSchema>({ className, onSubmit, children, schema }: Props<TSchema>) {
  const methods = useForm({
    resolver: zodResolver(productSchema)
  });

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
