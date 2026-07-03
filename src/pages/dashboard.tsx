import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Plus, Video, MoreHorizontal, MessageSquare, CheckCircle, TrendingUp, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <div className="max-w-[1440px] mx-auto w-full">
      {/* Greeting Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-bold text-4xl text-foreground mb-2 font-heading">Good morning, Alex.</h1>
          <p className="text-lg text-muted-foreground">Here's your morning briefing for <strong className="font-semibold text-foreground">Design System V2</strong>.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Button className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-semibold px-6">
            <Plus className="w-4 h-4 mr-2" />
            New Note
          </Button>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
      >
        {/* Large Card: Today's Meetings */}
        <motion.div variants={itemVariants} className="md:col-span-8 lg:col-span-7 glass dark:glass-dark rounded-2xl p-6 flex flex-col h-full shadow-soft hover:shadow-float transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Video className="text-secondary w-6 h-6" />
              <h2 className="font-semibold text-xl text-foreground font-heading">Today's Meetings</h2>
            </div>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
            {/* Meeting 1 (Active) */}
            <div className="bg-muted/50 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-white/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded-l-xl" />
              <div className="flex-1 pl-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-secondary tracking-wide">10:00 AM - 11:30 AM</span>
                  <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" /> Live
                  </span>
                </div>
                <h3 className="text-base text-foreground font-semibold">Design System Sync</h3>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-8 h-8 rounded-full border-2 border-background object-cover z-30" alt="Avatar" />
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704e" className="w-8 h-8 rounded-full border-2 border-background object-cover z-20" alt="Avatar" />
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704f" className="w-8 h-8 rounded-full border-2 border-background object-cover z-10" alt="Avatar" />
                </div>
                <Button size="sm" className="rounded-full shadow-md shadow-primary/20 px-6">Join</Button>
              </div>
            </div>

            {/* Meeting 2 */}
            <div className="bg-background/50 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-transparent hover:border-white/5 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-muted-foreground">2:00 PM - 2:45 PM</span>
                </div>
                <h3 className="text-base text-foreground font-medium">Weekly Product Review</h3>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end opacity-70">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704g" className="w-8 h-8 rounded-full border-2 border-background object-cover z-20" alt="Avatar" />
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground z-10">+4</div>
                </div>
                <Button variant="secondary" size="sm" className="rounded-full px-6">Details</Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Medium Card: Recent Chats */}
        <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-5 glass dark:glass-dark rounded-2xl p-6 flex flex-col h-full shadow-soft hover:shadow-float transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="text-orange-400 w-6 h-6" />
              <h2 className="font-semibold text-xl text-foreground font-heading">Recent Chats</h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            {[
              { title: "proj-ds-v2", time: "10m", msg: "Sarah: The new tokens are merged." },
              { title: "team-frontend", time: "1h", msg: "Mike: PR #402 needs review.", unread: true },
              { title: "Elena Rodriguez", time: "Yesterday", msg: "Can you send the Figma link?", avatar: "https://i.pravatar.cc/150?u=elena" }
            ].map((chat, i) => (
              <div key={i} className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group">
                {chat.avatar ? (
                  <div className="relative w-10 h-10">
                    <img src={chat.avatar} className="w-full h-full rounded-full object-cover" alt="Avatar" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-background rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-orange-400/20 flex items-center justify-center text-orange-400">
                    <span className="text-lg font-bold">#</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-sm text-foreground font-semibold truncate">{chat.title}</h3>
                    <span className="text-[10px] font-medium text-muted-foreground">{chat.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{chat.msg}</p>
                </div>
                {chat.unread && <div className="w-2 h-2 rounded-full bg-primary self-center" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Medium Card: Due Tasks */}
        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-6 glass dark:glass-dark rounded-2xl p-6 flex flex-col h-full shadow-soft hover:shadow-float transition-shadow duration-300 min-h-[240px]">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary w-6 h-6" />
              <h2 className="font-semibold text-xl text-foreground font-heading">Due Tasks</h2>
            </div>
            <span className="text-xs font-semibold text-muted-foreground">3 remaining</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {[
              { text: "Update navigation shell styles", tag: "DS-V2", priority: "High" },
              { text: "Review Q3 Analytics Report", tag: "Management" },
              { text: "Approve marketing copy", done: true }
            ].map((task, i) => (
              <label key={i} className={`flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors border border-transparent hover:border-white/5 ${task.done ? 'opacity-60' : ''}`}>
                <div className="pt-0.5">
                  <input type="checkbox" defaultChecked={task.done} className="w-4 h-4 rounded border-muted-foreground bg-transparent text-primary focus:ring-primary" />
                </div>
                <div className="flex-1">
                  <p className={`text-base leading-tight mb-1.5 ${task.done ? 'text-muted-foreground line-through' : 'text-foreground'}`}>{task.text}</p>
                  {!task.done && (
                    <div className="flex items-center gap-2">
                      {task.tag && <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">{task.tag}</span>}
                      {task.priority && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-destructive">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive" /> High Priority
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Small Card: Stats & Notes Container */}
        <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
          {/* Stat Card */}
          <div className="glass dark:glass-dark rounded-2xl p-6 flex flex-col justify-between shadow-soft hover:shadow-float transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Productivity Score</p>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-5xl text-foreground font-heading">84<span className="text-2xl text-muted-foreground">/100</span></h3>
              <p className="text-sm text-secondary mt-1 flex items-center gap-1 font-medium">
                ↑ +5 from last week
              </p>
            </div>
          </div>
          
          {/* Recent Notes */}
          <div className="glass dark:glass-dark rounded-2xl p-6 flex flex-col h-full shadow-soft hover:shadow-float transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-xl text-foreground font-heading">Quick Notes</h2>
              <ExternalLink className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
            </div>
            <div className="flex flex-col gap-3 flex-1 justify-center">
              {[
                { title: "Draft: Q4 Objectives", time: "Updated 2h ago" },
                { title: "Ideas for Onboarding", time: "Updated yesterday" }
              ].map((note, i) => (
                <div key={i} className="p-3 rounded-xl bg-muted/40 border border-white/5 hover:border-white/10 cursor-pointer transition-all hover:-translate-y-0.5">
                  <h4 className="text-sm text-foreground font-semibold mb-1 truncate">{note.title}</h4>
                  <p className="text-[10px] font-medium text-muted-foreground">{note.time}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
