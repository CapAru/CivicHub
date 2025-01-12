import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Register() {
  const [role, setRole] = useState("Citizen");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); 
  
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      role === "Citizen"
        ? "https://civichubbackend.onrender.com/api/register/citizen"
        : "https://civichubbackend.onrender.com/api/register/authority";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/");
      } else {
        alert(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert({ error });
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#dae5ef] m-16">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-[#44546a] mb-6 text-center">
          Register
        </h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => handleRoleChange("Citizen")}
            className={`px-4 py-2 rounded-l-lg ${
              role === "Citizen"
                ? "bg-[#0068ff] text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Citizen
          </button>
          <button
            onClick={() => handleRoleChange("Authority")}
            className={`px-4 py-2 rounded-r-lg ${
              role === "Authority"
                ? "bg-[#0068ff] text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Authority
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0068ff] text-white font-bold rounded-lg hover:bg-[#0050cc] transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="/login"
            className="text-[#0068ff] font-medium hover:text-[#0050cc] transition duration-300"
          >
            Existing User? Login
          </a>
        </div>
      </div>
    </div>
  );
}
