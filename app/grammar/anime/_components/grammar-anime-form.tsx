"use client";

import { saveGrammarAnimeAction } from "@/app/actions/save-grammar-anime.actions";
import { uploadGrammarAnimeImageAction } from "@/app/actions/upload-grammar-anime-image.actions";
import type { GrammarAnime } from "@/app/grammar/anime/_lib/grammar-anime.types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ActionState } from "@/lib/types";
import { extractImageFiles, resizeAndUploadImage, type UploadedImage } from "@/lib/utils/image-upload";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

async function handleImageSelect(
  files: File[],
  setUploadingCount: Dispatch<SetStateAction<number>>,
  setImages: Dispatch<SetStateAction<UploadedImage[]>>
) {
  if (files.length === 0) {
    return;
  }
  setUploadingCount(files.length);
  const uploaded = await Promise.all(files.map((file) => resizeAndUploadImage(file, uploadGrammarAnimeImageAction)));
  setImages((prev) => [...prev, ...uploaded]);
  setUploadingCount(0);
}

function removeImageAt(index: number, setImages: Dispatch<SetStateAction<UploadedImage[]>>) {
  setImages((prev) => prev.filter((_, i) => i !== index));
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

function GrammarAnimeImageList({
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

function useRedirectOnSaved(
  state: ActionState<GrammarAnime>,
  router: ReturnType<typeof useRouter>,
  viewHref: string
) {
  useEffect(() => {
    if (state.data) {
      toast.success("Đã lưu anime version");
      router.push(viewHref);
    }
    // chỉ chạy lại khi có kết quả dispatch mới, không phải mỗi khi viewHref/router đổi
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}

function submitGrammarAnime(
  submitAction: (input: { level: string; page: string; title: string; images: UploadedImage[] }) => void,
  level: string,
  page: string,
  title: string,
  images: UploadedImage[]
) {
  startTransition(() => submitAction({ level, page, title: title.trim(), images }));
}

function isSaveDisabled(busy: boolean, title: string, images: UploadedImage[]): boolean {
  return busy || title.trim().length === 0 || images.length === 0;
}

function saveButtonLabel(pending: boolean, isEditing: boolean): string {
  if (pending) {
    return "Đang lưu...";
  }
  return isEditing ? "Cập nhật" : "Tạo mới";
}

interface GrammarAnimeFormProps {
  level: string;
  page: string;
  initial: GrammarAnime | null;
}

function useGrammarAnimeFormState(level: string, page: string, initial: GrammarAnime | null) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [images, setImages] = useState<UploadedImage[]>(initial?.images ?? []);
  const [uploadingCount, setUploadingCount] = useState(0);
  const [state, submitAction, pending] = useActionState(saveGrammarAnimeAction, {});
  const busy = pending || uploadingCount > 0;
  useRedirectOnSaved(state, router, `/grammar/anime/${level}/${page}`);
  usePasteToUpload(busy, setUploadingCount, setImages);

  return { title, setTitle, images, setImages, uploadingCount, setUploadingCount, state, submitAction, pending, busy };
}

export function GrammarAnimeForm({ level, page, initial }: GrammarAnimeFormProps) {
  const { title, setTitle, images, setImages, uploadingCount, setUploadingCount, state, submitAction, pending, busy } =
    useGrammarAnimeFormState(level, page, initial);

  return (
    <div className="flex flex-col gap-3 max-w-md mx-auto">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tiêu đề"
        disabled={busy}
      />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleImageSelect(Array.from(e.target.files ?? []), setUploadingCount, setImages)}
        disabled={busy}
      />
      <p className="text-xs text-muted-foreground">
        {uploadingCount > 0 ? `Đang upload ${uploadingCount} ảnh...` : "Hoặc dán ảnh trực tiếp (Ctrl+V)"}
      </p>
      <GrammarAnimeImageList
        images={images}
        title={title}
        disabled={busy}
        onRemove={(i) => removeImageAt(i, setImages)}
      />
      <Button
        type="button"
        disabled={isSaveDisabled(busy, title, images)}
        onClick={() => submitGrammarAnime(submitAction, level, page, title, images)}
      >
        {saveButtonLabel(pending, initial !== null)}
      </Button>
      {state.message && <p className="text-xs text-destructive">{state.message}</p>}
    </div>
  );
}
