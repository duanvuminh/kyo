"use client";

import {
  getStatusClasses,
  getStatusLabel,
} from "@/feature/road-map/components/utils";
import {
  BASE_META,
  RoadmapNodeMeta,
  RoadmapStatus,
} from "@/feature/road-map/model/road-map";
import { useMemo } from "react";
import Link from "next/link";

function getSelectedMeta(selectedId: string | null): RoadmapNodeMeta {
  if (selectedId == null) {
    return BASE_META[0];
  }
  return BASE_META.find((m) => m.id === selectedId) ?? BASE_META[0];
}

/* eslint-disable max-lines-per-function */
export function RoadmapDetail({
  statuses,
  selectedId,
  setStatus,
}: {
  statuses: Record<string, RoadmapStatus>;
  selectedId: string | null;
  setStatus: (id: string, status: RoadmapStatus) => void;
}) {
  const meta = useMemo(() => getSelectedMeta(selectedId), [selectedId]);
  const status = statuses[meta.id] ?? meta.status;

  const handleClick = (next: RoadmapStatus) => {
    setStatus(meta.id, next);
  };

  return (
    <section className="text-sm p-2">
      <div className="mb-3 flex items-center gap-3">
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${getStatusClasses(
            status,
          )}`}
        >
          {getStatusLabel(status)}
        </span>
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="text-base font-medium">{meta.label}</h3>
          <p className="mt-2 whitespace-pre-line text-muted-foreground">
            {meta.description}
          </p>
          {meta.href && (
            <Link
              href={meta.href}
              className="mt-2 inline-block text-sm text-blue-600 hover:underline"
            >
              Xem bài →
            </Link>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted-foreground">Cập nhật trạng thái:</span>
          <button
            type="button"
            onClick={() => handleClick("todo")}
            className="rounded-full border px-2 py-0.5 transition hover:bg-accent hover:text-accent-foreground"
          >
            Chưa làm
          </button>
          <button
            type="button"
            onClick={() => handleClick("doing")}
            className="rounded-full border px-2 py-0.5 transition hover:bg-accent hover:text-accent-foreground"
          >
            Đang làm
          </button>
          <button
            type="button"
            onClick={() => handleClick("done")}
            className="rounded-full border px-2 py-0.5 transition hover:bg-accent hover:text-accent-foreground"
          >
            Đã xong
          </button>
        </div>
      </div>
    </section>
  );
}
/* eslint-enable max-lines-per-function */
