import {
  BookA,
  BookOpen,
  ChevronUp,
  FileVideo,
  Info,
  Newspaper,
  SpellCheck,
  User2,
  WholeWord,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { signIn, signOut } from "@/lib/auth";
import { getUserMail } from "@/services/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Từ vựng",
    url: "/words",
    icon: BookA,
  },
  {
    title: "Ngữ pháp",
    url: "#",
    icon: SpellCheck,
  },
  {
    title: "Kanji",
    url: "#",
    icon: WholeWord,
  },
  {
    title: "Tin tức",
    url: "/short/newest",
    icon: Newspaper,
  },
  {
    title: "Anime",
    url: "/video/random",
    icon: FileVideo,
  },
  {
    title: "Manga",
    url: "/manga/newest",
    icon: BookOpen,
  },
  {
    title: "Thông tin",
    url: "/infor/newest",
    icon: Info,
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
          <SidebarGroupLabel>Có thể bạn quan tâm</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
