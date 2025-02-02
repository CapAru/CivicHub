import React, { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("Citizen");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData({
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

    const endpoint = "http://civichubbackend.onrender.com/api/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful");
        console.log("Token:", data.token);
      } else {
        alert(`Login failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="flex items-center justify-center m-16 bg-[#dae5ef]">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-[#44546a] mb-6 text-center">
          Login
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="/register"
            className="text-[#0068ff] font-medium hover:text-[#0050cc] transition duration-300"
          >
            New User? Register
          </a>
        </div>
      </div>
    </div>
  );
}