"use client";

import { Input } from "@/components/ui/input";
import { useSearchBox } from "react-instantsearch";

export function InforSearch() {
  const { query, refine } = useSearchBox();

  return (
    <Input type="text" value={query} onChange={(e) => refine(e.target.value)} />
  );
}
