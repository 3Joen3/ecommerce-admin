import Link from "next/link";

import { SVGProps } from "react";

interface Props {
  colors: string;
  href: string;
  label: string;
  Icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export default function NavLink({ colors, href, label, Icon }: Props) {
  return (
    <Link
      className={`p-1.5 rounded inline-flex items-center justify-center ${
        Icon ? "gap-1.5" : ""
      } ${colors}`}
      href={href}
    >
      {Icon && <Icon className="size-4" />}
      {label}
    </Link>
  );
}
