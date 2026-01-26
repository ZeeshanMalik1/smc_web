import React, { useState, useEffect } from "react";
import { REQUEST_CONFIG } from "../api";
import { 
  Settings, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Share2, 
  Globe, 
  Navigation, 
  Save, 
  MessageCircle 
} from "lucide-react";

const BASE_API_URL = process.env.REACT_APP_API_URL;

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

  const [mapMode, setMapMode] = useState("coordinates");
  const [message, setMessage] = useState({ text: "", type: "" });

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  useEffect(() => {
    const apiUrl = `${BASE_API_URL}/site-settings`;
    fetch(apiUrl)
      .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then((data) => setSettings((prev) => ({ ...prev, ...data })))
      .catch((error) => {
        console.error("Fetch Error:", error);
        showMessage("Failed to load settings", "error");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleNestedChange = (category, field, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: { ...prev[category], [field]: value }
    }));
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          handleNestedChange("mapLocation", "latitude", pos.coords.latitude);
          handleNestedChange("mapLocation", "longitude", pos.coords.longitude);
          showMessage("Location captured!");
        },
        () => showMessage("Location access denied", "error")
      );
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`${BASE_API_URL}/site-settings`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          ...(REQUEST_CONFIG.headers || {}),
        },
        body: JSON.stringify(settings),
      });

      if (res.ok) showMessage("Site settings updated!");
      else showMessage("Save failed", "error");
    } catch (err) {
      showMessage("Connection error", "error");
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto my-10 p-8 bg-white rounded-3xl shadow-2xl border border-gray-50 font-['Poppins',_sans-serif]">
      {/* Toast Notification */}
      {message.text && (
        <div className={`fixed top-10 right-10 p-4 rounded-2xl text-white font-bold flex items-center gap-3 shadow-2xl z-[9999] animate-bounce ${message.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
          {message.type === "success" ? "✅" : "❌"} {message.text}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-gray-100">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-[#800000] text-white rounded-2xl">
            <Settings size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#800000] tracking-tight italic">Site Control</h2>
            <p className="text-gray-500 font-medium">Manage brand contact & global configuration</p>
          </div>
        </div>
        <img src="/images/logo.png" alt="SMC Logo" className="h-12 opacity-80" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Basic Contact Info */}
        <section className="space-y-6">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-l-4 border-[#800000] pl-3">
            <Globe size={20} className="text-[#800000]" /> Contact Details
          </h3>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 flex items-center gap-2"><MapPin size={16}/> Physical Address</label>
              <textarea 
                name="address" value={settings.address} onChange={handleChange} rows="2"
                className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600 flex items-center gap-2"><Phone size={16}/> Phone</label>
                <input 
                  name="phone" value={settings.phone} onChange={handleChange}
                  className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600 flex items-center gap-2"><MessageCircle size={16}/> WhatsApp</label>
                <input 
                  name="whatsapp" value={settings.whatsapp} onChange={handleChange}
                  className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 flex items-center gap-2"><Mail size={16}/> Business Email</label>
              <input 
                name="email" value={settings.email} onChange={handleChange}
                className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none"
              />
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="space-y-6">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-l-4 border-[#800000] pl-3">
            <Share2 size={20} className="text-[#800000]" /> Social Presence
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {Object.keys(settings.socialLinks).map((platform) => (
              <div key={platform} className="flex flex-col gap-2 uppercase tracking-tighter">
                <label className="text-xs font-black text-gray-400">{platform}</label>
                <input 
                  value={settings.socialLinks[platform]}
                  onChange={(e) => handleNestedChange("socialLinks", platform, e.target.value)}
                  placeholder={`https://${platform}.com/yourbrand`}
                  className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Map Location */}
        <section className="col-span-full bg-gray-50 p-6 rounded-3xl border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Navigation size={20} className="text-[#800000]" />  Location Mapping
            </h3>
            <div className="flex bg-white p-1 rounded-xl shadow-inner border border-gray-200">
              <button 
                onClick={() => setMapMode("coordinates")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${mapMode === "coordinates" ? "bg-[#800000] text-white shadow-md" : "text-gray-500"}`}
              >Coordinates</button>
              <button 
                onClick={() => setMapMode("embed")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${mapMode === "embed" ? "bg-[#800000] text-white shadow-md" : "text-gray-500"}`}
              >Embed URL</button>
            </div>
          </div>

          {mapMode === "coordinates" ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500">Latitude</label>
                <input type="number" step="any" value={settings.mapLocation.latitude} onChange={(e) => handleNestedChange("mapLocation", "latitude", e.target.value)} className="p-3 bg-white border border-gray-200 rounded-xl outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500">Longitude</label>
                <input type="number" step="any" value={settings.mapLocation.longitude} onChange={(e) => handleNestedChange("mapLocation", "longitude", e.target.value)} className="p-3 bg-white border border-gray-200 rounded-xl outline-none" />
              </div>
              <button onClick={handleGetCurrentLocation} className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl font-bold transition-all">Capture My GPS</button>
              <a 
                href={`https://www.google.com/maps?q=${settings.mapLocation.latitude},${settings.mapLocation.longitude}`}
                target="_blank" rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-bold text-center transition-all"
              >Preview Map</a>
            </div>
          ) : (
            <textarea 
              name="mapEmbedUrl" value={settings.mapEmbedUrl} onChange={handleChange}
              placeholder="Paste the iframe src URL here..."
              className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none"
            />
          )}
        </section>

        {/* Opening Hours */}
        <section className="col-span-full space-y-6">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-l-4 border-[#800000] pl-3">
            <Clock size={20} className="text-[#800000]" /> Hours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["mondayFriday", "saturday", "sunday"].map((day) => (
              <div key={day} className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600 capitalize">{day.replace(/([A-Z])/g, ' $1')}</label>
                <input 
                  value={settings.openingHours[day]}
                  onChange={(e) => handleNestedChange("openingHours", day, e.target.value)}
                  placeholder="e.g. 9:00 AM - 6:00 PM"
                  className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t-2 border-gray-50">
        <button 
          onClick={handleSave}
          className="w-full bg-[#800000] text-white py-5 rounded-2xl text-xl font-black shadow-xl hover:shadow-[#80000044] hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
        >
          <Save size={24} /> Commit Changes
        </button>
      </div>
    </div>
  );
}

export default SiteSettings;