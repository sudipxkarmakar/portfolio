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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled past 100px, trigger the animation
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      {/* Hero Section is full width and has no left sidebar */}
      <Hero isScrolled={isScrolled} />

      {/* The rest of the content has the left sidebar */}
      <div className="content-with-sidebar">
        {/* Mobile Navigation Toggle Button */}
        <button className="mobile-nav-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? "✕" : "☰"}
        </button>

        {/* Sidebar Component */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isScrolled={isScrolled} />

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
