import { useState, useEffect } from 'react';
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
    <nav
      className={`fixed w-full z-[100] px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div
        className="flex items-center space-x-3 group cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="w-10 h-10 bg-foreground flex items-center justify-center rounded-sm rotate-45 group-hover:bg-primary group-hover:rotate-0 transition-all duration-500">
          <div className="w-2 h-2 bg-background -rotate-45 group-hover:rotate-0"></div>
        </div>
        <span className="font-heading font-bold text-2xl tracking-tighter uppercase">
          DOT<span className="text-primary">FLUENCE</span>
        </span>
      </div>

      <div className="hidden md:flex space-x-12 text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground">
        <a href="#protocol" className="hover:text-foreground transition">
          Logic
        </a>
        <a href="#services" className="hover:text-foreground transition">
          Capabilities
        </a>
        <a href="#proof" className="hover:text-foreground transition">
          Evidence
        </a>
      </div>

      <div className="flex items-center space-x-6">
        <div className="theme-switch" onClick={toggle}>
          <div className="theme-switch-circle"></div>
        </div>
        <button onClick={onOpenBrandForm} className="btn-protocol px-6 py-2.5 text-[10px]">
          Initialize
        </button>
      </div>
    </nav>
  );
}
