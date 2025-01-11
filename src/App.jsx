import React from "react";
import Profile from "./Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Civic Hub</h1>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
