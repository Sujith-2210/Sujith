"use client"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import ParticleBackground from "@/components/particle-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navigation />
      <About />
    </div>
  )
}
