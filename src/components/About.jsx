import React from "react";
import PanelShell from "./PanelShell";

const services = [
  {
    title: "UI / UX Design",
    text: "Designing clear interfaces with simple flows, sharp hierarchy, and practical user journeys.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 20h14M7 16 17.8 5.2a2 2 0 0 1 2.8 2.8L9.8 18.8 5 20l2-4Z" />
      </svg>
    )
  },
  {
    title: "Web Development",
    text: "Building responsive applications with React, Node.js, APIs, and clean front-end structure.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v14H4V5Zm0 4h16M9 9v10" />
      </svg>
    )
  },
  {
    title: "Automation Systems",
    text: "Creating tools that reduce repetitive academic and workflow tasks through useful automation.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.4-6.4-2.1 2.1M7.7 16.3l-2.1 2.1m12.8 0-2.1-2.1M7.7 7.7 5.6 5.6M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
      </svg>
    )
  }
];

const stats = [
  ["2+", "YEARS EXPERIENCE"],
  ["15+", "PROJECTS COMPLETED"],
  ["5+", "LIVE DEPLOYMENTS"],
  ["100%", "LEARNING FOCUS"]
];

const About = ({ activeSection }) => {
  return (
    <PanelShell id="about" activeSection={activeSection} size="large" className="about-panel">
      <h2 className="section-title">ABOUT ME</h2>

      <p className="about-intro">I'm Sudip, an Engineering Student & Developer</p>

      <p className="about-desc">
        I am passionate about building systems that reduce manual effort and increase productivity.
        My work revolves around web development, automation, and problem-solving using modern technologies.
        I enjoy turning ideas into working products from concept to deployment.
      </p>

      <div className="about-split-layout">
        <div className="about-stats-block">
          {stats.map(([number, label]) => (
            <div className="stat-cell" key={label}>
              <div className="stat-number">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="about-services-section">
          <h3 className="services-title">What I Do?</h3>

          <div className="about-services-list">
            {services.map((service) => (
              <div className="service-list-item" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PanelShell>
  );
};

export default About;
