import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import LocationHistory from "./LocationHistory";

export default function () {
  return (
    <div className="flex font-mono">
      <Sidebar />
      <Routes>
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/home/location-history" element={<LocationHistory />} />
      </Routes>
    </div>
  );
}
