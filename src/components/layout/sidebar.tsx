import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { LayoutDashboard, Folder, Calendar, Bell, X, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "Workspace", path: "/" },
  { icon: Folder, label: "Projects", path: "/projects" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
]

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (v: boolean) => void
  isMobileOpen: boolean
  setIsMobileOpen: (v: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen, isMobileOpen, setIsMobileOpen }: SidebarProps) {
  
  const sidebarContent = (
    <div className="flex flex-col h-full bg-muted/10 border-r border-border/50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-none">
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border/50">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">
            V
          </div>
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="font-semibold whitespace-nowrap"
            >
              Vero Workspace
            </motion.span>
          )}
        </div>

        {/* Mobile Close */}
        <button 
          onClick={() => setIsMobileOpen(false)} 
          className="md:hidden p-1.5 hover:bg-muted rounded-md text-muted-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav Items */}
      <div className="flex-1 py-4 px-3 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative overflow-hidden",
                "hover:bg-muted/50",
                isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-primary")} />
                {(isOpen || isMobileOpen) && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="whitespace-nowrap text-sm"
                  >
                    {item.label}
                  </motion.span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border/50">
        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors">
          <Settings className="w-5 h-5 flex-shrink-0" />
          {(isOpen || isMobileOpen) && <span className="text-sm whitespace-nowrap">Settings</span>}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar Placeholder for Layout */}
      <div className="hidden md:block w-[72px] flex-shrink-0 h-screen" />

      {/* Desktop Sidebar (Floating/Hover) */}
      <motion.aside
        initial={false}
        animate={{ width: isOpen ? 240 : 72 }}
        className="hidden md:block fixed top-0 left-0 h-screen z-30 bg-background/95 backdrop-blur-md shadow-[4px_0_24px_rgba(0,0,0,0.05)] border-r border-border/50"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {sidebarContent}
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed inset-y-0 left-0 w-72 bg-background z-50 shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
