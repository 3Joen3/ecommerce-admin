import DropZone from "./DropZone";
import Field from "./Field";
import MediaGallery from "./MediaGallery";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

interface Props {
  name: string;
}

export default function MediaField({ name }: Props) {
  const { register, setValue } = useFormContext();
  const [files, setFiles] = useState<File[] | null>(null);

  useEffect(() => {
    register(name);
  }, [register, name]);

  useEffect(() => {
    setValue(name, files);
  }, [files, setValue, files]);

  return (
    <Field label="Media">
      {files === null || files?.length < 1 ? (
        <DropZone setFiles={setFiles} />
      ) : (
        <MediaGallery files={files} />
      )}
    </Field>
  );
}
