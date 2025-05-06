import { Card } from "@/components/ui/card";
import { Fragment, ReactNode } from "react";

interface ChartContainerProps {
  isUser: boolean;
  children: ReactNode;
}

export function ChartContainer({ isUser, children }: ChartContainerProps) {
  return isUser ? (
    <Card className="ml-10 mr-1 px-5 py-1">{children}</Card>
  ) : (
    <Fragment> {children} </Fragment>
  );
}
