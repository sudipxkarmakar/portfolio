import React from "react";
import profileImg from "../assets/portfolio.jpeg";
import { motion } from "framer-motion";
import { ClipReveal } from "./ScrollReveal";

const Hero = ({ activeSection, isLoaded }) => {
  return (
    <section id="hero" className="panel-section panel-section-hero">
      <div className="portfolio-panel hero-panel">
        <div 
          className="hero-copy"
          style={{ transform: "translateY(calc(var(--scroll-top, 0px) * -0.06))" }}
        >
          <div className="hero-greeting-wrapper" style={{ overflow: "hidden" }}>
            <motion.p 
              className="hero-greeting"
              initial={{ y: "115%" }}
              animate={isLoaded ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              HI THERE!
            </motion.p>
          </div>

          <h1 className="hero-name">
            <ClipReveal delay={0.2} duration={0.9} once={true}>
              I'M <span className="hero-name-outline">SUDIP</span>
            </ClipReveal>
          </h1>

          <div className="hero-role-wrapper" style={{ overflow: "hidden" }}>
            <motion.h2 
              className="hero-role"
              initial={{ y: "115%" }}
              animate={isLoaded ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              FRONT END DEVELOPER | UI/UX DESIGN | DATABASE
            </motion.h2>
          </div>

          <div className="hero-intro-wrapper" style={{ overflow: "hidden" }}>
            <motion.p 
              className="hero-intro"
              initial={{ y: "115%" }}
              animate={isLoaded ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              ON THE WAY TO COMPLETE YOUR DREAM PROJECT
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          >
            <a href="#about" className="btn">MORE ABOUT ME</a>
          </motion.div>
        </div>

        <div className="hero-photo">
          <motion.img 
            src={profileImg} 
            alt="Sudip Karmakar portrait" 
            initial={{ scale: 1.15, filter: "blur(10px)" }}
            animate={isLoaded ? { scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              transform: "translateY(calc(var(--scroll-top, 0px) * 0.15))",
              willChange: "transform, filter"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

