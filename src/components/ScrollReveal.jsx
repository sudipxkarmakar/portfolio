import React from "react";
import { motion } from "framer-motion";

// Helper for basic scroll entry reveals
export const ScrollReveal = ({
  children,
  variant = "slideUp", // slideUp, slideDown, slideLeft, slideRight, scale, fade
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  className = "",
  once = true,
  style = {}
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: variant === "slideUp" ? 50 : variant === "slideDown" ? -50 : 0,
      x: variant === "slideLeft" ? 50 : variant === "slideRight" ? -50 : 0,
      scale: variant === "scale" ? 0.92 : 1,
      skewY: variant === "slideUp" ? 2 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      skewY: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom premium cubic bezier (out-expo style)
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// Premium mask reveal for headings (using CSS clip-path to slide text up from clipping bounds)
export const ClipReveal = ({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
  once = true,
  style = {}
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: "115%",
      skewY: 5
    },
    visible: {
      y: "0%",
      skewY: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className={`clip-reveal-container ${className}`} style={{ overflow: "hidden", ...style }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        variants={containerVariants}
        style={{ display: "inline-block", width: "100%" }}
      >
        <motion.span
          variants={itemVariants}
          style={{ display: "inline-block", width: "100%", originY: 1 }}
        >
          {children}
        </motion.span>
      </motion.div>
    </div>
  );
};

// Wrapper to stagger its children
export const StaggerContainer = ({
  children,
  delay = 0,
  staggerTime = 0.1,
  className = "",
  once = true,
  threshold = 0.1,
  style = {}
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerTime,
        delayChildren: delay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={containerVariants}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// A stagger item to be placed inside StaggerContainer
export const StaggerItem = ({
  children,
  variant = "slideUp",
  duration = 0.8,
  className = "",
  style = {}
}) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: variant === "slideUp" ? 40 : variant === "slideDown" ? -40 : 0,
      x: variant === "slideLeft" ? 40 : variant === "slideRight" ? -40 : 0,
      scale: variant === "scale" ? 0.95 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div className={className} variants={itemVariants} style={style}>
      {children}
    </motion.div>
  );
};

