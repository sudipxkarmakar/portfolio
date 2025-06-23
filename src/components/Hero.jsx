import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white text-center relative px-4 overflow-hidden">
      {/* Galaxy Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-800 via-black to-black opacity-70 z-0"></div>

      {/* Main Content */}
      <div className="z-10 animate-fade-in-down">
        <h1
          className="text-4xl md:text-6xl font-bold font-[Orbitron] glitch-effect"
          data-text="Sudip Karmakar"
        >
          Sudip Karmakar
        </h1>

        <p className="mt-4 text-lg md:text-2xl font-light typing-text">
          Full Stack Learner | Creative Coder
        </p>

        <div className="mt-6">
          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-md shadow-md transition-transform hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Dummy utility forcing Tailwind to include hover/background in build */}
      <div className="hidden bg-indigo-600 bg-indigo-700 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-105"></div>
    </section>
  );
};

export default Hero;
