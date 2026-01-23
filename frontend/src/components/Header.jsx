import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SETTINGS_API, API_BASE_URL } from "../api";

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [settings, setSettings] = useState(null);

  const baseDomainUrl = API_BASE_URL.replace("/api", "");

  useEffect(() => {
    fetch(SETTINGS_API.SITE)
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Error fetching settings:", err));
  }, []);

  return (
    <>
      <div className="bg-[#8b0000] text-white text-[14px] py-2">
        <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-5">
            <span>
              <i className="fas fa-phone mr-1.5"></i> {settings?.phone || "Loading..."}
            </span>
            <span>
              <i className="fas fa-envelope mr-1.5"></i> {settings?.email || "Loading..."}
            </span>
          </div>
          <div className="flex gap-4">
            {settings?.socialLinks?.facebook && (
              <a
                href={settings.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline text-base transition-colors duration-300 hover:text-[#ddd]"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {settings?.socialLinks?.instagram && (
              <a
                href={settings.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline text-base transition-colors duration-300 hover:text-[#ddd]"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {settings?.socialLinks?.linkedin && settings.socialLinks.linkedin !== "#" && (
              <a
                href={settings.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline text-base transition-colors duration-300 hover:text-[#ddd]"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      <nav
        className="sticky top-0 bg-[#fefefe] border-t border-[#eee] border-b border-[#ddd] py-2.5 z-[100000]"
      >
        <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
          <NavLink to="/" className="navbar-brand">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-20 w-auto"
            />
          </NavLink>

          <button
            className="bg-none border-none text-[26px] cursor-pointer hidden max-[992px]:block text-[#333] relative z-[1100]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              className="fas fa-bars scale-[2.5] p-[5px]"
            ></i>
          </button>

          <div
            className={`flex max-[992px]:hidden max-[992px]:absolute max-[992px]:top-full max-[992px]:left-0 max-[992px]:right-0 max-[992px]:w-full max-[992px]:bg-white max-[992px]:border-t max-[992px]:border-[#eee] max-[992px]:p-[10px_0] max-[992px]:text-left ${menuOpen ? "!block" : ""}`}
            id="navbarNav"
          >
            <ul className="list-none flex gap-5 max-[992px]:flex-col max-[992px]:gap-0">
              <li className="max-[992px]:border-b max-[992px]:border-[#eee]">
                <NavLink
                  to="/Home"
                  className={({ isActive }) => `no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 ${isActive ? "text-[#8b0000] underline underline-offset-8 decoration-2" : ""} max-[992px]:p-[12px_16px] max-[992px]:block`}
                >
                  HOME
                </NavLink>
              </li>

              <li className="relative group max-[992px]:border-b max-[992px]:border-[#eee]">
                <NavLink
                  to="/vision-mission"
                  className={`no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 ${path.startsWith("/vision-mission") || path.startsWith("/principal-message") ? "text-[#8b0000] underline underline-offset-8 decoration-2" : ""} max-[992px]:p-[12px_16px] max-[992px]:block`}
                >
                  ABOUT US <i className="fas fa-chevron-down text-[xx-small]"></i>
                </NavLink>
                <ul className="absolute top-full left-0 min-w-[200px] bg-white border border-[#eee] flex flex-col opacity-0 invisible transition-all duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.1)] group-hover:opacity-100 group-hover:visible z-[1000] max-[992px]:relative max-[992px]:opacity-100 max-[992px]:visible max-[992px]:border-none max-[992px]:shadow-none">
                  <li>
                    <NavLink to="/vision-mission" className="p-[10px_16px] block text-[#333] hover:bg-[#f5f5f5] hover:text-black">Vision &amp; Mission</NavLink>
                  </li>
                  <li>
                    <NavLink to="/principal-message" className="p-[10px_16px] block text-[#333] hover:bg-[#f5f5f5] hover:text-black">
                      Principal's Message
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="relative group max-[992px]:border-b max-[992px]:border-[#eee]">
                <NavLink
                  to="/admission-criteria"
                  className={`no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 ${path.startsWith("/admission") ? "text-[#8b0000] underline underline-offset-8 decoration-2" : ""} max-[992px]:p-[12px_16px] max-[992px]:block`}
                >
                  ADMISSIONS <i className="fas fa-chevron-down text-[xx-small]"></i>
                </NavLink>
                <ul className="absolute top-full left-0 min-w-[200px] bg-white border border-[#eee] flex flex-col opacity-0 invisible transition-all duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.1)] group-hover:opacity-100 group-hover:visible z-[1000] max-[992px]:relative max-[992px]:opacity-100 max-[992px]:visible max-[992px]:border-none max-[992px]:shadow-none">
                  <li>
                    <NavLink to="/admission-criteria" className="p-[10px_16px] block text-[#333] hover:bg-[#f5f5f5] hover:text-black">
                      Admission Criteria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/fee-structure" className="p-[10px_16px] block text-[#333] hover:bg-[#f5f5f5] hover:text-black">FEE STRUCTURE</NavLink>
                  </li>
                </ul>
              </li>

              <li className="max-[992px]:border-b max-[992px]:border-[#eee]">
                <NavLink
                  to="/departments"
                  className={`no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 ${path.startsWith("/faculty-of-basic-sciences") || path.startsWith("/faculty-of-clinical-sciences") ? "text-[#8b0000] underline underline-offset-8 decoration-2" : ""} max-[992px]:p-[12px_16px] max-[992px]:block`}
                >
                  DEPARTMENTS
                </NavLink>
              </li>

              <li className="max-[992px]:border-b max-[992px]:border-[#eee]">
                <NavLink to="/research" className="no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 max-[992px]:p-[12px_16px] max-[992px]:block">RESEARCH</NavLink>
              </li>
              <li className="max-[992px]:border-b max-[992px]:border-[#eee]">
                <NavLink to="/news-events" className="no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 max-[992px]:p-[12px_16px] max-[992px]:block">NEWS &amp; EVENTS</NavLink>
              </li>
              <li className="max-[992px]:border-b max-[992px]:border-[#eee]">
                <NavLink to="/notifications" className="no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 max-[992px]:p-[12px_16px] max-[992px]:block">NOTIFICATIONS</NavLink>
              </li>
              <li className="max-[992px]:border-b max-[992px]:border-[#eee]">
                <NavLink to="/downloads" className="no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 max-[992px]:p-[12px_16px] max-[992px]:block">DOWNLOADS</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="no-underline text-[#333] text-[15px] font-[450] transition-colors duration-300 hover:text-[#8b0000] hover:underline hover:underline-offset-8 hover:decoration-2 max-[992px]:p-[12px_16px] max-[992px]:block">CONTACT US</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;