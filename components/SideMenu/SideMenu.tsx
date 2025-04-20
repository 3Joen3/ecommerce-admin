"use client";

import NavGroup from "./NavGroup";

import { sideMenuLinks } from "@/lib/nav-links";

export default function SideMenu() {
  return (
    <aside className="h-screen w-1/6 bg-[#F5F5F5] text-[#6C757D]">
      <nav>
        <ul className="p-3">
          {sideMenuLinks.map((link) => (
            <NavGroup
              key={link.href}
              title={link.title}
              href={link.href}
              Icon={link.Icon}
              subLinks={link.subLinks}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
