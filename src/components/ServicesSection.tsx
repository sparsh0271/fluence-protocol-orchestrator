import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from './AnimatedSection';

export function ServicesSection() {
  const services = [
    {
      title: 'Celebrity & Macro Campaigns',
      description:
        "Collaborating with India's top personalities for large-scale impact. Designed to boost authority through high-reach collaborations with verified creators.",
      tag: 'TOP TIER',
      icon: '⭐',
    },
    {
      title: 'Micro & Nano Collaborations',
      description:
        'Tapping into highly engaged niche communities for brands valuing authenticity over vanity. Relatable storytelling and superior engagement.',
      tag: 'AUTHENTIC',
      icon: '💫',
    },
    {
      title: 'Product Seeding & UGC Content',
      description:
        'End-to-end management of gifting, unboxing, and user content. Creating authentic visual assets brands can repurpose indefinitely.',
      tag: 'UGC ASSETS',
      icon: '📦',
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
    <section id="services" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="font-heading text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
                System <span className="text-primary">Capabilities.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-sm">
                Strategically crafted influencer marketing services designed for authority and scale.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScaleIn key={i} delay={i * 0.15}>
              <motion.div
                className="glass p-10 rounded-[2rem] card-hover h-full"
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  className="text-4xl mb-6 block"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {service.icon}
                </motion.span>
                <h4 className="text-primary text-xs font-black uppercase mb-4 tracking-widest">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>
                <span className="px-3 py-1 rounded-full bg-border text-[8px] font-bold uppercase tracking-widest text-foreground">
                  {service.tag}
                </span>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        <div className="mt-24">
          <FadeIn>
            <h3 className="font-heading text-xl font-black mb-10 uppercase tracking-[0.4em] text-center text-muted-foreground">
              Dynamic Influencer Network
            </h3>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tiers.map((tier, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <motion.div
                  className="glass p-8 rounded-2xl text-center cursor-pointer"
                  whileHover={{
                    borderColor: 'hsl(var(--primary))',
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-primary text-xl font-black">{tier.range}</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase mt-1 tracking-widest">
                    {tier.label}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
