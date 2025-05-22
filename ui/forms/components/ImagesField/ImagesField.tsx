import Field from "../Field";
import Populated from "./Populated";
import Empty from "./Empty";

import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

interface Props {
  name: string;
}

export default function ImagesField({ name }: Props) {
  const { register, setValue } = useFormContext();
  const [files, setFiles] = useState<File[]>([]);

  function handleFiles(newFiles: File[]) {
    setFiles((prevFiles => [...(prevFiles || []), ...newFiles]));
  }

  useEffect(() => {
    register(name);
  }, [register, name]);

  useEffect(() => {
    setValue(name, files);
  }, [files, setValue]);

  return (
    <Field label="Add Images" name={name}>
      {files.length < 1 ? (
        <Empty handleFiles={handleFiles} />
      ) : (
        <Populated handleFiles={handleFiles} files={files} />
      )}
    </Field>
  );
}
