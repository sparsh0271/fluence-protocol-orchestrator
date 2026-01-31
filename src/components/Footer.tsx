export function Footer() {
  return (
    <footer className="py-20 border-t border-border px-6 md:px-12 bg-card flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground relative z-10">
      <div className="mb-6 md:mb-0">© 2026 DotFluence Infrastructure // The Influence Protocol</div>
      <div className="flex space-x-12">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          Instagram
        </a>
        <a href="#" className="hover:text-primary transition">
          LinkedIn
        </a>
        <a href="#" className="hover:text-primary transition">
          Legal Status
        </a>
      </div>
      <div className="mt-6 md:mt-0 text-foreground opacity-40">Orchestrated for the 1%</div>
    </footer>
  );
}
