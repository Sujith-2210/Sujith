"use client"
import Navigation from "@/components/navigation"
import Certifications from "@/components/certifications"
import ParticleBackground from "@/components/particle-background"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navigation />
      <Certifications />
    </div>
  )
}
