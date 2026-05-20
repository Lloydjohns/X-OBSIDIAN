import phoneProfile from "@/assets/phone-profile.jpg";
import phoneLifestyle from "@/assets/phone-lifestyle.jpg";
import phoneCamera from "@/assets/phone-camera.jpg";

const lineup = [
  {
    code: "XII / PRO",
    name: "Obsidian XII Pro",
    desc: "The flagship. Triple 200MP system, titanium frame, OBX-1 silicon. The reference.",
    price: "$2,400",
    img: phoneProfile,
  },
  {
    code: "XII / STD",
    name: "Obsidian XII",
    desc: "Same chassis, refined optics. Dual camera, all-day endurance, single SIM elegance.",
    price: "$1,800",
    img: phoneLifestyle,
  },
  {
    code: "XII / NOIR",
    name: "Obsidian XII Noir",
    desc: "Limited series. Brushed black titanium, blacked-out glass, leather rear. 500 units.",
    price: "$3,600",
    img: phoneCamera,
  },
];

const Lineup = () => {
  return (
    <section id="lineup" className="relative py-32 border-t border-border bg-carbon/40">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne mb-4">
              ⟢ The Collection
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-none">
              Three devices.
              <br />
              <span className="italic text-champagne">One philosophy.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Choose the configuration that matches your routine. Every model shares the same
            obsession.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {lineup.map((item) => (
            <article
              key={item.code}
              className="group bg-background flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-carbon">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-champagne bg-obsidian/60 backdrop-blur px-3 py-1.5 border border-champagne/30">
                  {item.code}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-display text-3xl mb-3 leading-tight">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-border flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      From
                    </div>
                    <div className="font-display text-2xl text-champagne">{item.price}</div>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs uppercase tracking-[0.25em] text-foreground border-b border-champagne pb-0.5 hover:text-champagne transition-colors"
                  >
                    Specify →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground italic font-display">
          Each device is engraved with its production number. There will only ever be 24,000.
        </p>
      </div>
    </section>
  );
};

export default Lineup;
