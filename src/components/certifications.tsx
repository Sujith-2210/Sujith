
import { Award } from "lucide-react"

const certifications = [
  {
    name: "5-Day AI Agents Intensive Course with Google",
    issuer: "Google/Kaggle",
    issued: "Dec 2025",
    skills: [
      "AI Agents",
      "Artificial Intelligence",
      "AI Ethics",
      "Generative AI",
      "Google Cloud",
      "LangChain",
      "Prompt Engineering",
      "Problem Solving",
    ],
  },
  {
    name: "Cloud Technical Series: ADK Builder's Badge",
    issuer: "Google",
    issued: "Oct 2025",
    skills: ["AI Agents", "Google Cloud"],
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "Oct 2025",
    skills: ["Machine Learning Foundations", "Artificial Intelligence"],
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    issued: "Oct 2025",
    skills: ["Generative AI", "Deep Learning", "Artificial Intelligence", "Prompt Engineering"],
  },
  {
    name: "Claude with Google Vertex AI",
    issuer: "Anthropic",
    issued: "Sep 2025",
    credentialId: "nahpxdeh4aj8",
    skills: ["Generative AI", "AI Agents", "Python Programming", "Prompt Engineering"],
  },
  {
    name: "Google Cloud Computing Foundation Certificate",
    issuer: "Google",
    issued: "Jun 2025",
    credentialId: "df4e0ee8-3331-492b-a9e5-1c4ceaea67d9",
    skills: ["Data & ML", "Cloud Foundations", "APIs", "Google Cloud"],
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    issued: "Feb 2025",
    credentialId: "8056fbd7-7ca5-4e7c-b098-b3479d71a409",
    skills: [
      "Generative AI",
      "Python Programming",
      "Deep Learning",
      "AI Ethics",
      "Chatbots",
      "NLP",
      "AI",
      "Watson Studio",
      "Prompt Engineering",
    ],
  },
  {
    name: "Generative AI: Elevate your Software Development Career",
    issuer: "IBM",
    issued: "Nov 2024",
    credentialId: "TL7ETLDWM72I",
    skills: ["Generative AI", "Python Programming"],
  },
  {
    name: "IBM AI Developer Professional Certificate",
    issuer: "Coursera",
    issued: "Nov 2024",
    credentialId: "78fda249-651d-465d-bf95-152fa95f9b10",
    skills: ["Generative AI", "Python Programming", "Deep Learning", "Chatbots", "LLM", "AI", "Prompt Engineering"],
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    issued: "Nov 2024",
    credentialId: "CQ9H6M2NN5LR",
    skills: ["Python Programming"],
  },
  {
    name: "Software Developer Career Guide and Interview Preparation",
    issuer: "IBM",
    issued: "Nov 2024",
    credentialId: "KT0LFYTULVX5",
    skills: ["Software Engineering"],
  },
  {
    name: "Building Generative AI-Powered Applications with Python",
    issuer: "IBM",
    issued: "Oct 2024",
    credentialId: "IUS6DVMJCW5O",
    skills: ["Generative AI", "Prompt Engineering"],
  },
  {
    name: "Developing AI Applications with Python and Flask",
    issuer: "IBM",
    issued: "Oct 2024",
    credentialId: "Y2LO5OX3SRPL",
    skills: ["Python Programming", "Flask", "AI"],
  },
  {
    name: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    issued: "Oct 2024",
    credentialId: "IAALGXXPRC48",
    skills: ["Generative AI", "Python Programming", "Prompt Engineering"],
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    issued: "Oct 2024",
    credentialId: "T0W04FUR0GU0",
    skills: ["Generative AI", "Prompt Engineering"],
  },
  {
    name: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    issued: "Sep 2024",
    credentialId: "NKFT899CLH4D",
    skills: ["Python Programming", "Prompt Engineering", "AI"],
  },
  {
    name: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM",
    issued: "Sep 2024",
    credentialId: "BXCNCZRBY9A5",
    skills: ["JavaScript", "CSS", "HTML"],
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM",
    issued: "Aug 2024",
    credentialId: "8MSTPNGGVY6X",
    skills: ["Software Engineering"],
  },
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    issued: "May 2024",
    credentialId: "4dabb2e4-0953-42e2-aeb7-0d085c4d443e",
    skills: ["AWS", "Cloud Architecture"],
  },
  {
    name: "Accenture North America - Data Analytics and Visualization Job Simulation",
    issuer: "Forage",
    issued: "Mar 2024",
    credentialId: "Jd9NkJ2PwgYdMwZEB",
    skills: ["Software Engineering", "Data Analytics"],
  },
  {
    name: "Tata - Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    issued: "Mar 2024",
    credentialId: "Z8WxasDnRRAEXMmhm",
    skills: ["Software Engineering", "Cybersecurity"],
  },
  {
    name: "Data Analysis Using Python",
    issuer: "IBM",
    issued: "Feb 2024",
    credentialId: "e3b730ac-f757-4f39-882b-b801c2fbbc1b",
    skills: ["Python Programming", "Data Analysis"],
  },
  {
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft",
    issued: "Jan 2024",
    skills: ["Computer Ethics", "Software Engineering", "AI", "Generative AI"],
  },
  {
    name: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    issued: "Jan 2024",
    skills: ["Generative AI", "AI Ethics"],
  },
  {
    name: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "LinkedIn",
    issued: "Jan 2024",
    skills: ["Generative AI", "Prompt Engineering"],
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn",
    issued: "Jan 2024",
    skills: ["Generative AI", "Python Programming", "AI"],
  },
  {
    name: "Learning Microsoft 365 Copilot",
    issuer: "LinkedIn",
    issued: "Jan 2024",
    skills: ["Software Engineering", "Microsoft 365"],
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    issued: "Jan 2024",
    credentialId: "32441cf3-145e-465a-b8fe-245d782f9b7d",
    skills: ["Python Programming"],
  },
  {
    name: "Streamlining Your Work with Copilot (formerly Bing Chat)",
    issuer: "LinkedIn",
    issued: "Jan 2024",
    skills: ["Generative AI", "Microsoft Search", "Chatbots", "Software Engineering"],
  },
  {
    name: "What Is Generative AI?",
    issuer: "LinkedIn",
    issued: "Jan 2024",
    skills: ["Generative AI"],
  },
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    issued: "Oct 2023",
    credentialId: "cf8c2451-c027-481b-a268-8644a1c57422",
    skills: ["AWS", "Cloud Computing"],
  },
  {
    name: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services",
    issued: "Oct 2023",
    credentialId: "cb039bf2-c169-4f43-9ae5-c6009f22d067",
    skills: ["Machine Learning Foundations", "AI", "AWS"],
  },
]

export default function Certifications() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance flex items-center gap-3">
            <Award className="w-10 h-10 text-primary" />
            <span>
              <span className="text-foreground">Licenses &</span>
              <span className="block text-primary">Certifications</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">30+ professional certifications from industry leaders</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border liquid-glass hover:border-primary/50 transition-colors duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{cert.name}</h3>
                  <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">Issued: {cert.issued}</p>
                  {cert.credentialId && <p className="text-xs text-muted-foreground mt-1">ID: {cert.credentialId}</p>}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
