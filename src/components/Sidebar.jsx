import React from "react";
import profileImg from "../assets/portfolio.jpeg";

const links = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT ME" },
  { id: "resume", label: "RESUME" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "testimonials", label: "TESTIMONIALS" },
  { id: "contact", label: "CONTACT" }
];

const Sidebar = ({ activeSection }) => {
  return (
    <aside className="panel-sidebar" aria-label="Portfolio sections">
      <img src={profileImg} alt="Sudip Karmakar" className="sidebar-portrait" />

      <div className="sidebar-content">
        <div className="sidebar-mark" aria-hidden="true">
          <span />
        </div>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-social" aria-label="Social links">
          <a href="#" aria-label="GitHub">GH</a>
          <a href="#" aria-label="LinkedIn">LI</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
