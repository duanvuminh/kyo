import { MODE_MAP, PracticeCardMode } from "@/app/practice/_lib/practice.types";
import { PracticeStorage } from "@/lib/services/storage.service";
import { Practice, Question } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useSyncExternalStore, useState } from "react";

export function usePracticeCard(word: string, subPractice: Practice[]) {
  const searchParams = useSearchParams();
  const modeFromUrl = MODE_MAP[searchParams.get("mode") as keyof typeof MODE_MAP] ?? PracticeCardMode.DEFAULT;

  const [mode, setMode] = useState<PracticeCardMode>(modeFromUrl);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const nextWord = useSyncExternalStore(
    () => () => {},
    () => PracticeStorage.getNextWord(word),
    () => undefined,
  );

  const handleModeChange = (newMode: PracticeCardMode) => {
    if (mode === newMode) {
      setMode(PracticeCardMode.DEFAULT);
      return;
    }
    setPracticeIndex(0);
    setMode(newMode);
  };

  const handleNextQuestion = () => setPracticeIndex((prev) => (prev + 1) % subPractice.length);
  const save = () => PracticeStorage.addToPracticeList(word);
  const removeWordsToPractice = (w: string) => PracticeStorage.removeFromPracticeList(w);
  const question: Question | undefined = Question.fromPractice(subPractice[practiceIndex]);

  return {
    mode,
    practiceIndex,
    question,
    handleModeChange,
    handleNextQuestion,
    nextWord,
    save,
    removeWordsToPractice,
  };
}
