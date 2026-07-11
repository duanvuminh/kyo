"use client";

import {
  getStatusClasses,
  getStatusLabel,
} from "@/feature/road-map/components/utils";
import {
  BASE_META,
  MAIN_CHILDREN_IDS,
  RoadmapNodeMeta,
  RoadmapStatus,
} from "@/feature/road-map/model/road-map";
import Link from "next/link";
import { useMemo } from "react";

function getSelectedMeta(selectedId: string | null): RoadmapNodeMeta {
  if (selectedId == null) {
    return BASE_META[0];
  }
  return BASE_META.find((m) => m.id === selectedId) ?? BASE_META[0];
}

function getCurrentChildMeta(
  mainId: string,
  statuses: Record<string, RoadmapStatus>,
): RoadmapNodeMeta | null {
  const childIds = MAIN_CHILDREN_IDS[mainId] ?? [];
  const nextId =
    childIds.find((id) => (statuses[id] ?? "todo") !== "done") ??
    childIds[childIds.length - 1];
  return BASE_META.find((m) => m.id === nextId) ?? null;
}

function RoadmapDetailInfo({
  groupLabel,
  meta,
}: {
  groupLabel: string | null;
  meta: RoadmapNodeMeta;
}) {
  return (
    <div>
      {groupLabel && (
        <p className="text-xs text-muted-foreground">{groupLabel} — bài hiện tại</p>
      )}
      <h3 className="text-base font-medium">{meta.label}</h3>
      <p className="mt-2 whitespace-pre-line text-muted-foreground">{meta.description}</p>
      {meta.href && (
        <Link
          href={meta.href}
          className="mt-2 inline-block text-sm text-blue-600 hover:underline"
        >
          Xem bài →
        </Link>
      )}
    </div>
  );
}

function StatusButtons({ onChange }: { onChange: (status: RoadmapStatus) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="text-muted-foreground">Cập nhật trạng thái:</span>
      <button
        type="button"
        onClick={() => onChange("todo")}
        className="rounded-full border px-2 py-0.5 transition hover:bg-accent hover:text-accent-foreground"
      >
        Chưa làm
      </button>
      <button
        type="button"
        onClick={() => onChange("doing")}
        className="rounded-full border px-2 py-0.5 transition hover:bg-accent hover:text-accent-foreground"
      >
        Đang làm
      </button>
      <button
        type="button"
        onClick={() => onChange("done")}
        className="rounded-full border px-2 py-0.5 transition hover:bg-accent hover:text-accent-foreground"
      >
        Đã xong
      </button>
    </div>
  );
}

export function RoadmapDetail({
  statuses,
  selectedId,
  setStatus,
}: {
  statuses: Record<string, RoadmapStatus>;
  selectedId: string | null;
  setStatus: (id: string, status: RoadmapStatus) => void;
}) {
  const selectedMeta = useMemo(() => getSelectedMeta(selectedId), [selectedId]);
  const meta = useMemo(
    () =>
      (selectedMeta.main
        ? getCurrentChildMeta(selectedMeta.id, statuses)
        : null) ?? selectedMeta,
    [selectedMeta, statuses],
  );
  const status = statuses[meta.id] ?? meta.status;

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
        <RoadmapDetailInfo
          groupLabel={selectedMeta.main ? selectedMeta.label : null}
          meta={meta}
        />
        <StatusButtons onChange={(next) => setStatus(meta.id, next)} />
      </div>
    </section>
  );
}
