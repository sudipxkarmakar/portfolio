import React from "react";
import PanelShell from "./PanelShell";

const Resume = ({ activeSection }) => {
  return (
    <PanelShell id="resume" activeSection={activeSection} size="compact" className="resume-panel">
      <h2 className="section-title compact-title">RESUME</h2>

      <div className="resume-container">
        <div className="resume-column">
          <h3>Education</h3>
          <div className="timeline-item">
            <span className="timeline-date">2022 - Present</span>
            <h4 className="timeline-title">B.Tech in Engineering</h4>
            <p className="timeline-subtitle">Your College Name</p>
            <p>Software development, data structures, system design, and automation fundamentals.</p>
          </div>
        </div>

        <div className="resume-column">
          <h3>Experience</h3>
          <div className="timeline-item">
            <span className="timeline-date">2023 - Present</span>
            <h4 className="timeline-title">Self-Driven Projects</h4>
            <p className="timeline-subtitle">Independent Developer</p>
            <p>Built MERN apps, automation concepts, and deployment-ready portfolio work.</p>
          </div>
        </div>
      </div>

      <div className="skills-wrapper">
        <h3>Skills</h3>
        <div className="skill-tags">
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>REST APIs</span>
          <span>Git</span>
          <span>Figma</span>
        </div>
      </div>
    </PanelShell>
  );
};

export default Resume;
