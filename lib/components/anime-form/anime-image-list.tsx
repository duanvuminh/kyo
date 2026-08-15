import { UploadedImage } from "@/lib/utils/image-upload";
import Image from "next/image";

export function AnimeImageList({
  images,
  title,
  disabled,
  onRemove,
}: {
  images: UploadedImage[];
  title: string;
  disabled: boolean;
  onRemove: (index: number) => void;
}) {
  if (images.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">{images.length} ảnh</p>
      {images.map((image, i) => (
        <div key={image.url} className="relative">
          <Image
            src={image.url}
            alt={`${title || "Anime version"} ${i + 1}`}
            width={image.width}
            height={image.height}
            className="w-full h-auto rounded border"
          />
          <button
            type="button"
            disabled={disabled}
            onClick={() => onRemove(i)}
            className="absolute top-1 right-1 rounded bg-background/90 px-2 py-1 text-xs text-destructive"
          >
            Xoá
          </button>
        </div>
      ))}
    </div>
  );
}
