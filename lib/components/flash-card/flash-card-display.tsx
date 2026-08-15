import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlashCardBack } from "@/lib/components/flash-card/flash-card-back";
import { FlashCardFront } from "@/lib/components/flash-card/flash-card-front";
import { FlashCardItem } from "@/lib/components/flash-card/flash-card";

export function FlashCardDisplay({
  currentCard,
  showBack,
  toggleShowBack,
}: {
  currentCard: FlashCardItem;
  showBack: boolean;
  toggleShowBack: () => void;
}) {
  return (
    <Card className="w-full min-h-48 p-2" onClick={toggleShowBack}>
      <CardContent>
        {showBack ? (
          <div onClick={(e) => e.stopPropagation()}>
            <Button variant="ghost" size="sm" onClick={toggleShowBack} className="mb-2 -ml-2">
              ← Lật lại
            </Button>
            <FlashCardBack back={currentCard.back} more={currentCard.more} questions={currentCard.questions} front={currentCard.front} />
          </div>
        ) : (
          <FlashCardFront front={currentCard.front} />
        )}
      </CardContent>
    </Card>
  );
}
