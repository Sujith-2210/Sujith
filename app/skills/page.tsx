"use client"
import Navigation from "@/components/navigation"
import SkillsDetail from "@/components/skills-detail"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-foreground">
      <Navigation />
      <SkillsDetail />
    </div>
  )
}
