import React, { useEffect, useState } from "react";
import axios from "axios";

function LatestNews() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/events`)
      .then((res) => setLatest(res.data.slice(0, 3)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#f9f9f9] to-[#ffffff] py-[70px]">
      <div className="max-w-[1250px] mx-auto px-[20px] text-center">
        <h2 className="text-[#8B0000] text-[2.7em] font-extrabold mb-[45px] relative pb-[15px] tracking-wider uppercase after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-[90px] after:h-[5px] after:bg-[#8B0000] after:rounded-[4px] md:text-[2.2em] sm:text-[2em]">Latest News & Events</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[28px]">
          {latest.map((ev) => (
            <div className="group bg-white rounded-[12px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-400 flex flex-col relative animate-fadeInUp hover:-translate-y-[8px] hover:scale-[1.02] hover:shadow-[0_14px_32px_rgba(0,0,0,0.18)]" key={ev._id}>
              <img
                src={`${process.env.REACT_APP_API_IMAGE_URL || ""}${ev.imageUrl || "/images/default.jpg"}`}
                alt={ev.title}
                className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-[1.07] md:h-[180px] sm:h-[160px]"
              />
              <div className="p-[20px] flex flex-col flex-grow text-left">
                <div className="text-[0.92em] text-[#660000] font-semibold mb-[12px] flex items-center gap-[8px]">
                  <i className="far fa-calendar-alt text-[#8B0000]"></i>{" "}
                  {new Date(ev.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h3 className="text-[1.3em] font-bold text-[#333] mb-[14px] leading-[1.4] line-clamp-2">{ev.title}</h3>
                <p className="text-[1em] text-[#666] mb-[18px] flex-grow leading-[1.5] line-clamp-3">
                  {ev.description?.slice(0, 120)}...
                </p>
                <a href={`/event/${ev._id}`} className="bg-[#8B0000] text-white p-[9px_20px] rounded-[6px] font-semibold text-[0.95em] no-underline self-start transition-all duration-300 hover:bg-[#660000] hover:-translate-y-[3px] hover:shadow-[0_5px_12px_rgba(0,0,0,0.2)]">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[45px]">
          <a href="/news-events" className="inline-block border-2 border-[#8B0000] text-[#8B0000] bg-transparent p-[12px_28px] rounded-[8px] font-semibold transition-all duration-300 text-[1em] no-underline hover:bg-[#8B0000] hover:text-white hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
            View All News & Events <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
