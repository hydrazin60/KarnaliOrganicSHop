import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./page/Login";
import { Divide } from "lucide-react";
import Register from "./page/Register";
import SpecificsProduct from "./components/product/specificsProduct";
import UserDashbord from "./page/UserDashbord";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/specificsProduct/:id"
          element={
            <div>
              <Header />
              <SpecificsProduct />
            </div>
          }
        />
        <Route
          path="/user/dashbord/:id"
          element={
            <div>
              <Header />
              <UserDashbord />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
