import React, { useEffect, useState, useRef } from "react";
import PanelShell from "./PanelShell";
import { useInView, motion } from "framer-motion";
import { ScrollReveal, ClipReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

// --- CUSTOM SVG LOGOS ---
const JSLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#F7DF1E" d="M0 0h24v24H0z" />
    <path fill="#000" d="M19.467 19.34c.83 0 1.503-.314 1.956-.913.432-.573.578-1.398.578-2.61v-1.127H19.78v1.173c0 .546-.073.874-.216 1.05-.145.176-.412.26-.798.26-.39 0-.648-.124-.766-.37-.123-.245-.183-.672-.183-1.28v-4.004h-2.222v4.062c0 1.258.218 2.2.656 2.825.437.625 1.135.934 2.093.934zm-8.847 0c1.036 0 1.83-.343 2.378-1.026.545-.683.82-1.745.82-3.18v-5.618H11.6v5.823c0 .546-.073.872-.216 1.037-.144.167-.428.25-.853.25-.373 0-.613-.105-.72-.315-.107-.21-.16-.628-.16-1.256V9.516H7.429v5.992c0 1.283.214 2.2.643 2.8.43.6 1.11.9 2.05.9z" />
  </svg>
);

const HTML5Logo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#E34F26" d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" />
    <path fill="#EF652A" d="M12 2.2v19.6l6.8-2.2L20.2 4.1 12 2.2z" />
    <path fill="#FFF" d="M12 9.6H8.3l-.2-2.7h8.8l-.1-1.3H6.8l.6 7h8l-.3 3.6-3.1 1-3.1-1-.2-2.3H7.5l.3 3.5 4.2 1.3 4.2-1.3.4-4.8H12V9.6z" />
  </svg>
);

const CSS3Logo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#1572B6" d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" />
    <path fill="#33A9DC" d="M12 2.2v19.6l6.8-2.2L20.2 4.1 12 2.2z" />
    <path fill="#FFF" d="M12 9.6H6.8l.6 7 4.6 1.5 4.6-1.5.3-3.6H11.7v-1.3h5.3l.1-1.3h-5.4V9.6h5.5l.1-1.3H6.8l.2-2.7h10.4l-.1-1.3H6.8V4.3z" />
  </svg>
);

const SQLLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00BCF2" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23 23 20.46" width="20" height="20">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1.2" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const ViteLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
    <path fill="url(#vite-gradient-about-1)" d="M19.8 1.8 12 15.3 4.2 1.8c-.3-.5-.9-.6-1.3-.3-.4.3-.5.9-.2 1.3L11 20.2c.4.7 1.6.7 2 0L21.3 2.8c.3-.4.2-1-.2-1.3-.4-.3-1-.2-1.3.3z" />
    <path fill="url(#vite-gradient-about-2)" d="m16.5 1.5-4.5 9v3.5l3.5-6.5h2.5l-4 7.5L18 20.5l4.5-9.5c.3-.5.1-1.1-.4-1.3l-5.6-2.2z" />
    <defs>
      <linearGradient id="vite-gradient-about-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#41D1FF" />
        <stop offset="100%" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient id="vite-gradient-about-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8008" />
        <stop offset="100%" stopColor="#FFC837" />
      </linearGradient>
    </defs>
  </svg>
);

const FMLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M12 0l12 12H12zm0 12l12 12H12zm0 0H0L12 24z" fill="#FF007F" />
  </svg>
);

const LenisLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00FFCC" strokeWidth="2.2">
    <path strokeLinecap="round" d="M4 8c2.3 0 4.6 4 7 4s4.6-4 7-4 4.6 4 7 4" />
    <path strokeLinecap="round" d="M4 14c2.3 0 4.6 4 7 4s4.6-4 7-4 4.6 4 7 4" opacity="0.65" />
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#339933" d="M12 2.2L3.3 7.2v10L12 22.2l8.7-5v-10L12 2.2zm6.7 13.9l-6.7 3.8-6.7-3.8V8.3l6.7-3.8 6.7 3.8v7.8z" />
    <circle cx="12" cy="12" r="2.5" fill="#339933" />
  </svg>
);

const ExpressLogo = () => (
  <span style={{ fontSize: "0.85rem", fontWeight: "900", color: "#E0E0E0", letterSpacing: "-0.5px" }}>ex</span>
);

const MongoLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#47A248" d="M12 0C11.5 0 9 5 9 10c0 4.5 2.5 8 3 8s3-3.5 3-8c0-5-2.5-10-3-10zm0 18c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1z" />
  </svg>
);

const APILogo = () => (
  <span style={{ fontSize: "0.68rem", fontWeight: "900", color: "#38BDF8" }}>{`{...}`}</span>
);

const GHLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path fill="#FFF" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#F24E1E" d="M6 5C6 3.34 7.34 2 9 2h3v6H9C7.34 8 6 6.66 6 5z" />
    <path fill="#FF7262" d="M12 2h3c1.66 0 3 1.34 3 3s-1.34 3-3 3h-3V2z" />
    <path fill="#A259FF" d="M6 12c0-1.66 1.34-3 3-3h3v6H9c-1.66 0-3-1.34-3-3z" />
    <path fill="#1ABC9C" d="M12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3h-3V9z" />
    <path fill="#0ACF83" d="M6 19c0-1.66 1.34-3 3-3h3v3c0 1.66-1.34 3-3 3s-3-1.34-3-3z" />
  </svg>
);

const MSOfficeLogo = () => (
  <svg viewBox="0 0 23 23" width="20" height="20">
    <path fill="#F25022" d="M0 0h11v11H0z" />
    <path fill="#7FBA00" d="M12 0h11v11H12z" />
    <path fill="#01A6F0" d="M0 12h11v11H0z" />
    <path fill="#FFB900" d="M12 12h11v11H12z" />
  </svg>
);

const services = [
  {
    title: "UI UX",
    text: "Designing clear interfaces with simple flows, sharp hierarchy, and practical user journeys.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 20h14M7 16 17.8 5.2a2 2 0 0 1 2.8 2.8L9.8 18.8 5 20l2-4Z" />
      </svg>
    )
  },
  {
    title: "FRONTEND",
    text: "Building responsive applications with React, Node.js, APIs, and clean front-end structure.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v14H4V5Zm0 4h16M9 9v10" />
      </svg>
    )
  },
  {
    title: "AUTOMATION",
    text: "Creating tools that reduce repetitive academic and workflow tasks through useful automation.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.4-6.4-2.1 2.1M7.7 16.3l-2.1 2.1m12.8 0-2.1-2.1M7.7 7.7 5.6 5.6M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
      </svg>
    )
  }
];

const stats = [
  ["5+", "PROJECTS COMPLETED"],
  ["2+", "LIVE DEPLOYMENTS"],
  ["2+", "HAPPY CLIENTS"],
  ["7.87", "CGPA TILL DATE"]
];

const skillsCategories = [
  {
    title: "LANGUAGES",
    themeColor: "#F59E0B",
    themeColorGlow: "rgba(245, 158, 11, 0.08)",
    themeColorLight: "rgba(245, 158, 11, 0.15)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: "HTML5", desc: "Responsive Layouts", color: "#E34F26", logo: <HTML5Logo /> },
      { name: "CSS3", desc: "Responsive Style", color: "#E34F26", logo: <CSS3Logo /> },
      { name: "JavaScript", desc: "ES6+ Core Engine", color: "#F7DF1E", logo: <JSLogo /> },
      { name: "SQL Core", desc: "Relational Queries", color: "#00BCF2", logo: <SQLLogo /> }
    ]
  },
  {
    title: "FRONTEND TECH",
    themeColor: "#3B82F6",
    themeColorGlow: "rgba(59, 130, 246, 0.08)",
    themeColorLight: "rgba(59, 130, 246, 0.15)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: [
      { name: "React.js", desc: "SPA Component States", color: "#61DAFB", logo: <ReactLogo /> },
      { name: "Vite", desc: "Lightning Fast Builds", color: "#BD34FE", logo: <ViteLogo /> },
      { name: "Framer", desc: "Fluid UI Motion design", color: "#FF007F", logo: <FMLogo /> },
      { name: "Lenis", desc: "Buttery Scroll Inertia", color: "#00FFCC", logo: <LenisLogo /> }
    ]
  },
  {
    title: "BACKEND & DATABASE",
    themeColor: "#10B981",
    themeColorGlow: "rgba(16, 185, 129, 0.08)",
    themeColorLight: "rgba(16, 185, 129, 0.15)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: [
      { name: "Node.js", desc: "Async Event-Loop", color: "#339933", logo: <NodeLogo /> },
      { name: "Express.js", desc: "API Routing Middleware", color: "#E0E0E0", logo: <ExpressLogo /> },
      { name: "MongoDB ATLAS", desc: "Document BSON Storage", color: "#47A248", logo: <MongoLogo /> },
      { name: "RESTful APIs", desc: "JSON Endpoint Logic", color: "#38BDF8", logo: <APILogo /> }
    ]
  },
  {
    title: "TOOLS & UTILITIES",
    themeColor: "#8B5CF6",
    themeColorGlow: "rgba(139, 92, 246, 0.08)",
    themeColorLight: "rgba(139, 92, 246, 0.15)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: "Git & GitHub", desc: "Version Control", color: "#FFFFFF", logo: <GHLogo /> },
      { name: "Figma", desc: "High Fidelity Design", color: "#F24E1E", logo: <FigmaLogo /> },
      { name: "MS Office Suite", desc: "Word, Excel, PowerPoint", color: "#F25022", logo: <MSOfficeLogo /> }
    ]
  }
];

