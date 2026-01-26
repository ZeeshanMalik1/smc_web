import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, ShieldCheck, Mail, Fingerprint, RefreshCcw } from "lucide-react";
import { AUTH_API, authHeaders } from "../api";

function AdminProfile() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const response = await fetch(AUTH_API.PROFILE, {
        headers: authHeaders(token),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to fetch profile");
      setAdmin(data.admin);
    } catch (err) {
      setError(err.message);
      if (err.message.includes("token") || err.message.includes("Invalid")) {
        localStorage.removeItem("admin_token");
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_profile");
    navigate("/admin/login", { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff5f5]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#800000] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#800000] font-medium animate-pulse">Loading Profile...</p>
        </div>
      </div>
    );
  }

  const getInitials = (name) => {
    return name?.split(" ").map(word => word[0]).join("").toUpperCase().slice(0, 2) || "AD";
  };

  return (
    <div className="p-8 max-w-[900px] mx-auto min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-[#800000] tracking-tight">Admin Settings</h2>
        <p className="text-[#666]">Manage your account and preferences</p>
      </div>

      <div className="grid gap-6">
        {/* Main Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#eee] transition-all hover:shadow-2xl">
          <div className="h-24 bg-gradient-to-r from-[#4a0000] to-[#800000]"></div>
          <div className="px-10 pb-10 flex flex-col items-center -mt-12 text-center">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl border bg-white p-1 mb-4 shadow-lg">
              <div className="w-full h-full rounded-xl bg-[#800000] flex items-center justify-center text-white text-3xl font-bold">
                {getInitials(admin?.name)}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#333] mb-1">{admin?.name}</h3>
            <div className="flex items-center gap-2 text-[#666] mb-6">
              <Mail size={16} />
              <span>{admin?.email}</span>
            </div>

            {/* Badges */}
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <div className="flex items-center gap-2 bg-[#fff5f5] text-[#800000] px-4 py-2 rounded-full text-sm font-semibold border border-[#ffcccc]">
                <ShieldCheck size={16} />
                Administrator
              </div>
              <div className="flex items-center gap-2 bg-[#f8f9fa] text-[#555] px-4 py-2 rounded-full text-sm font-semibold border border-[#eee]">
                <Fingerprint size={16} />
                ID: {admin?._id?.slice(-8).toUpperCase()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 w-full justify-center">
              <button 
                onClick={() => window.location.reload()} 
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#800000] text-[#800000] rounded-xl font-bold transition-all hover:bg-[#800000] hover:text-white"
              >
                <RefreshCcw size={18} />
                Refresh
              </button>
              <button 
                onClick={handleLogout} 
                className="flex items-center gap-2 px-6 py-3 bg-[#800000] text-white rounded-xl font-bold transition-all hover:bg-[#600000] hover:-translate-y-1 shadow-lg shadow-[#800000]/20"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Security Notice Section */}
        <div className="bg-[#fff5f5] border-l-4 border-[#800000] p-6 rounded-r-2xl">
          <h4 className="text-[#800000] font-bold mb-1">Security Recommendation</h4>
          <p className="text-sm text-[#777]">
            To keep your brand data safe, ensure you log out of the admin panel after every session and never share your credentials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;