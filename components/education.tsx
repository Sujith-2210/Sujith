"use client"

import { BookOpen } from "lucide-react"
import { FloatingCard } from "./floating-card"

const education = [
  {
    degree: "Bachelor of Technology (BTech)",
    field: "Computer Science & Engineering - Artificial Intelligence",
    institution: "KKR&KSR Institute of Technology & Sciences",
    location: "VINJANAMPADU Village, Andhra Pradesh",
    year: "2022 - 2026",
    grade: "8.89/10 (Current CGPA)",
    highlights: ["Specialization in AI", "Strong foundation in ML/DL", "Patent holder"],
  },
  {
    degree: "Intermediate",
    field: "Board of Intermediate Education",
    institution: "Narayana Junior College",
    location: "Andhra Pradesh, India",
    year: "Jun 2020 - Jun 2022",
    grade: "86%",
    highlights: ["Science stream", "Strong fundamentals"],
  },
  {
    degree: "Secondary School Certificate",
    field: "Board of Secondary Education",
    institution: "The Central School",
    location: "Andhra Pradesh, India",
    year: "Jun 2019 - Mar 2020",
    grade: "96%",
    highlights: ["Distinction", "Academic excellence"],
  },
]

export default function Education() {
  return (
    <section className="py-16">
      <div className="mb-12 animate-fade-in-up">
        <h3 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          Education
        </h3>
        <p className="text-muted-foreground">Academic journey and qualifications</p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <FloatingCard key={index} delay={index * 100}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                <p className="text-primary font-medium">{edu.field}</p>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs text-muted-foreground">{edu.location}</p>
              </div>
              <div className="mt-3 md:mt-0 md:text-right">
                <p className="text-sm text-muted-foreground">{edu.year}</p>
                <p className="text-lg font-bold text-primary">{edu.grade}</p>
              </div>
            </div>
            {edu.highlights && (
              <div className="flex flex-wrap gap-2 pt-4">
                {edu.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-medium hover:bg-secondary/30 transition-colors"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </FloatingCard>
        ))}
      </div>
    </section>
  )
}
