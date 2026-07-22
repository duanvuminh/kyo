import { saveWordContent } from "@/shared/actions/practice";
import { Button } from "@/shared/component/ui/button";
import { normalizeWordText } from "@/shared/lib/normalize-word";
import { PracticeStorage } from "@/shared/service/storage";
import { useAppSelector } from "@/shared/store/hook";
import { selectMessage } from "@/shared/store/slice-message";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import { Source } from "@/shared/type/models/word";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const PracticeAdd = ({ word }: { word?: string }) => {
  const message = useAppSelector(selectMessage);
  const words = message.words;
  const isExist = word ?? words;
  const add = () => {
    const raw = word ?? words;
    if (!raw) {
      return;
    }
    const key = normalizeWordText(raw);
    if (!key) {
      return;
    }
    try {
      PracticeStorage.addToPracticeList(key);
      if (!word && message.content) {
        saveWordContent({
          source: Source.FIREBASE,
          documentId: key,
          words: key,
          content: message.content,
        });
      }
      toast.success("Đã thêm vào danh sách luyện tập");
    } catch (e) {
      if (e instanceof AppError && e.code === ErrorCode.DUPLICATE_KEYWORD) {
        toast.warning("Từ đã có trong danh sách luyện tập");
      } else {
        toast.error("Không thể thêm, vui lòng thử lại");
      }
    }
  };
  return (
    <Button
      type="button"
      variant="ghost"
      className="text-muted"
      onClick={add}
      disabled={!isExist}
    >
      <Plus />
    </Button>
  );
};
