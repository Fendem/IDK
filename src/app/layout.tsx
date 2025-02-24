import "@/styles/global.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useStore } from '@nanostores/react'
import { $userStore } from '@clerk/astro/client'
export function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = useStore($userStore)

  if (currentUser === undefined) {
    // Handle loading state
    return <div className="flex h-screen justify-center items-center text-4xl font-bold main"><svg xmlns="http://www.w3.org/2000/svg" className="size-10 inline-block" viewBox="0 0 24 24">
    <path fill="#000" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity="0.5" />
    <path fill="#000" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
      <animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate" />
    </path>
  </svg></div>
  }

  if (currentUser === null) {
    return <div>Not signed in</div>
  }

  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className="p-1">
        <div className="hover:bg-sidebar-border rounded-md fixed">
          <SidebarTrigger />
        </div>
      </main>
      <div className="mt-4 mx-auto">{children}</div> {/* Hier wird "Hi" eingefügt */}
    </SidebarProvider>
  )
}
