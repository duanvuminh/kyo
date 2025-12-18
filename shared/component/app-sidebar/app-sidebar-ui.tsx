import Link from "next/link";
import { SidebarFooterMenu } from "@/shared/component/app-sidebar/sidebar-footer-menu";
import { PracticeLink } from "@/shared/component/practice-link";
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

interface AppSidebarUIProps {
  email: string | null;
  onLogin: () => void;
  onLogout: () => void;
  isLoading: boolean;
}

export function AppSidebarUI({ email, onLogin, onLogout, isLoading }: AppSidebarUIProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="mr-5">Kyo</Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}><span>{item.title}</span></Link>
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
        <SidebarFooterMenu email={email} onLogin={onLogin} onLogout={onLogout} isLoading={isLoading} />
      </SidebarFooter>
    </Sidebar>
  );
}
