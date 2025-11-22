import { Button } from "@/shared/component/ui/button";
export function FlashCardControls({
  prevCard,
  nextCard,
}: {
  prevCard: () => void;
  nextCard: () => void;
}) {
  return (
    <div className="flex gap-2">
      <Button onClick={prevCard}>Trước</Button>
      <Button onClick={nextCard}>Tiếp</Button>
    </div>
  );
}
