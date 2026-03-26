"use client"

import Image from "next/image"
import { Brain, Code, Zap } from "lucide-react"
import { motion } from "framer-motion"
import BlurText from "./blur-text"
import MotionCard from "./motion-card"

export default function About() {
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

  const skillCards = [
    {
      icon: Zap,
      title: "AI & Robotics",
      description: "Developing intelligent agents and robotics systems that learn from data and adapt to environments.",
    },
    {
      icon: Brain,
      title: "Deep Learning",
      description:
        "Building neural networks for computer vision, NLP, and predictive analytics with state-of-the-art accuracy.",
    },
    {
      icon: Code,
      title: "Generative AI",
      description: "Leveraging LLMs and diffusion models to create innovative applications that push the boundaries of AI.",
    },
  ]

  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BlurText
            text="About"
            delay={0}
            duration={0.6}
            className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Me</h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Building intelligent systems that solve real-world problems through innovation and creativity.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              "I'm a passionate AI/ML engineer with a deep interest in building intelligent systems that can perceive, learn, and act autonomously. My journey started with a curiosity about how machines can understand human language and behavior.",
              "With expertise in deep learning, generative AI, and computer vision, I've worked on diverse projects ranging from medical diagnosis systems to human pose estimation and AI-powered coaching platforms. I'm committed to creating technology that makes a positive impact.",
              "Currently pursuing B.Tech in Computer Science with AI Specialization at KKR&KSR Institute, I've earned recognition through patent filings, competition wins, and professional internships at leading AI companies.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg text-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { value: "8.89/10", label: "Current CGPA" },
                { value: "2 Patent", label: "Filed & Holder" },
              ].map((stat, index) => (
                <MotionCard
                  key={index}
                  index={index}
                  delay={0}
                  className="p-4 rounded-lg crystalline-border bg-card glass-effect"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </MotionCard>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Image
              src="/images/6d5e378b-a5a8-429d-8f59-2644c45ea050.jpeg"
              alt="Tenali Sujith Kumar at hackathon event with professional badge"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCards.map((card, index) => {
            const Icon = card.icon
            return (
              <MotionCard key={index} index={index} delay={0.1} className="p-6 rounded-xl crystalline-border bg-card glass-effect group">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </MotionCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
