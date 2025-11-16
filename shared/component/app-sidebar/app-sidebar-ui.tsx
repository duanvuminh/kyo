// AppSidebar.tsx (server component)

import { ChevronUp, User2 } from "lucide-react";
import Link from "next/link";

import { PracticeLink } from "@/shared/component/practice-link";
import { Button } from "@/shared/component/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/component/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const items = [
  { title: "Từ vựng", url: "/words" },
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

export function AppSidebarUI({
  email,
  onLogin,
  onLogout,
  isLoading,
}: {
  email: string | null;
  onLogin: () => void;
  onLogout: () => void;
  isLoading: boolean;
}) {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="mr-5">
          Kyo
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
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
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {isLoading ? (
              <SidebarMenuButton>Đang tải…</SidebarMenuButton>
            ) : email ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> {email}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <Button onClick={onLogout} variant="link" size="sm">
                    Thoát
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onLogin} variant="link" size="sm">
                Đăng nhập
              </Button>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
