"use client"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import CastleIntro from "@/components/castle-intro"
import { PixelButton } from "@/components/retro-ui"
import Link from "next/link"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('castle-intro-shown')
    if (hasSeenIntro) {
      setShowIntro(false)
    }
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
    sessionStorage.setItem('castle-intro-shown', 'true')
  }

  return (
    <>
      {showIntro && <CastleIntro onComplete={handleIntroComplete} />}
      <div className="min-h-screen bg-background text-foreground dark:bg-slate-950">
        <Navigation />
        <Hero />

      {/* Quick Navigation Section */}
      <section className="relative z-10 py-24 border-t-4 border-primary bg-card dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pixel-wipe">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary font-mono neon-cyan">
              EXPLORE MORE
            </h2>
            <p className="text-xs text-muted-foreground font-mono">
              {'[ SELECT YOUR NEXT LEVEL ]'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* About Card */}
            <Link href="/about">
              <div className="group p-8 border-2 border-primary bg-card hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer h-full flex flex-col justify-between dark:bg-slate-800"
                style={{
                  boxShadow: 'var(--shadow-primary)',
                }}
              >
                <div>
                  <div className="text-3xl mb-4 font-mono text-primary font-bold">01</div>
                  <h3 className="text-lg font-bold text-foreground font-mono mb-2">ABOUT ME</h3>
                  <p className="text-xs text-muted-foreground font-mono">Learn about my journey, passion, and achievements in AI</p>
                </div>
                <div className="mt-4">
                  <PixelButton color="cyan" className="w-full text-center">
                    ENTER
                  </PixelButton>
                </div>
              </div>
            </Link>

            {/* Projects Card */}
            <Link href="/projects">
              <div className="group p-8 border-2 border-secondary bg-card hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer h-full flex flex-col justify-between dark:bg-slate-800"
                style={{
                  boxShadow: 'var(--shadow-secondary)',
                }}
              >
                <div>
                  <div className="text-3xl mb-4 font-mono text-secondary font-bold">02</div>
                  <h3 className="text-lg font-bold text-foreground font-mono mb-2">PROJECTS</h3>
                  <p className="text-xs text-muted-foreground font-mono">Explore 20+ AI/ML projects and innovative solutions</p>
                </div>
                <div className="mt-4">
                  <PixelButton color="magenta" className="w-full text-center">
                    EXPLORE
                  </PixelButton>
                </div>
              </div>
            </Link>

            {/* Contact Card */}
            <Link href="/contact">
              <div className="group p-8 border-2 border-accent bg-card hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer h-full flex flex-col justify-between dark:bg-slate-800"
                style={{
                  boxShadow: 'var(--shadow-accent)',
                }}
              >
                <div>
                  <div className="text-3xl mb-4 font-mono text-accent font-bold">03</div>
                  <h3 className="text-lg font-bold text-foreground font-mono mb-2">CONTACT</h3>
                  <p className="text-xs text-muted-foreground font-mono">Get in touch and let's create something amazing</p>
                </div>
                <div className="mt-4">
                  <PixelButton color="lime" className="w-full text-center">
                    CONNECT
                  </PixelButton>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t-4 border-primary bg-background dark:bg-slate-950 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs text-muted-foreground dark:text-gray-400 font-mono mb-2">
            {'[ GAME BY SUJITH // 2024-2026 ]'}
          </p>
          <p className="text-xs text-muted-foreground dark:text-gray-600 font-mono">
            {'Built with Next.js, React, and 90s Nostalgia'}
          </p>
        </div>
      </footer>
      </div>
    </>
  )
}
