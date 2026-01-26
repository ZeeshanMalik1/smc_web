import React from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  Image as ImageIcon, 
  Newspaper, 
  Download, 
  Bell, 
  Users, 
  Building2, 
  FlaskConical, 
  Settings 
} from "lucide-react";

function AdminDashboard() {
  const dashboardItems = [
    { title: "Profile", path: "/admin/profile", icon: <User size={32} /> },
    { title: "Slider Settings", path: "/admin/slider", icon: <ImageIcon size={32} /> },
    { title: "News & Events", path: "/admin/news", icon: <Newspaper size={32} /> },
    { title: "Downloads", path: "/admin/downloads", icon: <Download size={32} /> },
    { title: "Notifications", path: "/admin/notifications", icon: <Bell size={32} /> },
    { title: "Faculty Manager", path: "/admin/faculty", icon: <Users size={32} /> },
    { title: "Departments", path: "/admin/departments", icon: <Building2 size={32} /> },
    { title: "Research", path: "/admin/research", icon: <FlaskConical size={32} /> },
    { title: "Site Settings", path: "/admin/settings", icon: <Settings size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-[#fff5f5] p-8 max-w-[1200px] mx-auto max-[768px]:p-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-[2.8rem] text-[#800000] mb-2 font-extrabold tracking-tight">
          Admin Dashboard
        </h1>
        <div className="w-24 h-1 bg-[#800000] mx-auto mb-4 rounded-full"></div>
        <p className="text-[1.1rem] text-[#555] font-medium">
          Welcome to <span className="text-[#a52a2a] font-bold">SMC</span> Admin Panel
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-[768px]:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-[768px]:gap-6">
        {dashboardItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="group relative bg-white rounded-2xl p-8 text-center no-underline transition-all duration-300 border-b-4 border-transparent shadow-md hover:shadow-2xl hover:border-[#800000] hover:-translate-y-2 max-[768px]:p-6"
          >
            {/* Icon Circle */}
            <div className="bg-[#fff5f5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#800000] transition-all duration-300 group-hover:bg-[#800000] group-hover:text-white">
              <div className="group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
            </div>
            
            <h3 className="text-[1.3rem] text-[#333] group-hover:text-[#800000] font-bold transition-colors duration-300">
              {item.title}
            </h3>
            
            {/* Subtle indicator dot */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 rounded-full bg-[#800000]"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;