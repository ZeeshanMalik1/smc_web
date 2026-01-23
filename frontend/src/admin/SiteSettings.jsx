import React, { useState, useEffect } from "react";
// Assuming you have SETTINGS_API and REQUEST_CONFIG defined in '../api', 
// but we will no longer use SETTINGS_API to avoid the URL concatenation error.
import { REQUEST_CONFIG } from "../api";

// Define the base API URL for your application
// This constant is clean and only points to the base API path.
const BASE_API_URL = process.env.REACT_APP_API_URL;

// NOTE: The 'normalizeUrl' helper was removed as it was not solving the issue, 
// and we are now manually building the correct, simple path.

function SiteSettings() {
  const [settings, setSettings] = useState({
    theme: "default",
    address: "",
    phone: "",
    whatsapp: "",
    email: "",
    mapLocation: {
      latitude: 32.08237311905389,
      longitude: 72.67886211039271,
      zoom: 15,
    },
    mapEmbedUrl: "",
    socialLinks: { facebook: "", instagram: "", linkedin: "" },
    openingHours: {
      mondayFriday: "",
      saturday: "",
      sunday: "",
    },
  });

  // State variables for message and map mode kept.
  const [mapMode, setMapMode] = useState("coordinates");
  const [message, setMessage] = useState({ text: "", type: "" });

  // ✅ Toast message system
  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  // ✅ Load settings on mount
  useEffect(() => {
    // 🛑 FIX: Explicitly construct the correct API URL to fix the 404 (Not Found) error.
    const apiUrl = `${BASE_API_URL}/site-settings`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          // Attempt to read error message if server returns one
          return res.json().catch(() => {
            throw new Error(`HTTP error! status: ${res.status}`);
          });
        }
        return res.json();
      })
      .then((data) => setSettings((prev) => ({ ...prev, ...data })))
      .catch((error) => {
        console.error("Fetch Error:", error);
        showMessage("Failed to load site settings", "error");
      });
  }, []);

  // --- Handlers (Simplified, removed logo logic) ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSocialChange = (platform, value) => {
    setSettings({
      ...settings,
      socialLinks: {
        ...settings.socialLinks,
        [platform]: value,
      },
    });
  };

  const handleOpeningHoursChange = (day, value) => {
    setSettings({
      ...settings,
      openingHours: {
        ...settings.openingHours,
        [day]: value,
      },
    });
  };

  const handleMapLocationChange = (field, value) => {
    setSettings({
      ...settings,
      mapLocation: {
        ...settings.mapLocation,
        [field]: parseFloat(value) || 0,
      },
    });
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSettings({
            ...settings,
            mapLocation: {
              ...settings.mapLocation,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
          showMessage("Current location captured!");
        },
        (error) => showMessage("Unable to get location: " + error.message, "error")
      );
    } else {
      showMessage("Geolocation not supported", "error");
    }
  };

  const handleSave = async () => {
    try {
      // NOTE: FormData is still used here, but it's not strictly necessary 
      // since we aren't sending files anymore. We can switch to JSON.

      // ✅ OPTIMIZATION: Send data as JSON since no files are being uploaded.
      const res = await fetch(`${BASE_API_URL}/site-settings`, {
        method: "POST",
        // Setting Content-Type is mandatory for JSON payload
        headers: {
          'Content-Type': 'application/json',
          // Include auth headers if defined in REQUEST_CONFIG
          ...(REQUEST_CONFIG.headers || {}),
        },
        // Send the settings object directly as JSON string
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        showMessage("Settings saved successfully!");
      } else {
        const errorBody = await res.text();
        console.error("API Save Failed:", errorBody);
        showMessage("Failed to save settings. Check console for details.", "error");
      }
    } catch (err) {
      console.error(err);
      showMessage("Error saving settings", "error");
    }
  };

  // --- Render (Simplified, removed logo section) ---

  return (
    <div className="max-w-[1000px] mx-auto my-[40px] p-[30px] rounded-[15px] bg-[#fdfdfd] shadow-[0_10px_35px_rgba(0,0,0,0.1)] font-['Poppins',_sans-serif]">
      {/* ✅ Animated Toast */}
      {message.text && (
        <div className={`fixed bottom-[30px] right-[30px] p-[16px_25px] rounded-[12px] text-white font-semibold flex items-center gap-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] animate-slideInRight z-[99999] ${message.type === "success" ? "bg-[#28a745]" : "bg-[#dc3545]"}`}>
          {message.type === "success" ? "✅" : "❌"} {message.text}
        </div>
      )}

      <h2 className="text-[#8B0000] text-[1.8rem] font-bold mb-[30px] pb-[10px] border-b-[2.5px] border-[#8B0000] flex items-center gap-[15px]">
        {/* Placeholder logo image is kept for the title bar, but the input/preview is removed. */}
        <img src="/images/logo.png" alt="logo" className="h-[45px] transition-transform duration-300 hover:scale-[1.1]" />
        Site Settings
      </h2>

      <div className="grid grid-cols-2 gap-[20px] md:grid-cols-1">
        {/* The former Logo Upload div is now removed */}

        {/* ... Contact Info inputs ... */}
        <div className="flex flex-col mb-[15px]">
          <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Address</label>
          <textarea
            className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none"
            name="address"
            value={settings.address}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="flex flex-col mb-[15px]">
          <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Phone</label>
          <input className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none" name="phone" value={settings.phone} onChange={handleChange} />
        </div>
        <div className="flex flex-col mb-[15px]">
          <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">WhatsApp</label>
          <input className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none" name="whatsapp" value={settings.whatsapp} onChange={handleChange} />
        </div>
        <div className="flex flex-col mb-[15px]">
          <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Email</label>
          <input className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none" name="email" value={settings.email} onChange={handleChange} />
        </div>

        {/* ✅ Map Section */}
        <div className="col-span-full">
          <h3 className="text-[#8B0000] text-[1.2rem] font-bold mb-[15px] border-l-[4px] border-[#8B0000] pl-[10px]">📍 Map Location</h3>
          <div className="flex gap-[30px] mb-[15px] bg-[#f9f9f9] p-[12px] rounded-[10px] sm:flex-col sm:gap-[15px]">
            <label className="flex items-center gap-[8px] cursor-pointer font-medium text-[#444]">
              <input
                type="radio"
                value="coordinates"
                checked={mapMode === "coordinates"}
                onChange={(e) => setMapMode(e.target.value)}
                className="w-[18px] h-[18px] accent-[#8B0000]"
              />
              Use Coordinates
            </label>
            <label className="flex items-center gap-[8px] cursor-pointer font-medium text-[#444]">
              <input
                type="radio"
                value="embed"
                checked={mapMode === "embed"}
                onChange={(e) => setMapMode(e.target.value)}
                className="w-[18px] h-[18px] accent-[#8B0000]"
              />
              Use Embed URL
            </label>
          </div>

          {mapMode === "coordinates" ? (
            <div className="grid grid-cols-3 gap-[15px] md:grid-cols-1">
              <div className="flex flex-col">
                <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Latitude</label>
                <input
                  className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none"
                  type="number"
                  step="any"
                  value={settings.mapLocation.latitude}
                  onChange={(e) =>
                    handleMapLocationChange("latitude", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Longitude</label>
                <input
                  className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none"
                  type="number"
                  step="any"
                  value={settings.mapLocation.longitude}
                  onChange={(e) =>
                    handleMapLocationChange("longitude", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Zoom (1-20)</label>
                <input
                  className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none"
                  type="number"
                  min="1"
                  max="20"
                  value={settings.mapLocation.zoom}
                  onChange={(e) => handleMapLocationChange("zoom", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <textarea
              className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none w-full"
              name="mapEmbedUrl"
              value={settings.mapEmbedUrl}
              onChange={handleChange}
              rows="3"
              placeholder="Paste Google Maps Embed URL"
            />
          )}

          {mapMode === "coordinates" && (
            <div className="flex gap-[15px] mt-[15px]">
              <button onClick={handleGetCurrentLocation} className="flex-1 p-[12px] rounded-[8px] font-semibold transition-all bg-[#28a745] text-white hover:bg-[#218838] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(40,167,69,0.3)]">
                📍 Use My Current Location
              </button>
              {/* NOTE: Corrected Google Maps preview URL format for a proper map link */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${settings.mapLocation.latitude},${settings.mapLocation.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-[12px] rounded-[8px] font-semibold text-center transition-all bg-[#007bff] text-white hover:bg-[#0069d9] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,123,255,0.3)]"
              >
                🗺️ Preview on Google Maps
              </a>
            </div>
          )}
        </div>

        {/* ... Social Links and Opening Hours ... */}
        <div className="col-span-full">
          <h3 className="text-[#8B0000] text-[1.2rem] font-bold mb-[15px] border-l-[4px] border-[#8B0000] pl-[10px]">🔗 Social Links</h3>
          <div className="grid grid-cols-3 gap-[20px] md:grid-cols-1">
            {["facebook", "instagram", "linkedin"].map((platform) => (
              <div key={platform} className="flex flex-col">
                <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">{platform.charAt(0).toUpperCase() + platform.slice(1)} URL</label>
                <input
                  className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none"
                  value={settings.socialLinks[platform]}
                  onChange={(e) => handleSocialChange(platform, e.target.value)}
                  placeholder={`https://${platform}.com/...`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-full">
          <h3 className="text-[#8B0000] text-[1.2rem] font-bold mb-[15px] border-l-[4px] border-[#8B0000] pl-[10px]">🕒 Opening Hours</h3>
          <div className="grid grid-cols-3 gap-[20px] md:grid-cols-1">
            <div className="flex flex-col">
              <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Mon - Fri</label>
              <input
                className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none"
                value={settings.openingHours.mondayFriday}
                onChange={(e) =>
                  handleOpeningHoursChange("mondayFriday", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Saturday</label>
              <input
                className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none"
                value={settings.openingHours.saturday}
                onChange={(e) =>
                  handleOpeningHoursChange("saturday", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[#555] mb-[8px] flex items-center gap-[8px]">Sunday</label>
              <input
                className="p-[10px_14px] border border-[#ddd] rounded-[8px] text-[1rem] transition-all focus:border-[#8B0000] focus:ring-4 focus:ring-[#8B0000]/10 outline-none"
                value={settings.openingHours.sunday}
                onChange={(e) =>
                  handleOpeningHoursChange("sunday", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[35px] pt-[25px] border-t-2 border-[#eee] flex justify-end">
        <button className="w-full p-[14px] bg-gradient-to-r from-[#8B0000] to-[#660000] text-white text-[1.1rem] font-bold rounded-[8px] cursor-pointer transition-all hover:bg-gradient-to-r hover:from-[#660000] hover:to-[#8B0000] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(139,0,0,0.4)]" onClick={handleSave}>
          💾 Save All Settings
        </button>
      </div>
    </div>
  );
}

export default SiteSettings;