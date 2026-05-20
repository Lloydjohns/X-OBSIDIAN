const awards = [
  { label: "Red Dot", year: "2025", category: "Best of the Best" },
  { label: "iF Design", year: "2025", category: "Gold Award" },
  { label: "IDEA", year: "2024", category: "Gold Winner" },
  { label: "Wallpaper*", year: "2024", category: "Design Award" },
  { label: "T3", year: "2024", category: "Phone of the Year" },
  { label: "GQ Tech", year: "2025", category: "Editor's Pick" },
];

const Awards = () => {
  return (
    <section id="awards" className="relative py-32 border-t border-border bg-carbon/40">
      <div className="container">
        <div className="text-center mb-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne mb-4">
            ⟢ Recognition
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-none">
            Awarded by those
            <br />
            who notice <span className="italic text-champagne">millimetres</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
          {awards.map((a) => (
            <div
              key={a.label}
              className="bg-background p-8 flex flex-col items-center justify-center text-center group hover:bg-carbon transition-colors duration-500 aspect-square"
            >
              {/* laurel */}
              <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full text-champagne/60 group-hover:text-champagne transition-colors duration-500">
                  <path
                    d="M20 15 Q10 30 12 50 Q15 65 25 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M60 15 Q70 30 68 50 Q65 65 55 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  {[20, 30, 40, 50, 60].map((y, i) => (
                    <g key={i}>
                      <ellipse cx={14 - i} cy={y} rx="3" ry="1.5" fill="currentColor" transform={`rotate(-30 ${14 - i} ${y})`} />
                      <ellipse cx={66 + i} cy={y} rx="3" ry="1.5" fill="currentColor" transform={`rotate(30 ${66 + i} ${y})`} />
                    </g>
                  ))}
                </svg>
                <div className="font-display text-xl text-champagne">{a.year}</div>
              </div>
              <div className="font-display text-lg leading-tight">{a.label}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                {a.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          ⟢ 47 awards across 12 jurisdictions ⟢
        </div>
      </div>
    </section>
  );
};

export default Awards;
