"use client"

import { Code, Cpu, Database, Cloud, Brain, Zap } from "lucide-react"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    description: "Core programming and scripting languages",
    skills: ["Java", "Python", "C", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Software Development",
    icon: Zap,
    description: "Backend frameworks and development practices",
    skills: ["REST APIs", "Flask", "FastAPI", "SDLC", "Agile Development", "Code Testing", "Unit Testing"],
  },
  {
    category: "AI/ML Frameworks",
    icon: Brain,
    description: "Machine learning and deep learning libraries",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "MediaPipe", "SHAP"],
  },
  {
    category: "Advanced AI Techniques",
    icon: Cpu,
    description: "Cutting-edge AI methodologies and architectures",
    skills: ["Deep Learning (CNN, ANN, RNN, LSTM)", "LLM Fine-tuning", "Generative AI", "GANs", "Model Training"],
  },
  {
    category: "LLM & AI Agents",
    icon: Brain,
    description: "Large language models and autonomous agent development",
    skills: ["LangChain", "LangGraph", "AI Agents", "Prompt Engineering", "RAG", "Ollama", "Gemini API", "ChatGPT API"],
  },
  {
    category: "Data Processing",
    icon: Database,
    description: "Data manipulation and preprocessing tools",
    skills: ["NumPy", "Pandas", "Feature Engineering", "Data Preprocessing", "ETL Workflows"],
  },
  {
    category: "Cloud & Tools",
    icon: Cloud,
    description: "Cloud platforms and development tools",
    skills: ["AWS (EC2, S3, IAM, DynamoDB)", "Git", "GitHub", "VS Code", "Streamlit", "Firebase", "Google Colab"],
  },
  {
    category: "Databases",
    icon: Database,
    description: "Database systems and optimization",
    skills: ["MySQL", "DynamoDB", "Firebase", "Database Optimization"],
  },
  {
    category: "Core Competencies",
    icon: Zap,
    description: "Essential professional capabilities",
    skills: [
      "Problem Solving",
      "System Design",
      "Algorithm Optimization",
      "Distributed Systems",
      "Technical Documentation",
    ],
  },
]

export default function SkillsDetail() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance flex items-center gap-3">
            <Code className="w-10 h-10 text-primary" />
            <span>
              <span className="text-foreground">Technical</span>
              <span className="block text-primary">Skills</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive skillset covering AI/ML, software development, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{skillGroup.category}</h3>
                    <p className="text-sm text-muted-foreground">{skillGroup.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium hover:border-secondary/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-foreground mb-6">Proficiency Summary</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Expert Level</p>
              <div className="space-y-2">
                {["Python", "TensorFlow", "PyTorch", "Generative AI", "Prompt Engineering"].map((skill) => (
                  <p key={skill} className="text-foreground font-medium">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Advanced Level</p>
              <div className="space-y-2">
                {["LLMs", "Deep Learning", "Computer Vision", "AWS", "Flask"].map((skill) => (
                  <p key={skill} className="text-foreground font-medium">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Proficient Level</p>
              <div className="space-y-2">
                {["JavaScript", "Database Design", "System Architecture", "MLOps", "Git/GitHub"].map((skill) => (
                  <p key={skill} className="text-foreground font-medium">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
