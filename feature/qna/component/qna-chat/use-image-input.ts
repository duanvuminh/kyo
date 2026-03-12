"use client";
import {
  uploadChatImage,
  UploadResult,
} from "@/feature/qna/component/qna-chat/upload-chat-image";
import { useCallback, useRef, useState } from "react";

function readImageFile(file: File, onLoad: (dataUrl: string) => void) {
  const reader = new FileReader();
  reader.onload = (event) => onLoad(event.target?.result as string);
  reader.readAsDataURL(file);
}

export function useImageInput() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) { return; }
    readImageFile(file, setImagePreview);
  };

  const clearImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) { fileInputRef.current.value = ""; }
  };

  const openFilePicker = () => fileInputRef.current?.click();

  const uploadImage = useCallback(async (): Promise<UploadResult> => {
    if (!imagePreview) { return { success: true }; }
    setIsUploading(true);
    try {
      return await uploadChatImage(imagePreview);
    } finally {
      setIsUploading(false);
    }
  }, [imagePreview]);

  return { imagePreview, fileInputRef, handleImageSelect, clearImage, openFilePicker, uploadImage, isUploading };
}
