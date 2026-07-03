import { Bell, Search, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TopbarProps {
  setIsMobileOpen: (v: boolean) => void
}

export function Topbar({ setIsMobileOpen }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-4 md:px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden p-2 -ml-2 text-muted-foreground hover:bg-muted rounded-md transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Workspace Switcher Placeholder - Visible mainly on desktop if we don't have it in sidebar, but we put it in sidebar. So let's keep it minimal here or show context path */}
        <div className="hidden md:flex font-semibold text-lg items-center gap-2 text-muted-foreground">
          <span className="text-foreground">Workspace</span>
          <span className="text-border">/</span>
          <span>Overview</span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 rounded-full bg-muted/50 border border-border/50 focus:bg-muted focus:ring-1 focus:ring-primary/50 outline-none w-48 md:w-64 transition-all text-sm"
          />
        </div>
        
        {/* Mobile Search Icon */}
        <button className="sm:hidden p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors">
          <Search className="w-5 h-5" />
        </button>

        {/* Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <ThemeToggle />
          <button className="relative p-2 rounded-full hover:bg-muted/50 transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-primary" />
          </button>
          
          <Avatar className="ml-1 md:ml-2 w-8 h-8 md:w-10 md:h-10 ring-2 ring-background cursor-pointer shadow-soft">
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
