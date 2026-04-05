"use client";

import { DEFAULT_EDGE_OPTIONS } from "@/feature/road-map/components/constants";
import { RoadmapNodeComponent } from "@/feature/road-map/components/roadmap-node-component";
import { useNodesSync } from "@/feature/road-map/components/use-nodes-sync";
import { BASE_EDGES, RoadmapStatus } from "@/feature/road-map/model/road-map";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

const nodeTypes = { roadmap: RoadmapNodeComponent };


export function RoadmapFlow({
  statuses,
  onSelect,
  selectedId,
}: {
  statuses: Record<string, RoadmapStatus>;
  onSelect: (id: string) => void;
  selectedId: string | null;
}) {
  const { nodes, onNodesChange } = useNodesSync(statuses, selectedId);

  return (
    <div className="h-[calc(100dvh-10rem)] w-full rounded-xl border bg-background/60">
      <ReactFlow
        nodes={nodes}
        edges={BASE_EDGES}
        onNodesChange={onNodesChange}
        onNodeDragStop={() => {
          console.log(JSON.stringify(nodes.map((n) => ({ ...n.data, x: Math.round(n.position.x), y: Math.round(n.position.y) })), null, 2));
        }}
        fitView
        defaultEdgeOptions={DEFAULT_EDGE_OPTIONS}
        fitViewOptions={{ padding: 0.2 }}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag
        panOnScroll
        zoomOnScroll
        nodeTypes={nodeTypes}
        onNodeClick={(_, node) => onSelect(node.id)}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={16} size={1} />
      </ReactFlow>
    </div>
  );
}
