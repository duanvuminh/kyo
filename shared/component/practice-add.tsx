import { Button } from "@/shared/component/ui/button";
import { PracticeStorage } from "@/shared/service/storage";
import { useAppSelector } from "@/shared/stores/hook";
import { selectMessage } from "@/shared/stores/slice-message";
import { ErrorCode } from "@/shared/types/models/error";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const PracticeAdd = ({ word }: { word?: string }) => {
  const words = useAppSelector(selectMessage).words;
  const isExist = word ?? words;
  const add = () => {
    try {
      const key = word ?? words;
      if (key) {
        PracticeStorage.addToPracticeList(key);
      }
      toast("Đã thêm vào danh sách luyện tập");
    } catch (e) {
      if (e instanceof Error) {
        switch (e.message) {
          case ErrorCode.DUPLICATE_KEYWORD:
            toast.error("Đã thêm vào danh sách luyện tập");
            break;
          default:
            break;
        }
      }
    }
  };
  return (
    <Button
      variant="ghost"
      className="text-muted"
      onClick={add}
      disabled={!isExist}
    >
      <Plus />
    </Button>
  );
};
