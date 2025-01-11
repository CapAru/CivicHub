import React, { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("Citizen");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    organization: "",
  });

  // Handle the role change between Citizen and Authority
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      organization: "",
    });
  };

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const endpoint =
      role === "Citizen"
        ? "http://localhost:3000/register/citizen"
        : "http://localhost:3000/register/authority";

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
        alert(`${role} registration successful`);
      } else {
        alert(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dae5ef]">
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
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
            />
          </div>

          {/* Conditionally render address or organization fields */}
          {role === "Citizen" ? (
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
              />
            </div>
          ) : (
            <div>
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#0068ff] rounded-lg placeholder-gray-500 text-[#44546a] focus:outline-none focus:ring-2 focus:ring-[#0068ff]"
              />
            </div>
          )}

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
