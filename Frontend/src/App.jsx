import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import LocationHistory from "./components/LocationHistory";
import Sidebar from "./components/Sidebar";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";
import MapLocation from "./components/MapLocation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
      <div className="flex font-mono">
        <Sidebar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/location-history" element={<LocationHistory />} />
          <Route path="/map-location" element={<MapLocation />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}
