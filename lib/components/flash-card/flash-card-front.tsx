import { findHuusennarareUrl } from "@/lib/utils/huusennarare";
import Link from "next/link";

export function FlashCardFront({ front }: { front: string }) {
  const referenceUrl = front.length === 1 ? findHuusennarareUrl(front) : undefined;

  return (
    <div className="flex flex-col items-center gap-1">
      {front}
      {referenceUrl && (
        <Link
          href={referenceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onPointerUp={(e) => e.stopPropagation()}
          className="text-xs text-muted-foreground"
        >
          Xem thêm →
        </Link>
      )}
    </div>
  );
}
