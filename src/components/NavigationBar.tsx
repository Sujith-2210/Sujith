import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <Link 
        to="/" 
        className="text-3xl tracking-tight text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Sujith
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
        <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
        <Link to="/experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</Link>
        <Link to="/skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
        <Link to="/certifications" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Certifications</Link>
        <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
      </div>

      {/* CTA Button */}
      <Link to="/contact" className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300 cursor-pointer block text-center">
        Get in Touch
      </Link>
    </nav>
  );
}
