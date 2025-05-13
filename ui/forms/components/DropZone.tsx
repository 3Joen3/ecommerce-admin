import ImageIcon from "@/ui/Icons/ImageIcon";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  setFiles: (files: File[]) => void;
}

export default function DropZone({ setFiles }: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div
      className="flex flex-col gap-1 items-center justify-center border-2 border-dashed border-neutral-800 p-10 hover:bg-neutral-100 hover:cursor-pointer"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <ImageIcon className="h-12 w-12" />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
