"use client";

import dynamic from "next/dynamic";

// Toast chỉ xuất hiện sau khi user thao tác (submit form, lưu...), không bao giờ ngay lúc
// paint đầu -> tải sonner (~180KB dist) sau, không chặn JS bundle ban đầu.
const Toaster = dynamic(() => import("@/components/ui/sonner").then((m) => m.Toaster), {
  ssr: false,
});

export function LazyToaster() {
  return <Toaster />;
}
