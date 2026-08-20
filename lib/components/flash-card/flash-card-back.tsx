import { MeaningSection } from "@/lib/components/flash-card/meaning-section";
import { QuestionSection } from "@/lib/components/flash-card/question-section";
import { UsageSection } from "@/lib/components/flash-card/usage-section";
import { Question } from "@/lib/types";
import Link from "next/link";

export function FlashCardBack({
  back,
  more,
  questions,
  front,
  contributeHref,
}: {
  back: string[];
  more?: string[];
  questions?: Question[];
  front: string;
  contributeHref?: string;
}) {
  const grammarPoint = [...back, ...(more ?? [])].join("\n");

  return (
    <div>
      <MeaningSection back={back} />
      <UsageSection more={more} front={front} />
      <QuestionSection
        questions={questions}
        grammarPoint={grammarPoint}
        front={front}
      />
      {contributeHref && (
        <div className="mt-3 flex justify-end">
          <Link
            href={contributeHref}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-muted-foreground"
          >
            Đóng góp thẻ này
          </Link>
        </div>
      )}
    </div>
  );
}
