import phoneExploded from "@/assets/phone-exploded.jpg";

const steps = [
  { n: "01", title: "Concept & Sketch", desc: "Pencil-on-paper proposals from our Zürich studio. Every angle defended." },
  { n: "02", title: "Material Selection", desc: "Titanium grades, sapphire glass, custom alloys — sourced and stress-tested." },
  { n: "03", title: "CNC Prototyping", desc: "27 prototype generations milled to micron tolerance. Hand-checked." },
  { n: "04", title: "Silicon Tape-Out", desc: "OBX-1 chip designed in-house, fabbed at 3nm. Verified across 14 nodes." },
  { n: "05", title: "Final Assembly", desc: "Each device assembled by a single technician. Signed and serialised." },
];

const Engineering = () => {
  return (
    <section id="engineering" className="relative py-32 border-t border-border overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne mb-4">
              ⟢ Behind the Glass
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
              Built one
              <br />
              <span className="italic text-champagne">at a time</span>,
              <br />
              never on a line.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Five stages. Eighteen weeks. Zero shortcuts. Watch how a billet of titanium
              becomes the device in your pocket.
            </p>
          </div>
        </div>

        {/* Big exploded image */}
        <div className="relative mb-24 border border-border overflow-hidden bg-carbon">
          <img
            src={phoneExploded}
            alt="Exploded view of Obsidian XII internal components"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-wrap items-end justify-between gap-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne">
              ⟢ 1,247 components · 0 visible screws
            </div>
            <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span>24 FPS</span>
              <span className="text-champagne">18 WEEKS</span>
              <span>SERIAL #'D</span>
            </div>
          </div>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* connector line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent hidden md:block" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-champagne shadow-[0_0_20px_hsl(var(--champagne))] relative z-10" />
                  <span className="font-mono text-xs text-muted-foreground">— STAGE</span>
                </div>
                <div className="font-display text-5xl text-champagne/30 mb-2">{s.n}</div>
                <h3 className="font-display text-xl mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          {[
            { v: "0.02mm", k: "Tolerance" },
            { v: "47 min", k: "Per Chassis" },
            { v: "1,247", k: "Components" },
            { v: "100%", k: "Hand-Checked" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-4xl md:text-5xl">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engineering;
