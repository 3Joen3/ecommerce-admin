import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  handleFiles: (files: File[]) => void;
  setIsDragActive: (value: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export default function DropZone({
  handleFiles,
  setIsDragActive,
  children,
  className,
}: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    handleFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  useEffect(() => {
    setIsDragActive(isDragActive);
  }, [isDragActive, setIsDragActive]);

  return (
    <div {...getRootProps()} className={`cursor-pointer border ${className}`}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
}
