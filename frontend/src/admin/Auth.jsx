import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AUTH_API, REQUEST_CONFIG } from "../api";
import { Lock, Mail, ArrowLeft, Loader2, ShieldCheck } from "lucide-react";

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
      
      if (!res.ok) throw new Error(data.message || "Invalid credentials");

      localStorage.setItem("admin_token", data.token);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#800000] relative overflow-hidden font-['Poppins',_sans-serif]">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#600000] rounded-full blur-[120px] opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#a00000] rounded-full blur-[120px] opacity-30"></div>

      <div className="w-full max-w-[420px] px-6 z-10 animate-in fade-in zoom-in duration-500">
        {/* Adjusted padding from p-10 to p-8 and reduced rounded corners slightly for a tighter look */}
        <div className="bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/20">
          
          {/* Brand Header - Reduced margins */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fff5f5] rounded-2xl mb-4 shadow-sm border border-red-50">
              <img src="/images/logo.png" alt="SMC Logo" className="w-10 h-10 object-contain" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight italic">
              SMC <span className="text-[#800000]">ADMIN</span>
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-1">Secure brand dashboard access</p>
          </div>

          {/* Error Message - Slimmer padding */}
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-5 text-xs font-bold flex items-center gap-2 border border-red-100 animate-shake">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
              {error}
            </div>
          )}

          {/* Form - Removed h-1/2 to allow natural compact height */}
          <form onSubmit={login} className="space-y-4">
            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Admin Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#800000] transition-colors">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@smc-brand.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-4 focus:ring-[#800000]/5 focus:border-[#800000] focus:bg-white transition-all text-sm text-gray-800 font-medium"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#800000] transition-colors">
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-4 focus:ring-[#800000]/5 focus:border-[#800000] focus:bg-white transition-all text-sm text-gray-800 font-medium"
                  required
                />
              </div>
            </div>

            {/* Submit Button - Reduced padding */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 bg-[#800000] text-white rounded-xl font-black text-base shadow-lg shadow-red-900/20 hover:shadow-red-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Authenticating...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} />
                  Secure Login
                </>
              )}
            </button>
          </form>

          {/* Footer Link - Reduced top margin */}
          <div className="mt-6 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#800000] font-bold text-xs transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Return to Home
            </Link>
          </div>
        </div>
        
        {/* Security Badge - Reduced top margin */}
        <p className="text-white/40 text-center mt-6 text-[10px] font-medium flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
          <Lock size={10} /> Encrypted Administration Session
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;