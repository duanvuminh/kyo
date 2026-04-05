import { BASE_META, RoadmapNodeData, RoadmapStatus } from "@/feature/road-map/model/road-map";
import { useEffect } from "react";
import { Node, Position, useNodesState } from "reactflow";

function createInitialNodes(
  statuses: Record<string, RoadmapStatus>,
  selectedId: string | null,
): Node[] {
  return BASE_META.map((meta) => ({
    id: meta.id,
    position: { x: meta.x, y: meta.y },
    data: { ...meta, status: statuses[meta.id] ?? meta.status },
    type: "roadmap",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: selectedId === meta.id ? { boxShadow: "0 0 0 2px rgb(37 99 235)" } : undefined,
  }));
}

export function useNodesSync(
  statuses: Record<string, RoadmapStatus>,
  selectedId: string | null,
) {
  const [nodes, setNodes, onNodesChange] = useNodesState<RoadmapNodeData>([]);

  useEffect(() => {
    setNodes((prev) => {
      if (prev.length === 0) {
        return createInitialNodes(statuses, selectedId);
      }
      return prev.map((node) => {
        const meta = BASE_META.find((m) => m.id === node.id)!;
        return {
          ...node,
          data: { ...meta, status: statuses[meta.id] ?? meta.status },
          style: selectedId === meta.id ? { boxShadow: "0 0 0 2px rgb(37 99 235)" } : undefined,
        };
      });
    });
  }, [selectedId, setNodes, statuses]);

  return { nodes, onNodesChange };
}
