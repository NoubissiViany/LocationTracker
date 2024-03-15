import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import LocationHistory from "./components/LocationHistory";
import MapLocation from "./components/MapLocation";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route
          element={
            <div className="flex font-mono">
              <Sidebar />
              <Outlet />
            </div>
          }
        >
          <Route path="home/profile" element={<Profile />} />
          <Route path="home/location-history" element={<LocationHistory />} />
          <Route path="home/map-location" element={<MapLocation />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
