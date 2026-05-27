import React, { useRef } from "react";
import PanelShell from "./PanelShell";
import { useInView } from "framer-motion";
import { ScrollReveal, ClipReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const Resume = ({ activeSection }) => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.15 });

  return (
    <PanelShell id="resume" activeSection={activeSection} size="compact" className="resume-panel">
      <ClipReveal>
        <h2 className="section-title compact-title">RESUME</h2>
      </ClipReveal>

      <div className="resume-container" ref={timelineRef}>
        {/* Education Column */}
        <div className="resume-column">
          <ScrollReveal delay={0.1}>
            <h3>Education</h3>
          </ScrollReveal>
          
          <div className="timeline-column">
            {/* Dynamic Growing Line */}
            <div className="timeline-grow-line-container">
              <div 
                className="timeline-grow-line" 
                style={{ height: isTimelineInView ? "100%" : "0%" }}
              />
            </div>

            <StaggerContainer staggerTime={0.15} once={true}>
              <StaggerItem className="timeline-item" variant="slideRight">
                <span className="timeline-date">2022 - Present</span>
                <h4 className="timeline-title">B.Tech (Final Year)</h4>
                <p className="timeline-subtitle">Asansol Engineering College</p>
                <p>Currently pursuing B.Tech engineering with a cumulative grade of 7.87 CGPA till date.</p>
              </StaggerItem>

              <StaggerItem className="timeline-item" variant="slideRight">
                <span className="timeline-date">2020 - 2022</span>
                <h4 className="timeline-title">12th Grade</h4>
                <p className="timeline-subtitle">Asansol Chelidanga High School</p>
                <p>Completed higher secondary education with a score of 83%.</p>
              </StaggerItem>

              <StaggerItem className="timeline-item" variant="slideRight">
                <span className="timeline-date">2020</span>
                <h4 className="timeline-title">10th Grade</h4>
                <p className="timeline-subtitle">Asansol Chelidanga High School</p>
                <p>Completed secondary education with a score of 83%.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Experience Column */}
        <div className="resume-column">
          <ScrollReveal delay={0.1}>
            <h3>Experience</h3>
          </ScrollReveal>
          
          <div className="timeline-column">
            {/* Dynamic Growing Line */}
            <div className="timeline-grow-line-container">
              <div 
                className="timeline-grow-line" 
                style={{ height: isTimelineInView ? "100%" : "0%" }}
              />
            </div>

            <StaggerContainer staggerTime={0.2} once={true}>
              <StaggerItem className="timeline-item" variant="slideLeft">
                <span className="timeline-date">Continuous</span>
                <h4 className="timeline-title">Worked on Personal Projects </h4>
                <p className="timeline-subtitle">Independent Developer & Designer</p>
                <p>No professional experience. Focused heavily on building full-stack web platforms, custom client integrations, UI/UX mockups, and automation scripts.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </PanelShell>
  );
};

export default Resume;


