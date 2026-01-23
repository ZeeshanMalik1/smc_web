import React from "react";
import { Link } from "react-router-dom";

function DepartmentsList() {
  const departments = [
    {
      name: "Physical Therapy",
      path: "/department-of-physical-therapy",
      img: "../images/sihsbuilding.jpg",
    },
    {
      name: "Allied Health Sciences",
      path: "/department-of-allied-health-sciences",
      img: "../images/sihsbuilding.jpg",
    },
    {
      name: "Food & Nutrition Sciences",
      path: "/department-of-food-and-nutrition-sciences",
      img: "../images/sihsbuilding.jpg",
    },
    {
      name: "Applied Sciences",
      path: "/department-of-applied-sciences",
      img: "../images/sihsbuilding.jpg",

    },

  ];

  return (
    <div className="w-[95%] max-w-[1300px] mx-auto my-[50px] p-[40px] rounded-[18px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.15)] font-['Poppins',_sans-serif] animate-fadeUp md:p-[20px]">
      <h2 className="text-[2.2rem] font-bold text-[#8B0000] mb-[30px] border-l-[7px] border-[#8B0000] pl-[14px] animate-slideInLeft md:text-[1.7rem]">Explore Our Departments</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[26px]">
        {departments.map((dept, index) => (
          <div key={index} className="group bg-[#f9fbff] rounded-[16px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-[600ms] cubic-bezier(0.25, 1, 0.5, 1) perspective-[1000px] hover:rotateX-[8deg] hover:rotateY-[8deg] hover:scale-[1.05] hover:shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.15)]">
            <div className="w-full h-[180px] overflow-hidden relative md:h-[150px]">
              <img src={dept.img} alt={dept.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.2] group-hover:rotate-[3deg]" />
            </div>
            <div className="p-[18px_20px] text-center">
              <h3 className="text-[1.25rem] font-semibold text-[#222] mb-[14px] md:text-[1.1rem]">{dept.name}</h3>
              <Link to={dept.path} className="inline-block p-[10px_18px] text-[0.95rem] font-semibold text-white rounded-[8px] bg-gradient-to-r from-[#8B0000] to-[#660000] no-underline transition-all duration-[350ms] shadow-[0_5px_15px_rgba(139,0,0,0.4)] hover:bg-gradient-to-r hover:from-[#660000] hover:to-[#8B0000] hover:scale-[1.08] hover:-translate-y-[3px] hover:shadow-[0_8px_18px_rgba(139,0,0,0.6)]">
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentsList;
