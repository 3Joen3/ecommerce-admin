interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className, children }: Props) {
  return (
    <div
      className={`bg-white p-6 shadow-md border border-neutral-200 ${className}`}
    >
      {children}
    </div>
  );
}
