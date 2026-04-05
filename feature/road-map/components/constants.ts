import { DefaultEdgeOptions, MarkerType } from "reactflow";

export const STORAGE_KEY = "roadmap-n1-status";

export const DEFAULT_EDGE_OPTIONS: DefaultEdgeOptions = {
  type: "smoothstep",
  animated: true,
  style: { stroke: "#3b82f6", strokeWidth: 2.5 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#3b82f6",
  },
};
