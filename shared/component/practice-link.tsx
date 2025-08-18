"use client";

import { Button } from "@/shared/component/ui/button";
import { PracticeStorage } from "@/shared/service/storage";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const PracticeLink = ({ title }: { title?: string }) => {
  const router = useRouter();

  const onClick = () => {
    const practice = PracticeStorage.getFirstWord();
    if (!practice) {
      toast("Không có bài tập nào");
      return;
    }
    router.push(`/practice/${practice}`);
  };
  return (
    <Button variant="link" onClick={onClick} className="!p-2">
      {title || "Luyện tập"}
    </Button>
  );
};
