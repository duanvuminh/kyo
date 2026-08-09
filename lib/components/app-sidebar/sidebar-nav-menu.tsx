"use client";

import { PracticeLink } from "@/lib/components/practice-link";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  { title: "Road map n1", url: "/road-map-n1" },
  { title: "Học qua video", url: "/short/newest" },
  { title: "Học qua truyện tranh", url: "/manga/newest" },
];
const others = [
  { title: "Tra cứu thủ tục", url: "/infor" },
  { title: "Memo", url: "/memo" },
];

export function SidebarNavMenu() {
  const { isMobile, setOpenMobile } = useSidebar();
  const closeOnMobile = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url} onClick={closeOnMobile}>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <PracticeLink onNavigate={closeOnMobile} />
        </SidebarMenuButton>
      </SidebarMenuItem>
      {others.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url} className="text-sidebar-foreground/50" onClick={closeOnMobile}>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
