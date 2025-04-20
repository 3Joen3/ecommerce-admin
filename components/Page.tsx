import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export default function Page({ children, title }: Props) {
  return (
    <main className="p-6 w-5/6 bg-neutral-100">
      <h1 className="text-xl font-bold">{title}</h1>
      {children}
    </main>
  );
}
