"use client";

import { Button } from "@/component/ui/button";
import { PracticeStorage } from "@/service/storage";
import { SwatchBook } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const PracticeLink = ({
  title,
  icon,
}: {
  title?: string;
  icon?: React.ReactNode;
}) => {
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
      {icon ?? <SwatchBook />} {title ?? "Luyện tập"}
    </Button>
  );
};
