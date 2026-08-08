import { normalizeWordAction } from "@/app/actions/normalize-word.actions";
import { saveWordContent } from "@/app/actions/practice.actions";
import { Button } from "@/components/ui/button";
import { PracticeStorage } from "@/lib/services/storage.service";
import { useAppSelector } from "@/lib/stores/hook";
import { selectMessage } from "@/lib/stores/slice-message";
import { AppError, ErrorCode, Source } from "@/lib/types";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const DECORATIVE_PREFIX_REGEX = /^[〜～-]+/;

function normalizeWordText(word: string): string {
  return word.trim().replace(DECORATIVE_PREFIX_REGEX, "").trim();
}

function persistContentIfFromChat(word: string | undefined, key: string, content?: string) {
  if (!word && content) {
    saveWordContent({ source: Source.FIREBASE, documentId: key, words: key, content });
  }
}

async function addWord(
  raw: string,
  word: string | undefined,
  content: string | undefined,
  setPending: (pending: boolean) => void
) {
  const trimmed = normalizeWordText(raw);
  if (!trimmed) {
    return;
  }
  setPending(true);
  try {
    // Sửa lỗi gõ sai/gõ thiếu trước khi dùng làm key, tránh 2 document cho cùng 1 từ
    // (vd "ふたりつきり" → "ふたりきり"). Lỗi AI thì normalizeWordAction tự fallback về trimmed, coi như hợp lệ.
    const { normalized: key, type } = await normalizeWordAction(trimmed);
    if (type === "other") {
      toast.warning("Không phải từ vựng/ngữ pháp, không thể thêm vào luyện tập");
      return;
    }
    PracticeStorage.addToPracticeList(key);
    persistContentIfFromChat(word, key, content);
    toast.success("Đã thêm vào danh sách luyện tập");
  } catch (e) {
    if (e instanceof AppError && e.code === ErrorCode.DUPLICATE_KEYWORD) {
      toast.warning("Từ đã có trong danh sách luyện tập");
    } else {
      toast.error("Không thể thêm, vui lòng thử lại");
    }
  } finally {
    setPending(false);
  }
}

export const PracticeAdd = ({ word }: { word?: string }) => {
  const message = useAppSelector(selectMessage);
  const words = message.words;
  const isExist = word ?? words;
  const [pending, setPending] = useState(false);

  return (
    <Button
      type="button"
      variant="ghost"
      aria-label="Thêm vào danh sách luyện tập"
      className="text-muted"
      onClick={() => {
        const raw = word ?? words;
        if (raw) {
          addWord(raw, word, message.content, setPending);
        }
      }}
      disabled={!isExist || pending}
    >
      <Plus />
    </Button>
  );
};
