"use client"
import Navigation from "@/components/navigation"
import AllProjects from "@/components/all-projects"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-foreground">
      <Navigation />
      <AllProjects />
    </div>
  )
}
