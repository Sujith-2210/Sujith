"use client"

const projects = [
  {
    title: "IntelliTrip - AI Travel Planning System",
    description:
      "Distributed AI-powered travel planner integrating multiple APIs with intelligent route optimization and real-time recommendations.",
    tech: ["Python", "Gemini 2.5 Pro", "LangChain", "Flask", "REST APIs"],
    achievement: "60% planning time reduction with context-aware recommendations",
    highlighted: true,
  },
  {
    title: "AI Speech Trainer Agent",
    description:
      "Multimodal coaching system analyzing facial expressions, vocal patterns, and speech content with specialized AI agents.",
    tech: ["FastAPI", "OpenCV", "Gemini API", "LangGraph", "Deep Learning"],
    achievement: "500+ weekly submissions, 88% user satisfaction",
    highlighted: true,
  },
  {
    title: "Enhanced Smart Ring (Patent Filed)",
    description:
      "Deep learning-powered safety device analyzing biometric signals for threat detection with 94% accuracy.",
    tech: ["Python", "Deep Learning (ANN, RNN)", "Streamlit", "Biometric Processing"],
    achievement: "Filed under Intellectual Property of India - Innovation Recognition",
  },
  {
    title: "College ERP System (Kits-EDU)",
    description:
      "Full-stack college management portal serving 500+ users with optimized database queries and secure authentication.",
    tech: ["Flask", "MySQL", "JavaScript", "REST APIs", "Role-Based Access"],
    achievement: "50% reduction in page load time through query optimization",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">Key Projects</span>
            <span className="block text-primary">Technical Accomplishments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From AI-powered applications to scalable systems, here are the projects that showcase my expertise in
            building intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl border transition-all duration-300 hover:border-primary ${
                project.highlighted
                  ? "md:col-span-1 bg-card border-primary/50 hover:bg-card/80"
                  : "bg-card border-border hover:border-secondary"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-primary mb-2">Key Achievement</p>
                  <p className="text-sm text-foreground/80">{project.achievement}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-foreground mb-4">Distributed ML Projects Portfolio</h3>
          <p className="text-muted-foreground mb-6">
            Additional projects including cardiovascular disease prediction (91% accuracy), stock price forecasting with
            LSTM, customer segmentation on 50K+ records, and Spotify genre classification.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["TensorFlow", "Scikit-learn", "Keras", "PyTorch", "OpenCV"].map((tech) => (
              <div key={tech} className="text-center">
                <p className="text-sm text-primary font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
