import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
 
  Microscope,
  Beaker,
  Pill,
  Activity,
  Dna,
} from "lucide-react";

const BasicSciencesList = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const departments = [
    {
      name: "Anatomy",
      icon: <Activity size={28} />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Biochemistry",
      icon: <Dna size={28} />,
      color: "from-emerald-500 to-teal-400",
    },
    {
      name: "Pharmacology",
      icon: <Pill size={28} />,
      color: "from-purple-500 to-indigo-400",
    },
    {
      name: "Physiology",
      icon: <Activity size={28} />,
      color: "from-rose-500 to-orange-400",
    },
    {
      name: "Pathology",
      icon: <Beaker size={28} />,
      color: "from-amber-500 to-yellow-400",
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans pb-24">
      {/* Cinematic Hero */}
      <div
        className="relative h-[450px] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)), url('/images/3.png')`,
        }}
      >
        <div className="text-center z-10 px-6 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
            World Class Education
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
            Faculty of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Basic Sciences
            </span>
          </h1>
        </div>
      </div>

      {/* Modern Grid Container */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Info Card (Takes 1 spot on grid) */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Academic Foundations
            </h2>
            <p className="text-slate-500 leading-relaxed font-light">
              Explore our core disciplines where scientific rigor meets medical
              innovation. We provide the essential building blocks for your
              clinical career.
            </p>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <Microscope className="text-slate-800" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-none">
                    5 Departments
                  </p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">
                    Available Programs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Cards */}
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 border border-white flex flex-col items-center text-center overflow-hidden"
            >
              {/* Background Gradient Circle (Visible on Hover) */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-full blur-3xl`}
              ></div>

              {/* Animated Icon */}
              <div
                className={`mb-6 p-6 rounded-3xl bg-gradient-to-br ${dept.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
              >
                {dept.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight group-hover:text-slate-900">
                {dept.name}
              </h3>
              <p className="text-slate-400 text-sm font-light mb-8 px-4">
                Advanced theoretical and practical training in{" "}
                {dept.name.toLowerCase()} disciplines.
              </p>

              <button className="mt-auto px-6 py-2 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                Explore Dept
              </button>

              {/* Floating index number */}
              <span className="absolute top-6 right-8 text-slate-50 font-black text-6xl pointer-events-none group-hover:text-slate-100/50 transition-colors">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button at bottom */}
        <div className="mt-16 text-center">
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-sm tracking-widest transition-all"
          >
            <ArrowLeft size={16} /> BACK TO DEPARTMENTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasicSciencesList;
