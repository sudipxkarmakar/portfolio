import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import IconRail from "./components/IconRail";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";

const sectionIds = ["hero", "about", "resume", "portfolio", "testimonials", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const scrollContainerRef = useRef(null);
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isPreloaderActive) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth <= 1024;

    // Build Lenis instance
    const lenis = new Lenis({
      wrapper: isMobile ? window : container,
      content: isMobile ? document.body : container,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Sync Lenis scroll with hash clicks
    const handleHashClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;
      
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element, { offset: 0, duration: 1.4 });
        }
      }
    };

    document.addEventListener("click", handleHashClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", handleHashClick);
    };
  }, [isPreloaderActive]);

  // Handle scroll detection for active section and progress indicator
  useEffect(() => {
    if (isPreloaderActive) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Calculate Scroll Progress Bar
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollProgress(progress);

      // Set CSS Variable for Parallax calculation
      container.style.setProperty("--scroll-top", `${scrollTop}px`);

      // Detect Active Section
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

      // Snap to last section if scrolled to bottom
      if (container.scrollHeight - container.scrollTop <= container.clientHeight + 50) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => container.removeEventListener("scroll", handleScroll);
  }, [isPreloaderActive]);

  return (
    <>
      {/* 1. Preloader Overlay */}
      <Preloader onComplete={() => setIsPreloaderActive(false)} />

      {/* 2. Custom Cursor for Desktop */}
      <CustomCursor />

      {/* 3. Global Scroll Progress Bar */}
      {!isPreloaderActive && (
        <motion.div 
          className="scroll-progress-bar" 
          style={{ scaleX: scrollProgress }} 
        />
      )}

      {/* 4. App Main Layout */}
      <div 
        className="app-layout" 
        ref={scrollContainerRef}
        style={{ visibility: isPreloaderActive ? "hidden" : "visible" }}
      >
        <div className="hero-area" id="hero">
          <Hero activeSection={activeSection} isLoaded={!isPreloaderActive} />
        </div>

        <Sidebar activeSection={activeSection} />
        
        <main className="content-column">
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
    </>
  );
}

export default App;
