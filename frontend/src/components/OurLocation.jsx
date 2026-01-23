import React, { useState, useEffect } from "react";
// Import API constants
import { SETTINGS_API } from "../api";

function OurLocation() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    // FIXED: Use SETTINGS_API.SITE to fetch site settings consistently
    fetch(SETTINGS_API.SITE)
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error("Error fetching settings:", err));
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-[60px] font-['Poppins',_Arial,_sans-serif] overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4">
        <h2 className="text-[#8B0000] text-[2.5rem] font-bold text-center mb-[40px] relative pb-[15px] animate-fadeInDown after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-[90px] after:h-[5px] after:bg-[#8B0000] after:rounded-[4px] after:animate-growLine">Our Location</h2>

        <div className="bg-white rounded-[8px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] p-[30px] flex flex-wrap gap-[20px] animate-fadeUp md:flex-col">
          <div className="flex-1 min-w-[300px]">
            <div className="rounded-[8px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)] h-[400px] w-full animate-slideInLeft md:h-[300px]">
              <iframe
                src={
                  // FIXED: Removed the invalid URL and kept the setting property
                  settings?.mapEmbedUrl ||
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d72.6784!3d32.0673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzA1LjAiTiA3MMKwMDgnNDIuMCJF!5e0!3m2!1sen!2s!4v1647416393710!5m2!1sen!2s"
                }
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sargodha Medical College Map"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="flex-1 min-w-[300px]">
            <div className="animate-slideInRight">
              <h3 className="text-[#8B0000] font-semibold text-[1.5rem] mb-[20px]">
                Find Us
              </h3>

              <div className="flex items-start mb-[15px] text-[#333] transition-all duration-300 hover:translate-x-[8px] hover:text-[#8B0000] group">
                <i className="fas fa-map-marker-alt text-[1.3rem] text-[#8B0000] mr-[12px] w-[25px] text-center mt-1"></i>
                <div>
                  <strong className="block">Address</strong>
                  <p className="text-[0.95rem]">{settings?.address || "Loading..."}</p>
                </div>
              </div>

              <div className="flex items-start mb-[15px] text-[#333] transition-all duration-300 hover:translate-x-[8px] hover:text-[#8B0000] group">
                <i className="fas fa-phone-alt text-[1.3rem] text-[#8B0000] mr-[12px] w-[25px] text-center mt-1"></i>
                <div>
                  <strong className="block">Phone</strong>
                  <p className="text-[0.95rem]">{settings?.phone || "Loading..."}</p>
                </div>
              </div>

              <div className="flex items-start mb-[15px] text-[#333] transition-all duration-300 hover:translate-x-[8px] hover:text-[#8B0000] group">
                <i className="fas fa-envelope text-[1.3rem] text-[#8B0000] mr-[12px] w-[25px] text-center mt-1"></i>
                <div>
                  <strong className="block">Email</strong>
                  <p className="text-[0.95rem]">{settings?.email || "Loading..."}</p>
                </div>
              </div>

              <h4 className="text-[#8B0000] font-semibold mt-[20px] mb-[10px]">
                Opening Hours
              </h4>
              <ul className="list-none text-[#333333d3] p-0">
                <li className="flex justify-between mb-[5px] text-[0.95rem] transition-colors duration-300 hover:text-[#8B0000]">
                  <span>Monday - Friday:</span>{" "}
                  <span>
                    {settings?.openingHours?.mondayFriday || "Loading..."}
                  </span>
                </li>
                <li className="flex justify-between mb-[5px] text-[0.95rem] transition-colors duration-300 hover:text-[#8B0000]">
                  <span>Saturday:</span>{" "}
                  <span>
                    {settings?.openingHours?.saturday || "Loading..."}
                  </span>
                </li>
                <li className="flex justify-between mb-[5px] text-[0.95rem] transition-colors duration-300 hover:text-[#8B0000]">
                  <span>Sunday:</span>{" "}
                  <span>{settings?.openingHours?.sunday || "Loading..."}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurLocation;