import React, { useState, useEffect } from "react";
// Import API constants
import { SETTINGS_API, API_BASE_URL, REQUEST_CONFIG } from "../api";
import { Link } from "react-router-dom";

function Footer() {
  const [settings, setSettings] = useState(null);

  // Extract the root domain for API contact
  const baseDomainUrl = API_BASE_URL.replace("/api", "");

  useEffect(() => {
    fetch(SETTINGS_API.SITE) // Use the centralized API constant
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Error fetching settings:", err));
  }, []);

  return (
    <>
      <footer role="contentinfo"
        className="relative overflow-hidden bg-[#8B0000] text-[#f5f5f5] pt-[60px] pb-0 mt-[48px] font-['Poppins',_Arial,_sans-serif] text-[18px] leading-[1.7] before:content-[''] before:absolute before:-top-[100px] before:-left-[100px] before:w-[300px] before:height-[300px] before:bg-[radial-gradient(circle,_rgba(139,0,0,0.12)_0%,_transparent_70%)] before:animate-floatLight"
        style={{ backgroundImage: "linear-gradient(120deg, rgba(34, 34, 34, 0.93) 60%, rgba(139, 0, 0, 0.85)), url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrceB01K5nFqvDLaeEBWVZNgbB87Yebv4JpT_4ExcHNtPNtTyNceh_jcsDylhEC6nfx0LM_2t22VuKbwaaIWF_85GA8c0QafM6_P31P_2MYT6hpAfYq17xVuZcQQKtnU4ZL1WUwLg=w529-h298-k-no')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="max-w-[1200px] w-full mx-auto px-8 relative z-[100]">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b-[1.5px] border-[#222c] pb-8 mb-6">

            {/* Column 1: Vision & Mission */}
            <div className="flex flex-col gap-3">
              <div className="text-[1.8rem] font-bold text-[#8B0000] uppercase">
                <i className="fas fa-eye mr-2"></i> Our Vision & Mission
              </div>
              <p className="text-[#e0e0e0] text-[0.95rem] leading-[1.6]">
                To be among the best academic health centers in research,
                medical education, and excellence in patient care by using
                technological advancement, innovative methodology, immense
                clinical experience, continuous quality improvement, gracious
                professionalism and long-life learning till perfection.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-3">
              <div className="text-[1rem] font-bold text-[#8B0000] mb-[10px] uppercase relative after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8B0000] after:mt-[6px] after:rounded-[2px]">
                Quick Links
              </div>
              <ul className="list-none p-0 m-0">
                {['Home', 'About Us', 'Admissions', 'Campus Life'].map((link) => (
                  <li key={link} className="mb-[10px]">
                    <a
                      href={`/${link.toLowerCase().replace(' ', '')}`}
                      className="text-[#f5f5f5] no-underline text-[1rem] transition-all duration-300 hover:text-[#8B0000] hover:pl-[6px] flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-[8px] text-[#8B0000] text-[0.8rem]"></i> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="text-[1rem] font-bold text-[#8B0000] mb-[10px] uppercase relative after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8B0000] after:mt-[6px] after:rounded-[2px]">
                Contact Information
              </div>
              <div className="space-y-2">
                <p className="text-[#e0e0e0] text-[0.95rem] flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-[8px] text-[#8B0000]"></i>
                  <span><strong>Phone:</strong> {settings?.phone || "Loading..."}</span>
                </p>
                <p className="text-[#e0e0e0] text-[0.95rem] flex items-start">
                  <i className="fas fa-circle mt-1.5 mr-[8px] text-[#8B0000] text-[8px]"></i>
                  <span><strong>Whatsapp:</strong> {settings?.whatsapp || "Loading..."}</span>
                </p>
                <p className="text-[#e0e0e0] text-[0.95rem] flex items-start">
                  <i className="fas fa-envelope mt-1 mr-[8px] text-[#8B0000]"></i>
                  <span><strong>Email:</strong> {settings?.email || "Loading..."}</span>
                </p>
                <p className="text-[#e0e0e0] text-[0.95rem] flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-[8px] text-[#8B0000]"></i>
                  <span><strong>Address:</strong> {settings?.address || "Loading..."}</span>
                </p>

                <div className="flex gap-4 mt-4">
                  {settings?.socialLinks?.facebook && (
                    <Link to={settings.socialLinks.facebook} className="text-[#8B0000] text-[1.2rem] hover:text-white transition-all hover:-translate-y-1">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  )}
                  {settings?.socialLinks?.instagram && (
                    <Link to={settings.socialLinks.instagram} className="text-[#8B0000] text-[1.2rem] hover:text-white transition-all hover:-translate-y-1">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Column 4: Form */}
            <div className="flex flex-col gap-3">
              <div className="text-[1rem] font-bold text-[#8B0000] mb-[10px] uppercase relative after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8B0000] after:mt-[6px] after:rounded-[2px]">
                Send a Message
              </div>
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#23232397] text-white border border-[#444] rounded-[6px] p-2.5 text-[0.95rem] focus:border-[#8B0000] outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#23232397] text-white border border-[#444] rounded-[6px] p-2.5 text-[0.95rem] focus:border-[#8B0000] outline-none"
                  required
                />
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  className="w-full bg-[#23232397] text-white border border-[#444] rounded-[6px] p-2.5 text-[0.95rem] focus:border-[#8B0000] outline-none resize-none"
                  required
                ></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-[#8B0000] to-[#ff4d4d] text-white rounded-[6px] py-3 font-semibold hover:-translate-y-1 transition-transform">
                  <i className="fas fa-paper-plane mr-2"></i> Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="text-center text-[#bdbdbd] text-[0.95rem] py-4">
            © {new Date().getFullYear()} Sargodha Medical College. Developed by{" "}
            <a href="/" className="text-[#8B0000] font-bold hover:underline">Zeeshan Siddique</a>.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;