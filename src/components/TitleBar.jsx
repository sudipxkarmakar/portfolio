import React from "react";

const sectionTitles = {
  hero: "HOME",
  about: "ABOUT ME",
  resume: "RESUME",
  portfolio: "PORTFOLIO",
  testimonials: "TESTIMONIALS",
  contact: "CONTACT"
};

const TitleBar = ({ activeSection }) => {
  return (
    <header className="global-title-bar">
      <div className="title-box">
        <h2 className="section-title">{sectionTitles[activeSection] || "PORTFOLIO"}</h2>
      </div>
    </header>
  );
};

export default TitleBar;
