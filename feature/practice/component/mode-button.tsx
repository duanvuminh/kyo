import { cn } from "@/core/utils/utils";
import { PracticeCardMode } from "@/feature/practice/model/type";
import { Button } from "@/shared/component/ui/button";

interface ModeButtonProps {
  mode: PracticeCardMode;
  targetMode: PracticeCardMode;
  onClick: (mode: PracticeCardMode) => void;
  icon: React.ComponentType;
  className?: string;
}

export const ModeButton = ({
  mode,
  targetMode,
  onClick,
  icon: Icon,
  className = "text-muted",
}: ModeButtonProps) => (
  <Button
    variant="ghost"
    className={cn(className, { "text-primary": mode === targetMode })}
    onClick={() => onClick(targetMode)}
  >
    <Icon />
  </Button>
);
