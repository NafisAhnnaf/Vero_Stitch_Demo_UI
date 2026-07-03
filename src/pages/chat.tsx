import { useState } from "react"
import { Hash, Plus, Search, Info, Smile, Send, Edit } from "lucide-react"

export function Chat() {
  const [message, setMessage] = useState("")

  return (
    <div className="flex-1 flex gap-6 h-[calc(100vh-120px)] w-full relative">
      {/* Channels Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-muted/20 rounded-xl flex flex-col shadow-lg overflow-hidden border border-border relative hidden md:flex">
        <div className="p-4 border-b border-border flex justify-between items-center bg-background/50">
          <h2 className="font-semibold text-lg text-foreground font-heading">Chats</h2>
          <button className="text-muted-foreground hover:text-primary transition-colors w-8 h-8 rounded-full hover:bg-muted/50 flex items-center justify-center">
            <Edit className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2">
          {/* Channels */}
          <div className="mb-6">
            <div className="px-4 py-2 flex items-center justify-between text-muted-foreground font-semibold text-xs group cursor-pointer uppercase tracking-wider">
              <span>Channels</span>
              <Plus className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <ul className="space-y-1 px-2">
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors" href="#">
                  <Hash className="w-4 h-4 opacity-50" />
                  <span className="text-sm">general</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium shadow-[inset_2px_0_0_0_theme('colors.primary.DEFAULT')]" href="#">
                  <Hash className="w-4 h-4" />
                  <span className="text-sm">design</span>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors" href="#">
                  <Hash className="w-4 h-4 opacity-50" />
                  <span className="text-sm">marketing-q3</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* DMs */}
          <div>
            <div className="px-4 py-2 flex items-center justify-between text-muted-foreground font-semibold text-xs group cursor-pointer uppercase tracking-wider">
              <span>Direct Messages</span>
              <Plus className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <ul className="space-y-1 px-2">
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors" href="#">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/150?u=sarah" className="w-6 h-6 rounded-full object-cover" alt="Sarah" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <span className="text-sm">Sarah Jenkins</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors" href="#">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-xs font-semibold">M</div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-muted-foreground rounded-full border-2 border-background"></div>
                  </div>
                  <span className="text-sm">Marcus T.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Chat Pane */}
      <div className="flex-1 flex flex-col bg-background/50 rounded-xl shadow-lg border border-border relative overflow-hidden glass dark:glass-dark">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-muted/20 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <Hash className="text-primary/70 w-5 h-5" />
            <h2 className="font-semibold text-lg text-foreground font-heading">design</h2>
            <span className="text-muted-foreground text-sm border-l border-border pl-3 ml-1 hidden sm:block">UI/UX syncs and critiques</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 mr-2">
              <img src="https://i.pravatar.cc/150?u=4" className="w-7 h-7 rounded-full border-2 border-background object-cover" alt="User 1" />
              <img src="https://i.pravatar.cc/150?u=5" className="w-7 h-7 rounded-full border-2 border-background object-cover" alt="User 2" />
              <div className="w-7 h-7 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] text-muted-foreground">+4</div>
            </div>
            <button className="text-muted-foreground hover:text-foreground p-1.5 rounded-md hover:bg-muted/50 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-muted-foreground hover:text-foreground p-1.5 rounded-md hover:bg-muted/50 transition-colors">
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Today, September 12</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Incoming Message */}
          <div className="flex gap-4 group">
            <img src="https://i.pravatar.cc/150?u=alex" className="w-10 h-10 rounded-full object-cover mt-1" alt="Alex Rivera" />
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-semibold text-foreground">Alex Rivera</span>
                <span className="text-xs text-muted-foreground">10:24 AM</span>
              </div>
              <div className="space-y-2">
                <div className="inline-block bg-muted/30 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm text-foreground/90 shadow-sm border border-border">
                  Hey team, I've just pushed the latest iterations for the dashboard widgets. Let me know what you think about the new elevation shadows.
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted border border-border hover:border-muted-foreground/50 transition-colors text-xs text-muted-foreground">
                    <span>👀</span><span>3</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary transition-colors text-xs">
                    <span>🔥</span><span>1</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex gap-4 group flex-row-reverse">
            <img src="https://i.pravatar.cc/150?u=you" className="w-10 h-10 rounded-full object-cover border border-primary/30 mt-1" alt="You" />
            <div className="flex-1 flex flex-col items-end">
              <div className="flex items-baseline gap-2 mb-1 flex-row-reverse">
                <span className="font-semibold text-foreground">You</span>
                <span className="text-xs text-muted-foreground">10:30 AM</span>
              </div>
              <div className="space-y-2 flex flex-col items-end">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm shadow-sm border border-primary/20">
                  Looking solid. The drop shadows in dark mode are tricky, but Level 2 feels just right here.
                </div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2.5 rounded-2xl text-sm shadow-sm border border-primary/20">
                  Should we apply the same blur radius to the modal overlays?
                </div>
              </div>
            </div>
          </div>
          
          {/* Incoming with Image */}
          <div className="flex gap-4 group">
            <img src="https://i.pravatar.cc/150?u=sarah" className="w-10 h-10 rounded-full object-cover mt-1" alt="Sarah J." />
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-semibold text-foreground">Sarah Jenkins</span>
                <span className="text-xs text-muted-foreground">10:35 AM</span>
              </div>
              <div className="space-y-2">
                <div className="inline-block bg-muted/30 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm text-foreground/90 shadow-sm border border-border">
                  I think modals need a slightly deeper shadow for separation. Here's a quick mockup.
                </div>
                {/* Simulated Image */}
                <div className="mt-2 rounded-xl overflow-hidden border border-border max-w-sm relative group/img cursor-pointer h-40 bg-muted flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mix-blend-overlay"></div>
                   <span className="text-muted-foreground text-sm flex items-center gap-2"><Search className="w-4 h-4"/> Click to view image</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground text-xs py-2">
            <span className="font-medium">Alex Rivera</span> is typing
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
          <div className="h-4"></div>
        </div>

        {/* Composer */}
        <div className="p-4 bg-background/80 backdrop-blur-xl border-t border-border z-20">
          <div className="flex items-end gap-2 bg-muted/30 rounded-3xl border border-border p-2 shadow-sm focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
            <button className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted/50 mb-1 ml-1">
              <Plus className="w-5 h-5" />
            </button>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent border-none text-foreground focus:ring-0 resize-none py-3 px-2 max-h-32 text-sm placeholder:text-muted-foreground/50 outline-none" 
              placeholder="Message #design..." 
              rows={1}
            />
            <div className="flex items-center gap-1 mb-1 mr-1">
              <button className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted/50">
                <Smile className="w-5 h-5" />
              </button>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(var(--primary),0.4)] transition-all p-2.5 rounded-full flex items-center justify-center ml-1">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
