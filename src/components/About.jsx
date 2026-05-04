import React from "react";

// About Component
// Contains introduction, statistics block, and services list
const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">ABOUT ME</h2>
      
      <p className="about-intro">I'm Sudip, an Engineering Student & Developer</p>
      
      <div className="about-desc">
        <p>
          I am passionate about building systems that reduce manual effort and increase productivity. 
          My work revolves around web development, automation, and problem-solving using modern technologies.
        </p>
        <br />
        <p>
          I enjoy turning ideas into working products—from concept to deployment. 
          Whether it’s developing a web app or designing an intelligent assistant, 
          I focus on functionality, clarity, and real-world impact.
        </p>
      </div>

      <div className="about-split-layout">
        
        {/* Left Column: Statistics Block */}
        <div className="about-stats-block">
          <div className="stat-cell stat-tl">
            <div className="stat-number">2+</div>
            <div className="stat-label">YEARS EXPERIENCE</div>
          </div>
          <div className="stat-cell stat-tr">
            <div className="stat-number">15+</div>
            <div className="stat-label">PROJECTS COMPLETED</div>
          </div>
          <div className="stat-cell stat-bl">
            <div className="stat-number">5+</div>
            <div className="stat-label">LIVE DEPLOYMENTS</div>
          </div>
          <div className="stat-cell stat-br">
            <div className="stat-number">100%</div>
            <div className="stat-label">LEARNING FOCUS</div>
          </div>
        </div>

        {/* Right Column: What I Do */}
        <div className="about-services-section">
          <h3 className="services-title">WHAT I DO?</h3>
          
          <div className="about-services-list">
            
            <div className="service-list-item">
              <div className="service-icon">
                {/* Pen tool / Design icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <div className="service-content">
                <h4>UI / UX DESIGN</h4>
                <p>Designing intuitive, user-friendly, and aesthetically pleasing interfaces focused on seamless experiences.</p>
              </div>
            </div>

            <div className="service-list-item">
              <div className="service-icon">
                {/* Web Code icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <div className="service-content">
                <h4>WEB DEVELOPMENT</h4>
                <p>Building responsive and scalable web applications using modern frameworks like React, Node.js, and MongoDB.</p>
              </div>
            </div>

            <div className="service-list-item">
              <div className="service-icon">
                {/* Automation / Cog icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="service-content">
                <h4>AUTOMATION SYSTEMS</h4>
                <p>Creating tools and bots that automate repetitive tasks like assignment handling, notifications, and workflows.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
