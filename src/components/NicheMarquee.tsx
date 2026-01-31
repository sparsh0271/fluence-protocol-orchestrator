import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FadeIn } from './AnimatedSection';

export function NicheMarquee() {
  const niches = [
    { title: 'Fashion', desc: 'Lookbooks, GRWM, Seasonal Festive Stories', emoji: '👗' },
    { title: 'Gaming', desc: "Let's Plays, Esports, Setup Unboxings", emoji: '🎮' },
    { title: 'Technology', desc: 'Comparisons, Buying Guides, Tech News', emoji: '📱' },
    { title: 'Beauty', desc: 'Makeup Tutorials, Skincare, Seasonal Looks', emoji: '💄' },
    { title: 'Travel', desc: 'Guides & Itineraries, Resort Reviews, Vlogs', emoji: '✈️' },
    { title: 'Fitness', desc: 'Workouts, Nutrition, Transformation', emoji: '💪' },
    { title: 'Food', desc: 'Recipes, Restaurant Reviews, Mukbang', emoji: '🍕' },
    { title: 'Lifestyle', desc: 'Daily Vlogs, Home Decor, Productivity', emoji: '🏠' },
  ];

  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden relative">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <FadeIn>
        <h3 className="font-heading text-3xl font-black mb-16 uppercase text-center tracking-tighter relative z-10">
          Niche <span className="text-primary">Authority Modules</span>
        </h3>
      </FadeIn>

      <div className="marquee-container relative z-10">
        <motion.div
          className="flex gap-8 flex-shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...niches, ...niches].map((niche, i) => (
            <motion.div
              key={i}
              className="glass px-12 py-8 rounded-2xl flex flex-col min-w-[320px] cursor-pointer"
              whileHover={{
                scale: 1.05,
                borderColor: 'hsl(var(--primary))',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{niche.emoji}</span>
                <h5 className="text-primary text-xs font-black uppercase tracking-widest">
                  {niche.title}
                </h5>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase leading-relaxed">
                {niche.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
