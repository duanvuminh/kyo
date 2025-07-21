"use client";
import { CenterMessage } from "@/component/center-message";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <CenterMessage>{error.message}</CenterMessage>;
}
