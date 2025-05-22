import { Product } from "@/lib/types/Product";
import Image from "next/image";

export default function ProductListItem({ id, title, thumbnailUrl }: Product) {
  return (
    <div className="bg-neutral-100 flex">
      <h1>{title}</h1>
      {thumbnailUrl && <Image width={100} height={100} src={thumbnailUrl} alt={title} />}
    </div>
  );
}
