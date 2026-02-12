import React from "react";

const DepartmentsHero = () => {
  return (
    <section className="relative w-full h-[40vh] lg:h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image: Slightly desaturated and scaled for depth */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat grayscale-[20%] brightness-[0.6] transition-transform duration-1000"
        style={{
          backgroundImage: "url('/images/4.png')",
        }}
      />

      {/* Muted Overlay: Darkens the image without adding color tint */}
      <div className="absolute inset-0 bg-black/10 backdrop-brightness-90" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 mb-3 text-[10px] tracking-[0.2em] text-gray-300 uppercase border border-gray-500/50 rounded-sm">
          Institutional Overview
        </span>

        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold  animate-fadeIn">
          Our <span className="font-bold"> Departments</span>
        </h1>

        {/* Minimalist Breadcrumb */}
        <div className="mt-4 flex items-center justify-center space-x-3 text-gray-400 text-xs tracking-wide uppercase">
          <a
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <span className="w-1 h-1 bg-gray-500 rounded-full" />
          <span className="text-gray-200">Departments</span>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsHero;
