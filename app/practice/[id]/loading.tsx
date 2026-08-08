"use client";
import { Actions } from "@/app/practice/_components/actions";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";

export default function Loading() {
  const { id } = useParams<{ id: string }>();
  const word = decodeURIComponent(id ?? "");

  return (
    <div className="px-2">
    <Card className="p-1 border-none bg-background">
      <CardHeader className="text-2xl">
        <CardTitle>{word}</CardTitle>
      </CardHeader>
      <CardAction>
        <CardAction>
          <Actions
            handleModeChange={() => { }}
            word={word}
            onRemove={() => { }}
          />
        </CardAction>
      </CardAction>
      <CardContent>
        <Skeleton className="h-48 w-full rounded-md" />
      </CardContent>
    </Card>
    </div>
  );
}
