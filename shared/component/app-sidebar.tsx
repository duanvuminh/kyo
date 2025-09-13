import { ChevronUp, User2 } from "lucide-react";

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
import { signIn, signOut } from "@/shared/lib/auth";
import { getUserMail } from "@/shared/service/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const items = [
  {
    title: "Từ vựng",
    url: "/words",
  },
  {
    title: "Ngữ pháp",
    url: "/grammar",
  },
  {
    title: "Kanji",
    url: "/kanji",
  },
  {
    title: "Đọc",
    url: "/reading",
  },
  {
    title: "Nghe",
    url: "/listening",
  },
  {
    title: "Short",
    url: "/short/newest",
  },
  {
    title: "Anime",
    url: "/video/random",
  },
  {
    title: "Manga",
    url: "/manga/newest",
  },
  {
    title: "Thủ tục",
    url: "/infor",
  },
];

export async function AppSidebar() {
  const email = await getUserMail();
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
                      {/* <item.icon /> */}
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
            {email ? (
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
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <Button type="submit" variant="link" size="sm">
                      Thoát
                    </Button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <Button type="submit" variant="link" size="sm">
                  Đăng nhập
                </Button>
              </form>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
