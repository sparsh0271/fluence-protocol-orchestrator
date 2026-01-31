import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';
import { FloatingParticles, GlowingOrbs, AnimatedGrid, FloatingShapes } from './FloatingElements';
import { FadeIn, ScaleIn } from './AnimatedSection';

interface HeroSectionProps {
  onOpenBrandForm: () => void;
}

export function HeroSection({ onOpenBrandForm }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40 dark:opacity-60"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Floating Elements */}
      <GlowingOrbs />
      <FloatingParticles />
      <AnimatedGrid />
      <FloatingShapes />

      {/* Content */}
      <motion.div 
        className="relative z-20 max-w-6xl"
        style={{ opacity, scale }}
      >
        <FadeIn delay={0.2}>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8">
            Infrastructure // Scaling Protocol
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1 className="font-heading text-6xl md:text-[8.5rem] font-black leading-[0.85] mb-12 tracking-tighter uppercase">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              INFLUENCE
            </motion.span>{' '}
            <br />
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              ENGINEERED.
            </motion.span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.8}>
          <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Beyond an agency. An automated architecture built for high-scale brand activations.
            Everything is <span className="text-foreground font-bold italic">perfectly orchestrated</span>{' '}
            through our proprietary SaaS platform.
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center items-center">
            <motion.button
              onClick={onOpenBrandForm}
              className="btn-protocol px-12 py-5 text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Brand Access
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[11px] font-black uppercase tracking-[0.4em] text-foreground flex items-center group"
              whileHover={{ x: 5 }}
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
            </motion.button>
          </div>
        </FadeIn>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
