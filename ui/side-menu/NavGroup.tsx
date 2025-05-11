"use client";

import NavLink from "./NavLink";

import { SVGProps } from "react";
import { usePathname } from "next/navigation";

export interface Props {
  title: string;
  href: string;
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  subLinks: { title: string; href: string }[];
}

export default function NavGroup({ title, href, Icon, subLinks }: Props) {
  const currentPath = usePathname();

  const shouldBeOpen =
    currentPath === href ||
    currentPath.startsWith(`${href}/`) ||
    subLinks.some(
      (sub) =>
        currentPath === sub.href || currentPath.startsWith(`${sub.href}/`)
    );

  return (
    <li>
      <NavLink title={title} href={href} Icon={Icon} />

      {shouldBeOpen && subLinks.length > 0 && (
        <ul>
          {subLinks.map((subLink) => (
            <li key={subLink.href}>
              <NavLink title={subLink.title} href={subLink.href} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
