"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { SVGProps } from "react";

interface Props {
  Icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

export default function NavLink({ Icon, title, href }: Props) {
  const currentPath = usePathname();
  const isActive = currentPath === href || currentPath.startsWith(`${href}/`);
  return (
    <Link
      className={`rounded-xl flex items-center gap-3 p-1.5 w-full
      ${isActive ? "bg-blue-500" : "hover:bg-neutral-700"}`}
      href={href}
    >
      {Icon ? (
        <Icon className="w-5 h-5" />
      ) : (
        <div className="ml-5 invisible"></div>
      )}
      {title}
    </Link>
  );
}
