import { BASE_META, RoadmapStatus } from "@/feature/road-map/model/road-map";
import { STORAGE_KEY } from "@/feature/road-map/components/constants";
import { useState } from "react";

function loadInitialStatuses(): Record<string, RoadmapStatus> {
  const initial: Record<string, RoadmapStatus> = {};
  BASE_META.forEach((meta) => {
    initial[meta.id] = meta.status;
  });

  if (typeof window === "undefined") {
    return initial;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return initial;
    }

    const parsed = JSON.parse(raw) as Record<string, RoadmapStatus>;
    const merged: Record<string, RoadmapStatus> = { ...initial };
    Object.keys(parsed).forEach((key) => {
      if (key in merged) {
        merged[key] = parsed[key];
      }
    });
    return merged;
  } catch {
    return initial;
  }
}

export function useRoadMap() {
  const [statuses, setStatuses] = useState<Record<string, RoadmapStatus>>(() =>
    loadInitialStatuses(),
  );
  const [selectedId, setSelectedId] = useState<string | null>("start");

  const handleSetStatus = (id: string, status: RoadmapStatus) => {
    setStatuses((prev) => {
      const next = { ...prev, [id]: status };
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      }
      return next;
    });
  };

  return { statuses, selectedId, setSelectedId, handleSetStatus };
}
