import UploadIcon from "@/ui/Icons/UploadIcon";
import DropZone from "../DropZone";
import Image from "next/image";

import { useState } from "react";

interface Props {
  handleFiles: (files: File[]) => void;
  files: File[];
}

export default function Populated({ handleFiles, files }: Props) {
  const [isDragActive, setIsDragActive] = useState<boolean>();

  const childContainerStyle =
    "aspect-square flex flex-col items-center justify-center";

  return (
    <div className="grid grid-cols-4 gap-2">
      <DropZone
        handleFiles={handleFiles}
        setIsDragActive={setIsDragActive}
        className={`${childContainerStyle} border-2 border-dashed hover:bg-neutral-100`}
      >
        <UploadIcon className="h-8 w-8" />
      </DropZone>

      {files.map((file) => (
        <div key={file.name} className={`relative ${childContainerStyle}`}>
          <Image
            className="object-contain"
            src={URL.createObjectURL(file)}
            alt={file.name}
            fill
          />
        </div>
      ))}
    </div>
  );
}
