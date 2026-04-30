import React from "react";

// About Component
// Contains introduction, statistics grid, and services/skills provided
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

      {/* Statistics Grid */}
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">2+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">Live Deployments</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Learning Focus</div>
        </div>
      </div>

      {/* What I Do Section */}
      <h3 className="section-title" style={{ fontSize: "2rem", marginBottom: "2rem" }}>WHAT I DO</h3>
      
      <div className="what-i-do-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Building responsive and scalable web applications using modern frameworks like React, Node.js, and MongoDB.</p>
        </div>
        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>Designing intuitive, user-friendly, and aesthetically pleasing interfaces focused on seamless user experiences.</p>
        </div>
        <div className="service-card">
          <h3>Automation Systems</h3>
          <p>Creating tools and bots that automate repetitive tasks like assignment handling, notifications, and workflows.</p>
        </div>
        <div className="service-card">
          <h3>Problem Solving</h3>
          <p>Breaking down complex problems into structured solutions using logic, algorithms, and efficient system design.</p>
        </div>
        <div className="service-card">
          <h3>Arts and Crafts</h3>
          <p>Bringing creativity into reality through hands-on arts and crafts, enhancing my eye for detailed design.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
