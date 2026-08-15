"use client";

import { saveAnimeAction } from "@/app/actions/save-anime.actions";
import { uploadAnimeImageAction } from "@/app/actions/upload-anime-image.actions";
import { AnimeImageList } from "@/lib/components/anime-form/anime-image-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContentSection } from "@/lib/content-section";
import { ActionState, Anime } from "@/lib/types";
import { extractImageFiles, resizeAndUploadImage, type UploadedImage } from "@/lib/utils/image-upload";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

async function handleImageSelect(
  section: ContentSection,
  files: File[],
  setUploadingCount: Dispatch<SetStateAction<number>>,
  setImages: Dispatch<SetStateAction<UploadedImage[]>>
) {
  if (files.length === 0) {
    return;
  }
  setUploadingCount(files.length);
  const uploaded = await Promise.all(
    files.map((file) => resizeAndUploadImage(file, (input) => uploadAnimeImageAction({ ...input, section })))
  );
  setImages((prev) => [...prev, ...uploaded]);
  setUploadingCount(0);
}

function removeImageAt(index: number, setImages: Dispatch<SetStateAction<UploadedImage[]>>) {
  setImages((prev) => prev.filter((_, i) => i !== index));
}

function usePasteToUpload(
  section: ContentSection,
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
      handleImageSelect(section, files, setUploadingCount, setImages);
    };
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [section, busy, setUploadingCount, setImages]);
}

function useRedirectOnSaved(state: ActionState<Anime>, router: ReturnType<typeof useRouter>, viewHref: string) {
  useEffect(() => {
    if (state.data) {
      toast.success("Đã lưu anime version");
      router.push(viewHref);
    }
    // chỉ chạy lại khi có kết quả dispatch mới, không phải mỗi khi viewHref/router đổi
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}

function submitAnime(
  submitAction: (input: {
    section: ContentSection;
    level: string;
    page: string;
    title: string;
    images: UploadedImage[];
  }) => void,
  section: ContentSection,
  level: string,
  page: string,
  title: string,
  images: UploadedImage[]
) {
  startTransition(() => submitAction({ section, level, page, title: title.trim(), images }));
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

interface AnimeFormProps {
  section: ContentSection;
  level: string;
  page: string;
  initial: Anime | null;
}

function useAnimeFormState(section: ContentSection, level: string, page: string, initial: Anime | null) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [images, setImages] = useState<UploadedImage[]>(initial?.images ?? []);
  const [uploadingCount, setUploadingCount] = useState(0);
  const [state, submitAction, pending] = useActionState(saveAnimeAction, {});
  const busy = pending || uploadingCount > 0;
  useRedirectOnSaved(state, router, `/${section}/anime/${level}/${page}`);
  usePasteToUpload(section, busy, setUploadingCount, setImages);

  return { title, setTitle, images, setImages, uploadingCount, setUploadingCount, state, submitAction, pending, busy };
}

export function AnimeForm({ section, level, page, initial }: AnimeFormProps) {
  const { title, setTitle, images, setImages, uploadingCount, setUploadingCount, state, submitAction, pending, busy } =
    useAnimeFormState(section, level, page, initial);

  return (
    <div className="flex flex-col gap-3 max-w-md mx-auto">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tiêu đề" disabled={busy} />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleImageSelect(section, Array.from(e.target.files ?? []), setUploadingCount, setImages)}
        disabled={busy}
      />
      <p className="text-xs text-muted-foreground">
        {uploadingCount > 0 ? `Đang upload ${uploadingCount} ảnh...` : "Hoặc dán ảnh trực tiếp (Ctrl+V)"}
      </p>
      <AnimeImageList images={images} title={title} disabled={busy} onRemove={(i) => removeImageAt(i, setImages)} />
      <Button
        type="button"
        disabled={isSaveDisabled(busy, title, images)}
        onClick={() => submitAnime(submitAction, section, level, page, title, images)}
      >
        {saveButtonLabel(pending, initial !== null)}
      </Button>
      {state.message && <p className="text-xs text-destructive">{state.message}</p>}
    </div>
  );
}
