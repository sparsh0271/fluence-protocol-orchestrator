export function ProtocolSection() {
  return (
    <section id="protocol" className="py-32 px-6 md:px-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-8 leading-tight">
            The Manual Era <br />
            <span className="text-muted-foreground italic uppercase tracking-tighter">Is Over.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Most agencies break under the weight of 50 creators. We built a platform to thrive at
            500+. We don't just "find people"—we deploy strategies across automated layers of{' '}
            <span className="text-foreground font-bold">Paid, Barter, and Elite Performance</span>{' '}
            modules.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-[10px] text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                01
              </div>
              <p className="text-foreground text-sm font-bold uppercase tracking-widest mt-2">
                Eliminate Logistics Debt
              </p>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-[10px] text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                02
              </div>
              <p className="text-foreground text-sm font-bold uppercase tracking-widest mt-2">
                Unified Result Intelligence
              </p>
            </div>
          </div>
        </div>
        <div className="reveal glass rounded-3xl p-2 aspect-square md:aspect-video relative overflow-hidden group border-border">
          <div className="p-10 h-full flex flex-col relative z-10">
            <div className="flex justify-between items-center mb-12">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                Active Pipeline: 598 Nodes
              </span>
            </div>
            <div className="flex-grow flex items-end space-x-4">
              <div className="w-full bg-border h-[30%] rounded-t-xl transition-all duration-700"></div>
              <div className="w-full bg-border h-[60%] rounded-t-xl transition-all duration-700"></div>
              <div className="w-full bg-primary h-[90%] rounded-t-xl transition-all duration-700"></div>
              <div className="w-full bg-border h-[45%] rounded-t-xl transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
