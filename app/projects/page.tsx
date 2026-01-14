"use client"
import Navigation from "@/components/navigation"
import AllProjects from "@/components/all-projects"
import ParticleBackground from "@/components/particle-background"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navigation />
      <AllProjects />
    </div>
  )
}
