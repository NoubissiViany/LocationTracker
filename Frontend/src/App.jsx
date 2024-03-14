import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
