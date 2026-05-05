import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const sectionIds = ["hero", "about", "resume", "portfolio", "testimonials", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "hero";
      const targetLine = window.innerHeight * 0.45;

      for (const section of sectionIds) {
        const element = document.getElementById(section);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= targetLine && rect.bottom >= targetLine) {
          currentSection = section;
          break;
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="poster-stage">
      <Hero activeSection={activeSection} />
      <About activeSection={activeSection} />
      <Resume activeSection={activeSection} />
      <Portfolio activeSection={activeSection} />
      <Testimonials activeSection={activeSection} />
      <Contact activeSection={activeSection} />
    </main>
  );
}

export default App;
