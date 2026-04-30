import React from "react";

// Sidebar Component
// Handles the left sticky navigation and mobile menu
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      {/* Profile Section */}
      <div className="sidebar-profile">
        {/* Placeholder image for Profile Picture */}
        <img src="https://via.placeholder.com/150/111111/f4bc34?text=SK" alt="Sudip Karmakar" />
        <h2>SUDIP KARMAKAR</h2>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#hero" onClick={toggleSidebar}>HOME</a></li>
          <li><a href="#about" onClick={toggleSidebar}>ABOUT ME</a></li>
          <li><a href="#resume" onClick={toggleSidebar}>RESUME</a></li>
          <li><a href="#portfolio" onClick={toggleSidebar}>PORTFOLIO</a></li>
          <li><a href="#testimonials" onClick={toggleSidebar}>TESTIMONIALS</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>CONTACT</a></li>
        </ul>
      </nav>

      {/* Social Media Links (Placeholders) */}
      <div className="sidebar-social">
        <a href="#" target="_blank" rel="noopener noreferrer">GH</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LI</a>
        <a href="#" target="_blank" rel="noopener noreferrer">TW</a>
      </div>
    </aside>
  );
};

export default Sidebar;
