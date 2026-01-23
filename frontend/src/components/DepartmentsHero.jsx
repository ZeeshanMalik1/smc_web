import React from 'react';

function DepartmentsHero() {
  return (
    <>
      <div
        className="relative w-full h-[50vh] lg:h-[40vh] sm:h-[35vh] bg-center bg-cover bg-no-repeat flex justify-center items-center overflow-hidden"
        style={{ backgroundImage: "url('/images/sihsbuilding.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#8b0000]/70 flex justify-center items-center animate-fadeIn">
          <h1 className="relative text-white text-[clamp(28px,6vw,64px)] text-center font-bold tracking-wider animate-slideDown">
            Our Departments
          </h1>
        </div>
      </div>
    </>
  );
}

export default DepartmentsHero;
