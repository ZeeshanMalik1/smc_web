import React from "react";

function OurVisionAndMission() {
  return (
    <div className="max-w-[1140px] mx-auto px-[15px] font-['Poppins',_sans-serif]">
      <div className="flex flex-wrap relative min-h-[380px] bottom-[50px] rounded-[10px] overflow-hidden bg-white shadow-[0_6px_18px_rgba(0,0,0,0.25)] animate-fadeInUp max-[992px]:flex-col max-[992px]:bottom-10 max-[576px]:min-h-auto max-[576px]:bottom-[30px]">
        <div className="flex-[1_1_35%] p-0 bg-no-repeat bg-center bg-cover relative overflow-hidden max-[992px]:flex-[1_1_100%] max-[992px]:text-center" style={{ backgroundImage: "url('/images/sihsbuilding.jpg')" }}>
          <div className="absolute inset-0 bg-[rgba(139,0,0,0.9)] flex justify-center items-center text-[clamp(22px,4vw,36px)] font-bold leading-[1.4] uppercase text-center text-white animate-zoomIn max-[576px]:text-[clamp(18px,5vw,26px)] max-[576px]:p-5">
            OUR <br />
            VISION <br />
            &amp; <br />
            MISSION
          </div>
        </div>

        <div className="flex-[1_1_65%] p-[40px_30px] flex flex-col justify-center animate-fadeIn max-[992px]:flex-[1_1_100%] max-[992px]:text-center max-[576px]:p-[25px_18px]">
          <h2 className="text-[clamp(20px,2.2vw,32px)] font-bold text-[#333] mb-[18px] border-l-[5px] border-[#8B0000] pl-3 max-[992px]:border-l-0 max-[992px]:pl-0 max-[992px]:text-center">Our Vision &amp; Mission</h2>
          <p className="text-[clamp(15px,1vw,18px)] leading-[1.7] text-[#333] m-0">
            <strong>Vision:</strong><br />
            To be among the best academic health centers in research, medical education, and excellence in patient care by using technological advancement,
            innovative methodology, immense clinical experience, continuous quality improvement, gracious professionalism and long-life learning till perfection.
            <br />
            <strong>Mission Statement:</strong><br />
            The overall mission of the Sargodha Medical College (SMC) is to establish a Centre of excellence in the medical sciences and technology which would be an agent of change and the role model for other institutions to emulate. It serves to attract the maximum possible talent for its
            upgrading. The college hopes to provide graduates in Physiotherapy who would distinguish themselves with their professional, humanistic and
            educational standards by the virtue of their organizational skills. They should be able to respond to the needs and problems of the patients while
            maintaining international standards. The Sargodha Medical College (SMC) has been established to educate young men & women, the
            principles and appreciation of their responsibility to the society. The academic program of the College is demanding and will require applied physical and intellectual energy. Graduates of this College are in great demand for appointment in National and Private Hospitals, Rehabilitation Centers, Clinics and institutions of Physically Handicapped, Industrial Centers and foreign countries. The aim of the Sargodha Medical
            College (SMC) is to produce efficiently trained and specialized young men& women who can render their services as Physiotherapists, to the
            national need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurVisionAndMission;
