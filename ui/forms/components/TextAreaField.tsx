import Field from "./Field";
import { useFormContext } from "react-hook-form";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export default function TextAreaField({ label, name, ...rest }: Props) {
  const { register } = useFormContext();

  return (
    <Field label={label}>
      <textarea className="input resize-none" {...register(name)} {...rest} />
    </Field>
  );
}
