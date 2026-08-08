"use client";
import { CenterMessage } from "@/lib/components/center-message";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <CenterMessage>{error.message}</CenterMessage>;
}
