import { PracticeCardMode } from "@/feature/practice/model/type";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface NextWordButtonProps {
  nextWord?: string;
  mode: PracticeCardMode;
}

export const NextWordButton = ({ nextWord, mode }: NextWordButtonProps) => {
  if (!nextWord) {
    return null;
  }
  return (
    <div className="flex justify-end px-2 pb-2">
      <Link
        href={`/practice/${nextWord}?mode=${mode}`}
        className="flex items-center gap-0.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {nextWord}
        <ChevronRight className="size-4" />
      </Link>
    </div>
  );
};
