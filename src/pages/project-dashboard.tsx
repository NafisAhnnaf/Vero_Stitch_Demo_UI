import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { FolderOpen, History, Plus, KanbanSquare, MessageSquare, FileText, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate, useParams } from "react-router-dom"

export function ProjectDashboard() {
  const { projectId } = useParams()
  const navigate = useNavigate()

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
      {/* Project Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-semibold text-primary mb-2 flex items-center gap-1 uppercase tracking-wider">
            <FolderOpen className="w-4 h-4" /> Active Project
          </p>
          <h1 className="font-bold text-4xl text-foreground mb-2 font-heading tracking-tight">Marketing Q3</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">Campaign strategy, brand assets, and launch timeline for the upcoming quarterly release.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-4">
          <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
            <img src="https://i.pravatar.cc/150?u=1" className="w-10 h-10 rounded-full border-2 border-background object-cover relative z-30" alt="Avatar" />
            <img src="https://i.pravatar.cc/150?u=2" className="w-10 h-10 rounded-full border-2 border-background object-cover relative z-20" alt="Avatar" />
            <img src="https://i.pravatar.cc/150?u=3" className="w-10 h-10 rounded-full border-2 border-background object-cover relative z-10" alt="Avatar" />
            <div className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground relative z-0">+4</div>
          </div>
          <Button className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-semibold px-6 bg-gradient-to-r from-primary to-indigo-500">
            Invite
          </Button>
        </motion.div>
      </div>

      {/* Modules (Bento style row) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
      >
        <motion.div variants={itemVariants} onClick={() => navigate(`/projects/${projectId}/modules/frontend/kanban`)} className="glass dark:glass-dark rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group relative overflow-hidden h-32 md:h-40 transition-all duration-300 shadow-soft hover:shadow-float border border-transparent hover:border-primary/20">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <KanbanSquare className="text-primary w-6 h-6" />
          </div>
          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Board</span>
        </motion.div>
        
        <motion.div variants={itemVariants} onClick={() => navigate(`/projects/${projectId}/modules/frontend/chat`)} className="bg-muted/30 rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group glass dark:glass-dark h-32 md:h-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare className="text-muted-foreground w-6 h-6" />
            </div>
            <span className="absolute top-0 right-0 w-3 h-3 bg-secondary rounded-full animate-pulse border-2 border-background"></span>
          </div>
          <span className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors">Chat</span>
        </motion.div>

        <motion.div variants={itemVariants} onClick={() => navigate(`/projects/${projectId}/modules/frontend/notes`)} className="bg-muted/30 rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group glass dark:glass-dark h-32 md:h-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileText className="text-muted-foreground w-6 h-6" />
          </div>
          <span className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors">Notes</span>
        </motion.div>

        <motion.div variants={itemVariants} onClick={() => navigate(`/projects/${projectId}/modules/frontend/meet`)} className="bg-muted/30 rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group glass dark:glass-dark h-32 md:h-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
              <Video className="text-muted-foreground w-6 h-6" />
            </div>
            <span className="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full animate-pulse border-2 border-background"></span>
          </div>
          <span className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors">Meet</span>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group border-2 border-dashed border-muted-foreground/30 hover:border-muted-foreground h-32 md:h-40 transition-all duration-300 hover:bg-muted/10">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Plus className="text-muted-foreground group-hover:text-foreground w-6 h-6" />
          </div>
          <span className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors">Add Module</span>
        </motion.div>
      </motion.div>

      {/* Bottom Area: Activity & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 glass dark:glass-dark rounded-2xl p-6">
          <h2 className="font-semibold text-xl text-foreground mb-6 flex items-center gap-2 font-heading">
            <History className="text-primary w-5 h-5" /> Recent Activity
          </h2>
          <div className="relative pl-8 before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-border">
            {[
              { user: "Sarah Chen", time: "10 mins ago", action: "Updated the status of", highlight: "Brand Guidelines v2", end: "to 'In Review'", dot: "bg-primary" },
              { user: "David Kim", time: "2 hours ago", action: "Uploaded 3 new assets to", highlight: "Q3 Ad Creatives", dot: "bg-muted-foreground" },
              { user: "Alex Rivera", time: "Yesterday", action: "Left a comment on", highlight: "Launch Timeline", dot: "bg-muted-foreground" },
            ].map((act, i) => (
              <div key={i} className="mb-6 relative">
                <span className={`absolute -left-8 top-1 w-2 h-2 rounded-full ${act.dot} border-2 border-background z-10 box-content`} />
                <div className="flex items-start gap-4 group">
                  <img src={`https://i.pravatar.cc/150?u=${i+10}`} className="w-8 h-8 rounded-full object-cover" alt="User" />
                  <div className="bg-muted/30 rounded-lg p-3 flex-1 group-hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm text-foreground">{act.user}</span>
                      <span className="text-xs text-muted-foreground">{act.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {act.action} <span className="text-primary hover:underline cursor-pointer">{act.highlight}</span> {act.end}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass dark:glass-dark rounded-2xl p-6 h-fit">
          <h2 className="font-semibold text-xl text-foreground mb-6 font-heading">Quick Stats</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Tasks Completed</span>
                <span className="font-medium text-foreground">45%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Budget Used</span>
                <span className="font-medium text-foreground">12%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
