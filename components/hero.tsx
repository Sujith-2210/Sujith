"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import BlurText from "./blur-text"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      filter: "drop-shadow(0 20px 40px rgba(178, 190, 255, 0.3))",
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-label="Cinematic background"
        >
          <source src="https://videos.pexels.com/video-files/3561339/3561339-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Velorah cinematic overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <BlurText
                text="Tenali Sujith"
                delay={0.1}
                duration={0.6}
                className="text-5xl md:text-7xl font-bold text-balance mb-4 text-foreground"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold text-balance text-primary">Kumar</h2>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl text-secondary mb-2">AI/ML Engineer & Full-Stack Developer</p>
              <p className="text-muted-foreground">
                Specializing in Deep Learning, Generative AI & Intelligent Systems
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-foreground leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              I transform complex ideas into scalable AI solutions. From training deep learning models to building
              AI-powered applications, I bridge the gap between research and real-world impact.
            </motion.p>

            <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(178, 190, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(178, 190, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-8 pt-8 border-t border-border" variants={itemVariants}>
              {[
                { number: "20+", label: "AI/ML Projects" },
                { number: "5+", label: "Internships" },
                { number: "2", label: "Patent Filed" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden border border-border/50 shadow-2xl glass-effect">
              <Image
                src="/images/adobe-20express-20-20file-20-281-29.jpg"
                alt="Tenali Sujith Kumar - AI/ML Engineer"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
