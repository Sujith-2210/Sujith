"use client"

import type React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
