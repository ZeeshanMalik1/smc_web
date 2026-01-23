import React, { useState, useEffect } from "react";
import { CONTENT_API, REQUEST_CONFIG, buildUrl, API_BASE_URL } from "../api";

function NewsAdmin() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    facebookEmbedUrl: "",
    image: null,
  });

  const fetchEvents = async () => {
    try {
      const res = await fetch(CONTENT_API.EVENTS);
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (val !== null) form.append(key, val);
    });

    try {
      const res = await fetch(CONTENT_API.EVENTS, {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        alert("Event added successfully!");
        fetchEvents();
        setShowForm(false);
        setFormData({
          title: "",
          date: "",
          description: "",
          facebookEmbedUrl: "",
          image: null,
        });
      } else {
        alert("Failed to add event.");
      }
    } catch (err) {
      console.error("Error adding event:", err);
      alert("An error occurred.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    try {
      await fetch(buildUrl(CONTENT_API.EVENTS, id), REQUEST_CONFIG.DELETE);
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto my-10 p-5 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.1)] font-['Segoe_UI',_sans-serif]">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[#8B0000] text-2xl font-bold font-['Poppins',_sans-serif]">News & Events Manager</h2>
        <button className="bg-[#8B0000] text-white p-[10px_16px] border-none rounded-lg cursor-pointer transition-colors hover:bg-[#7a0b10]" onClick={() => setShowForm(true)}>
          + Add Event
        </button>
      </div>

      {showForm && (
        <div className="bg-[#f9f9f9] p-5 rounded-xl mb-5 animate-fadeIn">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <h3 className="mb-[15px] text-[#444] text-lg font-bold">Add News/Event</h3>

            <label className="block font-medium text-[#333]">
              Title <span className="text-[#8B0000]">*</span>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                required
              />
            </label>

            <label className="block font-medium text-[#333]">
              Date <span className="text-[#8B0000]">*</span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                required
              />
            </label>

            <label className="block font-medium text-[#333]">
              Description
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] resize-y"
              />
            </label>

            <label className="block font-medium text-[#333]">
              Image
              <input type="file" name="image" onChange={handleChange} className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] bg-white" />
            </label>

            <div className="flex gap-2.5 mt-2.5">
              <button type="submit" className="bg-[#28a745] text-white border-none p-[8px_14px] rounded-md cursor-pointer transition-colors hover:bg-[#218838]">Save</button>
              <button
                type="button"
                className="bg-[#aaa] text-white border-none p-[8px_14px] rounded-md cursor-pointer transition-colors hover:bg-[#888]"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-5 space-y-3">
        {events.length === 0 ? (
          <div className="text-center text-[#888] italic p-5 bg-[#fffdf5] rounded-xl">No items. Use Add Event to create.</div>
        ) : (
          events.map((ev) => (
            <div className="flex justify-between items-start bg-[#fafafa] p-[12px_16px] rounded-lg border border-[#eee] transition-all hover:bg-white hover:shadow-[0_6px_18px_rgba(0,0,0,0.05)] animate-fadeInUp max-[700px]:flex-col max-[700px]:gap-3" key={ev._id}>
              <div className="flex gap-3 items-start">
                {ev.imageUrl && (
                  <img
                    src={`${API_BASE_URL.replace("/api", "")}${ev.imageUrl}`}
                    alt={ev.title}
                    className="w-[100px] h-[80px] object-cover rounded-lg"
                  />
                )}
                <div>
                  <h3 className="m-0 text-[#333] font-bold">{ev.title}</h3>
                  <p className="text-sm text-[#666] m-[4px_0]">
                    {new Date(ev.date).toLocaleDateString()}
                  </p>
                  <p className="m-[4px_0] text-[#444]">{ev.description}</p>
                </div>
              </div>
              <div className="flex gap-2 max-[700px]:flex-row">
                <button className="bg-[#dc3545] text-white border-none p-[6px_12px] rounded-md cursor-pointer text-[0.9rem] hover:bg-[#b02a37]" onClick={() => handleDelete(ev._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NewsAdmin;
