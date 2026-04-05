import { Edge } from "reactflow";

export type RoadmapStatus = "todo" | "doing" | "done";

export interface RoadmapNodeMeta {
  id: string;
  label: string;
  description: string;
  status: RoadmapStatus;
  main: boolean;
  x: number;
  y: number;
}

export interface RoadmapNodeData extends RoadmapNodeMeta {
  status: RoadmapStatus;
}

export const BASE_META: RoadmapNodeMeta[] = [
  {
    id: "main-words",
    label: "Từ vựng",
    description: "Học từ vựng theo 新完全マスター ",
    status: "todo",
    main: true,
    x: 462,
    y: -4,
  },
  {
    id: "word-1",
    label: "Bài 1",
    description: "Bài 1: Từ vựng về chủ để ABC",
    status: "todo",
    main: false,
    x: 900,
    y: -148,
  },
  {
    id: "word-2",
    label: "Bài 2",
    description: "Bài 2: Từ vựng về chủ để DEF",
    status: "todo",
    main: false,
    x: 900,
    y: -58,
  },
  {
    id: "word-3",
    label: "Bài 3",
    description: "Bài 3: Từ vựng về chủ để GHI",
    status: "todo",
    main: false,
    x: 900,
    y: 29,
  },
  {
    id: "main-grammar",
    label: "Ngữ pháp",
    description: "Học ngữ pháp theo 新完全マスター ",
    status: "todo",
    main: true,
    x: 462,
    y: 285,
  },
  {
    id: "grammar-1",
    label: "Bài 1",
    description: "Bài 1: Ngữ pháp về chủ để XYZ",
    status: "todo",
    main: false,
    x: 175,
    y: 423,
  },
  {
    id: "grammar-2",
    label: "Bài 2",
    description: "Bài 2: Ngữ pháp về chủ để ABC",
    status: "todo",
    main: false,
    x: 175,
    y: 523,
  },
  {
    id: "grammar-3",
    label: "Bài 3",
    description: "Bài 3: Ngữ pháp về chủ để DEF",
    status: "todo",
    main: false,
    x: 175,
    y: 614,
  },
];

export const BASE_EDGES: Edge[] = [
  {
    id: "edge-1",
    source: "main-words",
    target: "word-1",
  },
  { id: "e-word-2", source: "word-1", target: "word-2" },
  { id: "e-word-3", source: "word-2", target: "word-3" },
  {
    id: "edge-main-1",
    source: "main-words",
    target: "main-grammar",
  },
  { id: "e-grammar-1", source: "main-grammar", target: "grammar-1" },
  { id: "e-grammar-1-2", source: "grammar-1", target: "grammar-2" },
  { id: "e-grammar-2-3", source: "grammar-2", target: "grammar-3" },
];
