import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
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
  const containerRef = useScrollReveal();

  const openBrandForm = () => setIsFormOpen(true);
  const closeBrandForm = () => setIsFormOpen(false);

  return (
    <div ref={containerRef}>
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
  );
};

export default Index;
