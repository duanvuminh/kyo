"use client";

import { SidebarMenuButton } from "@/components/ui/sidebar";
import { PracticeStorage } from "@/lib/services/storage.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface PracticeLinkProps {
  title?: string;
  onNavigate?: () => void;
}

export function PracticeLink({ title, onNavigate }: PracticeLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const practice = PracticeStorage.getFirstWord();
    if (!practice) {
      toast("Không có bài tập nào");
      return;
    }
    onNavigate?.();
    router.push(`/practice/${practice}`);
  };

  return (
    <SidebarMenuButton onClick={handleClick} className="cursor-pointer">
      <span>{title || "Luyện tập"}</span>
    </SidebarMenuButton>
  );
}
