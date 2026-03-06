"use client"
import Navigation from "@/components/navigation"
import Hero3D from "@/components/hero-3d"
import Skills3DSection from "@/components/3d-skills-section"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import Link from "next/link"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="bg-background text-foreground dark:bg-slate-950">
        <Navigation />
        <Hero3D />
        <Skills3DSection />

        {/* Quick Navigation Section */}
        <section className="relative z-10 py-24 bg-card dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-secondary">
                Explore My Work
              </h2>
              <p className="text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
                Dive deeper into my journey, projects, and expertise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* About Card */}
              <Link href="/about">
                <div className="group p-8 border-2 border-primary bg-background dark:bg-card hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between rounded-lg"
                  style={{
                    boxShadow: 'var(--shadow-primary)',
                  }}
                >
                  <div>
                    <div className="text-4xl mb-4 text-primary dark:text-secondary font-bold">01</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">About Me</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground">Learn about my journey, passion, and achievements in AI engineering</p>
                  </div>
                </div>
              </Link>

              {/* Projects Card */}
              <Link href="/projects">
                <div className="group p-8 border-2 border-secondary bg-background dark:bg-card hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between rounded-lg"
                  style={{
                    boxShadow: 'var(--shadow-secondary)',
                  }}
                >
                  <div>
                    <div className="text-4xl mb-4 text-secondary dark:text-secondary font-bold">02</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Projects</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground">Explore 20+ AI/ML projects and innovative solutions I've built</p>
                  </div>
                </div>
              </Link>

              {/* Contact Card */}
              <Link href="/contact">
                <div className="group p-8 border-2 border-accent bg-background dark:bg-card hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between rounded-lg"
                  style={{
                    boxShadow: 'var(--shadow-accent)',
                  }}
                >
                  <div>
                    <div className="text-4xl mb-4 text-accent dark:text-primary font-bold">03</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Contact</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground">Get in touch and let's create something amazing together</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-background dark:bg-slate-950 text-center border-t border-border dark:border-slate-700">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-muted-foreground dark:text-muted-foreground mb-2">
              © 2024-2026 Tenali Sujith Kumar
            </p>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              Built with Next.js, React Three Fiber, and a passion for AI
            </p>
          </div>
        </footer>
      </div>
    </SmoothScrollProvider>
  )
}
