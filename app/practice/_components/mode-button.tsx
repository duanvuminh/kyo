import { cn } from "@/lib/utils/utils";
import { PracticeCardMode } from "@/app/practice/_lib/practice.types";
import { Button } from "@/components/ui/button";

interface ModeButtonProps {
  mode?: PracticeCardMode;
  targetMode: PracticeCardMode;
  onClick: (mode: PracticeCardMode) => void;
  icon: React.ComponentType;
  className?: string;
  title?: string;
}

export const ModeButton = ({
  mode,
  targetMode,
  onClick,
  icon: Icon,
  className = "text-muted-foreground",
  title,
}: ModeButtonProps) => (
  <Button
    variant="ghost"
    className={cn(className, { "text-primary": mode === targetMode })}
    onClick={() => onClick(targetMode)}
    title={title}
  >
    <Icon />
  </Button>
);
