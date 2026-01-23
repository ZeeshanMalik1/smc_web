import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AUTH_API, REQUEST_CONFIG } from "../api";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(AUTH_API.LOGIN, REQUEST_CONFIG.POST({ email, password }));

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("admin_token", data.token);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8B0000] to-[#660000] p-5">
      <form className="bg-white p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] w-full max-w-[420px] max-[480px]:p-[30px_20px]" onSubmit={login}>
        <h2 className="m-[0_0_24px_0] text-[#333] text-[26px] text-center font-bold max-[480px]:text-[22px]">
          <img src="/images/logo.png" alt="" className="w-[100px] mx-auto mb-2" />
          Admin Login
        </h2>

        {error && (
          <div className="bg-[#fee] text-[#c33] p-3 rounded-md mb-4 text-sm border-l-4 border-l-[#c33]">
            {error}
          </div>
        )}

        <label className="block mb-1.5 text-[#555] font-medium text-sm">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-[12px_15px] mb-4 border-[1.5px] border-[#ddd] rounded-md text-[15px] transition-all outline-none focus:border-[#8B0000] focus:shadow-[0_0_0_3px_rgba(139,0,0,0.1)] box-border"
          required
        />

        <label className="block mb-1.5 text-[#555] font-medium text-sm">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-[12px_15px] mb-4 border-[1.5px] border-[#ddd] rounded-md text-[15px] transition-all outline-none focus:border-[#8B0000] focus:shadow-[0_0_0_3px_rgba(139,0,0,0.1)] box-border"
          required
        />

        <button type="submit" className="w-full p-3.5 bg-gradient-to-br from-[#8B0000] to-[#660000] text-white border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-200 mt-2 hover:not-disabled:-translate-y-[2px] hover:not-disabled:shadow-[0_6px_20px_rgba(139,0,0,0.4)] active:not-disabled:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="mt-5 text-center flex flex-col gap-2.5">
          <Link to="/" className="text-[#8B0000] no-underline text-sm transition-colors hover:text-[#660000] hover:underline">← Back to site</Link>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
