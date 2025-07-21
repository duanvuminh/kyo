import "@/app/globals.css";
import { AppSidebar } from "@/component/app-sidebar";
import { BreadcrumbWithCustomSeparator } from "@/component/breadcrumb";
import { SidebarProvider, SidebarTrigger } from "@/component/ui/sidebar";
import { Toaster } from "@/component/ui/sonner";
import { StoreProvider } from "@/providers/store-provider";
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
              <div className="sticky top-0 flex items-center z-1">
                <SidebarTrigger />
                <BreadcrumbWithCustomSeparator />
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
