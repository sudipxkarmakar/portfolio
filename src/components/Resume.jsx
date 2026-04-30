import React from "react";

// Resume Component
// Displays education and experience timelines, plus technical and core skills
const Resume = () => {
  return (
    <section id="resume" className="section">
      <h2 className="section-title">RESUME</h2>
      
      <div className="resume-container">
        
        {/* Education Timeline */}
        <div className="resume-column">
          <h3>Education</h3>
          
          <div className="timeline-item">
            <div className="timeline-date">2022 – Present</div>
            <div className="timeline-title">B.Tech in Engineering</div>
            <div className="timeline-subtitle">[Your College Name]</div>
            <p>Focus: Software Development, Data Structures, System Design, Automation.</p>
          </div>
          
          {/* Add more education items here if needed */}
        </div>

        {/* Experience Timeline */}
        <div className="resume-column">
          <h3>Experience</h3>
          
          <div className="timeline-item">
            <div className="timeline-date">2023 – Present</div>
            <div className="timeline-title">Self-Driven Projects & Development</div>
            <div className="timeline-subtitle">Independent Developer</div>
            <p>
              • Built multiple web-based applications using MERN stack.<br/>
              • Developed automation concepts for academic workflows.<br/>
              • Practiced real-world deployment and debugging.
            </p>
          </div>
          
          {/* Add more experience items here if needed */}
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-wrapper">
        <h3 className="section-title" style={{ fontSize: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>SKILLS</h3>
        
        <div className="skill-category">
          <h4>Technical Skills</h4>
          <div className="skill-tags">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">HTML & CSS</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">REST APIs</span>
          </div>
        </div>

        <div className="skill-category">
          <h4>Design & Creative</h4>
          <div className="skill-tags">
            <span className="skill-tag">UI / UX Design</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Prototyping</span>
            <span className="skill-tag">Arts & Crafts</span>
          </div>
        </div>

        <div className="skill-category">
          <h4>Core Skills</h4>
          <div className="skill-tags">
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Logical Thinking</span>
            <span className="skill-tag">System Design Basics</span>
            <span className="skill-tag">Automation Workflows</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
