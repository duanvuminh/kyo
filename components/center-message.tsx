import { cn } from "@/utils/utils";
import { HTMLAttributes } from "react";

type DivProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "outline" | "muted";
};

export const CenterMessage = ({
  children,
  className,
  variant = "default",
  ...props
}: DivProps) => {
  return (
    <div
      className={cn(
        "flex h-screen",
        variant === "default" && "items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
