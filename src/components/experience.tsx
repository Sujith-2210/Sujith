
import { Briefcase, Code } from "lucide-react"
import { FloatingCard } from "./floating-card"

const experiences = [
  {
    role: "Artificial Intelligence & Cloud Technology Intern",
    company: "Edunet Foundation",
    period: "Sep 2025 - Oct 2025",
    type: "Remote",
    skills: ["Artificial Intelligence", "AI Agents", "Machine Learning", "Cloud Computing"],
  },
  {
    role: "Artificial Intelligence & ML Intern",
    company: "Blackbucks Group",
    period: "May 2025 - Jul 2025",
    type: "Remote",
    skills: [
      "Streamlit",
      "LLM",
      "Data Mining",
      "DCGAN",
      "Deep Learning",
      "AI Agents",
      "Generative AI",
      "Flask",
      "Prompt Engineering",
      "OpenCV",
    ],
  },
  {
    role: "Python Fullstack Developer Virtual Internship",
    company: "EduSkills Academy",
    period: "Apr 2025 - Jun 2025",
    type: "Remote",
    skills: ["Django", "MySQL", "Bootstrap", "CSS", "Python", "Flask", "JavaScript", "Git", "HTML"],
  },
  {
    role: "Cloud Computing Intern",
    company: "Corizo Edutech",
    period: "Mar 2025 - Apr 2025",
    type: "Remote",
    skills: ["Cloud Computing", "AWS", "Google Cloud"],
  },
  {
    role: "AI: Transformative Learning with TechSaksham",
    company: "Edunet Foundation",
    period: "Dec 2024 - Dec 2024",
    type: "Remote",
    skills: [
      "Streamlit",
      "Image Processing",
      "Deep Learning",
      "Python",
      "Generative AI",
      "Prompt Engineering",
      "OpenCV",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Corizo Edutech",
    period: "Nov 2024 - Dec 2024",
    type: "Remote",
    skills: ["Data Mining", "Data Analysis", "NLP", "Python", "AI", "OpenCV"],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Corizo Edutech",
    period: "Aug 2024 - Sep 2024",
    type: "Remote",
    skills: ["Data Analysis", "Python", "Generative AI", "Prompt Engineering", "AI"],
  },
  {
    role: "Google Cloud Generative AI Virtual Internship",
    company: "Google",
    period: "Jul 2024 - Sep 2024",
    type: "Remote",
    skills: ["Prompt Engineering", "Google Cloud", "Generative AI"],
  },
  {
    role: "Generative AI Intern",
    company: "Blackbucks Group",
    period: "May 2024 - Jun 2024",
    type: "Remote",
    skills: [
      "Hugging Face",
      "Streamlit",
      "Chatbots",
      "Image Processing",
      "DCGAN",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "LangChain",
      "OpenCV",
    ],
  },
  {
    role: "AWS AI-ML Virtual Internship",
    company: "Amazon Web Services",
    period: "Sep 2023 - Nov 2023",
    type: "Remote",
    skills: ["AWS", "Machine Learning", "Prompt Engineering", "AI"],
  },
]

const skills = {
  "Programming Languages": ["Java", "Python", "C", "JavaScript", "SQL", "HTML", "CSS"],
  "Software Development": [
    "REST APIs",
    "Flask",
    "FastAPI",
    "SDLC",
    "Agile Development",
    "Code Testing",
    "Unit Testing",
  ],
  "AI/ML Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "MediaPipe", "SHAP"],
  "Advanced AI Techniques": [
    "Deep Learning (CNN, ANN, RNN, LSTM)",
    "LLM Fine-tuning",
    "Generative AI",
    "GANs",
    "Model Training",
  ],
  "LLM & AI Agents": [
    "LangChain",
    "LangGraph",
    "AI Agents",
    "Prompt Engineering",
    "RAG",
    "Ollama",
    "Gemini API",
    "ChatGPT API",
  ],
  "Data Processing": ["NumPy", "Pandas", "Feature Engineering", "Data Preprocessing", "ETL Workflows"],
  "Cloud & Tools": [
    "AWS (EC2, S3, IAM, DynamoDB)",
    "Git",
    "GitHub",
    "VS Code",
    "Streamlit",
    "Firebase",
    "Google Colab",
  ],
  Databases: ["MySQL", "DynamoDB", "Firebase", "Database Optimization"],
  "Core Competencies": [
    "Problem Solving",
    "System Design",
    "Algorithm Optimization",
    "Distributed Systems",
    "Technical Documentation",
  ],
}

export default function Experience() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance flex items-center gap-3">
            <Briefcase className="w-10 h-10 text-primary" />
            <span>
              <span className="text-foreground">Professional</span>
              <span className="block text-primary">Experience</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">10+ internships across leading AI/ML and tech companies</p>
        </div>

        <div className="space-y-6 mb-16">
          {experiences.map((exp, index) => (
            <FloatingCard key={index} delay={index * 50} className="hover-lift">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p className="text-xs">{exp.type}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FloatingCard>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-balance flex items-center gap-3 animate-fade-in-up">
            <Code className="w-8 h-8 text-primary" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <FloatingCard key={category} delay={index * 75}>
                <h4 className="text-lg font-bold text-primary mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium hover:bg-secondary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
