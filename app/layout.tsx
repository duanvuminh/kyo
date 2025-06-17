import "@/app/globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumb";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
        </body>
      </html>
    </StoreProvider>
  );
}
