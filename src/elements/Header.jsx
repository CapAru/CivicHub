import React, { useState, useEffect } from "react";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in by checking for the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setLoggedIn(false); // Update the UI
    navigate("/login"); // Redirect to login page
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        zIndex: 1000,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        height: "60px" /* Fixed height for the header */,
      }}
    >
      <div className="mx-6 text-2xl mr-2 font-bold">
        <a href="/" style={{ textDecoration: "none", color: "#0068ff" }}>
          <h1>Civic Hub</h1>
        </a>
      </div>
      <div className="hamburger">
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Conditionally render buttons based on login state */}
      {loggedIn ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#0068ff",
              marginLeft: "auto",
            }}
          >
            <IoIosLogOut /> Logout
          </button>
          <a href="/profile" className="profile">
            <button style={{ marginLeft: "10px" }}>Profile</button>
          </a>
        </div>
      ) : (
        <div className="buttons" style={{ marginLeft: "auto" }}>
          <a href="/login" className="login">
            <button>Login</button>
          </a>
          <a href="/register" className="signup">
            <button>Sign Up</button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
