import React from 'react';

function ActualResearch() {
  return (
    <>
      <div 
        className="relative w-full h-[45vh] sm:h-[45vh] max-sm:h-[40vh] bg-center bg-cover bg-no-repeat flex justify-center items-center font-['Poppins',_Arial,_sans-serif]" 
        style={{ backgroundImage: "url('/images/sihsbuilding.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(139,0,0,0.7)] flex justify-center items-center px-5">
          {/* Heading */}
          <h1 className="text-white text-[1.8rem] sm:text-[2.3rem] md:text-[3rem] font-bold text-center tracking-[1px] sm:tracking-[2px] uppercase leading-[1.3] z-[2] drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)]">
            Our Research And Publications
          </h1>
        </div>
      </div>
    </>
  );
}

export default ActualResearch;