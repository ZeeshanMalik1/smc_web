import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5] font-['Poppins',_sans-serif]">
      <SideNav />
      <main className="flex-1 p-7 bg-[#f9fafb] overflow-y-auto ml-[240px] max-[900px]:ml-0">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
