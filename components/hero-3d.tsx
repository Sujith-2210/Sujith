'use client'

import Scene3D from './3d-scene'

export default function Hero3D() {
  return (
    <section className="relative w-full h-screen bg-background dark:bg-slate-950 overflow-hidden">
      <Scene3D />
      
      {/* Text overlay on the left */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground dark:text-foreground mb-4">
            SUJITH
          </h1>
          <p className="text-xl md:text-2xl text-primary dark:text-secondary mb-2">
            AI Engineer
          </p>
          <p className="text-muted-foreground dark:text-muted-foreground max-w-md mx-auto">
            Crafting intelligent systems with multi-agent architectures, generative AI, and computer vision
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary dark:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
