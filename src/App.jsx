import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import IconRail from "./components/IconRail";
import TitleBar from "./components/TitleBar";

const sectionIds = ["hero", "about", "resume", "portfolio", "testimonials", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      let currentSection = "hero";
      const targetLine = container.clientHeight * 0.45;

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        
        if (rect.top <= targetLine && rect.bottom >= targetLine) {
          currentSection = section;
          break;
        }
      }

      if (container.scrollHeight - container.scrollTop <= container.clientHeight + 50) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-layout" ref={scrollContainerRef}>
      <div className="hero-area" id="hero">
        <Hero activeSection={activeSection} />
      </div>

      <Sidebar activeSection={activeSection} />
      
      <main className="content-column">
        <TitleBar activeSection={activeSection} />
        
        <div className="scroll-viewport">
          <About activeSection={activeSection} />
          <Resume activeSection={activeSection} />
          <Portfolio activeSection={activeSection} />
          <Testimonials activeSection={activeSection} />
          <Contact activeSection={activeSection} />
        </div>
      </main>

      <div className="rail-column">
        <IconRail activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
