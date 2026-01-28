"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-20 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4">
                <span className="text-foreground">Tenali Sujith</span>
                <span className="block text-primary">Kumar</span>
              </h1>
              <p className="text-xl text-secondary mb-2">AI/ML Engineer & Full-Stack Developer</p>
              <p className="text-muted-foreground">
                Specializing in Deep Learning, Generative AI & Intelligent Systems
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed max-w-lg">
              I transform complex ideas into scalable AI solutions. From training deep learning models to building
              AI-powered applications, I bridge the gap between research and real-world impact.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary/30"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary/20"
              >
                Get in Touch
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-muted-foreground text-sm">AI/ML Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-muted-foreground text-sm">Internships</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2</p>
                <p className="text-muted-foreground text-sm">Patent Filed</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center animate-slide-in-right">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden border border-border shadow-2xl hover:scale-105 hover:shadow-primary/20 transition-all duration-500 animate-float">
              <Image
                src="/images/adobe-20express-20-20file-20-281-29.jpg"
                alt="Tenali Sujith Kumar - AI/ML Engineer"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
