import { useState } from "react";
import phoneHero from "@/assets/phone-hero.png";
import heroVideo from "@/assets/hero-video.mp4";
const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden grain">
      {/* Background video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />
      {/* Vignette overlay for legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />

      {/* ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-champagne/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-700/10 blur-[120px]" />

      <div className="container relative z-10">
        {/* Top meta bar */}
        <div className="flex items-center justify-between mb-12 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>NX—2025 / FLAGSHIP</span>
          <span className="hidden md:inline">SERIAL · OBS-XII-001</span>
          <span>EST. 2018 · ZÜRICH</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left — Editorial */}
          <div className="lg:col-span-7 relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-champagne" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-champagne">
                The Twelfth Iteration
              </span>
            </div>

            <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.85] font-light text-balance">
              <span className="block">Engineered</span>
              <span className="block italic font-normal text-champagne">to -disappear.</span>
              <span className="block">Designed</span>
              <span className="block italic font-normal">to remain.</span>
            </h1>

            <div className="mt-12 max-w-lg">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A phone reduced to its essence. Forged from a single billet of grade-5
                titanium. Powered by silicon designed in-house. Owned by those who choose
                quietly.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The Obsidian XII blends a 6.7″ LTPO display, triple 200MP camera array,
                and 5400mAh battery into a beautifully balanced flagship built for
                performance and precision.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#device"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-champagne text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium hover:bg-foreground transition-all duration-500"
              >
                Configure Device
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-champagne/40 flex items-center justify-center group-hover:bg-champagne/10">
                  ▶
                </span>
                Watch the film · 02:14
              </button>
            </div>
          </div>

          {/* Right — Phone visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative animate-float-slow">
              <img
                src={phoneHero}
                alt="Obsidian XII flagship phone in titanium black with champagne gold edges"
                width={1080}
                height={1920}
                className="w-full max-w-md mx-auto object-contain drop-shadow-[0_60px_60px_rgba(0,0,0,0.7)]"
              />
            </div>
            {/* spec callouts */}
            <div className="absolute top-10 -left-4 hidden md:block">
              <div className="font-mono text-[10px] uppercase tracking-widest text-champagne">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-px bg-champagne" />
                  Triple 200MP
                </div>
                <div className="text-muted-foreground mt-1 ml-15 pl-4">Periscope · 10×</div>
              </div>
            </div>
            <div className="absolute bottom-20 -right-4 hidden md:block">
              <div className="font-mono text-[10px] uppercase tracking-widest text-champagne text-right">
                <div className="flex items-center gap-3 justify-end">
                  Ti—Grade 5
                  <span className="w-12 h-px bg-champagne" />
                </div>
                <div className="text-muted-foreground mt-1 mr-15 pr-4">7.2mm · 198g</div>
              </div>
            </div>
          </div>
        </div>

        {/* Spec strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { k: "Display", v: "6.7″ LTPO", sub: "1Hz–144Hz" },
            { k: "Chipset", v: "OBX—1", sub: "3nm · 16-core" },
            { k: "Camera", v: "200MP", sub: "1″ Sensor" },
            { k: "Battery", v: "5400mAh", sub: "120W · Wired" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.k}
              </div>
              <div className="font-display text-3xl mt-2">{s.v}</div>
              <div className="font-mono text-xs text-champagne mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-slate-950">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-3xl text-white leading-none"
              aria-label="Close video overlay"
            >
              ×
            </button>
            <video
              src={heroVideo}
              autoPlay
              controls
              playsInline
              className="w-full h-auto max-h-[80vh] bg-black"
            />
            <div className="p-6 text-sm text-muted-foreground">
              <h2 className="font-display text-2xl mb-3 text-white">Obsidian XII Film</h2>
              <p className="mb-2">
                Explore the Obsidian XII in motion: the titanium unibody, 6.7″ LTPO
                display, OBX—1 chipset, and advanced triple 200MP camera system. See
                how premium materials, quiet power delivery, and a refined ergonomic
                design come together to create a flagship that feels both solid and
                effortless.
              </p>
              <p className="text-[0.85rem] text-champagne">
                Close the overlay to return to the hero content.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
