import React, { useEffect, useState } from "react";
// Import API constants and API_BASE_URL
import { CONTENT_API, API_BASE_URL } from "../api";

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  // Extract the root domain for file URLs: API_BASE_URL
  const baseDomainUrl = API_BASE_URL.replace("/api", "");

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // FIXED: Use CONTENT_API.NOTIFICATIONS
        const res = await fetch(CONTENT_API.NOTIFICATIONS);
        const data = await res.json();
        setNotifications(data);
      } catch (err) {
        console.error("Error fetching notifications:", err);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className="max-w-[900px] mx-auto p-[40px_20px]">
      <div className="text-center mb-[30px]">
        <h1 className="text-[2rem] font-bold text-[#8B0000] relative inline-block">Notifications</h1>
      </div>

      <div className="flex flex-col gap-[20px]">
        {notifications.length === 0 ? (
          <div className="bg-[#fffdf5] border border-dashed border-[#ccc] rounded-[10px] p-[30px] text-center text-[#666] text-[1.1rem] animate-fadeIn">
            <i className="far fa-sad-tear text-[2rem] text-[#8B0000] mb-[10px]"></i>
            <p>No notifications to display. Please check back later!</p>
          </div>
        ) : (
          notifications.map((noti) => (
            <div key={noti._id} className="flex items-start gap-[15px] bg-white rounded-[12px] p-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] animate-fadeInUp md:flex-col">
              <div className="bg-[#8B0000] text-white rounded-full w-[45px] h-[45px] flex items-center justify-center text-[18px] shrink-0 md:w-[40px] md:h-[40px] md:text-[16px]">
                <i className="fas fa-bell"></i>
              </div>
              <div className="flex-grow">
                <h3 className="m-[0_0_8px] text-[1.1rem] font-semibold text-[#333]">{noti.title}</h3>
                <p className="m-[0_0_6px] text-[0.95rem] text-[#555]">{noti.message}</p>
                {noti.imageUrl && (
                  <img
                    // FIXED: Use baseDomainUrl to ensure correct image path
                    src={`${baseDomainUrl}${noti.imageUrl}`}
                    alt={noti.title}
                    className="max-w-full rounded-[8px] mt-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                  />
                )}
                <span className="text-[0.8rem] text-[#888]">
                  {new Date(noti.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationPage;