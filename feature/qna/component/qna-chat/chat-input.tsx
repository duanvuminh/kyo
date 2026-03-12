"use client";
import { ImagePreview } from "@/feature/qna/component/qna-chat/image-preview";
import { InputRow } from "@/feature/qna/component/qna-chat/input-row";
import { UploadError } from "@/feature/qna/component/qna-chat/upload-error";
import { useChatInput } from "@/feature/qna/component/qna-chat/use-chat-input";

interface ChatInputProps {
  onSend: (text: string, image?: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const {
    text,
    setText,
    imagePreview,
    fileInputRef,
    handleImageSelect,
    clearImage,
    openFilePicker,
    handleSubmit,
    isUploading,
    uploadError,
    clearError,
  } = useChatInput(onSend);
  const isDisabled = disabled || isUploading;

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      {uploadError && (
        <UploadError message={uploadError} onClose={clearError} />
      )}
      {imagePreview && (
        <ImagePreview src={imagePreview} onRemove={clearImage} />
      )}
      <InputRow
        text={text}
        setText={setText}
        isDisabled={isDisabled}
        imagePreview={imagePreview}
        fileInputRef={fileInputRef}
        handleImageSelect={handleImageSelect}
        openFilePicker={openFilePicker}
        isUploading={isUploading}
      />
    </form>
  );
}