// Interactive Skill Row Component
const SkillRow = ({ logo, name, desc, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="skill-row-container"
      whileHover={{ x: 6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "10px 14px",
        borderRadius: "6px",
        background: "rgba(255, 255, 255, 0.45)",
        border: "1px solid rgba(23, 24, 28, 0.04)",
        cursor: "pointer",
        willChange: "transform, background-color, border-color, box-shadow",
      }}
      animate={{
        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.45)",
        borderColor: isHovered ? color : "rgba(23, 24, 28, 0.04)",
        boxShadow: isHovered ? `0 6px 18px ${color}12` : "none"
      }}
    >
      <div
        className="skill-row-logo"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          background: "rgba(23, 24, 28, 0.85)", // Dark backing for SVG visibility
          flexShrink: 0,
          marginRight: "14px",
          boxShadow: "0 3px 8px rgba(0, 0, 0, 0.06)",
          transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: isHovered ? "scale(1.08) rotate(8deg)" : "none"
        }}
      >
        {logo}
      </div>

      <div className="skill-row-info" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.86rem",
            fontWeight: "750",
            color: "var(--ink)",
            lineHeight: "1.2",
            transition: "color 0.2s ease"
          }}
          className={isHovered ? "highlighted-text" : ""}
        >
          {name}
        </span>
        {desc && (
          <span style={{ fontSize: "0.72rem", color: "var(--muted)", fontWeight: "500", marginTop: "2px" }}>
            {desc}
          </span>
        )}
      </div>
    </motion.div>
  );
};

// Helper component for count-up numbers triggered on scroll entry
const StatCounter = ({ value }) => {
  const [displayVal, setDisplayVal] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;

    const numericPart = parseFloat(value) || 0;
    const nonNumericPart = value.replace(/[0-9.]/g, ""); // Extracts "+", etc.
    const isFloat = value.includes(".");

    let current = 0;
    const duration = 1600; // 1.6 seconds animation
    const stepTime = 30; // ms per step
    const steps = duration / stepTime;
    const increment = numericPart / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericPart) {
        setDisplayVal(value);
        clearInterval(timer);
      } else {
        if (isFloat) {
          setDisplayVal(current.toFixed(2) + nonNumericPart);
        } else {
          setDisplayVal(Math.floor(current) + nonNumericPart);
        }
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div className="stat-number" ref={ref}>
      {displayVal}
    </div>
  );
};

const About = ({ activeSection }) => {
  return (
    <PanelShell id="about" activeSection={activeSection} size="large" className="about-panel">
      <ClipReveal>
        <h2 className="section-title">ABOUT ME</h2>
      </ClipReveal>

      <ScrollReveal delay={0.15}>
        <p className="about-intro">I'M SUDIP KARMAKAR</p>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <p className="about-desc">
          I am a Frontend Developer and UI/UX Designer dedicated to creating seamless digital experiences.
          With a focus on building efficient automation tools and modern interfaces, I aim to simplify workflows
          and deliver high-quality, user-centric web applications.
        </p>
      </ScrollReveal>

      <div className="about-split-layout">
        <StaggerContainer className="about-stats-block" staggerTime={0.08}>
          {stats.map(([number, label]) => (
            <StaggerItem className="stat-cell" key={label} variant="scale">
              <StatCounter value={number} />
              <div className="stat-label">{label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="about-services-section">
          <ScrollReveal>
            <h3 className="services-title">What I Do?</h3>
          </ScrollReveal>

          <StaggerContainer className="about-services-list" staggerTime={0.15}>
            {services.map((service) => (
              <StaggerItem className="service-list-item" key={service.title} variant="slideLeft">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Categorized Skills Showcase */}
      <div className="about-skills-section">
        <div className="skills-section-header">
          <ScrollReveal>
            <span className="skills-kicker">MY SKILLS</span>
            <h3 className="skills-showcase-title">TECHNICAL EXPERTISE</h3>
            <p className="skills-subtitle">
              Technologies and tools I use to bring ideas to life and build exceptional digital experiences.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="skills-grid" staggerTime={0.08} once={true}>
          {skillsCategories.map((cat) => (
            <StaggerItem
              className="skills-group"
              key={cat.title}
              variant="slideUp"
              style={{
                "--theme-color": cat.themeColor,
                "--theme-color-glow": `${cat.themeColor}15`,
                "--theme-color-faint": cat.themeColorLight
              }}
            >
              <div className="skills-group-header">
                <div className="skills-header-badge">
                  {cat.icon}
                </div>
                <div className="skills-header-copy">
                  <h4>{cat.title}</h4>
                  {/* Category dot tracers */}
                  <div className="skills-header-dots">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} style={{ backgroundColor: cat.themeColor }} />
                    ))}
                  </div>
                </div>
              </div>
              <ul>
                {cat.skills.map((skill) => (
                  <li key={skill.name} style={{ width: "100%" }}>
                    <SkillRow logo={skill.logo} name={skill.name} desc={skill.desc} color={skill.color} />
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </PanelShell>
  );
};

export default About;
