
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section className="relative z-10 py-24 bg-gradient-to-b  ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">Let's Connect &</span>
            <span className="block text-primary">Create Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Always building. Always curious. Let's discuss how I can help bring your AI/ML projects to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-border liquid-glass hover:border-primary/50 transition-colors duration-200 text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <Link
              to="mailto:sssujith39143@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              sssujith39143@gmail.com
            </Link>
          </div>

          <div className="p-6 rounded-xl border border-border liquid-glass hover:border-primary/50 transition-colors duration-200 text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground mb-2">Phone</h3>
            <Link to="tel:+919490936857" className="text-muted-foreground hover:text-primary transition-colors">
              +91 9490936857
            </Link>
          </div>

          <div className="p-6 rounded-xl border border-border liquid-glass hover:border-primary/50 transition-colors duration-200 text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Guntur, Andhra Pradesh, India</p>
          </div>
        </div>

        <div className="mb-12 p-8 rounded-xl border border-border liquid-glass backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-foreground mb-6">Achievements & Recognition</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span className="text-foreground">
                <strong>Patent Holder:</strong> Enhanced Smart Ring for Women's Safety (IPO, Jan 2025)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span className="text-foreground">
                <strong>1st Place Winner:</strong> AI Quest National Level Symposium (Jul 2025)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span className="text-foreground">
                <strong>IBM Certified:</strong> AI Developer Professional Certification
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span className="text-foreground">
                <strong>CGPA:</strong> 8.89/10 in B.Tech CSE (AI Specialization)
              </span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <Link
            to="https://linkedin.com/in/tenali-sujith-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-border liquid-glass hover:border-primary hover:bg-primary/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-primary" />
          </Link>
          <Link
            to="https://github.com/Sujith-2210"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-border liquid-glass hover:border-primary hover:bg-primary/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-primary" />
          </Link>
          <Link
            to="mailto:sssujith39143@gmail.com"
            className="p-4 rounded-xl border border-border liquid-glass hover:border-primary hover:bg-primary/5 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-primary" />
          </Link>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>Crafted with passion for intelligent systems • © 2025 Tenali Sujith Kumar</p>
        </div>
      </div>
    </section>
  )
}
