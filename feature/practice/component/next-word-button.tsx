import { PracticeLink } from "@/component/practice-link";
import { Button } from "@/component/ui/button";
import { cn } from "@/utils/utils";
import { ArrowBigRight, Repeat } from "lucide-react";
import Link from "next/link";

interface NextWordButtonProps {
  nextWord?: string;
  active: boolean;
}

export const NextWordButton = ({ nextWord, active }: NextWordButtonProps) => {
  if (!nextWord) return <PracticeLink icon={<Repeat />} title="Làm lại" />;
  return (
    <Button
      asChild
      variant="ghost"
      className={cn("text-muted", { "text-primary": active })}
      aria-label="Next word"
    >
      <Link href={`/practice/${nextWord}?mode=practice`}>
        <ArrowBigRight />
      </Link>
    </Button>
  );
};
