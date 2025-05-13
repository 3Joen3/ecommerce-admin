import Image from "next/image";

interface Props {
  files: File[];
}

export default function MediaGallery({ files }: Props) {
  return (
    <div className="flex gap-2">
      {files.map((file) => (
        <GalleryItem key={file.name} media={file} />
      ))}
    </div>
  );  
}

function GalleryItem({ media }: { media: File }) {
  const url = URL.createObjectURL(media);

  return (
    <div>
      <Image src={url} alt={media.name} height={50} width={50} />
    </div>
  );
}
