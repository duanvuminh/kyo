import { cn } from "@/lib/utils/utils";
import { HTMLAttributes } from "react";

export function CenterContent({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex h-screen items-center justify-center", className)}
      {...props}
    >
      {children}
    </div>
  );
}
