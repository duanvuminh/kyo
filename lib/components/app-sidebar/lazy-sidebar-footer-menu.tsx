"use client";

import dynamic from "next/dynamic";

// Sidebar mặc định đóng (off-canvas) lúc load đầu -> phần này chưa hiện ngay, nhưng vẫn kéo
// @radix-ui/react-dropdown-menu + next-auth/react vào bundle chung của mọi trang nếu import tĩnh.
// Tải sau khi paint đầu xong, giống pattern LazyToaster.
const SidebarFooterMenu = dynamic(
  () => import("@/lib/components/app-sidebar/sidebar-footer-menu").then((m) => m.SidebarFooterMenu),
  { ssr: false }
);

export function LazySidebarFooterMenu() {
  return <SidebarFooterMenu />;
}
