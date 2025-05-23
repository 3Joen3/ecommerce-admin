import { ReactNode } from "react";

interface Props {
  actions: ReactNode;
  children: ReactNode;
  title: string;
}

export default function Page({ actions, title, children }: Props) {
  return (
    <main className="h-screen p-5 w-5/6 bg-neutral-100 text-neutral-800 space-y-5 overflow-y-auto">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        {actions && <div className="flex gap-2 items-center">{actions}</div>}
      </header>
      {children}
    </main>
  );
}
