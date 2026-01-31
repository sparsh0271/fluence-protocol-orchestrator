import { useCounter } from '@/hooks/useCounter';

function Counter({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const { count, ref } = useCounter(target);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {target >= 100 ? suffix : ''}
    </span>
  );
}

export function CaseEvidenceSection() {
  return (
    <section id="proof" className="py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 reveal">
          <h2 className="font-heading text-6xl md:text-[8rem] font-black mb-6 tracking-tighter uppercase italic">
            Case <span className="text-primary">Evidence.</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-[0.5em] text-[10px] font-black">
            Managed Network Output // Protocol Performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Flipkart Case */}
          <div className="reveal glass p-16 rounded-[3rem] card-hover border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 text-[9px] font-black text-primary uppercase tracking-widest">
              Phase: Multi-Tier Activation
            </div>
            <h4 className="text-5xl font-black mb-8 uppercase tracking-tighter">Flipkart</h4>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed font-light">
              Executed a <span className="text-foreground font-bold">1,000+ creator activation</span>{' '}
              within 14 days. Spread across specific categories (50K+ and 100K+ creator nodes) with
              structured execution throughout.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-10">
              <div>
                <p className="text-4xl font-black text-foreground">
                  <Counter target={1000} />
                </p>
                <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                  Creators
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-foreground">
                  <Counter target={14} suffix="" />
                </p>
                <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                  Days
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-foreground">
                  <Counter target={216} />
                </p>
                <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                  ROI %
                </p>
              </div>
            </div>
          </div>

          {/* Myntra Case */}
          <div className="reveal glass p-16 rounded-[3rem] card-hover relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 text-[9px] font-black text-muted-foreground uppercase tracking-widest">
              Phase: Orchestration Proof
            </div>
            <h4 className="text-5xl font-black mb-8 uppercase tracking-tighter">Myntra</h4>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed font-light">
              Direct management and orchestration of{' '}
              <span className="text-foreground font-bold">598 influencers</span> simultaneously. Zero
              manual friction achieved through our automated platform logic.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-border pt-10">
              <div>
                <p className="text-4xl font-black text-foreground">
                  <Counter target={598} />
                </p>
                <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                  Active Nodes
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary uppercase tracking-tighter italic">
                  Live
                </p>
                <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                  Tracking Status
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
