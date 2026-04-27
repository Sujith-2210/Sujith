
import { Brain, Code, Zap } from "lucide-react"

export default function About() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">About</span>
            <span className="block text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building intelligent systems that solve real-world problems through innovation and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate AI/ML engineer with a deep interest in building intelligent systems that can perceive,
              learn, and act autonomously. My journey started with a curiosity about how machines can understand human
              language and behavior.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              With expertise in deep learning, generative AI, and computer vision, I've worked on diverse projects
              ranging from medical diagnosis systems to human pose estimation and AI-powered coaching platforms. I'm
              committed to creating technology that makes a positive impact.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science with AI Specialization at KKR&KSR Institute, I've earned
              recognition through patent filings, competition wins, and professional internships at leading AI
              companies.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg border border-border liquid-glass">
                <p className="text-2xl font-bold text-primary">8.97/10</p>
                <p className="text-sm text-muted-foreground">Current CGPA</p>
              </div>
              <div className="p-4 rounded-lg border border-border liquid-glass">
                <p className="text-2xl font-bold text-primary">3 Patent</p>
                <p className="text-sm text-muted-foreground">Filed & Holder</p>
              </div>
              <div className="p-4 rounded-lg border border-border liquid-glass">
                <p className="text-2xl font-bold text-primary">1</p>
                <p className="text-sm text-muted-foreground">Published Research Paper</p>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img               src="/images/6d5e378b-a5a8-429d-8f59-2644c45ea050.jpeg"
              alt="Tenali Sujith Kumar at hackathon event with professional badge"
              
              className="object-cover object-top"
              
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border liquid-glass hover:border-primary/50 transition-colors duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">AI & Robotics</h3>
            <p className="text-muted-foreground">
              Developing intelligent agents and robotics systems that learn from data and adapt to environments.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border liquid-glass hover:border-primary/50 transition-colors duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Deep Learning</h3>
            <p className="text-muted-foreground">
              Building neural networks for computer vision, NLP, and predictive analytics with state-of-the-art
              accuracy.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border liquid-glass hover:border-primary/50 transition-colors duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Generative AI</h3>
            <p className="text-muted-foreground">
              Leveraging LLMs and diffusion models to create innovative applications that push the boundaries of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
