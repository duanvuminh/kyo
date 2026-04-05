"use client";

import { Handle, NodeProps, Position } from "reactflow";
import { RoadmapNodeData } from "@/feature/road-map/model/road-map";
import { getStatusClasses, getStatusLabel } from "@/feature/road-map/components/utils";

export function RoadmapNodeComponent({ data }: NodeProps<RoadmapNodeData>) {
  const badgeClass = getStatusClasses(data.status);
  const baseClass = data.main
    ? "relative rounded-xl border-2 border-slate-700 bg-yellow-300 px-5 py-3.5 text-sm md:text-base shadow-md"
    : "relative rounded-lg border border-slate-600 bg-amber-50 px-4 py-2 text-sm shadow-sm";

  return (
    <div className={`${baseClass} max-w-sm text-left`}>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="font-semibold leading-snug md:text-base text-black">
          {data.label}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${badgeClass}`}
        >
          {getStatusLabel(data.status)}
        </span>
      </div>
      <p className="text-xs md:text-sm leading-snug text-muted-foreground">
        {data.description}
      </p>
    </div>
  );
}
