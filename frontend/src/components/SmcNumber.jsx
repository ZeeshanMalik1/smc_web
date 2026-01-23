import React, { useEffect } from "react";

function SmcNumber() {
  useEffect(() => {
    const numbersSection = document.querySelector(".smc-numbers-section");
    const numberValues = document.querySelectorAll(".number-value");
    let hasAnimated = false;

    function animateNumbers() {
      if (hasAnimated) return;
      if (!numbersSection) return;
      const sectionTop = numbersSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionTop > -numbersSection.offsetHeight) {
        numberValues.forEach((valueElement) => {
          const target = parseInt(valueElement.dataset.target);
          let current = 0;
          const increment = Math.ceil(target / 100);
          const hasPlus = valueElement.querySelector(".plus-sign-span");

          const timer = setInterval(() => {
            current += increment;
            if (current < target) {
              valueElement.textContent = current;
            } else {
              valueElement.textContent = target;
              if (hasPlus) {
                const plusImg = document.createElement("span");
                plusImg.textContent = "+";
                plusImg.className = "text-[0.6em] align-top ml-[2px]";
                valueElement.appendChild(plusImg);
              }
              valueElement.classList.add("scale-110");
              clearInterval(timer);
            }
          }, 20);
        });
        hasAnimated = true;
        window.removeEventListener("scroll", animateNumbers);
      }
    }

    animateNumbers();
    window.addEventListener("scroll", animateNumbers);
    return () => window.removeEventListener("scroll", animateNumbers);
  }, []);

  return (
    <div className="smc-numbers-section bg-[#8B0000] text-white py-[70px] flex justify-center items-center max-[768px]:py-[60px] max-[576px]:py-[50px]">
      <div className="max-w-[1200px] mx-auto text-center px-[25px] w-full">
        <h2 className="text-[3.2em] font-[900] uppercase mb-[60px] tracking-[1px] animate-fadeInDown max-[1024px]:text-[2.8em] max-[768px]:text-[2.4em] max-[768px]:mb-[40px] max-[576px]:text-[2em] max-[576px]:mb-[30px] max-[400px]:text-[1.7em]">SMC IN NUMBERS</h2>
        <div className="flex justify-center flex-wrap gap-10 max-[768px]:gap-[25px]">
          <div className="flex-[1_1_220px] max-w-[260px] bg-white/8 rounded-[12px] p-[25px_15px] transition-all duration-400 animate-fadeInUp hover:-translate-y-[10px] hover:scale-[1.03] hover:bg-white/15 max-[768px]:flex-[1_1_45%] max-[768px]:max-w-[45%] max-[576px]:flex-[1_1_100%] max-[576px]:max-w-full">
            <div className="flex flex-col items-center">
              <div className="number-value text-[3.5em] font-extrabold text-[#ff4d4d] mb-2.5 tracking-[1px] transition-transform duration-500 max-[1024px]:text-[3.2em] max-[768px]:text-[2.8em] max-[576px]:text-[2.5em] max-[400px]:text-[2.2em]" data-target="600">0</div>
              <div className="text-[1em] font-medium uppercase opacity-[0.95] tracking-[0.7px] max-[768px]:text-[0.95em] max-[576px]:text-[0.85em] max-[400px]:text-[0.8em]">Enrolled Students</div>
            </div>
          </div>
          <div className="flex-[1_1_220px] max-w-[260px] bg-white/8 rounded-[12px] p-[25px_15px] transition-all duration-400 animate-fadeInUp hover:-translate-y-[10px] hover:scale-[1.03] hover:bg-white/15 max-[768px]:flex-[1_1_45%] max-[768px]:max-w-[45%] max-[576px]:flex-[1_1_100%] max-[576px]:max-w-full">
            <div className="flex flex-col items-center">
              <div className="number-value text-[3.5em] font-extrabold text-[#ff4d4d] mb-2.5 tracking-[1px] transition-transform duration-500 max-[1024px]:text-[3.2em] max-[768px]:text-[2.8em] max-[576px]:text-[2.5em] max-[400px]:text-[2.2em]" data-target="1500">0</div>
              <div className="text-[1em] font-medium uppercase opacity-[0.95] tracking-[0.7px] max-[768px]:text-[0.95em] max-[576px]:text-[0.85em] max-[400px]:text-[0.8em]">Alumni</div>
            </div>
          </div>
          <div className="flex-[1_1_220px] max-w-[260px] bg-white/8 rounded-[12px] p-[25px_15px] transition-all duration-400 animate-fadeInUp hover:-translate-y-[10px] hover:scale-[1.03] hover:bg-white/15 max-[768px]:flex-[1_1_45%] max-[768px]:max-w-[45%] max-[576px]:flex-[1_1_100%] max-[576px]:max-w-full">
            <div className="flex flex-col items-center">
              <div className="number-value text-[3.5em] font-extrabold text-[#ff4d4d] mb-2.5 tracking-[1px] transition-transform duration-500 max-[1024px]:text-[3.2em] max-[768px]:text-[2.8em] max-[576px]:text-[2.5em] max-[400px]:text-[2.2em]" data-target="150">0<span className="plus-sign-span hidden">+</span></div>
              <div className="text-[1em] font-medium uppercase opacity-[0.95] tracking-[0.7px] max-[768px]:text-[0.95em] max-[576px]:text-[0.85em] max-[400px]:text-[0.8em]">Faculty</div>
            </div>
          </div>
          <div className="flex-[1_1_220px] max-w-[260px] bg-white/8 rounded-[12px] p-[25px_15px] transition-all duration-400 animate-fadeInUp hover:-translate-y-[10px] hover:scale-[1.03] hover:bg-white/15 max-[768px]:flex-[1_1_45%] max-[768px]:max-w-[45%] max-[576px]:flex-[1_1_100%] max-[576px]:max-w-full">
            <div className="flex flex-col items-center">
              <div className="number-value text-[3.5em] font-extrabold text-[#ff4d4d] mb-2.5 tracking-[1px] transition-transform duration-500 max-[1024px]:text-[3.2em] max-[768px]:text-[2.8em] max-[576px]:text-[2.5em] max-[400px]:text-[2.2em]" data-target="19">0</div>
              <div className="text-[1em] font-medium uppercase opacity-[0.95] tracking-[0.7px] max-[768px]:text-[0.95em] max-[576px]:text-[0.85em] max-[400px]:text-[0.8em]">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmcNumber;
