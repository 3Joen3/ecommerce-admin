import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  className?: string;
  onSubmit: SubmitHandler<any>;
  children: React.ReactNode;
}

export default function Form({ className, onSubmit, children }: Props) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
