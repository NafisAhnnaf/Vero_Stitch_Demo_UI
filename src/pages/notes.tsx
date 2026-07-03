import { 
  Heading1, Heading2, List, 
  Link2, Image as ImageIcon 
} from "lucide-react"

export function Notes() {
  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-120px)] relative w-full overflow-y-auto">
      <div className="max-w-[720px] mx-auto w-full pt-16 pb-32 relative">
        
        {/* Floating Toolbar (Glassmorphic Pill) */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 glass dark:glass-dark rounded-full px-6 py-3 flex items-center gap-6 z-30 shadow-lg border border-border/50">
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors font-bold font-serif text-lg leading-none">B</button>
            <button className="text-foreground hover:text-primary transition-colors italic font-serif text-lg leading-none">I</button>
            <button className="text-foreground hover:text-primary transition-colors underline font-serif text-lg leading-none">U</button>
          </div>
          <div className="w-px h-5 bg-border"></div>
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Heading1 className="w-5 h-5" />
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <Heading2 className="w-5 h-5" />
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <List className="w-5 h-5" />
            </button>
          </div>
          <div className="w-px h-5 bg-border"></div>
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Link2 className="w-5 h-5" />
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Collaborative Cursors (Simulated) */}
        <div className="absolute top-[140px] left-[45%] z-50 pointer-events-none flex flex-col animate-[bounce_4s_infinite]">
          <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 drop-shadow-md">
            <path d="M2.5 14.5L13.5 7L2.5 1V14.5Z" fill="#ffb783" stroke="white" strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
          <div className="px-2 py-0.5 rounded text-white text-[10px] font-bold mt-0.5 ml-2 shadow-md w-max" style={{ backgroundColor: '#ffb783' }}>Alex Chen</div>
        </div>

        <div className="absolute top-[320px] left-[15%] z-50 pointer-events-none flex flex-col animate-[bounce_5s_infinite] delay-150">
          <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 drop-shadow-md">
            <path d="M2.5 14.5L13.5 7L2.5 1V14.5Z" fill="#89ceff" stroke="white" strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
          <div className="px-2 py-0.5 rounded text-[#001e2f] text-[10px] font-bold mt-0.5 ml-2 shadow-md w-max" style={{ backgroundColor: '#89ceff' }}>Sarah J.</div>
        </div>

        {/* Rich Text Editor Content (Mock) */}
        <div className="outline-none space-y-6 text-lg" contentEditable suppressContentEditableWarning>
          <h1 className="font-bold text-4xl text-foreground mb-8 outline-none font-heading tracking-tight">Q3 Design System Architecture</h1>
          
          <p className="text-muted-foreground leading-relaxed">
            The core objective for this quarter is to solidify the component foundation and finalize the transition to the new dark-mode "Chromeless Depth" paradigm. We are moving away from explicit structural borders towards a more fluid, spatial hierarchy.
          </p>

          <h2 className="font-semibold text-2xl text-foreground mt-8 mb-4 outline-none font-heading">Key Objectives</h2>
          
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Deprecate legacy bordered containers in favor of Level 1/Level 2 elevation dropshadows.</li>
            <li>Standardize fluid typography scale across mobile and desktop viewports.</li>
            <li><span className="bg-orange-400/20 text-orange-500 px-1 rounded">Refine collaborative cursors logic</span> to handle overlapping selections gracefully.</li>
          </ul>

          <h2 className="font-semibold text-2xl text-foreground mt-8 mb-4 outline-none font-heading">Immediate Action Items</h2>
          
          <div className="space-y-3 mt-4" contentEditable={false}>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 rounded border-border bg-muted text-primary focus:ring-primary" />
              <span className="text-muted-foreground line-through opacity-70 group-hover:opacity-100 transition-opacity">Finalize base color tokens in Tailwind config.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border bg-muted text-primary focus:ring-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">Audit existing inputs for "active glow" compliance vs borders.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border bg-muted text-primary focus:ring-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">Design empty states for the new unified dashboard.</span>
            </label>
          </div>

          <div className="my-8 p-6 bg-muted/30 rounded-lg border border-border border-l-4 border-l-secondary" contentEditable={false}>
            <p className="italic text-foreground">
              "The interface should feel like a high-end physical workspace—clean, spacious, and sophisticated—reducing cognitive load by removing visual noise."
            </p>
            <p className="text-xs font-semibold text-muted-foreground mt-2">— Design Principles V2</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Pending review from the engineering team regarding the performance implications of widespread backdrop-filter usage on lower-end devices. We may need a fallback plain opacity approach.
          </p>
        </div>
      </div>
    </div>
  )
}
