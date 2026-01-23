import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_API, authHeaders } from "../api";

function AdminProfile() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch profile");
      }

      setAdmin(data.admin);
    } catch (err) {
      console.error("Profile fetch error:", err);
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
      <div className="p-[30px] max-w-[800px] mx-auto text-center color-[#666] text-base">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-[30px] max-w-[800px] mx-auto">
        <div className="text-center p-10 color-[#c33] bg-[#fee] rounded-lg text-base">{error}</div>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="p-[30px] max-w-[800px] mx-auto">
        <div className="text-center p-10 color-[#c33] bg-[#fee] rounded-lg text-base">No profile data available</div>
      </div>
    );
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="p-[30px] max-w-[800px] mx-auto max-[640px]:p-5">
      <h2 className="m-[0_0_30px_0] text-[#333] text-[28px] font-bold">Profile</h2>
      <div className="bg-white rounded-xl p-10 shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex gap-[30px] items-center mb-6 max-[640px]:flex-col max-[640px]:text-center max-[640px]:p-[30px_20px]">
        <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-[36px] font-bold shrink-0 max-[640px]:w-20 max-[640px]:h-20 max-[640px]:text-[28px]">
          {getInitials(admin.name)}
        </div>
        <div className="flex-1">
          <h3 className="m-[0_0_8px_0] text-2xl text-[#333] font-bold">{admin.name}</h3>
          <p className="m-[0_0_16px_0] text-[#666] text-base">{admin.email}</p>
          <div className="flex gap-5 flex-wrap max-[640px]:justify-center">
            <span className="bg-[#f5f5f5] p-[8px_16px] rounded-md text-sm text-[#555] font-medium">Role: Administrator</span>
            <span className="bg-[#f5f5f5] p-[8px_16px] rounded-md text-sm text-[#555] font-medium">ID: {admin._id?.slice(-8) || "N/A"}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap max-[640px]:justify-center">
        <button onClick={handleLogout} className="p-[12px_24px] bg-[#dc3545] text-white border-none rounded-md text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:bg-[#c82333] hover:-translate-y-[2px] active:translate-y-0">
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default AdminProfile;