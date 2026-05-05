import React from "react";
import Sidebar from "./Sidebar";

const navItems = [
  {
    id: "hero",
    title: "Home",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11.2 12 4l9 7.2v8.3a1 1 0 0 1-1 1h-5.2v-6h-5.6v6H4a1 1 0 0 1-1-1v-8.3Z" />
      </svg>
    )
  },
  {
    id: "about",
    title: "About",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12.4a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Zm-7.5 7.1c.7-3.8 3.3-5.7 7.5-5.7s6.8 1.9 7.5 5.7H4.5Z" />
      </svg>
    )
  },
  {
    id: "resume",
    title: "Resume",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h8l4 4v14H6V3Zm7 1.8V8h3.2L13 4.8ZM8.4 11h7.2v1.7H8.4V11Zm0 3.4h7.2V16H8.4v-1.6Zm0 3.3h5.3v1.6H8.4v-1.6Z" />
      </svg>
    )
  },
  {
    id: "portfolio",
    title: "Portfolio",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5V3.5h8V5h4v15H4V5h4Zm1.8 0h4.4v-.8H9.8V5Zm-4 4v9.2h12.4V9H5.8Z" />
      </svg>
    )
  },
  {
    id: "testimonials",
    title: "Testimonials",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v11H8.6L4 20V5Zm4 4.2v1.6h8V9.2H8Zm0 3.1v1.6h5.8v-1.6H8Z" />
      </svg>
    )
  },
  {
    id: "contact",
    title: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h18v14H3V5Zm2 2.4V17h14V7.4l-7 5-7-5Zm1.4-.7 5.6 4 5.6-4H6.4Z" />
      </svg>
    )
  }
];

export const IconRail = ({ activeSection }) => (
  <nav className="panel-icon-rail" aria-label="Section shortcuts">
    {navItems.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        title={item.title}
        aria-label={item.title}
        className={activeSection === item.id ? "active" : ""}
      >
        {item.icon}
      </a>
    ))}
  </nav>
);

const PanelShell = ({ id, activeSection, children, size = "large", className = "" }) => (
  <section id={id} className={`panel-section panel-section-${size}`}>
    <div className={`portfolio-panel panel-with-sidebar ${className}`.trim()}>
      <Sidebar activeSection={activeSection} />
      <div className="panel-body">{children}</div>
      <IconRail activeSection={activeSection} />
    </div>
  </section>
);

export default PanelShell;
