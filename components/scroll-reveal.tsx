"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  blur?: boolean
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  blur = true,
}: ScrollRevealProps) {
  const directionVariants: Record<string, Variants> = {
    up: {
      hidden: { opacity: 0, y: 40, ...(blur && { filter: "blur(10px)" }) },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    down: {
      hidden: { opacity: 0, y: -40, ...(blur && { filter: "blur(10px)" }) },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    left: {
      hidden: { opacity: 0, x: 40, ...(blur && { filter: "blur(10px)" }) },
      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    },
    right: {
      hidden: { opacity: 0, x: -40, ...(blur && { filter: "blur(10px)" }) },
      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={directionVariants[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
