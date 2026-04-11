import { PracticeLink } from "@/shared/component/practice-link";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/component/ui/sidebar";
import Link from "next/link";

const items = [
  { title: "Từ vựng", url: "/words" },
  { title: "Ngữ pháp", url: "/grammar" },
  { title: "Kanji", url: "/kanji" },
  { title: "Đọc", url: "/reading" },
  { title: "Nghe", url: "/listening" },
  { title: "Học qua video", url: "/short/newest" },
  { title: "Học qua truyện tranh", url: "/manga/newest" },
];
const others = [
  { title: "Nhắn tin", url: "/qa" },
  { title: "Thủ tục", url: "/infor" },
  { title: "Memo", url: "/memo" },
];

export function SidebarNavMenu() {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url}>
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <PracticeLink />
        </SidebarMenuButton>
      </SidebarMenuItem>
      {others.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url} className="text-sidebar-foreground/50">
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
