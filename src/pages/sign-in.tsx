
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Mail, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SignIn() {
  const navigate = useNavigate()

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // For demo purposes, just navigate to home
    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient Background Effects */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -top-[200px] -left-[100px] -z-10" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] -bottom-[200px] -right-[100px] -z-10" 
      />

      {/* Sign In Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass dark:glass-dark rounded-[24px] p-8 md:p-12 w-full max-w-[420px] mx-4 relative z-10 shadow-float"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-4xl text-primary mb-2 tracking-tight">Vero</h1>
          <p className="text-muted-foreground">Your team's unified workspace.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-muted border-none rounded-xl py-4 pl-12 pr-4 text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-shadow placeholder:text-muted-foreground"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-muted border-none rounded-xl py-4 pl-12 pr-4 text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-shadow placeholder:text-muted-foreground"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-br from-primary to-primary/80 hover:from-primary hover:to-primary text-primary-foreground rounded-full py-6 font-semibold shadow-soft group transition-all"
          >
            Sign In
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px bg-border flex-1" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Or</span>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <Button variant="outline" className="w-full rounded-full py-6 bg-muted/50 border-none hover:bg-muted font-medium justify-center gap-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full rounded-full py-6 bg-muted/50 border-none hover:bg-muted font-medium justify-center gap-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"></path></svg>
            Continue with GitHub
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Link to="/sign-up" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Don't have an account? <span className="text-primary font-semibold">Sign up</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
