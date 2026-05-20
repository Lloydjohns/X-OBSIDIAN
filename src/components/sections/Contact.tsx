import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", interest: "XII Pro", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please complete required fields");
      return;
    }
    toast.success("Reservation noted. A specialist will reach out within 24 hours.");
    setForm({ name: "", email: "", interest: "XII Pro", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 border-t border-border bg-carbon/40">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne mb-4">
              ⟢ Reserve Your Device
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-[0.95] mb-8">
              Quietly,
              <br />
              <span className="italic text-champagne">to your door.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Reservations are reviewed by hand. A specialist will arrange a private
              configuration session within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { k: "Atelier", v: "Obsidian 0081, Altier" },
                { k: "Concierge", v: "concierge@obsidian.studio" },
                { k: "Hours", v: "Mon–Sat · 10:00–19:00 CET" },
              ].map((d) => (
                <div key={d.k} className="flex gap-6 items-baseline border-b border-border pb-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground w-24 shrink-0">
                    {d.k}
                  </div>
                  <div className="font-display text-lg">{d.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="bg-background border border-border p-8 md:p-12 relative"
            >
              <div className="absolute top-0 left-0 right-0 hairline" />
              <div className="flex items-center justify-between mb-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-champagne">
                  / Reservation Form
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Ref: NX—{Math.floor(Math.random() * 9000 + 1000)}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    Full Name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-champagne outline-none py-2 font-display text-lg transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border focus:border-champagne outline-none py-2 font-display text-lg transition-colors"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Interested In
                </label>
                <div className="flex flex-wrap gap-3">
                  {["XII", "XII Pro", "XII Noir"].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setForm({ ...form, interest: opt })}
                      className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] border transition-all ${
                        form.interest === opt
                          ? "bg-champagne text-primary-foreground border-champagne"
                          : "border-border text-muted-foreground hover:border-champagne hover:text-champagne"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Notes (optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border border-border focus:border-champagne outline-none p-3 text-sm transition-colors resize-none"
                  placeholder="Engraving requests, color preference, delivery timeline..."
                />
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-champagne text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-foreground transition-all duration-500"
              >
                Submit Reservation
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </button>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Response within 24h · No marketing list · Encrypted in transit
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
