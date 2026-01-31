import { useEffect } from 'react';

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-background/[0.98] backdrop-blur-xl">
      <div className="glass p-12 rounded-[3rem] w-full max-w-2xl relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition uppercase text-[10px] font-black tracking-widest"
        >
          Close [ESC]
        </button>
        <h2 className="font-heading text-4xl font-black mb-4 uppercase text-primary">
          Request Access
        </h2>
        <p className="text-muted-foreground mb-10 text-sm font-medium tracking-wide">
          Initialize your brand profile for high-scale orchestration.
        </p>
        <form
          action="https://formspree.io/f/dotfluencee@gmail.com"
          method="POST"
          className="space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
          <textarea
            name="msg"
            rows={4}
            placeholder="Briefly describe your campaign scale requirements..."
            className="w-full bg-card border border-border rounded-xl px-6 py-4 focus:border-primary outline-none text-foreground transition font-bold text-sm resize-none"
          ></textarea>
          <button type="submit" className="btn-protocol w-full py-5 text-xs font-black tracking-[0.2em]">
            Transmit Request
          </button>
        </form>
      </div>
    </div>
  );
}
