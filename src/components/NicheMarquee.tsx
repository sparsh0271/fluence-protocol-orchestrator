export function NicheMarquee() {
  const niches = [
    { title: 'Fashion', desc: 'Lookbooks, GRWM, Seasonal Festive Stories' },
    { title: 'Gaming', desc: 'Let\'s Plays, Esports, Setup Unboxings' },
    { title: 'Technology', desc: 'Comparisons, Buying Guides, Tech News' },
    { title: 'Beauty', desc: 'Makeup Tutorials, Skincare, Seasonal Looks' },
    { title: 'Travel', desc: 'Guides & Itineraries, Resort Reviews, Vlogs' },
  ];

  // Duplicate for seamless loop
  const allNiches = [...niches, ...niches];

  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden">
      <h3 className="font-heading text-3xl font-black mb-16 uppercase text-center tracking-tighter reveal">
        Niche <span className="text-primary">Authority Modules</span>
      </h3>
      <div className="marquee-container">
        <div className="flex gap-8 flex-shrink-0 animate-marquee">
          {allNiches.map((niche, i) => (
            <div key={i} className="glass px-12 py-8 rounded-2xl flex flex-col min-w-[320px]">
              <h5 className="text-primary text-xs font-black mb-2 uppercase tracking-widest">
                {niche.title}
              </h5>
              <p className="text-[10px] text-muted-foreground uppercase leading-relaxed">
                {niche.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
