'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function PixelCharacter() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [mouseX, setMouseX] = useState(0)
  
  // Simple parallax effect following mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth) * 20 - 10)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Character Sprite Container */}
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute -inset-8 bg-gradient-to-b from-cyan-500/30 to-magenta-500/20 blur-xl rounded-none"></div>
        
        {/* Character */}
        <div 
          className="relative transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${mouseX * 0.3}px)` }}
        >
          <div className={`${isAnimating ? 'animate-pixel-jump' : ''}`}>
            <Image
              src="/pixel-character.jpg"
              alt="AI Engineer Pixel Character"
              width={128}
              height={128}
              className="pixel-border image-rendering-pixelated"
              priority
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>
      </div>
      
      {/* Character Stats */}
      <div className="text-center space-y-2">
        <div className="text-xs font-mono text-cyan-400 animate-blink">
          {'> SUJITH // AI ENGINEER ONLINE <'}
        </div>
        
        {/* Simple stat bars */}
        <div className="space-y-2 min-w-[200px]">
          <div className="flex justify-between text-xs text-white font-mono mb-1">
            <span>AI POWER</span>
            <span>95/100</span>
          </div>
          <div className="w-full bg-cyan-900 border border-cyan-500 h-2">
            <div 
              className="h-full bg-cyan-400 animate-pulse-bar"
              style={{ width: '95%' }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-white font-mono mb-1 pt-2">
            <span>CODE LEVEL</span>
            <span>87/100</span>
          </div>
          <div className="w-full bg-magenta-900 border border-magenta-500 h-2">
            <div 
              className="h-full bg-magenta-400 animate-pulse-bar"
              style={{ width: '87%' }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-white font-mono mb-1 pt-2">
            <span>INNOVATION</span>
            <span>92/100</span>
          </div>
          <div className="w-full bg-lime-900 border border-lime-500 h-2">
            <div 
              className="h-full bg-lime-400 animate-pulse-bar"
              style={{ width: '92%' }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Action Button */}
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="px-4 py-2 bg-cyan-500 text-black font-mono text-xs font-bold border-2 border-cyan-300 hover:bg-cyan-400 transition-all duration-200 active:translate-y-0.5 active:shadow-none shadow-lg hover:shadow-xl"
        style={{
          boxShadow: '0 0 12px rgba(0, 255, 255, 0.5)'
        }}
      >
        {'[ INTERACT ]'}
      </button>
    </div>
  )
}
