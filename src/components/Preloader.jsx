import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Progress counter animation from 0 to 100
    const duration = 1800; // 1.8 seconds loading simulation
    const intervalTime = 25;
    const totalSteps = duration / intervalTime;
    const stepIncrement = 100 / totalSteps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += stepIncrement;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        
        // Wait at 100% for a cinematic beat
        setTimeout(() => {
          setIsFinished(true);
          // Wait for the exit wipe transition to finish
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1100);
        }, 300);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Split name for staggered trail-blur text reveal
  const firstNameLetters = "SUDIP".split("");
  const lastNameLetters = "KARMAKAR".split("");

  return (
    <AnimatePresence>
      {!isFinished && (
        <div className="preloader-overlay">
          {/* Motion Layered Exit Wipes (Yellow trails behind Grey by 10-15%) */}
          <motion.div
            className="preloader-wipe-panel wipe-yellow"
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          />
          <motion.div
            className="preloader-wipe-panel wipe-grey"
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />
          <motion.div
            className="preloader-wipe-panel wipe-black"
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0 }}
          />

          {/* Loading Content */}
          <motion.div
            className="preloader-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {/* Cinematic Radial Backdrop Glow & Noise Overlay */}
            <div className="preloader-backdrop-glow" />
            <div className="preloader-noise" />

            <div className="preloader-text-group">
              <div className="preloader-name-container">
                {/* FIRST NAME STAGGER */}
                <span className="preloader-word-block">
                  {firstNameLetters.map((char, index) => (
                    <motion.span
                      key={`first-${index}`}
                      className="preloader-char"
                      initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.04,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>

                <span className="preloader-word-space" />

                {/* SURNAME STAGGER (delayed by 120ms relative to first name) */}
                <span className="preloader-word-block">
                  {lastNameLetters.map((char, index) => (
                    <motion.span
                      key={`last-${index}`}
                      className="preloader-char"
                      initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.12 + index * 0.04,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </div>

              <div className="preloader-subtitle-mask">
                <motion.p
                  className="preloader-subtitle"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  CREATIVE FRONTEND • UI/UX DESIGN • AUTOMATION
                </motion.p>
              </div>
            </div>

            <div className="preloader-progress-section">
              <div className="preloader-counter-row">
                <span className="preloader-loading-label">ESTABLISHING CONNECTION</span>
                <span className="preloader-percentage">[ {String(progress).padStart(3, "0")}% ]</span>
              </div>
              <div className="preloader-progress-track">
                <motion.div
                  className="preloader-progress-bar"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
