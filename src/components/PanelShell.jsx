import React from "react";

const PanelShell = ({ id, activeSection, children, size = "large", className = "" }) => (
  <section id={id} className={`panel-section panel-section-${size} ${className}`.trim()}>
    <div className="portfolio-panel">
      <div className="panel-body">{children}</div>
    </div>
  </section>
);

export default PanelShell;
