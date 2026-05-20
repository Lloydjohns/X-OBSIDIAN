const tech = [
  "OBX-1 Silicon",
  "3nm TSMC",
  "LTPO 144Hz",
  "Sapphire Glass",
  "Grade-5 Titanium",
  "Sony LYT-900",
  "Wi-Fi 7",
  "UWB",
  "Satellite Comm",
  "MagSafe-Compatible",
  "USB-4",
  "120W Charging",
];

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 border-t border-border bg-obsidian overflow-hidden">
      {/* Tech marquee */}
      <div className="relative overflow-hidden border-y border-border py-6 mb-20">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne text-center mb-4">
          ⟢ Technology Inside ⟢
        </div>
        <div className="flex marquee-track gap-12 whitespace-nowrap">
          {[...tech, ...tech, ...tech].map((t, i) => (
            <span key={i} className="font-display text-3xl md:text-4xl italic text-muted-foreground/60 hover:text-champagne transition-colors flex items-center gap-12">
              {t}
              <span className="text-champagne/30">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 font-display text-4xl mb-4">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-champagne animate-pulse-glow" />
              OBSIDIAN
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              A small studio in Zürich making phones the way they should be made — slowly,
              by hand, with intent.
            </p>
            <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-champagne">
              Est. 2018 · 47 people · 1 product line
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-champagne mb-5">
              Devices
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#device" className="hover:text-foreground">XII Pro</a></li>
              <li><a href="#lineup" className="hover:text-foreground">XII Standard</a></li>
              <li><a href="#lineup" className="hover:text-foreground">XII Noir</a></li>
              <li><a href="#" className="hover:text-foreground">Accessories</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-champagne mb-5">
              Studio
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#engineering" className="hover:text-foreground">Engineering</a></li>
              <li><a href="#team" className="hover:text-foreground">Architects</a></li>
              <li><a href="#" className="hover:text-foreground">Atelier</a></li>
              <li><a href="#" className="hover:text-foreground">Press Kit</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-champagne mb-5">
              Newsletter
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              One letter per quarter. No marketing.
            </p>
            <div className="flex border-b border-border">
              <input
                type="email"
                placeholder="you@domain.com"
                className="flex-1 bg-transparent outline-none py-2 text-sm placeholder:text-muted-foreground/50"
              />
              <button className="text-champagne text-sm">→</button>
            </div>
          </div>
        </div>

        {/* Mega wordmark */}
        <div className="font-display text-[clamp(4rem,18vw,18rem)] leading-[0.8] tracking-tighter font-light text-foreground/5 select-none">
          OBSIDIAN
        </div>

        <div className="pt-8 mt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© 2025 OBSIDIAN STUDIO AG</span>
          <span>BAHNHOFSTRASSE 47 · 8001 ZÜRICH · CH</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-champagne">Privacy</a>
            <a href="#" className="hover:text-champagne">Warranty</a>
            <a href="#" className="hover:text-champagne">Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
