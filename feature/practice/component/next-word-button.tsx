import { PracticeCardMode } from "@/feature/practice/model/type";
import { Button } from "@/shared/component/ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

interface NextWordButtonProps {
  nextWord?: string;
  mode: PracticeCardMode;
}

export const NextWordButton = ({ nextWord, mode }: NextWordButtonProps) => {
  if (!nextWord) return <></>;
  return (
    <Button
      asChild
      variant="ghost"
      className="text-muted"
      aria-label="Next word"
    >
      <Link href={`/practice/${nextWord}?mode=${mode}`}>
        <ArrowBigRight />
      </Link>
    </Button>
  );
};
