import React, { useState } from "react";
import PanelShell from "./PanelShell";

const projects = [
  {
    id: 1,
    title: "AI Assistant System",
    category: "AUTOMATION",
    desc: "Assignment generation, reminders, and workflow automation.",
    visual: "assistant",
    stack: "React, Node.js, workflow logic",
    detail: "A smart assistant concept for handling assignment generation, reminders, and repetitive student workflow tasks."
  },
  {
    id: 2,
    title: "College Portal System",
    category: "WEB DEVELOPMENT",
    desc: "Student submissions, communication, and activity management.",
    visual: "portal",
    stack: "React, Express, MongoDB",
    detail: "A web portal structure for managing student activities, submissions, and communication from one clean dashboard."
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "WEB DEVELOPMENT",
    desc: "Responsive portfolio with sharp visual hierarchy.",
    visual: "portfolio",
    stack: "React, Vite, CSS",
    detail: "A full-screen portfolio experience with strong typography, yellow accent navigation, and responsive project sections."
  },
  {
    id: 4,
    title: "Task Automation Tool",
    category: "AUTOMATION",
    desc: "Structured digital tasks reduced through simple automation.",
    visual: "automation",
    stack: "JavaScript, APIs, automation flows",
    detail: "A tool concept for reducing manual effort by automating structured digital actions and repeated workflows."
  }
];

const filters = ["ALL", "WEB DEVELOPMENT", "AUTOMATION"];

const MockupThumb = ({ visual, title }) => (
  <div className={`mockup-thumb mockup-${visual}`} aria-label={`${title} preview`}>
    <span className="mockup-dot dot-one" />
    <span className="mockup-dot dot-two" />
    <span className="mockup-dot dot-three" />
    <div className="browser-card">
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="browser-content">
        <span className="mock-line wide" />
        <span className="mock-line" />
        <span className="mock-line short" />
        <span className="mock-button" />
      </div>
    </div>
  </div>
);

const Portfolio = ({ activeSection }) => {
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === "ALL"
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <PanelShell id="portfolio" activeSection={activeSection} size="large" className="portfolio-panel-layout">
      <h2 className="section-title">PORTFOLIO</h2>

      <div className="portfolio-filters">
        {filters.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <article className="portfolio-item" key={project.id}>
            <MockupThumb visual={project.visual} title={project.title} />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <button type="button" className="project-link" onClick={() => setSelectedProject(project)}>
                View details
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <div className="project-modal-card">
            <button
              type="button"
              className="modal-close"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              x
            </button>
            <MockupThumb visual={selectedProject.visual} title={selectedProject.title} />
            <p className="modal-kicker">{selectedProject.category}</p>
            <h3 id="project-modal-title">{selectedProject.title}</h3>
            <p>{selectedProject.detail}</p>
            <p className="modal-stack">{selectedProject.stack}</p>
          </div>
        </div>
      )}
    </PanelShell>
  );
};

export default Portfolio;
