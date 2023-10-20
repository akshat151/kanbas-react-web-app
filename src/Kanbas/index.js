import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<h1>Account</h1>} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses" element={<Courses/>} />
      </Routes>
    </div>
  );
}
export default Kanbas;
