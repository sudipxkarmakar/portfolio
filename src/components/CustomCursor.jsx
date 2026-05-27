import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  // Position coordinates of mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    // Hide custom cursor on touch screens or mobile widths
    const checkDevice = () => {
      const touchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const smallScreen = window.innerWidth <= 1024;
      setIsMobileDevice(touchScreen || smallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobileDevice) return;

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    // Event delegation to detect hovers on links, buttons, and clickables
    const onMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".portfolio-item") ||
        target.closest(".filter-btn") ||
        target.closest(".contact-item") ||
        target.closest(".timeline-item") ||
        target.closest(".sidebar-portrait");
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [mouseX, mouseY, isVisible, isMobileDevice]);

  if (isMobileDevice) return null;

  return (
    <motion.div
      className={`custom-cursor-dot ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0
      }}
    />
  );
};

export default CustomCursor;

