import { Button } from "@/components/ui/button";
import { copyText } from "@/lib/utils/clipboard";
import { cn } from "@/lib/utils/utils";

interface TranscriptLineProps {
  content: string;
  isActive: boolean;
  onSeek: () => void;
  lineRef?: React.RefObject<HTMLDivElement | null>;
}

export function TranscriptLine({ content, isActive, onSeek, lineRef }: TranscriptLineProps) {
  return (
    <div ref={lineRef} className={cn("flex items-start gap-1 rounded px-1", isActive ? "bg-primary/10" : "")}>
      <Button
        type="button"
        size="sm"
        variant="ghost"
        className="rounded-full transition hover:scale-110 shrink-0"
        onClick={onSeek}
      >
        ▶
      </Button>
      <p
        onClick={() => copyText(content)}
        className={cn(
          "cursor-pointer text-sm whitespace-pre-line py-1",
          isActive ? "font-medium" : "text-muted-foreground",
        )}
      >
        {content}
      </p>
    </div>
  );
}
