import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn, ScaleIn } from './AnimatedSection';
import { Parallax } from './Parallax';
import influencersGroup from '@/assets/influencers-group.jpg';

export function ProtocolSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="protocol"
      className="py-32 px-6 md:px-12 bg-card border-y border-border relative overflow-hidden"
    >
      {/* Background parallax image */}
      <motion.div
        className="absolute right-0 top-0 w-1/2 h-full opacity-10 dark:opacity-20"
        style={{ y: imageY }}
      >
        <img
          src={influencersGroup}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card" />
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-6xl font-black mb-8 leading-tight">
              The Manual Era <br />
              <span className="text-muted-foreground italic uppercase tracking-tighter">Is Over.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Most agencies break under the weight of 50 creators. We built a platform to thrive at
              500+. We don't just "find people"—we deploy strategies across automated layers of{' '}
              <span className="text-foreground font-bold">Paid, Barter, and Elite Performance</span>{' '}
              modules.
            </p>
          </FadeIn>
          
          <div className="space-y-6">
            {[
              { num: '01', text: 'Eliminate Logistics Debt' },
              { num: '02', text: 'Unified Result Intelligence' },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.1}>
                <motion.div
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-[10px] text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {item.num}
                  </div>
                  <p className="text-foreground text-sm font-bold uppercase tracking-widest mt-2">
                    {item.text}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <ScaleIn delay={0.3}>
          <Parallax offset={30}>
            <motion.div
              className="glass rounded-3xl p-2 aspect-square md:aspect-video relative overflow-hidden group border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-10 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex space-x-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-500"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    Active Pipeline: 598 Nodes
                  </span>
                </div>
                <div className="flex-grow flex items-end space-x-4">
                  {[30, 60, 90, 45].map((height, i) => (
                    <motion.div
                      key={i}
                      className={`w-full rounded-t-xl ${i === 2 ? 'bg-primary' : 'bg-border'}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </Parallax>
        </ScaleIn>
      </div>
    </section>
  );
}
