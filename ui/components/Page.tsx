import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export default function Page({ children, title }: Props) {
  return (
    <main className="h-screen p-5 w-5/6 bg-neutral-100 text-neutral-800 space-y-5 overflow-y-auto">
      <h1 className="text-xl font-bold">{title}</h1>
      {children}
    </main>
  );
}
