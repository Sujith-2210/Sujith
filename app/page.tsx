"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import AIRobotShowcase from "@/components/ai-robot-showcase"
import ParticleBackground from "@/components/particle-background"
import MotionCard from "@/components/motion-card"
import BlurText from "@/components/blur-text"
import Link from "next/link"
import { User, Boxes, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  const portfolioItems = [
    {
      icon: User,
      title: "About Me",
      description: "Learn about my journey, passion, and achievements",
      href: "/about",
    },
    {
      icon: Boxes,
      title: "Projects",
      description: "Explore 20+ AI/ML projects and solutions",
      href: "/projects",
    },
    {
      icon: Mail,
      title: "Contact",
      description: "Get in touch and let's create together",
      href: "/contact",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navigation />
      <Hero />

      <AIRobotShowcase />

      <motion.section
        className="relative z-10 py-24 border-t border-primary/10 cinematic-overlay"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BlurText
              text="Explore My Portfolio"
              delay={0}
              duration={0.6}
              className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            />
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Discover my work, experience, and expertise in AI and full-stack development
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {portfolioItems.map((item, index) => {
              const Icon = item.icon
              return (
                <MotionCard
                  key={item.href}
                  index={index}
                  delay={0.1}
                  className="p-8 rounded-2xl crystalline-border bg-card/40 glass-effect group cursor-pointer"
                >
                  <Link href={item.href} className="block h-full">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(178, 190, 255, 0.25)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Link>
                </MotionCard>
              )
            })}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
