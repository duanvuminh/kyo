"use client";

import { SidebarMenuButton } from "@/shared/component/ui/sidebar";
import { PracticeStorage } from "@/shared/service/storage";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface PracticeLinkProps {
  title?: string;
}

export function PracticeLink({ title }: PracticeLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const practice = PracticeStorage.getFirstWord();
    if (!practice) {
      toast("Không có bài tập nào");
      return;
    }
    router.push(`/practice/${practice}`);
  };

  return (
    <SidebarMenuButton onClick={handleClick} className="cursor-pointer">
      <span>{title || "Luyện tập"}</span>
    </SidebarMenuButton>
  );
}
