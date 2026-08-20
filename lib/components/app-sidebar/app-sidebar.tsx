import { LazySidebarFooterMenu } from "@/lib/components/app-sidebar/lazy-sidebar-footer-menu";
import { SidebarNavMenu } from "@/lib/components/app-sidebar/sidebar-nav-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function AppSidebar() {
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
            <SidebarNavMenu />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <LazySidebarFooterMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
