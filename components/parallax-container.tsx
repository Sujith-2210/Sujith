"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxContainerProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export default function ParallaxContainer({ children, offset = 50, className = "" }: ParallaxContainerProps) {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (latest) => latest * 0.5)

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
