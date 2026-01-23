import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut } from "lucide-react";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login", { replace: true });
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center gap-[10px] py-[9px] px-[12px] rounded-lg text-white/95 no-underline transition-all duration-300 hover:bg-white/10 hover:translate-x-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[4px] before:bg-white before:rounded-[2px] before:transition-all before:duration-300 ${isActive ? "bg-white/15 text-[#fffdf0] shadow-[0_6px_18px_rgba(0,0,0,0.12)] before:h-full" : "before:h-0 hover:before:h-[70%]"}`;

  return (
    <>
      {/* Mobile Menu Button - Simulated menu-btn */}
      <button
        className="fixed top-4 left-4 z-[1100] p-2 bg-[#8B0000] text-white rounded-md md:hidden"
        onClick={toggleMenu}
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Desktop + Mobile Sidenav */}
      <AnimatePresence>
        {(isOpen || window.innerWidth > 900) && (
          <motion.aside
            className="fixed top-0 left-0 w-[240px] h-screen bg-gradient-to-b from-[#8B0000] to-[#b22222] text-white p-[22px_18px] flex flex-col gap-[18px] shadow-[0_6px_18px_rgba(0,0,0,0.12)] z-[1000]"
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="text-[1.35rem] font-extrabold tracking-[0.6px] text-white uppercase mb-2">SMC Admin</div>
            <nav className="flex flex-col gap-3 mt-2">
              <NavLink to="/admin/slider" className={navLinkClass}>
                Slider Settings
              </NavLink>
              <NavLink to="/admin/news" className={navLinkClass}>
                News & Events
              </NavLink>
              <NavLink to="/admin/downloads" className={navLinkClass}>
                Downloads
              </NavLink>
              <NavLink to="/admin/notifications" className={navLinkClass}>
                Notifications
              </NavLink>
              <NavLink to="/admin/research" className={navLinkClass}>
                Research
              </NavLink>
              <NavLink to="/admin/settings" className={navLinkClass}>
                Site Settings
              </NavLink>
              <NavLink to="/admin/profile" className={navLinkClass}>
                Profile
              </NavLink>
            </nav>

            <div className="mt-auto">
              <button
                className="relative overflow-hidden w-full bg-gradient-to-br from-[#660000] to-[#8B0000] text-[#f3f3f3] border-none py-2.5 px-3 rounded-lg cursor-pointer font-bold transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.03] hover:shadow-[0_6px_16px_rgba(255,255,255,0.15)] group"
                onClick={logout}
              >
                <div className="flex items-center justify-center gap-[6px]">
                  <LogOut size={18} />
                  Log Out
                </div>
                {/* Shine effect simulation */}
                <div className="absolute top-0 -left-[75px] w-[50px] h-full bg-white/30 -skew-x-[20deg] transition-all duration-[750ms] group-hover:left-[120%]"></div>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideNav;
