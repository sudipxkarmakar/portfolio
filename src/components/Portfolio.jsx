import React, { useState } from "react";
import PanelShell from "./PanelShell";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, ClipReveal } from "./ScrollReveal";
import titanImg from "../assets/titan.png";
import campusCareImg from "../assets/CampusCare.png";
import alokaImg from "../assets/AlokaFastFood.png";

const projects = [
  {
    id: 1,
    title: "Titan Gasket Finder",
    category: "CLIENT WORK",
    desc: "Advanced search and filtering system for industrial gaskets.",
    visual: "assistant",
    image: titanImg,
    stack: "React, Node.js, Custom Search Logic",
    detail: "A specialized search and selection web tool designed to help clients match, filter, and order exact gasket specifications based on industrial dimension criteria.",
    link: "https://sudipxkarmakar.github.io/titan/"
  },
  {
    id: 2,
    title: "Aloka Fast Food",
    category: "CLIENT WORK",
    desc: "Operational dashboard for table bookings, order tracking, and inventory.",
    visual: "portal",
    image: alokaImg,
    label: "Live",
    stack: "React, Node.js, MongoDB",
    detail: "A real-time restaurant operations system that tracks orders, kitchen queues, table allocations, and stock inventory levels from a single admin screen.",
    link: "https://github.com/sudipxkarmakar/AlokaFastFood/"
  },
  {
    id: 3,
    title: "Campus Care",
    category: "PERSONAL PROJECTS",
    desc: "AI-automated college portal for submissions, queries, and schedules.",
    visual: "portfolio",
    image: campusCareImg,
    stack: "React, Node.js, AI APIs",
    detail: "An AI-powered academic dashboard that automates assignment reminders, answers student queries, and schedules college tasks, reducing manual coordination effort.",
    link: "https://sudipxkarmakar.github.io/CampusCare/"
  },
  {
    id: 4,
    title: "Handmade E-Commerce",
    category: "PERSONAL PROJECTS",
    desc: "E-commerce platform for listing and selling personal items.",
    visual: "automation",
    label: "Code",
    stack: "React, Express, MongoDB, Payment Gateway",
    detail: "A fully functional e-commerce application designed to catalog, display, and sell personal projects and merchandise, complete with cart logic and checkout integration.",
    link: "https://github.com/sudipxkarmakar/handmade-ecommerce/"
  }
];

const filters = ["ALL", "CLIENT WORK", "PERSONAL PROJECTS"];

const MockupThumb = ({ visual, title, image }) => (
  <div className={`mockup-thumb mockup-${visual}`} aria-label={`${title} preview`}>
    {image ? (
      <div className="browser-card-full">
        <div className="browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-image-container">
          <img src={image} className="browser-image" alt={title} />
        </div>
      </div>
    ) : (
      <>
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
      </>
    )}
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
      <ClipReveal>
        <h2 className="section-title">PORTFOLIO</h2>
      </ClipReveal>

      <ScrollReveal delay={0.1}>
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
      </ScrollReveal>

      <motion.div layout className="portfolio-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: idx * 0.08
                }
              }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              viewport={{ once: true }}
              className="portfolio-item"
              key={project.id}
            >
              <MockupThumb visual={project.visual} title={project.title} image={project.image} />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button type="button" className="project-link" onClick={() => setSelectedProject(project)}>
                    Details
                  </button>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-outline-link"
                    >
                      {project.label ?? (project.link.includes("github.com") ? "Code" : "Live")}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal-card"
              initial={{ scale: 0.88, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                x
              </button>
              <MockupThumb visual={selectedProject.visual} title={selectedProject.title} image={selectedProject.image} />
              <p className="modal-kicker">{selectedProject.category}</p>
              <h3 id="project-modal-title">{selectedProject.title}</h3>
              <p>{selectedProject.detail}</p>
              <p className="modal-stack">{selectedProject.stack}</p>
              {selectedProject.link && (
                <div style={{ marginTop: "24px" }}>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {selectedProject.label === "Live" ? "Visit Live Site" : selectedProject.label === "Code" ? "View GitHub Repo" : selectedProject.link.includes("github.com") ? "View GitHub Repo" : "Visit Live Site"}
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PanelShell>
  );
};

export default Portfolio;

