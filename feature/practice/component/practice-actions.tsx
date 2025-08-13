import { NextWordButton } from "@/feature/practice/component/next-word-button";
import { PracticeCardMode } from "@/feature/practice/model/type";

interface PracticeActionsProps {
  mode: PracticeCardMode;
  handleModeChange: (m: PracticeCardMode) => void;
  nextWord?: string;
}

export const PracticeActions = ({ mode, nextWord }: PracticeActionsProps) => (
  <NextWordButton
    nextWord={nextWord}
    active={mode === PracticeCardMode.PRACTICE}
  />
);
