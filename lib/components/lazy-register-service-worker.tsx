"use client";

import dynamic from "next/dynamic";

// Cùng lý do với LazyToaster: đăng ký service worker không cần SSR, không cần nằm trong
// bundle ban đầu -> tải sau paint đầu, không cạnh tranh main-thread với LCP.
const RegisterServiceWorker = dynamic(
  () => import("@/lib/components/register-service-worker").then((m) => m.RegisterServiceWorker),
  { ssr: false }
);

export function LazyRegisterServiceWorker() {
  return <RegisterServiceWorker />;
}
