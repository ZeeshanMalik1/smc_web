import React from "react";

function Affiliation() {
  return (
    <section className="bg-gradient-to-br from-white to-[#f7f7f7] py-[70px] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto text-center px-[16px]">
        <h2 className="text-[2.3rem] font-extrabold text-[#8B0000] relative inline-block tracking-[1px] uppercase mb-10 after:content-[''] after:block after:w-[90px] after:h-[5px] after:bg-[#8B0000] after:mx-auto after:mt-3 after:rounded-[3px] after:animate-underlineAnim max-[992px]:text-[2.2rem] max-[768px]:text-[2rem] max-[576px]:text-[1.8rem]">
          Affiliation & Recognition
        </h2>
      </div>

      <div className="overflow-hidden whitespace-nowrap relative py-[25px] group">
        <div className="flex items-center animate-scrollLogos will-change-transform group-hover:[animation-play-state:paused]">
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((n, i) => (
            <img
              key={i}
              src={`/images/logo${n}.${n === 1 || n === 3 ? 'webp' : 'png'}`}
              alt="Logo"
              className="h-[110px] mx-[28px] opacity-80 transition-all duration-400 grayscale-[20%] hover:scale-[1.15] hover:opacity-100 hover:grayscale-0 max-[992px]:h-20 max-[992px]:mx-[22px] max-[768px]:h-[65px] max-[768px]:mx-[18px] max-[576px]:h-[50px] max-[576px]:mx-[14px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Affiliation;
