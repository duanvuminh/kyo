"use client";

import { Button } from "@/components/ui/button";
import { FlashCardControls } from "@/lib/components/flash-card/flash-card-controls";
import { FlashCardDisplay } from "@/lib/components/flash-card/flash-card-display";
import { FlashCardNextLessons } from "@/lib/components/flash-card/flash-card-next-lessons";
import { FlashCardPagination } from "@/lib/components/flash-card/flash-card-pagination";
import { useFlashCard } from "@/lib/components/flash-card/use-flash-card";
import { useLessonProgress } from "@/lib/components/flash-card/use-lesson-progress";
import { Question } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface FlashCardItem {
  front: string;
  back: string[];
  more?: string[];
  questions?: Question[];
}

export function FlashCard({ cards }: { cards: FlashCardItem[] }) {
  const { currentCards, currentCard, index, page, totalPages, showBack, goToPage, nextCard, prevCard, toggleShowBack } =
    useFlashCard(cards);
  const { canSave, isDone, markDone, upcomingLessons } = useLessonProgress();
  const pathname = usePathname();
  const grammarSlug = pathname.match(/^\/grammar\/n1\/(page\d+)\/flash-card/)?.[1];

  if (cards.length === 0) {
    return <div>Không có flash card nào.</div>;
  }

  const isLastCard = index === currentCards.length - 1;

  return (
    <div className="flex flex-col items-center gap-4 max-w-sm mx-auto mt-8">
      <FlashCardDisplay currentCard={currentCard} showBack={showBack} toggleShowBack={toggleShowBack} />
      <FlashCardControls prevCard={prevCard} nextCard={nextCard} />
      {grammarSlug && (
        <Link
          href={`/update-content?kind=grammar&slug=${grammarSlug}&front=${encodeURIComponent(currentCard.front)}`}
          className="text-xs text-muted-foreground"
        >
          Đóng góp thẻ này
        </Link>
      )}
      {isLastCard && canSave && !isDone && (
        <Button onClick={markDone}>
          💾 Lưu bài học
        </Button>
      )}
      {totalPages > 1 && (
        <FlashCardPagination totalPages={totalPages} page={page} goToPage={goToPage} />
      )}
      <div className="text-sm text-gray-500">Thẻ {index + 1}/{currentCards.length}</div>
      {isLastCard && <FlashCardNextLessons lessons={upcomingLessons} />}
    </div>
  );
}
