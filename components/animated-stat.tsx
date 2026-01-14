"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedStatProps {
  value: string | number
  label: string
  delay?: number
}

export function AnimatedStat({ value, label, delay = 0 }: AnimatedStatProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`p-6 rounded-xl border border-border bg-card/50 backdrop-blur transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-3xl font-bold text-primary mb-2">{isVisible ? value : "0"}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
