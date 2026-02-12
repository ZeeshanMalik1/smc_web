import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MoveLeft,
  Activity,
  Users,
  Heart,
  Stethoscope,
  Microscope,
} from "lucide-react";

const ClinicalSciencesList = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const departments = [
    {
      name: "Gynaecology",
      icon: <Users size={28} />,
      color: "from-pink-500 to-rose-400",
      status: "Active Wards",
    },
    {
      name: "Internal Medicine",
      icon: <Activity size={28} />,
      color: "from-blue-600 to-indigo-400",
      status: "Specialized",
    },
    {
      name: "Pediatrics",
      icon: <Heart size={28} />,
      color: "from-orange-500 to-amber-400",
      status: "Child Care",
    },
    {
      name: "Surgery",
      icon: <Stethoscope size={28} />,
      color: "from-slate-600 to-slate-400",
      status: "OT Integrated",
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans pb-24">
      {/* Cinematic Hero - Fixed No Red Overlay */}
      <div
        className="relative h-[450px] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)), url('/images/3.png')`,
        }}
      >
        <div className="text-center z-10 px-6 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            Clinical Excellence & Care
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
            Faculty of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Clinical Sciences
            </span>
          </h1>
        </div>
      </div>

      {/* Modern Grid Container */}
      <div className="max-w-7xl mx-auto px-6 mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Info Card (Professional Overview) */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Clinical Practice
            </h2>
            <p className="text-slate-500 leading-relaxed font-light">
              Bridging the gap between theory and bedside care. Our clinical
              departments focus on hands-on residency, patient ethics, and
              advanced surgical mastery.
            </p>
            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Microscope className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Tertiary Care
                </p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">
                  Training Facilities
                </p>
              </div>
            </div>
          </div>

          {/* Department Cards */}
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 border border-white flex flex-col items-center text-center overflow-hidden"
            >
              {/* Floating Status Badge */}
              <div className="absolute top-6 left-6 px-3 py-1 bg-slate-100 rounded-full text-[9px] font-black uppercase tracking-tighter text-slate-400 group-hover:bg-white transition-colors">
                {dept.status}
              </div>

              {/* Animated Icon Box */}
              <div
                className={`mt-4 mb-6 p-6 rounded-[2rem] bg-gradient-to-br ${dept.color} text-white shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}
              >
                {dept.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                {dept.name}
              </h3>
              <p className="text-slate-400 text-sm font-light mb-8 px-4 leading-relaxed">
                Expert-led clinical rotations and advanced patient management in{" "}
                {dept.name.toLowerCase()}.
              </p>

              <button className="mt-auto group-hover:scale-105 transition-transform px-8 py-2.5 rounded-full bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-slate-200">
                View Residency
              </button>

              {/* Aesthetic Background Number */}
              <span className="absolute -bottom-4 -right-2 text-slate-100/40 font-black text-8xl pointer-events-none group-hover:text-slate-200 transition-colors">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Professional Footer Navigation */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <Link
            to="/departments"
            className="group flex items-center gap-3 text-slate-400 hover:text-slate-900 font-bold text-xs tracking-[0.3em] transition-all"
          >
            <MoveLeft
              size={18}
              className="group-hover:-translate-x-2 transition-transform"
            />
            BACK TO DEPARTMENTS
          </Link>
          <p className="text-[10px] text-gray-300 uppercase tracking-[0.5em]">
            Research • Care • Education
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClinicalSciencesList;
