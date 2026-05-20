import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import FeaturedDevice from "@/components/sections/FeaturedDevice";
import Awards from "@/components/sections/Awards";
import Engineering from "@/components/sections/Engineering";
import Lineup from "@/components/sections/Lineup";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "OBSIDIAN XII — A Phone, Quietly Engineered";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "OBSIDIAN XII: a flagship phone hand-built in Zürich. Grade-5 titanium, OBX-1 silicon, 200MP optics. Reserve yours.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedDevice />
      <Awards />
      <Engineering />
      <Lineup />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
