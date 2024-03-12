import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./components/Profile";
import LocationHistory from "./components/LocationHistory";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex font-mono">
        <Sidebar />
        <Routes>
          {/* <Route index element={<Login />} />
          <Route path="/registration" element={<Register />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/location-history" element={<LocationHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
