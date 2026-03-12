"use client";
import { useImageInput } from "@/feature/qna/component/qna-chat/use-image-input";
import { useState } from "react";

type UploadImageFn = () => Promise<{ success: boolean; error?: string; url?: string }>;
type SetErrorFn = (error: string | null) => void;

async function createSubmitHandler(
  e: React.SyntheticEvent<HTMLFormElement>,
  text: string,
  imagePreview: string | null,
  uploadImage: UploadImageFn,
  setUploadError: SetErrorFn,
  onSend: (text: string, image?: string) => void,
  setText: (t: string) => void,
  clearImage: () => void,
) {
  e.preventDefault();
  setUploadError(null);
  if (!text.trim() && !imagePreview) { return; }
  let imageUrl: string | undefined;
  if (imagePreview) {
    const result = await uploadImage();
    if (!result.success) { setUploadError(result.error ?? "Upload failed"); return; }
    imageUrl = result.url;
  }
  onSend(text, imageUrl);
  setText("");
  clearImage();
}

export function useChatInput(onSend: (text: string, image?: string) => void) {
  const [text, setText] = useState("");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const { imagePreview, fileInputRef, handleImageSelect, clearImage, openFilePicker, uploadImage, isUploading } = useImageInput();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) =>
    createSubmitHandler(e, text, imagePreview, uploadImage, setUploadError, onSend, setText, clearImage);

  const clearError = () => setUploadError(null);

  return { text, setText, imagePreview, fileInputRef, handleImageSelect, clearImage, openFilePicker, handleSubmit, isUploading, uploadError, clearError };
}
