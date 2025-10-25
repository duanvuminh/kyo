"use client";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { Button } from "@/shared/component/ui/button";
import { Card, CardContent } from "@/shared/component/ui/card";
import { useState } from "react";

export interface FlashCardItem {
  front: string;
  back: string[];
}

export function FlashCard({ cards }: { cards: FlashCardItem[] }) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const nextCard = () => {
    setIndex((i) => (i + 1 < cards.length ? i + 1 : 0));
    setShowBack(false);
  };
  const prevCard = () => {
    setIndex((i) => (i - 1 >= 0 ? i - 1 : cards.length - 1));
    setShowBack(false);
  };

  if (cards.length === 0) return <div>Không có flash card nào.</div>;

  return (
    <div className="flex flex-col items-center gap-4 max-w-sm mx-auto mt-8">
      <Card className="w-full h-48 p-4" onClick={() => setShowBack((v) => !v)}>
        <CardContent>
          {showBack
            ? cards[index].back.map((line, i) => <div key={i}>{line}</div>)
            : cards[index].front}
          {showBack && (
            <div onClick={(e) => e.stopPropagation()}>
              <AudioPlayer text={cards[index].front} />
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Button onClick={prevCard}>Trước</Button>
        <Button onClick={nextCard}>Tiếp</Button>
      </div>
      <div className="text-sm text-gray-500">
        Thẻ {index + 1}/{cards.length}
      </div>
      <div className="text-xs text-gray-400">Nhấn vào thẻ để lật mặt sau</div>
    </div>
  );
}
