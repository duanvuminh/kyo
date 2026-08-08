"use client";
import { CenterContent } from "@/lib/components/center-content";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <CenterContent>{error.message}</CenterContent>;
}
