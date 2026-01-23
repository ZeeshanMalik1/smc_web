import React, { useState } from "react";

function FacultyManager() {
  const [faculty, setFaculty] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    designation: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.dept) return alert("Name and department are required");

    const newFaculty = {
      id: Date.now(),
      name: formData.name,
      dept: formData.dept,
      designation: formData.designation,
      photo: formData.photo ? URL.createObjectURL(formData.photo) : null,
    };

    setFaculty((prev) => [newFaculty, ...prev]);
    setFormData({ name: "", dept: "", designation: "", photo: null });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setFaculty((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="max-w-[800px] mx-auto my-10 p-5 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.1)] font-['Segoe_UI',_sans-serif]">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[#8B0000] text-2xl font-bold">Faculty Manager</h2>
        <button className="bg-[#8B0000] text-white p-[10px_16px] border-none rounded-lg cursor-pointer transition-colors hover:bg-[#7a0b10]" onClick={() => setShowForm(true)}>
          + Add Faculty
        </button>
      </div>

      {showForm && (
        <div className="bg-[#f9f9f9] p-5 rounded-xl mb-5 animate-fadeIn">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <h3 className="mb-[15px] text-[#444] text-lg font-bold">Add Faculty</h3>

            <label className="block font-medium text-[#333]">
              Name <span className="text-[#8B0000]">*</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                required
              />
            </label>

            <label className="block font-medium text-[#333]">
              Department <span className="text-[#8B0000]">*</span>
              <input
                type="text"
                name="dept"
                value={formData.dept}
                onChange={handleChange}
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                required
              />
            </label>

            <label className="block font-medium text-[#333]">
              Designation
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
              />
            </label>

            <label className="block font-medium text-[#333]">
              Photo
              <input type="file" name="photo" onChange={handleChange} className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] bg-white" />
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

      <div className="mt-5 space-y-2.5">
        {faculty.length === 0 ? (
          <div className="text-center text-[#888] italic p-[18px] bg-[#fffdf5] rounded-xl">No faculty added yet.</div>
        ) : (
          faculty.map((f) => (
            <div className="flex justify-between items-center bg-[#fafafa] p-[12px_16px] rounded-lg border border-[#eee] transition-all hover:bg-white hover:shadow-[0_6px_18px_rgba(0,0,0,0.05)] animate-fadeInUp" key={f.id}>
              <div className="flex items-center gap-3">
                {f.photo ? <img src={f.photo} alt={f.name} className="w-[60px] h-[60px] rounded-full object-cover" /> : <div className="w-[60px] h-[60px] rounded-full bg-gray-200"></div>}
                <div>
                  <strong className="text-[#333]">{f.name}</strong>
                  <p className="m-[2px_0] text-[0.95rem] text-[#555]">{f.dept}</p>
                  {f.designation && <small className="text-[#777]">{f.designation}</small>}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#8B0000] text-white border-none p-[6px_12px] rounded-md cursor-pointer text-[0.9rem] hover:bg-[#0056b3]">Edit</button>
                <button className="bg-[#dc3545] text-white border-none p-[6px_12px] rounded-md cursor-pointer text-[0.9rem] hover:bg-[#b02a37]" onClick={() => handleDelete(f.id)}>
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

export default FacultyManager;
