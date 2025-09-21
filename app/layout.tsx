import "@/app/globals.css";
import { AppSidebar } from "@/shared/component/app-sidebar";
import { KBreadCrumb } from "@/shared/component/bread-crumb/bread-crumb";
import { SidebarProvider, SidebarTrigger } from "@/shared/component/ui/sidebar";
import { Toaster } from "@/shared/component/ui/sonner";
import { StoreProvider } from "@/shared/providers/store-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyo",
  description: "Học tiếng Nhật cùng Kyo",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <div className="sticky top-0 flex items-center z-1 m-1 gap-2">
                <SidebarTrigger />
                <KBreadCrumb />
              </div>
              {children}
            </main>
          </SidebarProvider>
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}
