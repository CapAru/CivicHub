import React, { useState } from "react";

export default function IssueForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Get token from localStorage

    try {
      const response = await fetch("http://localhost:3000/api/issues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the request header
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Issue created successfully!");
      } else {
        alert(`Failed to create issue: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the issue.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dae5ef]">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-[#44546a] mb-6 text-center">
          Create Issue
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="title"
              placeholder="Issue Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
            />
          </div>
          <div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0068ff] text-white font-bold rounded-lg hover:bg-[#0050cc] transition duration-300"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
}
