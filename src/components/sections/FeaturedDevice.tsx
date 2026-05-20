import phoneCamera from "@/assets/phone-camera.jpg";

const FeaturedDevice = () => {
  return (
    <section id="device" className="relative py-32 border-t border-border overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne mb-4">
              ⟢ Featured Device
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-none font-light">
              Hardware,
              <br />
              <span className="italic text-champagne">obsessively</span>
              <br />
              considered.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              The OBSIDIAN XII is built like a watch — micron tolerances, sapphire glass,
              hand-finished chamfers. Three years of engineering compressed into 7.2mm.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Big visual */}
          <div className="lg:col-span-8 relative group overflow-hidden bg-carbon border border-border">
            <img
              src={phoneCamera}
              alt="Macro detail of Obsidian XII triple camera system"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[480px] md:h-[640px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne mb-3">
                MODULE · CAM-X3 / Sapphire-Coated
              </div>
              <h3 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
                A camera system that sees the way the eye remembers.
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <div className="font-mono text-xs text-muted-foreground">Wide</div>
                  <div className="font-display text-2xl text-champagne">200MP</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground">Ultra</div>
                  <div className="font-display text-2xl text-champagne">48MP</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground">Tele</div>
                  <div className="font-display text-2xl text-champagne">10×</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-carbon border border-border p-8 flex-1">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne mb-4">
                ⟢ Material
              </div>
              <div className="font-display text-3xl mb-3 leading-tight">
                Grade-5 Titanium frame, micro-bead blasted.
              </div>
              <p className="text-sm text-muted-foreground">
                CNC-milled from a single billet over 47 minutes per chassis. Cold-forged
                buttons. Sapphire crystal lens covers.
              </p>
              <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
                <div>
                  <div className="font-mono text-xs text-muted-foreground">Weight</div>
                  <div className="font-display text-2xl">198g</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted-foreground">Thickness</div>
                  <div className="font-display text-2xl">7.2mm</div>
                </div>
              </div>
            </div>

            <div className="bg-champagne text-primary-foreground p-8 flex-1 relative overflow-hidden">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4 opacity-70">
                ⟢ Pre-order
              </div>
              <div className="font-display text-4xl mb-2 leading-none">From</div>
              <div className="font-display text-6xl leading-none">$2,400</div>
              <div className="font-mono text-xs mt-2 opacity-70">Ships Q3 · 2025</div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground"
              >
                Configure yours →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevice;
