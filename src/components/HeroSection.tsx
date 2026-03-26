import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
      {/* H1 */}
      <h1 
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Tenali <em className="not-italic text-muted-foreground">Sujith</em> <br className="hidden sm:block" />
        <em className="not-italic text-foreground">Kumar.</em>
      </h1>

      {/* Subtext */}
      <p className="animate-[fade-rise_0.8s_ease-out_0.2s_both] text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
        AI/ML Engineer & Full-Stack Developer. Speciailizing in Deep Learning, Generative AI & Intelligent Systems.
        I transform complex ideas into scalable AI solutions.
      </p>

      {/* CTA Button */}
      <div className="flex gap-4 mt-12 animate-[fade-rise_0.8s_ease-out_0.4s_both]">
        <Link to="/projects" className="liquid-glass rounded-full px-10 py-4 text-base text-foreground hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
          View My Work
        </Link>
        <Link to="/contact" className="liquid-glass rounded-full px-10 py-4 text-base text-foreground hover:scale-[1.03] transition-transform duration-300 cursor-pointer border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
