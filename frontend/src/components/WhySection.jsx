import React from "react";

function Section1() {
  return (
    <div className="font-['Poppins',_sans-serif] bg-[#f9f9f9] text-[#333] p-[40px_108px] flex flex-col gap-[60px] max-[1200px]:p-[30px_80px] max-[992px]:p-[25px_60px] max-[768px]:p-[20px_35px] max-[768px]:gap-10 max-[576px]:p-[18px_20px] max-[576px]:gap-[30px]">

      <div className="flex flex-wrap items-center gap-10 max-[768px]:flex-col max-[768px]:text-center">
        <div className="flex-1 p-[0_20px] min-w-[280px] animate-fadeInLeft">
          <h2 className="text-[#8B0000] text-[2.8em] font-bold p-[0_22px] mb-5 relative animate-fadeInUp max-[1200px]:text-[2.4em] max-[992px]:text-[2.2em] max-[768px]:text-[2em] max-[576px]:text-[1.9em] max-[400px]:text-[1.7em]">Why<br />Choose<br />SMC</h2>
          <p className="text-[17px] leading-[1.6] font-normal text-[#666] max-[576px]:text-[15px] max-[400px]:text-[14px]">
            Sargodha Medical College (SMC) is state of the art Institution of Health Sciences, and the1st Institute in the Sargodha Division of
            Punjab which is affiliated with Government College University Faisalabad, a highly ranked university by Higher Education Commission, Pakistan
            and Clinically attached with National Hospital, Sargodha and other private hospitals (in process). Sargodha Medical College (SMC)
            offering Doctor of Physiotherapy (DPT) 5 years degree program, BS Nutrition & Dietetics4 year program, Allied Health Sciences (AHS) 4 year
            program including Medical Lab. Technology (MLT),Radiology/Imaging Technology and Operation Theater Technology (OTT) and Doctor of Eastern
            Medicine and Surgery (DEMS), BS in Biochemistry and Physiology, BS in Food Sciences, BS in Ophthalmology, BS in speech Therapy and BS in
            Psychology and ADP-Advance Diploma in Psychology. Doctor of Human Nutrition and Dietetics (DHND) will be offered in near future. Sargodha
            Medical College (SMC) has highly qualified faculty, excellent Anatomy museum, well equipped labs of basic medical sciences, Kinesiology/Biomechanics, Nutrition and latest computer Lab.
          </p>
        </div>
        <div className="flex-1 min-w-[280px] text-center relative animate-fadeInRight">
          <img
            src="/images/sihsbuilding.jpg"
            alt="SMC Campus"
            className="max-w-full border-radius-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.05] max-[768px]:max-w-[80%] max-[768px]:mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-10 max-[768px]:flex-col max-[768px]:text-center">
        <div
          className="flex-1 max-w-[420px] min-h-[320px] bg-cover bg-center flex items-center justify-center rounded-[12px] overflow-hidden animate-zoomIn max-[768px]:mx-auto max-[768px]:max-w-full max-[768px]:min-w-[280px] max-[768px]:min-h-[220px]"
          style={{ backgroundImage: "url('/images/sihsbuilding.jpg')" }}
        >
          <div className="bg-gradient-to-br from-[#8B0000] to-[#660000] text-white text-[1.6em] text-center p-[35px] rounded-[10px] -rotate-2 transition-transform duration-400 hover:rotate-0 hover:scale-[1.05] max-[1200px]:text-[1.4em] max-[1200px]:p-[25px] max-[768px]:text-[1.3em] max-[768px]:p-5 max-[576px]:text-[1.2em] max-[576px]:p-[18px] max-[400px]:text-[1.1em] max-[400px]:p-[15px]">
            OUR<br />VISION<br />&<br />MISSION
          </div>
        </div>
        <div className="flex-1 p-[0_20px] min-w-[280px] animate-fadeInLeft">
          <h2 className="text-[#8B0000] text-[2.8em] font-bold p-[0_22px] mb-5 relative animate-fadeInUp max-[1200px]:text-[2.4em] max-[992px]:text-[2.2em] max-[768px]:text-[2em] max-[576px]:text-[1.9em] max-[400px]:text-[1.7em]">Our Vision & Mission</h2>
          <p className="text-[17px] leading-[1.6] font-normal text-[#666] max-[576px]:text-[15px] max-[400px]:text-[14px]">
            Sargodha Medical College (SMC), Sargodha is committed to provide
            competency based medical education to produce socially accountable
            health professionals by fostering critical thinking, effective
            community services, and lifelong learning, enhancing clinical and
            research skills with ethical and professional values.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
