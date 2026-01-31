import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProtocolSection } from '@/components/ProtocolSection';
import { ServicesSection } from '@/components/ServicesSection';
import { NicheMarquee } from '@/components/NicheMarquee';
import { CaseEvidenceSection } from '@/components/CaseEvidenceSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { BrandFormOverlay } from '@/components/BrandFormOverlay';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth entrance
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const openBrandForm = () => setIsFormOpen(true);
  const closeBrandForm = () => setIsFormOpen(false);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[300] bg-background flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        {/* Fixed Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 dot-matrix"></div>
        </div>

        <Navbar onOpenBrandForm={openBrandForm} />
        <HeroSection onOpenBrandForm={openBrandForm} />
        <ProtocolSection />
        <ServicesSection />
        <NicheMarquee />
        <CaseEvidenceSection />
        <FinalCTASection onOpenBrandForm={openBrandForm} />
        <BrandFormOverlay isOpen={isFormOpen} onClose={closeBrandForm} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
