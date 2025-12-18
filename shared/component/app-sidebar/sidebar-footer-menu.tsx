import { ChevronUp, User2 } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/shared/component/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

interface SidebarFooterMenuProps {
  email: string | null;
  onLogin: () => void;
  onLogout: () => void;
  isLoading: boolean;
}

function LoadingState() {
  return (<SidebarMenu><SidebarMenuItem><SidebarMenuButton>Đang tải…</SidebarMenuButton></SidebarMenuItem></SidebarMenu>);
}

function LoginButton({ onLogin }: { onLogin: () => void }) {
  return (<SidebarMenu><SidebarMenuItem><Button onClick={onLogin} variant="link" size="sm">Đăng nhập</Button></SidebarMenuItem></SidebarMenu>);
}

export function SidebarFooterMenu({ email, onLogin, onLogout, isLoading }: SidebarFooterMenuProps) {
  if (isLoading) { return <LoadingState />; }
  if (!email) { return <LoginButton onLogin={onLogin} />; }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton><User2 /> {email}<ChevronUp className="ml-auto" /></SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
            <Button onClick={onLogout} variant="link" size="sm">Thoát</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
