"use client"
import Navigation from "@/components/navigation"
import SkillsDetail from "@/components/skills-detail"
import ParticleBackground from "@/components/particle-background"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navigation />
      <SkillsDetail />
    </div>
  )
}
