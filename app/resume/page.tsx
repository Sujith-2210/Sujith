"use client"
import Navigation from "@/components/navigation"
import Resume from "@/components/resume"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-foreground">
      <Navigation />
      <Resume />
    </div>
  )
}
