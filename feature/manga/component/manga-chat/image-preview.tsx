"use client";
import { X } from "lucide-react";
import Image from "next/image";

interface ImagePreviewProps {
  src: string;
  onRemove: () => void;
}

export function ImagePreview({ src, onRemove }: ImagePreviewProps) {
  return (
    <div className="relative inline-block mb-2">
      <Image src={src} alt="Preview" width={100} height={100} className="rounded-md object-cover" />
      <button
        type="button"
        onClick={onRemove}
        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
