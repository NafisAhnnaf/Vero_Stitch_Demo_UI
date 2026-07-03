import { motion } from "framer-motion"
import { FolderOpen, Search, Plus, MoreVertical, LayoutGrid, List as ListIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function ProjectsList() {
  const navigate = useNavigate()
  
  const projects = [
    { id: "marketing-q3", name: "Marketing Q3", desc: "Campaign strategy and launch timeline.", color: "bg-primary", members: 7, lastActive: "2h ago" },
    { id: "design-system-v2", name: "Design System V2", desc: "Chromeless depth and fluid typography updates.", color: "bg-secondary", members: 4, lastActive: "Just now" },
    { id: "frontend-overhaul", name: "Frontend Overhaul", desc: "Migration to the new React architecture.", color: "bg-orange-400", members: 12, lastActive: "1d ago" },
    { id: "user-research", name: "User Research 2026", desc: "Q1-Q2 user interviews and usability testing.", color: "bg-emerald-400", members: 3, lastActive: "3d ago" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="font-bold text-4xl text-foreground mb-2 font-heading tracking-tight">Projects</h1>
          <p className="text-muted-foreground text-lg">Manage and organize your workspaces.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="pl-9 pr-4 py-2 bg-muted/30 border border-border rounded-full focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm w-64 transition-all"
            />
          </div>
          <div className="flex items-center bg-muted/30 rounded-lg border border-border p-1">
            <button className="p-1.5 bg-background rounded-md shadow-sm text-foreground"><LayoutGrid className="w-4 h-4" /></button>
            <button className="p-1.5 text-muted-foreground hover:text-foreground"><ListIcon className="w-4 h-4" /></button>
          </div>
          <Button className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-semibold px-6">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={itemVariants}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="glass dark:glass-dark rounded-2xl p-6 cursor-pointer group hover:-translate-y-1 hover:shadow-float transition-all duration-300 border border-border hover:border-primary/30 relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-1 h-full ${project.color} opacity-70`}></div>
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl ${project.color}/10 flex items-center justify-center`}>
                <FolderOpen className={`w-6 h-6 ${project.color.replace('bg-', 'text-')}`} />
              </div>
              <button className="text-muted-foreground hover:text-foreground p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-6 line-clamp-2 min-h-[40px]">{project.desc}</p>
            
            <div className="flex justify-between items-center pt-4 border-t border-border">
              <div className="flex -space-x-2">
                {[...Array(Math.min(project.members, 3))].map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${project.id}-${i}`} className="w-7 h-7 rounded-full border-2 border-background object-cover" alt="Member" />
                ))}
                {project.members > 3 && (
                  <div className="w-7 h-7 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] text-muted-foreground font-medium">
                    +{project.members - 3}
                  </div>
                )}
              </div>
              <span className="text-xs font-medium text-muted-foreground">{project.lastActive}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
