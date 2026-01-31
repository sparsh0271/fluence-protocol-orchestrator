import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FadeIn, ScaleIn } from './AnimatedSection';
import { Parallax } from './Parallax';
import abstractShapes from '@/assets/abstract-shapes.png';

function AnimatedCounter({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const animate = () => {
      current += increment;
      if (current < target) {
        setCount(Math.ceil(current));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animate();
  }, [isInView, target]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {count.toLocaleString()}
      {target >= 100 ? suffix : ''}
    </motion.span>
  );
}

export function CaseEvidenceSection() {
  return (
    <section id="proof" className="py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Floating abstract shapes */}
      <Parallax offset={80} className="absolute right-0 top-20 w-96 h-96 opacity-20 dark:opacity-40 pointer-events-none">
        <motion.img
          src={abstractShapes}
          alt=""
          className="w-full h-full object-contain"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </Parallax>

      <Parallax offset={-60} className="absolute left-0 bottom-20 w-72 h-72 opacity-10 dark:opacity-30 pointer-events-none">
        <motion.img
          src={abstractShapes}
          alt=""
          className="w-full h-full object-contain rotate-180"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
      </Parallax>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <FadeIn>
            <h2 className="font-heading text-6xl md:text-[8rem] font-black mb-6 tracking-tighter uppercase italic">
              Case <span className="text-primary">Evidence.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground uppercase tracking-[0.5em] text-[10px] font-black">
              Managed Network Output // Protocol Performance
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Flipkart Case */}
          <ScaleIn delay={0.2}>
            <motion.div
              className="glass p-16 rounded-[3rem] card-hover border-border relative overflow-hidden group"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
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
                    <AnimatedCounter target={1000} />
                  </p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                    Creators
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-foreground">
                    <AnimatedCounter target={14} suffix="" />
                  </p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                    Days
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-foreground">
                    <AnimatedCounter target={216} />
                  </p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                    ROI %
                  </p>
                </div>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Myntra Case */}
          <ScaleIn delay={0.4}>
            <motion.div
              className="glass p-16 rounded-[3rem] card-hover relative overflow-hidden group"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
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
                    <AnimatedCounter target={598} />
                  </p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                    Active Nodes
                  </p>
                </div>
                <div>
                  <motion.p
                    className="text-4xl font-black text-primary uppercase tracking-tighter italic"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Live
                  </motion.p>
                  <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mt-2">
                    Tracking Status
                  </p>
                </div>
              </div>
            </motion.div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
