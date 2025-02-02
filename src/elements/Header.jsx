import React, { useState, useEffect } from "react";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const [loggedIn, setLoggedIn] = useState(false); // Default to not logged in

  // Check for login session token on component mount
  useEffect(() => {
    const token = localStorage.getItem("sessionToken"); // Or sessionStorage/cookie
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
=======
=======
>>>>>>> Stashed changes
    const [loggedIn, setLoggedIn] = useState(false)
    function login(){
        setLoggedIn(true)
>>>>>>> Stashed changes
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleLogout = () => {
    // Clear session token and set loggedIn to false
    localStorage.removeItem("sessionToken"); // Or sessionStorage/cookie
    setLoggedIn(false);
  };

  const LogoutButton = (
    <div className="flex items-center mx-4">
      <a href="/issue" className="mr-16">
        <button>Submit Issue</button>
      </a>
      <div
        className="logout"
        onClick={handleLogout}
        style={{ cursor: "pointer" }}
      >
        <IoIosLogOut className="text-2xl text-center" />
      </div>
    </div>
  );

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
        height: "60px", // Fixed height for the header
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
      {loggedIn ? (
        LogoutButton
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


