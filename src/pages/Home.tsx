
import HeroSection from "@/components/HeroSection"
import AIRobotShowcase from "@/components/ai-robot-showcase"
import { Link } from "react-router-dom"
import { User, Boxes, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-transparent text-foreground">
      <HeroSection />

      <AIRobotShowcase />

      <section className="relative z-10 py-24 border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Explore My Portfolio</h2>
            <p className="text-muted-foreground text-lg">
              Discover my work, experience, and expertise in AI and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/about"
              className="group p-8 rounded-2xl border border-border liquid-glass hover:liquid-glass hover:border-primary/50 transition-smooth liquid-glass hover-lift animate-scale-in"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">About Me</h3>
              <p className="text-muted-foreground">Learn about my journey, passion, and achievements</p>
            </Link>

            <Link
              to="/projects"
              className="group p-8 rounded-2xl border border-border liquid-glass hover:liquid-glass hover:border-primary/50 transition-smooth liquid-glass hover-lift animate-scale-in animate-delay-100"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <Boxes className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Projects</h3>
              <p className="text-muted-foreground">Explore 20+ AI/ML projects and solutions</p>
            </Link>

            <Link
              to="/contact"
              className="group p-8 rounded-2xl border border-border liquid-glass hover:liquid-glass hover:border-primary/50 transition-smooth liquid-glass hover-lift animate-scale-in animate-delay-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Contact</h3>
              <p className="text-muted-foreground">Get in touch and let's create together</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
