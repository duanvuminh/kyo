import { Practice } from "@/feature/practice/model/practice";
import { Question } from "@/feature/practice/model/question";
import { PracticeStorage } from "@/service/storage";
import { useEffect, useState } from "react";

export enum PracticeCardMode {
  default,
  flashcard,
  practice,
  write,
  read,
}

export function usePracticeCard(word: string, subPractice: Practice[]) {
  const [mode, setMode] = useState<PracticeCardMode>(PracticeCardMode.default);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [nextWord, setNextWord] = useState<string | undefined>(undefined);

  useEffect(() => {
    setNextWord(PracticeStorage.getNextWord(word));
  }, [word]);
  const handleModeChange = (newMode: PracticeCardMode) => {
    if (mode === newMode) {
      setMode(PracticeCardMode.default);
      return;
    }
    setPracticeIndex(0);
    setMode(newMode);
  };

  const handleNextQuestion = () => {
    setPracticeIndex((prev) => (prev + 1) % subPractice.length);
  };

  const save = () => {
    PracticeStorage.addToPracticeList(word);
  };

  const question: Question | undefined = Question.fromDTO(
    subPractice[practiceIndex]
  );

  const addWordsToPractice = (word: string) => {
    PracticeStorage.addToPracticeList(word);
  };

  const removeWordsToPractice = (word: string) => {
    PracticeStorage.removeFromPracticeList(word);
  };

  return {
    mode,
    practiceIndex,
    question,
    handleModeChange,
    handleNextQuestion,
    nextWord,
    save,
    PracticeCardMode,
    addWordsToPractice,
    removeWordsToPractice,
  };
}
