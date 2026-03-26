


export default function AIRobotShowcase() {
  return (
    <section className="relative z-10 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-balance mb-4">
              <span className="text-foreground">Exploring AI &</span>
              <span className="block text-primary">Robotics Innovation</span>
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              My passion lies in creating intelligent systems that push the boundaries of what's possible. From training
              deep neural networks to developing AI agents that can reason and act autonomously.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <p className="text-sm font-bold text-primary">Neural Networks</p>
                <p className="text-xs text-muted-foreground mt-1">Deep & Reinforcement Learning</p>
              </div>
              <div className="p-4 rounded-lg border border-secondary/30 bg-secondary/5 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                <p className="text-sm font-bold text-secondary">Vision Systems</p>
                <p className="text-xs text-muted-foreground mt-1">Computer Vision & Image Processing</p>
              </div>
              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <p className="text-sm font-bold text-primary">Intelligent Agents</p>
                <p className="text-xs text-muted-foreground mt-1">LLMs & AI Automation</p>
              </div>
              <div className="p-4 rounded-lg border border-secondary/30 bg-secondary/5 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                <p className="text-sm font-bold text-secondary">Autonomous Systems</p>
                <p className="text-xs text-muted-foreground mt-1">Robotics & Real-time Processing</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden border border-border shadow-2xl group">
            <img               src="/images/ai-robotics-showcase.png"
              alt="AI & Robotics - Building the future, one algorithm at a time"
              
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              
            />
            <div className="absolute inset-0 bg-gradient-to-t   to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
              <h3 className="text-2xl font-bold text-primary">AI & Robotics</h3>
              <p className="text-foreground">Building the future, one algorithm at a time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
