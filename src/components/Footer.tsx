import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 border-t border-border px-6 md:px-12 bg-card flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-6 md:mb-0"
      >
        © 2026 DotFluence Infrastructure // The Influence Protocol
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex space-x-12"
      >
        {['Instagram', 'LinkedIn', 'Legal Status'].map((item, i) => (
          <motion.a
            key={item}
            href={item === 'Instagram' ? 'https://instagram.com' : '#'}
            target={item === 'Instagram' ? '_blank' : undefined}
            rel={item === 'Instagram' ? 'noopener noreferrer' : undefined}
            className="hover:text-primary transition relative"
            whileHover={{ y: -2 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-6 md:mt-0 text-foreground opacity-40"
      >
        Orchestrated for the 1%
      </motion.div>
    </motion.footer>
  );
}
