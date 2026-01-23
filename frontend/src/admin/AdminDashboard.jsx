import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const dashboardItems = [
    { title: "Profile", path: "/admin/profile", icon: "👤" },
    { title: "Slider Settings", path: "/admin/slider", icon: "🖼️" },
    { title: "News & Events", path: "/admin/news", icon: "📰" },
    { title: "Downloads", path: "/admin/downloads", icon: "📥" },
    { title: "Notifications", path: "/admin/notifications", icon: "🔔" },
    { title: "Faculty Manager", path: "/admin/faculty", icon: "👥" },
    { title: "Departments", path: "/admin/departments", icon: "🏢" },
    { title: "Research", path: "/admin/research", icon: "🔬" },
    { title: "Site Settings", path: "/admin/settings", icon: "⚙️" },
  ];

  return (
    <div className="p-8 max-w-[1200px] mx-auto max-[768px]:p-4">
      <div className="text-center mb-12">
        <h1 className="text-[2.5rem] text-[#333] mb-2 font-bold">Admin Dashboard</h1>
        <p className="text-[1.1rem] text-[#666]">Welcome to SMC Admin Panel</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-[768px]:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-[768px]:gap-4">
        {dashboardItems.map((item, index) => (
          <Link key={index} to={item.path} className="bg-white rounded-xl p-8 text-center no-underline text-inherit shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 border border-[#e0e0e0] hover:-translate-y-[5px] hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] hover:border-[#8B0000] max-[768px]:p-6">
            <div className="text-[3rem] mb-4">{item.icon}</div>
            <h3 className="text-[1.2rem] text-[#333] m-0 font-semibold">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;