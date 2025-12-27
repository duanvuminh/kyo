import { SidebarFooterMenu } from "@/shared/component/app-sidebar/sidebar-footer-menu";
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
        <SidebarFooterMenu email={email} onLogin={onLogin} onLogout={onLogout} isLoading={isLoading} />
      </SidebarFooter>
    </Sidebar>
  );
}
