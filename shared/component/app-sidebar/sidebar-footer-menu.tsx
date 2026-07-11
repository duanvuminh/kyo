"use client";

import { ChevronUp, User2 } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/shared/component/ui/button";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/shared/component/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

function LoadingState() {
  return (<SidebarMenu><SidebarMenuItem><SidebarMenuButton>Đang tải…</SidebarMenuButton></SidebarMenuItem></SidebarMenu>);
}

function LoginButton({ onLogin }: { onLogin: () => void }) {
  return (<SidebarMenu><SidebarMenuItem><Button onClick={onLogin} variant="link" size="sm">Đăng nhập</Button></SidebarMenuItem></SidebarMenu>);
}

export function SidebarFooterMenu() {
  const { data: session, status } = useSession();
  const email = session?.user?.email ?? null;

  if (status === "loading") { return <LoadingState />; }
  if (!email) { return <LoginButton onLogin={() => signIn("google")} />; }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton><User2 /> {email}<ChevronUp className="ml-auto" /></SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
            <Button onClick={() => signOut()} variant="link" size="sm">Thoát</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
