import React from "react";
import PanelShell from "./PanelShell";

const contactItems = [
  {
    label: "Email",
    value: "yourmail@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h18v14H3V5Zm2 2.4V17h14V7.4l-7 5-7-5Z" />
      </svg>
    )
  },
  {
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10v18H7V3Zm2 2v14h6V5H9Zm2 11h2v1.5h-2V16Z" />
      </svg>
    )
  },
  {
    label: "Location",
    value: "India",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z" />
      </svg>
    )
  }
];

const Contact = ({ activeSection }) => {
  return (
    <PanelShell id="contact" activeSection={activeSection} size="compact" className="contact-panel">
      <h2 className="section-title compact-title">CONTACT</h2>

      <p className="contact-text">
        Feel free to contact me for collaboration, projects, or any technical discussion.
      </p>

      <div className="contact-details">
        {contactItems.map((item) => (
          <article className="contact-item" key={item.label}>
            <div className="contact-icon">{item.icon}</div>
            <p className="contact-label">{item.label}</p>
            <p className="contact-value">{item.value}</p>
          </article>
        ))}
      </div>

      <h3 className="thanks-text">THANKS FOR VISITING</h3>
    </PanelShell>
  );
};

export default Contact;
