import React from "react";
import profileImg from "../assets/portfolio.jpeg";
import { motion } from "framer-motion";

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
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={isActive ? "active" : ""}
                style={{ position: "relative" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="active-pill-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="sidebar-social" aria-label="Social links">
          <motion.a 
            href="#" 
            aria-label="GitHub"
            whileHover={{ scale: 1.25, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            GH
          </motion.a>
          <motion.a 
            href="#" 
            aria-label="LinkedIn"
            whileHover={{ scale: 1.25, rotate: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            LI
          </motion.a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

