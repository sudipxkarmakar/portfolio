import React from "react";
import profileImg from "../assets/portfolio.jpeg";
import { IconRail } from "./PanelShell";

const Hero = ({ activeSection }) => {
  return (
    <section id="hero" className="panel-section panel-section-hero">
      <div className="portfolio-panel hero-panel">
        <div className="hero-copy">
          <p className="hero-greeting">HI THERE!</p>
          <h1 className="hero-name">
            I'M <span>SUDIP</span>
          </h1>
          <h2 className="hero-role">Engineering Student | Problem Solver | Tech Enthusiast</h2>

          <p className="hero-intro">
            I build practical digital solutions that solve real-world problems.
            Currently an engineering student, I focus on developing scalable web applications
            and intelligent systems that simplify tasks and improve efficiency.
          </p>

          <a href="#about" className="btn">MORE ABOUT ME</a>
        </div>

        <div className="hero-photo">
          <img src={profileImg} alt="Sudip Karmakar portrait" />
        </div>

        <IconRail activeSection={activeSection} />
      </div>
    </section>
  );
};

export default Hero;
