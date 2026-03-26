"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface BlurTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
}

export default function BlurText({ text, delay = 0, duration = 0.5, className = "" }: BlurTextProps) {
  const splitText = text.split("")
  const container = {
    hidden: { opacity: 0 },
    visible: (custom: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {splitText.map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
