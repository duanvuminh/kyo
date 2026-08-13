import { Button } from "@/components/ui/button";
import { copyText } from "@/lib/utils/clipboard";
import { cn } from "@/lib/utils/utils";

interface MiniPlayerProps {
  title: string;
  recentLines: string[];
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function MiniPlayer({ title, recentLines, isPlaying, onTogglePlay }: MiniPlayerProps) {
  return (
    <div className="flex h-screen flex-col gap-2 bg-background p-3 text-foreground">
      <p className="truncate text-xs font-medium">{title}</p>
      <div className="flex flex-1 flex-col justify-end gap-1 overflow-y-auto">
        {recentLines.map((line, i) => (
          <p
            key={i}
            onClick={(e) => copyText(line, undefined, e.currentTarget.ownerDocument.defaultView ?? window)}
            className={cn(
              "line-clamp-2 cursor-pointer text-xs",
              i === recentLines.length - 1 ? "font-medium" : "text-muted-foreground",
            )}
          >
            {line}
          </p>
        ))}
      </div>
      <Button type="button" size="sm" variant="secondary" onClick={onTogglePlay} className="self-start">
        {isPlaying ? "⏸ Tạm dừng" : "▶ Phát"}
      </Button>
    </div>
  );
}
