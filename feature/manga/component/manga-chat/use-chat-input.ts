"use client";
import { useImageInput } from "@/feature/manga/component/manga-chat/use-image-input";
import { useState } from "react";

export function useChatInput(onSend: (text: string, image?: string) => void) {
  const [text, setText] = useState("");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const { imagePreview, fileInputRef, handleImageSelect, clearImage, openFilePicker, uploadImage, isUploading } =
    useImageInput();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadError(null);

    if (!text.trim() && !imagePreview) {
      return;
    }

    let imageUrl: string | undefined;
    if (imagePreview) {
      const result = await uploadImage();
      if (!result.success) {
        setUploadError(result.error ?? "Upload failed");
        return;
      }
      imageUrl = result.url;
    }

    onSend(text, imageUrl);
    setText("");
    clearImage();
  };

  const clearError = () => setUploadError(null);

  return { text, setText, imagePreview, fileInputRef, handleImageSelect, clearImage, openFilePicker, handleSubmit, isUploading, uploadError, clearError };
}
