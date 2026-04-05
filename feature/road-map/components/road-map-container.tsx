"use client";

import { RoadmapDetail } from "@/feature/road-map/components/roadmap-detail";
import { RoadmapFlow } from "@/feature/road-map/components/roadmap-flow";
import { useRoadMap } from "@/feature/road-map/components/use-road-map";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/component/ui/sheet";

export function RoadMapContainer() {
  const { statuses, selectedId, setSelectedId, handleSetStatus } = useRoadMap();

  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold md:text-4xl">Roadmap JLPT N1</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Nội dung học và tiến trình học.
        </p>
      </header>

      <RoadmapFlow
        statuses={statuses}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <Sheet
        open={selectedId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedId(null);
          }
        }}
      >
        <SheetContent side="right" className="w-80 overflow-auto">
          <SheetHeader>
            <SheetTitle>Chi tiết bước</SheetTitle>
            <SheetDescription />
          </SheetHeader>
          <RoadmapDetail
            statuses={statuses}
            selectedId={selectedId}
            setStatus={handleSetStatus}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
