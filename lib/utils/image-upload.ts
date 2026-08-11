export interface UploadedImage {
  url: string;
  width: number;
  height: number;
}

const MAX_DIMENSION = 2000;
const JPEG_QUALITY = 0.85;

function resizeImage(img: HTMLImageElement): { base64: string; width: number; height: number } {
  const scale = Math.min(1, MAX_DIMENSION / Math.max(img.naturalWidth, img.naturalHeight));
  const width = Math.round(img.naturalWidth * scale);
  const height = Math.round(img.naturalHeight * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx?.drawImage(img, 0, 0, width, height);

  return { base64: canvas.toDataURL("image/jpeg", JPEG_QUALITY), width, height };
}

function readAndResizeImage(file: File): Promise<{ base64: string; width: number; height: number }> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.onload = () => resolve(resizeImage(img));
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

/** Resize ảnh về JPEG (client-side) rồi upload qua server action - dùng cho mọi form upload ảnh (manga, grammar anime, ...) */
export async function resizeAndUploadImage(
  file: File,
  uploadAction: (input: { base64: string }) => Promise<string>
): Promise<UploadedImage> {
  const { base64, width, height } = await readAndResizeImage(file);
  const url = await uploadAction({ base64 });
  return { url, width, height };
}

export function extractImageFiles(clipboardData: DataTransfer | null): File[] {
  if (!clipboardData) {
    return [];
  }
  return Array.from(clipboardData.items)
    .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
    .map((item) => item.getAsFile())
    .filter((file): file is File => file !== null);
}
