import React from "react";

// Contact Component
// Displays contact information and a closing message
const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">CONTACT</h2>
      
      <div className="contact-container">
        <p className="contact-text">
          Feel free to contact me for collaboration, projects, or any technical discussion.
        </p>

        {/* Contact Information Grid */}
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-value">yourmail@gmail.com</div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-value">+91 XXXXX XXXXX</div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-value">India</div>
          </div>
        </div>

        {/* Closing Line */}
        <h3 className="thanks-text">THANKS FOR VISITING</h3>
      </div>
    </section>
  );
};

export default Contact;
