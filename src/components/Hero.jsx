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

    </section>
  );
};

export default Hero;
