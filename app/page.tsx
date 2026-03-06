"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import { PixelButton } from "@/components/retro-ui"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-foreground">
      <Navigation />
      <Hero />

      {/* Quick Navigation Section */}
      <section className="relative z-10 py-24 border-t-4 border-cyan-500 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pixel-wipe">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400 font-mono neon-cyan">
              EXPLORE MORE
            </h2>
            <p className="text-xs text-gray-400 font-mono">
              {'[ SELECT YOUR NEXT LEVEL ]'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* About Card */}
            <Link href="/about">
              <div className="group p-8 border-2 border-cyan-500 bg-slate-800 hover:bg-slate-700 transition-all duration-200 cursor-pointer h-full flex flex-col justify-between"
                style={{
                  boxShadow: '0 0 12px rgba(0, 255, 255, 0.3)',
                }}
              >
                <div>
                  <div className="text-3xl mb-4 font-mono text-cyan-400 font-bold">01</div>
                  <h3 className="text-lg font-bold text-white font-mono mb-2">ABOUT ME</h3>
                  <p className="text-xs text-gray-400 font-mono">Learn about my journey, passion, and achievements in AI</p>
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
              <div className="group p-8 border-2 border-magenta-500 bg-slate-800 hover:bg-slate-700 transition-all duration-200 cursor-pointer h-full flex flex-col justify-between"
                style={{
                  boxShadow: '0 0 12px rgba(255, 0, 255, 0.3)',
                }}
              >
                <div>
                  <div className="text-3xl mb-4 font-mono text-magenta-400 font-bold">02</div>
                  <h3 className="text-lg font-bold text-white font-mono mb-2">PROJECTS</h3>
                  <p className="text-xs text-gray-400 font-mono">Explore 20+ AI/ML projects and innovative solutions</p>
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
              <div className="group p-8 border-2 border-lime-500 bg-slate-800 hover:bg-slate-700 transition-all duration-200 cursor-pointer h-full flex flex-col justify-between"
                style={{
                  boxShadow: '0 0 12px rgba(0, 255, 0, 0.3)',
                }}
              >
                <div>
                  <div className="text-3xl mb-4 font-mono text-lime-400 font-bold">03</div>
                  <h3 className="text-lg font-bold text-white font-mono mb-2">CONTACT</h3>
                  <p className="text-xs text-gray-400 font-mono">Get in touch and let's create something amazing</p>
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
      <footer className="relative z-10 py-12 border-t-4 border-cyan-500 bg-slate-950 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs text-gray-500 font-mono mb-2">
            {'[ GAME BY SUJITH // 2024-2026 ]'}
          </p>
          <p className="text-xs text-gray-600 font-mono">
            {'Built with Next.js, React, and 90s Nostalgia'}
          </p>
        </div>
      </footer>
    </div>
  )
}
