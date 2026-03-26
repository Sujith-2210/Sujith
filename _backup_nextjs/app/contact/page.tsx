"use client"
import Navigation from "@/components/navigation"
import Contact from "@/components/contact"
import ParticleBackground from "@/components/particle-background"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navigation />
      <Contact />
    </div>
  )
}
