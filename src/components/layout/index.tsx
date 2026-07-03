import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"
import { ThemeProvider } from "@/components/theme-provider"

export function AppLayout() {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  
  // Do not show layout wrapper on sign-in page
  if (location.pathname === "/sign-in") {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vero-theme">
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
          <Outlet />
        </main>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vero-theme">
      <div className="h-screen w-full bg-background text-foreground flex overflow-hidden selection:bg-primary/20">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <Topbar setIsMobileOpen={setIsMobileOpen} />
          <main className="flex-1 overflow-auto p-4 md:p-8 pt-4">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
