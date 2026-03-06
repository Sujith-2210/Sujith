'use client'

import { useEffect, useRef, useState } from 'react'

export default function CastleIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Retro color palette
    const colors = {
      sky: '#0080ff',
      cloud: '#ffffff',
      castle: '#c4a57b',
      stone: '#8b7355',
      grass: '#6b8e4f',
      water: '#1e7fcf',
      shadow: '#5a5a5a',
    }

    // Animation state
    let cameraZ = 1500
    let cameraRotation = 0
    let cloudOpacity = 1
    let frameCount = 0
    const totalFrames = 300

    const drawCastle = (x: number, y: number, scale: number, opacity: number) => {
      ctx!.globalAlpha = opacity
      ctx!.fillStyle = colors.castle
      ctx!.strokeStyle = colors.stone
      ctx!.lineWidth = 2

      // Castle main structure
      const cw = 60 * scale
      const ch = 80 * scale

      // Main tower
      ctx!.fillRect(x - cw / 2, y - ch / 2, cw, ch)
      ctx!.strokeRect(x - cw / 2, y - ch / 2, cw, ch)

      // Tower tops (crenellations)
      const towerSize = 8 * scale
      for (let i = 0; i < 5; i++) {
        const tx = x - cw / 2 + (cw / 5) * i
        ctx!.fillRect(tx, y - ch / 2 - towerSize, towerSize * 0.8, towerSize)
      }

      // Side towers
      const sideOffset = cw * 0.6
      ctx!.fillRect(x - sideOffset - cw / 4, y - ch / 3, cw / 2.5, ch / 1.5)
      ctx!.fillRect(x + sideOffset, y - ch / 3, cw / 2.5, ch / 1.5)

      // Gate
      ctx!.fillStyle = colors.shadow
      ctx!.fillRect(x - cw / 6, y - ch / 4, cw / 3, ch / 2)

      // Windows
      ctx!.fillStyle = colors.sky
      for (let row = 0; row < 3; row++) {
        for (let col = -2; col <= 2; col++) {
          ctx!.fillRect(
            x + col * (cw / 6),
            y - ch / 2 + 15 * scale + row * 20 * scale,
            5 * scale,
            5 * scale
          )
        }
      }

      ctx!.globalAlpha = 1
    }

    const drawClouds = (offsetY: number, opacity: number) => {
      ctx!.globalAlpha = opacity
      ctx!.fillStyle = colors.cloud
      ctx!.beginPath()

      // Cloud 1
      ctx!.arc(100, 80 + offsetY, 40, 0, Math.PI * 2)
      ctx!.arc(140, 70 + offsetY, 50, 0, Math.PI * 2)
      ctx!.arc(170, 85 + offsetY, 40, 0, Math.PI * 2)
      ctx!.fill()

      // Cloud 2
      ctx!.beginPath()
      ctx!.arc(canvas!.width - 100, 120 + offsetY, 35, 0, Math.PI * 2)
      ctx!.arc(canvas!.width - 140, 110 + offsetY, 45, 0, Math.PI * 2)
      ctx!.arc(canvas!.width - 180, 130 + offsetY, 35, 0, Math.PI * 2)
      ctx!.fill()

      ctx!.globalAlpha = 1
    }

    const animate = () => {
      // Clear canvas with gradient sky
      const gradient = ctx!.createLinearGradient(0, 0, 0, canvas!.height)
      gradient.addColorStop(0, '#0080ff')
      gradient.addColorStop(1, '#b0d5ea')
      ctx!.fillStyle = gradient
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)

      frameCount++
      const progress = frameCount / totalFrames

      // Phase 1: Clear clouds (0-0.4)
      if (progress < 0.4) {
        cloudOpacity = 1 - progress / 0.4
        drawClouds(-progress * 50, cloudOpacity)
      } else {
        // Phase 2: Zoom in on castle (0.4-1)
        const zoomProgress = (progress - 0.4) / 0.6
        cameraZ = 1500 - zoomProgress * 1200
        cameraRotation = zoomProgress * Math.PI * 0.2

        drawClouds(-100, 0.1)
      }

      // Draw grass base
      ctx!.fillStyle = colors.grass
      ctx!.fillRect(0, canvas!.height - 100, canvas!.width, 100)

      // Draw water
      ctx!.fillStyle = colors.water
      ctx!.fillRect(0, canvas!.height - 80, canvas!.width, 80)

      // Draw castle with perspective
      const castleScale = cameraZ / 1500
      const castleOpacity = Math.max(0.3, castleScale)
      drawCastle(canvas!.width / 2, canvas!.height / 2 - 50, castleScale, castleOpacity)

      // Draw simple drone (small moving square)
      const droneX = canvas!.width / 2 + Math.sin(progress * Math.PI * 2) * 100
      const droneY = canvas!.height / 2 - 200 - progress * 100
      ctx!.fillStyle = '#333333'
      ctx!.fillRect(droneX - 5, droneY - 5, 10, 10)
      ctx!.strokeStyle = '#666666'
      ctx!.lineWidth = 1
      ctx!.strokeRect(droneX - 8, droneY - 8, 16, 16)

      if (frameCount < totalFrames) {
        requestAnimationFrame(animate)
      } else {
        setIsLoading(false)
        onComplete()
      }
    }

    setIsLoading(true)
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full bg-gradient-to-b from-sky-400 to-sky-200"
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4 font-mono drop-shadow-lg">
              WELCOME TO SUJITH'S REALM
            </div>
            <div className="text-sm text-white font-mono drop-shadow-lg">
              [LOADING...]
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
