import React, { useState } from "react";

function DepartmentsAdmin() {
  const [depts, setDepts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logo: null,
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
    if (!formData.name) return alert("Department name is required");

    const newDept = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      logo: formData.logo ? URL.createObjectURL(formData.logo) : null,
    };

    setDepts((prev) => [newDept, ...prev]);
    setFormData({ name: "", description: "", logo: null });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setDepts((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="max-w-[800px] mx-auto my-10 p-5 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.1)] font-['Segoe_UI',sans-serif]">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-[#8B0000]">Departments</h2>
        <button 
          className="bg-[#8B0000] hover:bg-[#7a0b10] text-white py-2.5 px-4 rounded-lg cursor-pointer transition-colors"
          onClick={() => setShowForm(true)}
        >
          + Add Department
        </button>
      </div>

      {/* Form Container */}
      {showForm && (
        <div className="bg-[#f9f9f9] p-5 rounded-xl mb-5">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <h3 className="text-lg font-semibold text-[#444] mb-1">New Department</h3>
            
            <label className="block font-medium text-[#333]">
              Department Name <span className="text-[#8B0000]">*</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
              />
            </label>

            <label className="block font-medium text-[#333]">
              Description
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md min-h-[80px] resize-y focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
              />
            </label>

            <label className="block font-medium text-[#333]">
              Logo/Image
              <input 
                type="file" 
                name="logo" 
                onChange={handleChange} 
                className="w-full p-2 mt-1.5 border border-[#ccc] rounded-md bg-white file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-gray-100"
              />
            </label>

            <div className="flex gap-2.5 mt-2.5">
              <button type="submit" className="bg-[#28a745] hover:bg-[#218838] text-white py-2 px-3.5 rounded-md cursor-pointer transition-colors">
                Save
              </button>
              <button
                type="button"
                className="bg-[#aaa] hover:bg-[#888] text-white py-2 px-3.5 rounded-md cursor-pointer transition-colors"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Department List */}
      <div className="flex flex-col gap-2.5 mt-5">
        {depts.length === 0 ? (
          <div className="p-[18px] bg-[#fffdf5] rounded-xl text-center text-[#888] italic">
            No departments.
          </div>
        ) : (
          depts.map((d) => (
            <div 
              className="flex justify-between items-center bg-[#fafafa] p-3 px-4 rounded-lg border border-[#eee] shadow-[0_6px_18px_rgba(0,0,0,0.05)]" 
              key={d.id}
            >
              <div className="flex items-center gap-3">
                {d.logo ? (
                  <img src={d.logo} alt={d.name} className="w-[50px] height-[50px] rounded-lg object-cover" />
                ) : (
                  <div className="w-[50px] h-[50px] bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">Logo</div>
                )}
                <div>
                  <strong className="text-[#333] block leading-tight">{d.name}</strong>
                  <p className="mt-1 text-sm text-[#666] line-clamp-2">{d.description}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="bg-[#8B0000] hover:bg-[#0056b3] text-white py-1.5 px-3 rounded-md text-sm transition-colors">
                  Edit
                </button>
                <button 
                  className="bg-[#dc3545] hover:bg-[#b02a37] text-white py-1.5 px-3 rounded-md text-sm transition-colors"
                  onClick={() => handleDelete(d.id)}
                >
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

export default DepartmentsAdmin;