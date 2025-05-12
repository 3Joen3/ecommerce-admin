import React from "react";
import Field from "./Field";
import { useFormContext } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function TextField({ label, name, ...rest }: Props) {
  const { register } = useFormContext();

  return (
    <Field label={label}>
      <input className="input" {...register(name)} {...rest} />
    </Field>
  );
}
