import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import IssueForm from "./components/IssueForm";
import Header from "./elements/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/issue" element={<IssueForm />} />
      </Routes>
    </Router>
    </>
  );
}
