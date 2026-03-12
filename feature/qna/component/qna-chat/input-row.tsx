import { Button } from "@/shared/component/ui/button";
import { ImagePlus, Loader2, Send } from "lucide-react";
import { RefObject } from "react";

export function InputRow({ text, setText, isDisabled, imagePreview, fileInputRef, handleImageSelect, openFilePicker, isUploading }: {
  text: string;
  setText: (v: string) => void;
  isDisabled: boolean;
  imagePreview: string | null;
  fileInputRef: RefObject<HTMLInputElement | null>;
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openFilePicker: () => void;
  isUploading: boolean;
}) {
  return (
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
  );
}
