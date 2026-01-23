import React, { useEffect, useState } from "react";
// Import API_BASE_URL to correctly construct file links
import { CONTENT_API, API_BASE_URL } from "../api";

function DownloadPage() {
  const [downloads, setDownloads] = useState([]);

  // Extract the root domain for file URLs: API_BASE_URL
  const baseDomainUrl = API_BASE_URL.replace("/api", "");

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const res = await fetch(CONTENT_API.DOWNLOADS);
        const data = await res.json();
        setDownloads(data);
      } catch (err) {
        console.error("Error fetching downloads:", err);
      }
    };
    fetchDownloads();
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto text-center p-[40px_20px]">
      <div className="mb-[25px]">
        <h1 className="text-[2rem] font-bold text-[#8B0000] md:text-[1.6rem]">Downloads</h1>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[20px]">
        {downloads.length === 0 ? (
          <div className="col-span-full text-center p-[30px] bg-[#fffdf5] border border-dashed border-[#ccc] rounded-[12px] text-[1.05rem] text-[#666] animate-fadeIn">
            <i className="far fa-sad-tear text-[2rem] text-[#8B0000] mb-[10px] block"></i>
            <p>No downloads found. Please check back later!</p>
          </div>
        ) : (
          downloads.map((file, index) => (
            <div
              className="bg-white rounded-[12px] p-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col justify-between animate-fadeInUp"
              key={file._id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-[1.2rem] font-semibold mb-[10px] text-[#333] md:text-[1.05rem]">{file.title}</h3>
              <p className="text-[0.95rem] text-[#555] mb-[15px] leading-[1.5] md:text-[0.9rem]">{file.description}</p>
              <a
                // FIXED: Use baseDomainUrl to ensure correct link construction
                href={`${baseDomainUrl}${file.fileUrl}`}
                className="self-start p-[8px_14px] bg-[#8B0000] text-white text-[0.9rem] font-semibold rounded-[6px] no-underline transition-colors duration-300 hover:bg-[#660000]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DownloadPage;