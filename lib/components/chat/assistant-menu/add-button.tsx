"use client";

import { Button } from "@/components/ui/button";
import { AppError, ErrorCode } from "@/lib/types";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export const AddButton = ({
  command,
  add,
}: {
  command: string;
  add: (text: string) => Promise<boolean>;
}) => (
  <Button
    variant="ghost"
    size="sm"
    onClick={() => {
      add(command)
        .then((added) => {
          if (added) {
            toast.success("Đã thêm vào danh sách luyện tập");
          } else {
            toast.warning("Không phải từ vựng/ngữ pháp, không thể thêm vào luyện tập");
          }
        })
        .catch((e) => {
          if (e instanceof AppError && e.code === ErrorCode.DUPLICATE_KEYWORD) {
            toast.warning("Từ đã có trong danh sách luyện tập");
          } else {
            toast.error("Không thể thêm, vui lòng thử lại");
          }
        });
    }}
    className="text-muted"
  >
    <Plus />
  </Button>
);
