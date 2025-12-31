"use client";
import { ImagePreview } from "@/feature/manga/component/manga-chat/image-preview";
import { useChatInput } from "@/feature/manga/component/manga-chat/use-chat-input";
import { InlineQuickSearch } from "@/shared/component/quick-search-by-select-text/inline-quick-search";
import { Button } from "@/shared/component/ui/button";
import { ImagePlus, Loader2, Send } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string, image?: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const { text, setText, imagePreview, fileInputRef, handleImageSelect, clearImage, openFilePicker, handleSubmit, isUploading, uploadError, clearError } =
    useChatInput(onSend);

  const isDisabled = disabled || isUploading;

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      {uploadError && (
        <div className="mb-2 p-2 bg-destructive/10 text-destructive text-sm rounded-md flex justify-between items-center">
          <span>{uploadError}</span>
          <button type="button" onClick={clearError} className="text-xs underline">
            Đóng
          </button>
        </div>
      )}
      {imagePreview && <ImagePreview src={imagePreview} onRemove={clearImage} />}
      <div className="flex gap-2">
        <input type="file" ref={fileInputRef} onChange={handleImageSelect} accept="image/*" className="hidden" />
        <Button type="button" variant="ghost" size="icon" disabled={isDisabled} onClick={openFilePicker}>
          <ImagePlus className="h-4 w-4" />
        </Button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập tin nhắn..."
          disabled={isDisabled}
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button type="submit" disabled={isDisabled || (!text.trim() && !imagePreview)}>
          {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </div>
      <InlineQuickSearch hideButton />
    </form>
  );
}
