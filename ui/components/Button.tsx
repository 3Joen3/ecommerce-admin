import { SVGProps } from "react";

interface Props {
  colors: string;
  type?: "submit" | "reset";
  Icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

export default function Button({ colors, type, Icon, label }: Props) {
  return (
    <button
      type={type ? type : "button"}
      className={`hover:cursor-pointer p-1.5 rounded inline-flex items-center justify-center ${
        Icon ? "gap-1.5" : ""
      } ${colors}`}
    >
      {Icon && <Icon className="size-4" />}
      {label}
    </button>
  );
}
