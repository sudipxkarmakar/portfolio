import React from "react";
import profileImg from "../assets/portfolio.jpeg";

// Hero Component
// Landing section with a split layout and a floating right-side icon bar
const Hero = ({ isScrolled }) => {
  return (
    <section id="hero" className="hero-section">
      {/* Left Text Content */}
      <div className="hero-content">
        <p className="hero-greeting">HI THERE!</p>
        <h1 className="hero-name">I'M <span>SUDIP</span></h1>
        <h2 className="hero-role">Engineering Student | Problem Solver | Tech Enthusiast</h2>
        
        <p className="hero-intro">
          I build practical digital solutions that solve real-world problems.
          Currently an engineering student, I focus on developing scalable web applications and intelligent systems that simplify tasks and improve efficiency.
        </p>
        
        {/* Call to action button */}
        <a href="#about" className="btn">MORE ABOUT ME</a>
      </div>

      {/* Right Image Content */}
      <div className="hero-image">
        {/* Actual image for the Hero Section. Static now. */}
        <img src={profileImg} alt="Sudip's Portrait" />
      </div>

      {/* Floating Right Icon Navigation Bar */}
      <div className="hero-floating-nav">
        <a href="#hero" title="Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </a>
        <a href="#about" title="About">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </a>
        <a href="#resume" title="Resume">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </a>
        <a href="#portfolio" title="Portfolio">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </a>
        <a href="#contact" title="Contact">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
