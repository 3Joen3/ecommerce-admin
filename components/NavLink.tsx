import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

export default function NavLink({ title, href }: Props) {
  return (
    <Link className="bg-black text-white p-1.5 rounded" href={href}>
      {title}
    </Link>
  );
}
