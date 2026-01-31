interface HeroSectionProps {
  onOpenBrandForm: () => void;
}

export function HeroSection({ onOpenBrandForm }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="reveal max-w-6xl">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8">
          Infrastructure // Scaling Protocol
        </p>
        <h1 className="font-heading text-6xl md:text-[8.5rem] font-black leading-[0.85] mb-12 tracking-tighter uppercase">
          INFLUENCE <br /> <span className="text-primary">ENGINEERED.</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          Beyond an agency. An automated architecture built for high-scale brand activations.
          Everything is <span className="text-foreground font-bold italic">perfectly orchestrated</span>{' '}
          through our proprietary SaaS platform.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center items-center">
          <button onClick={onOpenBrandForm} className="btn-protocol px-12 py-5 text-xs">
            Request Brand Access
          </button>
          <button
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[11px] font-black uppercase tracking-[0.4em] text-foreground flex items-center group"
          >
            Portal Entrance
            <svg
              className="ml-3 w-4 h-4 group-hover:translate-x-2 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
