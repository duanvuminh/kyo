import { Button } from "@/shared/component/ui/button";
import { PracticeStorage } from "@/shared/service/storage";
import { useAppSelector } from "@/shared/stores/hook";
import { selectMessage } from "@/shared/stores/slice-message";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const PracticeAdd = ({ word }: { word?: string }) => {
  const words = useAppSelector(selectMessage).words;
  const isExist = word ?? words;
  const add = () => {
    const key = word ?? words;
    if (!key) {
      return;
    }
    try {
      PracticeStorage.addToPracticeList(key);
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
