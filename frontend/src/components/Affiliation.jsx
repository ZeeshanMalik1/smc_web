import React from "react";

function Affiliation() {
  const logos = [1, 2, 3, 4, 1, 2, 3, 4];

  return (
    <section className="bg-white py-20 overflow-hidden relative">
      <style>
        {`
          @keyframes scroll-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .lightspeed-track {
            display: flex;
            width: max-content;
            animation: scroll-fast 20s linear infinite;
          }
        `}
      </style>

      {/* Distance increased from mb-14 to mb-24 */}
      <div className="max-w-[1600px] mx-auto text-center px-4 mb-48">
        <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
          Global <span className="text-[#8B0000]">Affiliations</span>
        </h2>
        <div className="h-1 w-24 bg-[#8B0000] mt-4 mx-auto rounded-full"></div>
      </div>

      <div
        className="relative w-full overflow-hidden 
        before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent 
        after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent"
      >
        <div className="lightspeed-track group hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((n, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-4
                         w-[50vw] sm:w-[25vw] lg:w-[12.5vw]"
            >
              <img
                src={`/images/logo${n}.${n === 1 || n === 3 ? "webp" : "png"}`}
                alt="Institutional Logo"
                /* Sizes increased by ~10%: h-14->h-16, h-20->h-24, h-24->h-[105px] */
                className="h-16 md:h-24 lg:h-[105px] w-auto object-contain transition-all duration-500 hover:scale-110 drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Affiliation;
