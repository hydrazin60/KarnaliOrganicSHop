import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";

import Login from "./page/Login";

import Register from "./page/Register";
import UserDashbord from "./page/UserDashbord";

import Analisics from "./components/Admin/Analisics";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route
          path="/user/dashbord/:id"
          element={
            <>
              <Header />
              <UserDashbord />
            </>
          }
        />

        <Route
          path="/sell/dashbord"
          element={
            <>
              <Header />
              <Analisics />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
