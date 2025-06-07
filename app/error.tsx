"use client";
import { CenterMessage } from "@/components/center-message";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <CenterMessage>{error.message}</CenterMessage>;
}
