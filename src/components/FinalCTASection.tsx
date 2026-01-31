interface FinalCTASectionProps {
  onOpenBrandForm: () => void;
}

export function FinalCTASection({ onOpenBrandForm }: FinalCTASectionProps) {
  return (
    <section id="join" className="py-48 px-6 text-center">
      <div className="max-w-5xl mx-auto reveal">
        <h2 className="font-heading text-6xl md:text-[9rem] font-black leading-none mb-12 tracking-tighter uppercase italic">
          Scale <br /> <span className="text-primary">Initiated.</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Access the infrastructure portal. Select your entrance to begin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div
            className="glass p-12 rounded-[2.5rem] text-left hover:bg-card transition-all cursor-pointer group"
            onClick={onOpenBrandForm}
          >
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-primary">
              For Brands
            </h4>
            <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-medium">
              Automate your influencer logistics. Request campaign blueprints and full portal access.
            </p>
            <button className="btn-protocol w-full py-5 text-[10px]">Request Brand Access</button>
          </div>
          <div
            className="glass p-12 rounded-[2.5rem] text-left hover:bg-card transition-all cursor-pointer group"
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-foreground">
              For Influencers
            </h4>
            <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-medium">
              Join the high-scale network. Receive automated briefs, specifications, and secure
              outcomes.
            </p>
            <button className="bg-foreground text-background font-black w-full py-5 rounded-sm text-[10px] uppercase tracking-widest">
              Sign Up to Protocol
            </button>
          </div>
        </div>
        <p className="mt-24 text-[10px] uppercase font-black text-muted-foreground tracking-[0.5em]">
          Direct Operations: <span className="text-foreground">dotfluencee@gmail.com</span>
        </p>
      </div>
    </section>
  );
}
