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
import ProductUpload from "./page/Admin/ProductUpload";

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
          path="/specificsProduct/:id"
          element={
            <>
              <Header />
              <SpecificsProduct />
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
          path="/admin/product/upload/:id"
          element={
            <>
              <Header />
              <ProductUpload />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
