import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
