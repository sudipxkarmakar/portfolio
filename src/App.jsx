import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy logic to determine the active section
      const sections = ["hero", "about", "resume", "portfolio", "testimonials", "contact"];
      let currentSection = "hero";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on viewport height, triggering when section is in top half
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            currentSection = section;
            break;
          }
        }
      }
      
      // Handle the case where we hit the very bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
          currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      {/* Global Floating Right Nav Bar */}
      <div className="global-floating-nav">
        <a href="#hero" title="Home" className={activeSection === "hero" ? "active" : ""}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </a>
        <a href="#about" title="About" className={activeSection === "about" ? "active" : ""}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </a>
        <a href="#resume" title="Resume" className={activeSection === "resume" ? "active" : ""}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </a>
        <a href="#portfolio" title="Portfolio" className={activeSection === "portfolio" ? "active" : ""}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
        </a>
        <a href="#contact" title="Contact" className={activeSection === "contact" ? "active" : ""}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </div>

      {/* Hero Section is full width and has no left sidebar */}
      <Hero isScrolled={isScrolled} />

      {/* The rest of the content has the left sidebar */}
      <div className="content-with-sidebar">
        {/* Mobile Navigation Toggle Button */}
        <button className="mobile-nav-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? "✕" : "☰"}
        </button>

        {/* Sidebar Component */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isScrolled={isScrolled} activeSection={activeSection} />

        {/* Main Content Area */}
        <main className="main-content">
          <About />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
