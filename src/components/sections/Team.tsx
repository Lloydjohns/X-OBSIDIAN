const team = [
  {
    name: "Henrik Bauer",
    title: "Head of Industrial Design",
    role: "Sketches every chamfer. Worked at Vacheron, then Leica.",
    years: "11 yrs",
    sig: "H.B.",
  },
  {
    name: "Lin Wei",
    title: "Silicon Architect",
    role: "Designed the OBX-1 chip. Previously at Apple, Imagination.",
    years: "14 yrs",
    sig: "L.W.",
  },
  {
    name: "Anaïs Royer",
    title: "Optics Lead",
    role: "Built the triple-camera system from first principles.",
    years: "9 yrs",
    sig: "A.R.",
  },
  {
    name: "Tomás Echeverría",
    title: "Materials Engineer",
    role: "Sources and stress-tests every alloy that enters the building.",
    years: "8 yrs",
    sig: "T.E.",
  },
  {
    name: "Yuki Nakamura",
    title: "Software Director",
    role: "Author of OBSIDIAN OS. Believes in less, exquisitely done.",
    years: "13 yrs",
    sig: "Y.N.",
  },
  {
    name: "Mara Voss",
    title: "Acoustic Engineer",
    role: "Tunes every speaker, every haptic, every click of a button.",
    years: "7 yrs",
    sig: "M.V.",
  },
];

const Team = () => {
  return (
    <section id="team" className="relative py-32 border-t border-border">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne mb-4">
              ⟢ The Architects
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-none">
              Made by
              <br />
              <span className="italic text-champagne">forty-seven people</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A studio, not a factory. Every device passes through hands that built it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {team.map((m, i) => (
            <article
              key={m.name}
              className="bg-background p-8 group hover:bg-carbon transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne">
                  No. {String(i + 1).padStart(3, "0")}
                </div>
                <div className="font-display text-5xl text-champagne/20 italic group-hover:text-champagne/40 transition-colors">
                  {m.sig}
                </div>
              </div>

              <h3 className="font-display text-3xl mb-1">{m.name}</h3>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
                {m.title} · {m.years}
              </div>

              <div className="hairline mb-6" />

              <p className="text-sm text-muted-foreground leading-relaxed">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
