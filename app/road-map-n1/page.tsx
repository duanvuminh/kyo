"use client";

import { RoadMapContainer } from "@/feature/road-map/components/road-map-container";
import { ReactFlowProvider } from "reactflow";

export default function Page() {
  return (
    <ReactFlowProvider>
      <RoadMapContainer />
    </ReactFlowProvider>
  );
}
