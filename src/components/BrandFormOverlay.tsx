import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrandFormOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BrandFormOverlay({ isOpen, onClose }: BrandFormOverlayProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-background/[0.98] backdrop-blur-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass p-12 rounded-[3rem] w-full max-w-2xl relative shadow-2xl"
          >
            <motion.button
              onClick={onClose}
              className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition uppercase text-[10px] font-black tracking-widest"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Close [ESC]
            </motion.button>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl font-black mb-4 uppercase text-primary"
            >
              Request Access
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-10 text-sm font-medium tracking-wide"
            >
              Initialize your brand profile for high-scale orchestration.
            </motion.p>
            
            <form
              action="https://formspree.io/f/dotfluencee@gmail.com"
              method="POST"
              className="space-y-6 text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input
                  type="text"
                  name="brand"
                  required
                  placeholder="Brand Name"
                  className="bg-card border border-border rounded-xl px-6 py-4 focus:border-primary outline-none text-foreground transition font-bold text-sm"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Work Email"
                  className="bg-card border border-border rounded-xl px-6 py-4 focus:border-primary outline-none text-foreground transition font-bold text-sm"
                />
              </motion.div>
              
              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                name="msg"
                rows={4}
                placeholder="Briefly describe your campaign scale requirements..."
                className="w-full bg-card border border-border rounded-xl px-6 py-4 focus:border-primary outline-none text-foreground transition font-bold text-sm resize-none"
              />
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                type="submit"
                className="btn-protocol w-full py-5 text-xs font-black tracking-[0.2em]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Transmit Request
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
