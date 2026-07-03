import { useState } from "react"
import { Mic, MicOff, Video, VideoOff, MonitorUp, MessageSquare, Users, Settings, PhoneOff, Expand, Grid3X3, Maximize } from "lucide-react"

export function Meet() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  const participants = [
    { id: 1, name: "Sarah Jenkins", role: "Design Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", speaking: true },
    { id: 2, name: "David Chen", role: "Frontend", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop", speaking: false },
    { id: 3, name: "Marcus T.", role: "Product", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop", speaking: false },
    { id: 4, name: "You", role: "Engineer", img: "https://i.pravatar.cc/300?u=you", speaking: false, isYou: true }
  ]

  return (
    <div className="flex-1 h-[calc(100vh-100px)] w-full flex flex-col relative bg-background/50 rounded-2xl overflow-hidden border border-border/50">
      
      {/* Header */}
      <div className="h-16 px-6 flex items-center justify-between border-b border-border/50 bg-muted/20 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <h2 className="font-semibold text-lg text-foreground font-heading">Design Sync & Roadmap</h2>
          <span className="text-muted-foreground text-sm border-l border-border pl-3 ml-1">4 Participants</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors">
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors">
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="flex-1 p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr overflow-hidden bg-black/5 dark:bg-black/20">
        {participants.map((p) => (
          <div 
            key={p.id} 
            className={`relative rounded-2xl overflow-hidden group ${p.speaking ? 'ring-2 ring-primary ring-offset-2 ring-offset-background/50 shadow-[0_0_24px_rgba(var(--primary),0.3)]' : 'border border-border/30'}`}
          >
            {/* Video Feed */}
            <img 
              src={p.img} 
              alt={p.name} 
              className={`w-full h-full object-cover transition-transform duration-700 ${p.speaking ? 'scale-105' : 'scale-100'}`} 
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-80"></div>
            
            {/* Name Label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {p.speaking ? (
                <Mic className="w-3.5 h-3.5 text-primary drop-shadow-md" />
              ) : (
                <MicOff className="w-3.5 h-3.5 text-destructive drop-shadow-md" />
              )}
              <span className="text-sm font-medium text-white drop-shadow-md">
                {p.name} {p.isYou && "(You)"}
              </span>
            </div>

            {/* Quick Actions (Hover) */}
            {!p.isYou && (
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-background/30 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-background/50 transition-colors">
                  <Expand className="w-4 h-4" />
                </button>
                <button className="p-2 bg-background/30 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-background/50 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Control Bar */}
      <div className="h-20 px-6 border-t border-border/50 bg-muted/20 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground hidden md:flex">
          <span className="font-mono">10:24 AM</span>
          <span className="px-2 py-0.5 rounded-full border border-border bg-muted/30">ID: 894-329-110</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-sm border ${isMuted ? 'bg-destructive/20 text-destructive border-destructive/30 hover:bg-destructive/30' : 'bg-muted/80 text-foreground border-border hover:bg-muted'}`}
          >
            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-sm border ${isVideoOff ? 'bg-destructive/20 text-destructive border-destructive/30 hover:bg-destructive/30' : 'bg-muted/80 text-foreground border-border hover:bg-muted'}`}
          >
            {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
          </button>

          <button className="w-12 h-12 rounded-full bg-muted/80 text-foreground border border-border hover:bg-muted flex items-center justify-center transition-all shadow-sm">
            <MonitorUp className="w-5 h-5" />
          </button>

          <div className="w-px h-8 bg-border mx-2"></div>

          <button className="w-16 h-12 rounded-full bg-destructive text-destructive-foreground shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:bg-destructive/90 flex items-center justify-center transition-all px-4 font-semibold text-sm gap-2">
            <PhoneOff className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-3 text-foreground hover:bg-muted/50 rounded-full transition-colors relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary ring-2 ring-background"></span>
          </button>
          <button className="p-3 text-foreground hover:bg-muted/50 rounded-full transition-colors">
            <Users className="w-5 h-5" />
          </button>
          <button className="p-3 text-foreground hover:bg-muted/50 rounded-full transition-colors hidden sm:block">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  )
}
