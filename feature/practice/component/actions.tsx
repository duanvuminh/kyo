import { ModeButton } from "@/feature/practice/component/mode-button";
import { PracticeCardMode } from "@/feature/practice/model/type";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { PracticeAdd } from "@/shared/component/practice-add";
import { Button } from "@/shared/component/ui/button";
import { Eye, Pencil, Play, Trash } from "lucide-react";

interface ActionsProps {
  mode: PracticeCardMode;
  handleModeChange: (m: PracticeCardMode) => void;
  word: string;
  onRemove: () => void;
}

export const Actions = ({
  mode,
  handleModeChange,
  word,
  onRemove,
}: ActionsProps) => (
  <div>
    <ModeButton
      mode={mode}
      targetMode={PracticeCardMode.FLASH_CARD}
      onClick={handleModeChange}
      icon={Eye}
    />
    <ModeButton
      mode={mode}
      targetMode={PracticeCardMode.PRACTICE}
      onClick={handleModeChange}
      icon={Play}
    />
    <ModeButton
      mode={mode}
      targetMode={PracticeCardMode.WRITE}
      onClick={handleModeChange}
      icon={Pencil}
    />
    <AudioPlayer text={word} />
    <PracticeAdd word={word} />
    <Button variant="ghost" className="text-muted" onClick={onRemove}>
      <Trash />
    </Button>
  </div>
);
