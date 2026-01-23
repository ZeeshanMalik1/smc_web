import React from 'react';

function AddmitionCimg() {
  return (
    <>
      <div 
        className="relative w-full h-[50vh] lg:h-[40vh] sm:h-[35vh] bg-center bg-cover bg-no-repeat flex justify-center items-center overflow-hidden" 
        style={{ backgroundImage: "url('/images/sihsbuilding.jpg')" }}
      >
        {/* Overlay with rgba(139, 0, 0, 0.7) - mapped to bg-red-900/70 */}
        <div className="absolute inset-0 bg-[#8b0000]/70 flex justify-center items-center animate-fade-in">
          <h1 className="relative text-white font-bold tracking-tight text-center 
                         text-[clamp(28px,6vw,64px)] sm:text-[clamp(22px,6vw,32px)]
                         animate-slide-up lg:-top-2.5 sm:-top-1.25 sm:px-2.5">
            Admission Criteria
          </h1>
        </div>
      </div>
    </>
  );
}

export default AddmitionCimg;