import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className, children }: Props) {
  return (
    <div
      className={twMerge(
        "bg-white p-6 shadow-md border border-neutral-200 space-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}
