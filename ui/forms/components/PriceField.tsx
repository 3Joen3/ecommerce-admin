import { useFormContext } from "react-hook-form";
import Field from "./Field";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  currency: string;
}

export default function PriceField({ label, name, currency, ...rest }: Props) {
  const { register } = useFormContext();

  return (
    <Field label={label}>
      <div className="relative">
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none text-neutral-600">
          {currency}
        </span>
        <input
          type="number"
          className="input input-no-arrows w-full"
          {...register(name)}
          {...rest}
        />
      </div>
    </Field>
  );
}
