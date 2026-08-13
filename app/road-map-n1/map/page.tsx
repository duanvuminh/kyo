"use client";

import { RoadMapContainer } from "@/app/road-map-n1/_components/road-map-container";
import { ReactFlowProvider } from "reactflow";

export default function Page() {
  return (
    <ReactFlowProvider>
      <RoadMapContainer />
    </ReactFlowProvider>
  );
}
