import "@/styles/global.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar>
        
      </AppSidebar>
      <main className="p-1">
        <div className="hover:bg-sidebar-border rounded-md">
          <SidebarTrigger />
        </div>
      </main>
        <div className="mt-4 mx-auto">{children}</div> {/* Hier wird "Hi" eingefügt */}
    </SidebarProvider>
  )
}
