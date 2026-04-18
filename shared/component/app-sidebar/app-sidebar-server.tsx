import AppSidebarClient from "@/shared/component/app-sidebar/app-sidebar-client";
import { SidebarNavMenu } from "@/shared/component/app-sidebar/sidebar-nav-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/shared/component/ui/sidebar";
import Link from "next/link";

export function AppSidebarServer() {
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
        <AppSidebarClient />
      </SidebarFooter>
    </Sidebar>
  );
}
