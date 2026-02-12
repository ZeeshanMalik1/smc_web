import React from "react";
import { Link } from "react-router-dom";

const DepartmentsList2 = () => {
  const departments = [
    {
      name: "Physical Therapy",
      path: "/department-of-physical-therapy",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      desc: "Advancing movement science and rehabilitative care.",
    },
    {
      name: "Allied Health Sciences",
      path: "/department-of-allied-health-sciences",
      img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
      desc: "Specialized training for modern healthcare professionals.",
    },
    {
      name: "Food & Nutrition Sciences",
      path: "/department-of-food-and-nutrition-sciences",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      desc: "Exploring the vital link between diet and clinical health.",
    },
    {
      name: "Applied Sciences",
      path: "/department-of-applied-sciences",
      img: "https://images.unsplash.com/photo-1532187875685-d6d1dd324469?auto=format&fit=crop&q=80&w=800",
      desc: "Integrating scientific principles into practical solutions.",
    },
  ];

  return (
    <section className="py-24 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - More Elegant */}
        <div className="mb-20 text-center lg:text-left relative">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight">
            Academic{" "}
            <span className="font-bold text-gray-800">Departments</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-gray-800 to-transparent mt-6 mx-auto lg:mx-0"></div>
          <p className="mt-6 text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            Pioneering excellence through research innovation and clinical
            mastery in modern medicine.
          </p>
        </div>

        {/* Departments Grid - Premium Polish */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col border border-gray-50"
            >
              {/* Image Container with Soft Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={dept.img}
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                {/* Modern subtle tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
              </div>

              {/* Text Content - Balanced Spacing */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-tight transition-colors duration-300 group-hover:text-blue-900">
                  {dept.name}
                </h3>
                <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed font-light">
                  {dept.desc}
                </p>

                <Link
                  to={dept.path}
                  className="inline-flex items-center text-[11px] font-black tracking-[0.2em] uppercase text-gray-900 transition-all duration-300 group/link"
                >
                  <span className="relative">
                    Explore Program
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <svg
                    className="ml-3 w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsList2;
