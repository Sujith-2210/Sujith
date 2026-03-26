"use client"
import Navigation from "@/components/navigation"
import Experience from "@/components/experience"
import Education from "@/components/education"
import ParticleBackground from "@/components/particle-background"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navigation />
      <div className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Experience />
          <div className="mt-24 pt-16 border-t border-border">
            <Education />
          </div>
        </div>
      </div>
    </div>
  )
}
