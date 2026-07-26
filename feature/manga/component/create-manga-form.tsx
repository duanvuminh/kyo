"use client";

import { createManga } from "@/feature/manga/actions/create-manga";
import { uploadMangaImageAction } from "@/feature/manga/actions/upload-manga-image";
import { Button } from "@/shared/component/ui/button";
import { Input } from "@/shared/component/ui/input";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

export function KCreateMangaForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [uploadingCount, setUploadingCount] = useState(0);
  const [pending, setPending] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
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
  };

  const handleSubmit = async () => {
    if (!title.trim() || images.length === 0) {
      return;
    }
    setPending(true);
    try {
      await createManga({ title: title.trim(), images });
      toast.success(`Đã tạo manga mới với ${images.length} trang`);
      router.push("/manga/newest");
    } catch (e) {
      const message =
        e instanceof AppError ? e.customMessage : new AppError(ErrorCode.UNKNOWN).customMessage;
      toast.error(message);
    } finally {
      setPending(false);
    }
  };

  const busy = pending || uploadingCount > 0;

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
        onChange={handleFileChange}
        disabled={busy}
      />
      {uploadingCount > 0 && (
        <p className="text-xs text-muted-foreground">
          Đang upload {uploadingCount} ảnh...
        </p>
      )}
      {images.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">{images.length} trang</p>
          {images.map((image, i) => (
            <Image
              key={image.url}
              src={image.url}
              alt={`Trang ${i + 1}`}
              width={image.width}
              height={image.height}
              className="w-full h-auto rounded border"
            />
          ))}
        </div>
      )}
      <Button
        type="button"
        disabled={busy || !title.trim() || images.length === 0}
        onClick={handleSubmit}
      >
        {pending ? "Đang tạo..." : "Tạo manga"}
      </Button>
    </div>
  );
}
