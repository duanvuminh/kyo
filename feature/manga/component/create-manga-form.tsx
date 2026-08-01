"use client";

import { createManga } from "@/feature/manga/actions/create-manga";
import { uploadMangaImageAction } from "@/feature/manga/actions/upload-manga-image";
import { Button } from "@/shared/component/ui/button";
import { Input } from "@/shared/component/ui/input";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "sonner";

interface UploadedImage {
  url: string;
  width: number;
  height: number;
}

const MAX_DIMENSION = 2000;
const JPEG_QUALITY = 0.85;

function resizeImage(img: HTMLImageElement): { base64: string; width: number; height: number } {
  const scale = Math.min(
    1,
    MAX_DIMENSION / Math.max(img.naturalWidth, img.naturalHeight)
  );
  const width = Math.round(img.naturalWidth * scale);
  const height = Math.round(img.naturalHeight * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Không thể xử lý ảnh");
  }
  ctx.drawImage(img, 0, 0, width, height);

  return { base64: canvas.toDataURL("image/jpeg", JPEG_QUALITY), width, height };
}

function readAndResizeImage(file: File): Promise<{ base64: string; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.onload = () => {
        try {
          resolve(resizeImage(img));
        } catch (err) {
          reject(err instanceof Error ? err : new Error("Không xử lý được ảnh"));
        }
      };
      img.onerror = () => reject(new Error("Không đọc được ảnh"));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error("Không đọc được file"));
    reader.readAsDataURL(file);
  });
}

async function uploadFile(file: File): Promise<UploadedImage> {
  const { base64, width, height } = await readAndResizeImage(file);
  const url = await uploadMangaImageAction({ base64 });
  return { url, width, height };
}

async function handleImageSelect(
  files: File[],
  setUploadingCount: Dispatch<SetStateAction<number>>,
  setImages: Dispatch<SetStateAction<UploadedImage[]>>
) {
  if (files.length === 0) {
    return;
  }
  setUploadingCount(files.length);
  try {
    const uploaded = await Promise.all(files.map(uploadFile));
    setImages((prev) => [...prev, ...uploaded]);
  } catch (err) {
    const message =
      err instanceof AppError ? err.customMessage : "Không upload được ảnh, thử lại";
    toast.error(message);
  } finally {
    setUploadingCount(0);
  }
}

function extractImageFiles(clipboardData: DataTransfer | null): File[] {
  if (!clipboardData) {
    return [];
  }
  return Array.from(clipboardData.items)
    .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
    .map((item) => item.getAsFile())
    .filter((file): file is File => file !== null);
}

async function submitCreateManga(
  title: string,
  images: UploadedImage[],
  router: ReturnType<typeof useRouter>,
  setPending: Dispatch<SetStateAction<boolean>>
) {
  setPending(true);
  try {
    await createManga({ title, images });
    toast.success(`Đã tạo manga mới với ${images.length} trang`);
    router.push("/manga/newest");
  } catch (e) {
    const message =
      e instanceof AppError ? e.customMessage : new AppError(ErrorCode.UNKNOWN).customMessage;
    toast.error(message);
  } finally {
    setPending(false);
  }
}

function MangaImagePreviewList({ images }: { images: UploadedImage[] }) {
  if (images.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">{images.length} trang</p>
      {images.map((image, i) => (
        <Image
          key={image.url}
          src={image.url}
          alt={`Trang ${i + 1}`}
          width={image.width}
          height={image.height}
          unoptimized
          className="w-full h-auto rounded border"
        />
      ))}
    </div>
  );
}

function usePasteToUpload(
  busy: boolean,
  setUploadingCount: Dispatch<SetStateAction<number>>,
  setImages: Dispatch<SetStateAction<UploadedImage[]>>
) {
  useEffect(() => {
    if (busy) {
      return;
    }
    const handlePaste = (e: ClipboardEvent) => {
      const files = extractImageFiles(e.clipboardData);
      if (files.length === 0) {
        return;
      }
      e.preventDefault();
      handleImageSelect(files, setUploadingCount, setImages);
    };
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [busy, setUploadingCount, setImages]);
}

export function KCreateMangaForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [uploadingCount, setUploadingCount] = useState(0);
  const [pending, setPending] = useState(false);
  const busy = pending || uploadingCount > 0;
  usePasteToUpload(busy, setUploadingCount, setImages);

  return (
    <div className="flex flex-col gap-3 max-w-md mx-auto">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tiêu đề manga"
        disabled={busy}
      />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) =>
          handleImageSelect(Array.from(e.target.files ?? []), setUploadingCount, setImages)
        }
        disabled={busy}
      />
      <p className="text-xs text-muted-foreground">
        {uploadingCount > 0 ? `Đang upload ${uploadingCount} ảnh...` : "Hoặc dán ảnh trực tiếp (Ctrl+V)"}
      </p>
      <MangaImagePreviewList images={images} />
      <Button
        type="button"
        disabled={busy || !title.trim() || images.length === 0}
        onClick={() => submitCreateManga(title.trim(), images, router, setPending)}
      >
        {pending ? "Đang tạo..." : "Tạo manga"}
      </Button>
    </div>
  );
}
