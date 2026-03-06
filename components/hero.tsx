"use client"

import PixelCharacter from "./pixel-character"
import { PixelButton, StatCard, DialogueBox } from "./retro-ui"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-32 pb-20 animate-fade-in bg-background dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main CRT Screen Effect */}
        <div className="crt-screen rounded-none border-8 border-border dark:border-gray-700 p-8 md:p-12 bg-card dark:bg-slate-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6 animate-pixel-wipe">
              {/* Title */}
              <div>
                <div className="text-xs text-primary dark:text-secondary font-mono mb-2 animate-blink">
                  {'>>> SYSTEM ONLINE <<<'}
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-balance mb-4 text-foreground font-mono" style={{ fontSize: '2rem', lineHeight: '1.2' }}>
                  SUJITH // AI ENGINEER
                </h1>
                <p className="text-xs text-secondary dark:text-primary font-mono mb-2">
                  {'[ MULTI-AGENT SYSTEMS SPECIALIST ]'}
                </p>
                <p className="text-xs text-accent dark:text-accent font-mono">
                  Deep Learning • Generative AI • Computer Vision
                </p>
              </div>

              {/* Dialogue Box Introduction */}
              <DialogueBox color="cyan">
                <p className="text-xs leading-relaxed">
                  I transform complex ideas into scalable AI solutions. Specializing in Multi-Agent Systems, LLMs, and agentic AI. From training deep learning models to deploying production systems.
                </p>
              </DialogueBox>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="border-2 border-cyan-500 bg-slate-900 p-3 text-center" style={{ boxShadow: '0 0 8px rgba(0, 255, 255, 0.3)' }}>
                  <div className="text-xl font-bold text-cyan-400 font-mono">20+</div>
                  <div className="text-xs text-gray-400 font-mono">PROJECTS</div>
                </div>
                <div className="border-2 border-magenta-500 bg-slate-900 p-3 text-center" style={{ boxShadow: '0 0 8px rgba(255, 0, 255, 0.3)' }}>
                  <div className="text-xl font-bold text-magenta-400 font-mono">10+</div>
                  <div className="text-xs text-gray-400 font-mono">INTERNSHIPS</div>
                </div>
                <div className="border-2 border-lime-500 bg-slate-900 p-3 text-center" style={{ boxShadow: '0 0 8px rgba(0, 255, 0, 0.3)' }}>
                  <div className="text-xl font-bold text-lime-400 font-mono">2</div>
                  <div className="text-xs text-gray-400 font-mono">PATENTS</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link href="/projects">
                  <PixelButton color="cyan">
                    {'[ VIEW PROJECTS ]'}
                  </PixelButton>
                </Link>
                <Link href="/contact">
                  <PixelButton color="magenta">
                    {'[ CONTACT ME ]'}
                  </PixelButton>
                </Link>
                <Link href="/resume">
                  <PixelButton color="lime">
                    {'[ RESUME ]'}
                  </PixelButton>
                </Link>
              </div>
            </div>

            {/* Right Side - Pixel Character */}
            <div className="hidden md:flex items-center justify-center animate-slide-in-right">
              <PixelCharacter />
            </div>
          </div>
        </div>

        {/* Mobile Pixel Character */}
        <div className="md:hidden flex justify-center mt-8 animate-pixel-wipe">
          <PixelCharacter />
        </div>
      </div>
    </section>
  )
}
