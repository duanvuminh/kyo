"use client";
import { uploadChatImage, UploadResult } from "@/feature/manga/component/manga-chat/upload-chat-image";
import { useCallback, useRef, useState } from "react";

export function useImageInput() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => setImagePreview(event.target?.result as string);
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openFilePicker = () => fileInputRef.current?.click();

  const uploadImage = useCallback(async (): Promise<UploadResult> => {
    if (!imagePreview) {
      return { success: true };
    }
    setIsUploading(true);
    try {
      return await uploadChatImage(imagePreview);
    } finally {
      setIsUploading(false);
    }
  }, [imagePreview]);

  return { imagePreview, fileInputRef, handleImageSelect, clearImage, openFilePicker, uploadImage, isUploading };
}
