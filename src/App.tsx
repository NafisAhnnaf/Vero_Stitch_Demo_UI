import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppLayout } from "./components/layout"
import { SignIn } from "./pages/sign-in"
import { Dashboard } from "./pages/dashboard"
import { ProjectsList } from "./pages/projects"
import { ProjectDashboard } from "./pages/project-dashboard"
import { Chat } from "./pages/chat"
import { Notes } from "./pages/notes"
import { Meet } from "./pages/meet"

function App() {
  return (
    <BrowserRouter basename="/stitch-demo">
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:projectId" element={<ProjectDashboard />} />
          <Route path="/projects/:projectId/modules/:moduleId/chat" element={<Chat />} />
          <Route path="/projects/:projectId/modules/:moduleId/notes" element={<Notes />} />
          <Route path="/projects/:projectId/modules/:moduleId/meet" element={<Meet />} />
          
          <Route path="*" element={<div className="p-8 text-muted-foreground flex flex-col items-center justify-center h-[50vh] text-lg font-medium">This screen is being built iteratively.<br/>Check back soon!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

