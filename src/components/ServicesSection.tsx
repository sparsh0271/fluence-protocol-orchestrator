export function ServicesSection() {
  const services = [
    {
      title: 'Celebrity & Macro Campaigns',
      description:
        "Collaborating with India's top personalities for large-scale impact. Designed to boost authority through high-reach collaborations with verified creators.",
      tag: 'TOP TIER',
    },
    {
      title: 'Micro & Nano Collaborations',
      description:
        'Tapping into highly engaged niche communities for brands valuing authenticity over vanity. Relatable storytelling and superior engagement.',
      tag: 'AUTHENTIC',
    },
    {
      title: 'Product Seeding & UGC Content',
      description:
        'End-to-end management of gifting, unboxing, and user content. Creating authentic visual assets brands can repurpose indefinitely.',
      tag: 'UGC ASSETS',
    },
  ];

  const tiers = [
    { range: '1K-10K', label: 'Nano' },
    { range: '10K-100K', label: 'Micro' },
    { range: '100K-500K', label: 'Mid-Tier' },
    { range: '500K-1M', label: 'Macro' },
    { range: '1M+', label: 'Mega' },
    { range: 'Verified', label: 'OTT Celebs' },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              System <span className="text-primary">Capabilities.</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Strategically crafted influencer marketing services designed for authority and scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="reveal glass p-10 rounded-[2rem] card-hover">
              <h4 className="text-primary text-xs font-black uppercase mb-4 tracking-widest">
                {service.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                {service.description}
              </p>
              <span className="px-3 py-1 rounded-full bg-border text-[8px] font-bold uppercase tracking-widest text-foreground">
                {service.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-24 reveal">
          <h3 className="font-heading text-xl font-black mb-10 uppercase tracking-[0.4em] text-center text-muted-foreground">
            Dynamic Influencer Network
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className="glass p-8 rounded-2xl text-center hover:border-primary transition duration-500"
              >
                <p className="text-primary text-xl font-black">{tier.range}</p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase mt-1 tracking-widest">
                  {tier.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
