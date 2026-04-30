import React, { useState } from "react";

// Portfolio Component
// Displays a grid of projects with a filtering mechanism
const Portfolio = () => {
  const [filter, setFilter] = useState("ALL");

  // Sample project data based on the brief
  const projects = [
    {
      id: 1,
      title: "AI Assistant System",
      category: "AUTOMATION",
      desc: "A smart assistant designed to handle tasks like assignment generation, reminders, and workflow automation.",
      imgPlaceholder: "AI"
    },
    {
      id: 2,
      title: "College Portal System",
      category: "WEB DEVELOPMENT",
      desc: "A web-based platform for managing student activities, submissions, and communication efficiently.",
      imgPlaceholder: "PORTAL"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      category: "WEB DEVELOPMENT",
      desc: "A responsive portfolio showcasing projects, skills, and achievements with a clean UI design.",
      imgPlaceholder: "UI/UX"
    },
    {
      id: 4,
      title: "Task Automation Tool",
      category: "AUTOMATION",
      desc: "A system that reduces repetitive manual work by automating structured digital tasks.",
      imgPlaceholder: "BOT"
    }
  ];

  // Filter projects based on the active filter state
  const filteredProjects = filter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">PORTFOLIO</h2>
      
      {/* Filtering Buttons */}
      <div className="portfolio-filters">
        {["ALL", "WEB DEVELOPMENT", "AUTOMATION", "PROJECTS"].map(category => (
          <button 
            key={category}
            className={`filter-btn ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div className="portfolio-item" key={project.id}>
            {/* Placeholder Image Box */}
            <div className="portfolio-img">
              {project.imgPlaceholder}
            </div>
            
            {/* Project Details */}
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
