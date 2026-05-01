import { ModeButton } from "@/feature/practice/component/mode-button";
import { PracticeCardMode } from "@/feature/practice/model/type";
import { AudioPlayer } from "@/shared/component/audio-player/audio-player";
import { Button } from "@/shared/component/ui/button";
import { Eye, Play, Trash } from "lucide-react";

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
  <div className="flex items-center gap-1">
    <ModeButton
      mode={mode}
      targetMode={PracticeCardMode.FLASH_CARD}
      onClick={handleModeChange}
      icon={Eye}
      title="Flash card"
    />
    <ModeButton
      mode={mode}
      targetMode={PracticeCardMode.PRACTICE}
      onClick={handleModeChange}
      icon={Play}
      title="Luyện tập"
    />
    <AudioPlayer text={word} />
    <Button
      variant="ghost"
      className="text-muted-foreground hover:text-destructive"
      onClick={onRemove}
      title="Xoá khỏi danh sách"
    >
      <Trash />
    </Button>
  </div>
);
