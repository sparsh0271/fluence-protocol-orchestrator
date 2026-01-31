import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn, ScaleIn } from './AnimatedSection';
import { GlowingOrbs } from './FloatingElements';

interface FinalCTASectionProps {
  onOpenBrandForm: () => void;
}

export function FinalCTASection({ onOpenBrandForm }: FinalCTASectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} id="join" className="py-48 px-6 text-center relative overflow-hidden">
      <GlowingOrbs />
      
      <motion.div className="max-w-5xl mx-auto relative z-10" style={{ scale, opacity }}>
        <FadeIn>
          <h2 className="font-heading text-6xl md:text-[9rem] font-black leading-none mb-12 tracking-tighter uppercase italic">
            Scale <br /> <span className="text-primary">Initiated.</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-muted-foreground text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Access the infrastructure portal. Select your entrance to begin.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <ScaleIn delay={0.3}>
            <motion.div
              className="glass p-12 rounded-[2.5rem] text-left hover:bg-card transition-all cursor-pointer group relative overflow-hidden"
              onClick={onOpenBrandForm}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10">
                <motion.span
                  className="text-4xl mb-4 block"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🏢
                </motion.span>
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-primary">
                  For Brands
                </h4>
                <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-medium">
                  Automate your influencer logistics. Request campaign blueprints and full portal access.
                </p>
                <motion.button
                  className="btn-protocol w-full py-5 text-[10px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Brand Access
                </motion.button>
              </div>
            </motion.div>
          </ScaleIn>

          <ScaleIn delay={0.4}>
            <motion.div
              className="glass p-12 rounded-[2.5rem] text-left hover:bg-card transition-all cursor-pointer group relative overflow-hidden"
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10">
                <motion.span
                  className="text-4xl mb-4 block"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ⭐
                </motion.span>
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-foreground">
                  For Influencers
                </h4>
                <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-medium">
                  Join the high-scale network. Receive automated briefs, specifications, and secure
                  outcomes.
                </p>
                <motion.button
                  className="bg-foreground text-background font-black w-full py-5 rounded-sm text-[10px] uppercase tracking-widest"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Up to Protocol
                </motion.button>
              </div>
            </motion.div>
          </ScaleIn>
        </div>

        <FadeIn delay={0.5}>
          <p className="mt-24 text-[10px] uppercase font-black text-muted-foreground tracking-[0.5em]">
            Direct Operations: <span className="text-foreground">dotfluencee@gmail.com</span>
          </p>
        </FadeIn>
      </motion.div>
    </section>
  );
}
