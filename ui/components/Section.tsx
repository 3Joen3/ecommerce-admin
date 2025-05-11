interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <div className="bg-white p-6 shadow-md border border-neutral-200">
      {children}
    </div>
  );
}
