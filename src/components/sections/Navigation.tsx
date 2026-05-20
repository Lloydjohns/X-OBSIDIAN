import { useEffect, useState } from "react";

const links = [
  { label: "Device", href: "#device" },
  { label: "Engineering", href: "#engineering" },
  { label: "Awards", href: "#awards" },
  { label: "Lineup", href: "#lineup" },
  { label: "Architects", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-obsidian/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-2 font-display text-2xl tracking-tight">
          <span className="inline-block w-2 h-2 rounded-full bg-champagne animate-pulse-glow" />
          OBSIDIAN
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest ml-1">/ XII</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-champagne transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-2 text-[10px] font-mono uppercase text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            In Stock
          </span>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 border border-champagne/40 text-champagne text-xs uppercase tracking-[0.2em] hover:bg-champagne hover:text-primary-foreground transition-all duration-300"
          >
            Reserve
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="h-px bg-foreground" />
              <span className="h-px bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-obsidian/95 backdrop-blur-xl border-t border-border px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-champagne"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
