import UploadIcon from "@/ui/Icons/UploadIcon";
import DropZone from "../DropZone";

import { useState } from "react";

interface Props {
  handleFiles: (files: File[]) => void;
}

export default function Empty({ handleFiles }: Props) {
  const [isDragActive, setIsDragActive] = useState<boolean>();

  return (
    <DropZone
      handleFiles={handleFiles}
      setIsDragActive={setIsDragActive}
      className="flex flex-col items-center gap-1 justify-center py-8 border-2 border-dashed hover:bg-neutral-100"
    >
      <UploadIcon className="h-10 w-10" />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </DropZone>
  );
}
