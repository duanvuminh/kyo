"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

async function copyContent(value?: string) {
  try {
    await navigator.clipboard.writeText(value ?? "");
    toast.success("Đã copy nội dung");
  } catch {
    toast.error("Không thể copy vào clipboard");
  }
}

async function pasteContent(onReplace: (value: string) => void, setPending: (pending: boolean) => void) {
  setPending(true);
  try {
    const text = await navigator.clipboard.readText();
    onReplace(text);
    toast.success("Đã dán nội dung");
  } catch {
    toast.error("Không đọc được nội dung clipboard");
  } finally {
    setPending(false);
  }
}

export function CopyPasteActions({ value, onReplace }: { value?: string; onReplace: (value: string) => void }) {
  const [pending, setPending] = useState(false);

  return (
    <>
      <Button type="button" variant="outline" size="sm" onClick={() => copyContent(value)}>
        Copy
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={pending}
        onClick={() => pasteContent(onReplace, setPending)}
      >
        {pending ? "..." : "Dán"}
      </Button>
    </>
  );
}
