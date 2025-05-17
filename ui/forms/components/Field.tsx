import { ErrorMessage } from "@hookform/error-message";

interface Props {
  label: string;
  children: React.ReactNode;
  name: string;
}

export default function Field({ label, children, name }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg text-neutral-800">{label}</label>
      {children}
      <ErrorMessage name={name}/>
    </div>
  );
}
