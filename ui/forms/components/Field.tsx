interface Props {
  label: string;
  children: React.ReactNode;
}

export default function Field({ label, children }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg text-neutral-800">{label}</label>
      {children}
    </div>
  );
}
