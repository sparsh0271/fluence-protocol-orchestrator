import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

interface NavbarProps {
  onOpenBrandForm: () => void;
}

export function Navbar({ onOpenBrandForm }: NavbarProps) {
  const { toggle } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-[100] px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <motion.div
        className="flex items-center space-x-3 group cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="w-10 h-10 bg-foreground flex items-center justify-center rounded-sm rotate-45 group-hover:bg-primary group-hover:rotate-0 transition-all duration-500"
          whileHover={{ rotate: 0 }}
        >
          <div className="w-2 h-2 bg-background -rotate-45 group-hover:rotate-0"></div>
        </motion.div>
        <span className="font-heading font-bold text-2xl tracking-tighter uppercase">
          DOT<span className="text-primary">FLUENCE</span>
        </span>
      </motion.div>

      <div className="hidden md:flex space-x-12 text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground">
        {['Logic', 'Capabilities', 'Evidence'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${['protocol', 'services', 'proof'][i]}`}
            className="hover:text-foreground transition relative"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            {item}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <motion.div
          className="theme-switch"
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="theme-switch-circle"
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </motion.div>
        <motion.button
          onClick={onOpenBrandForm}
          className="btn-protocol px-6 py-2.5 text-[10px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Initialize
        </motion.button>
      </div>
    </motion.nav>
  );
}
