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
  href?: string;
}

export interface RoadmapNodeData extends RoadmapNodeMeta {
  status: RoadmapStatus;
}

export const BASE_META: RoadmapNodeMeta[] = [
  {
    id: "main-words",
    label: "Từ vựng",
    description: "Học từ vựng theo 新完全マスター ",
    status: "doing",
    main: true,
    x: 462,
    y: -4,
  },
  {
    id: "word-1",
    label: "Bài 1",
    description: "性格・人柄・個性 (Tính cách)",
    status: "done",
    main: false,
    x: 900,
    y: -298,
    href: "/tu-vung/n1/page1",
  },
  {
    id: "word-2",
    label: "Bài 2",
    description: "人間関係・付き合い・恋愛 (Quan hệ & cảm xúc)",
    status: "done",
    main: false,
    x: 900,
    y: -208,
    href: "/tu-vung/n1/page2",
  },
  {
    id: "word-3",
    label: "Bài 3",
    description: "料理・食べ物・味・匂い (Ẩm thực)",
    status: "done",
    main: false,
    x: 900,
    y: -118,
    href: "/tu-vung/n1/page3",
  },
  {
    id: "word-4",
    label: "Bài 4",
    description: "住居 (Nhà ở)",
    status: "done",
    main: false,
    x: 900,
    y: -28,
    href: "/tu-vung/n1/page4",
  },
  {
    id: "word-5",
    label: "Bài 5",
    description: "病気・治療 (Bệnh tật & điều trị)",
    status: "done",
    main: false,
    x: 900,
    y: 62,
    href: "/tu-vung/n1/page5",
  },
  {
    id: "word-6",
    label: "Bài 6",
    description: "健康・芸術 (Sức khỏe & Nghệ thuật)",
    status: "done",
    main: false,
    x: 1355,
    y: -298,
    href: "/tu-vung/n1/page6",
  },
  {
    id: "word-7",
    label: "Bài 7",
    description: "教育 (Giáo dục)",
    status: "done",
    main: false,
    x: 1355,
    y: -208,
    href: "/tu-vung/n1/page7",
  },
  {
    id: "word-8",
    label: "Bài 8",
    description: "仕事・職業 (Công việc & Nghề nghiệp)",
    status: "done",
    main: false,
    x: 1355,
    y: -118,
    href: "/tu-vung/n1/page8",
  },
  {
    id: "word-9",
    label: "Bài 9",
    description: "発表・マスコミ (Trình bày & Truyền thông)",
    status: "done",
    main: false,
    x: 1355,
    y: -28,
    href: "/tu-vung/n1/page9",
  },
  {
    id: "word-10",
    label: "Bài 10",
    description: "性格・人柄・個性・人間関係 (Tính cách & Quan hệ)",
    status: "done",
    main: false,
    x: 1355,
    y: 62,
    href: "/tu-vung/n1/page10",
  },
  {
    id: "word-11",
    label: "Bài 11",
    description: "料理・食べ物・育児・住居 (Ẩm thực & Nuôi con & Nhà ở)",
    status: "done",
    main: false,
    x: 1810,
    y: -298,
    href: "/tu-vung/n1/page11",
  },
  {
    id: "word-12",
    label: "Bài 12",
    description: "病気・治療・健康・芸術 (Bệnh tật & Sức khỏe & Nghệ thuật)",
    status: "done",
    main: false,
    x: 1810,
    y: -208,
    href: "/tu-vung/n1/page12",
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
    x: 90,
    y: 400,
  },
  {
    id: "grammar-2",
    label: "Bài 2",
    description: "Bài 2: Ngữ pháp về chủ để ABC",
    status: "todo",
    main: false,
    x: 90,
    y: 490,
  },
  {
    id: "grammar-3",
    label: "Bài 3",
    description: "Bài 3: Ngữ pháp về chủ để DEF",
    status: "todo",
    main: false,
    x: 90,
    y: 580,
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
  { id: "e-word-4", source: "word-3", target: "word-4" },
  { id: "e-word-5", source: "word-4", target: "word-5" },
  { id: "e-word-6", source: "word-5", target: "word-6" },
  { id: "e-word-7", source: "word-6", target: "word-7" },
  { id: "e-word-8", source: "word-7", target: "word-8" },
  { id: "e-word-9", source: "word-8", target: "word-9" },
  { id: "e-word-10", source: "word-9", target: "word-10" },
  { id: "e-word-11", source: "word-10", target: "word-11" },
  { id: "e-word-12", source: "word-11", target: "word-12" },
  {
    id: "edge-main-1",
    source: "main-words",
    target: "main-grammar",
  },
  { id: "e-grammar-1", source: "main-grammar", target: "grammar-1" },
  { id: "e-grammar-1-2", source: "grammar-1", target: "grammar-2" },
  { id: "e-grammar-2-3", source: "grammar-2", target: "grammar-3" },
];
