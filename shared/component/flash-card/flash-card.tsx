"use client";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { useFlashCard } from "@/shared/component/flash-card/use-flash-card";
import { Button } from "@/shared/component/ui/button";
import { Card, CardContent } from "@/shared/component/ui/card";

export interface FlashCardItem {
  front: string;
  back: string[];
}

export function FlashCard({ cards }: { cards: FlashCardItem[] }) {
  const {
    currentCards,
    currentCard,
    index,
    page,
    totalPages,
    startIndex,
    showBack,
    goToPage,
    nextCard,
    prevCard,
    toggleShowBack,
  } = useFlashCard(cards);

  if (cards.length === 0) return <div>Không có flash card nào.</div>;

  return (
    <div className="flex flex-col items-center gap-4 max-w-sm mx-auto mt-8">
      <Card className="w-full h-48 p-4" onClick={toggleShowBack}>
        <CardContent>
          {showBack
            ? currentCard.back.map((line, i) => <div key={i}>{line}</div>)
            : currentCard.front}
          {showBack && (
            <div onClick={(e) => e.stopPropagation()}>
              <AudioPlayer text={currentCard.front} />
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Button onClick={prevCard}>Trước</Button>
        <Button onClick={nextCard}>Tiếp</Button>
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={page === i ? "default" : "outline"}
            size="sm"
            onClick={() => goToPage(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>

      <div className="text-sm text-gray-500">
        Thẻ {index + 1}/{currentCards.length}
      </div>
      <div className="text-xs text-gray-400">Nhấn vào thẻ để lật mặt sau</div>
    </div>
  );
}
