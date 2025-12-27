import { PracticeLink } from "@/shared/component/practice-link";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/component/ui/sidebar";
import Link from "next/link";

const items = [
  { title: "Từ vựng", url: "/tu-vung" },
  { title: "Ngữ pháp", url: "/grammar" },
  { title: "Kanji", url: "/kanji" },
  { title: "Đọc", url: "/reading" },
  { title: "Nghe", url: "/listening" },
  { title: "Short", url: "/short/newest" },
  { title: "Anime", url: "/video/random" },
  { title: "Manga", url: "/manga/newest" },
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
    </SidebarMenu>
  );
}
