"use client"

import React from "react"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MotionCardProps {
  children: ReactNode
  delay?: number
  className?: string
  onClick?: () => void
  index?: number
}

export default function MotionCard({ children, delay = 0, className = "", onClick, index = 0 }: MotionCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      whileHover={{
        y: -10,
        filter: "drop-shadow(0 20px 40px rgba(178, 190, 255, 0.3))",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.6,
        delay: delay + index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
