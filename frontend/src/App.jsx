import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./page/Login";
import { Divide } from "lucide-react";
import Register from "./page/Register";
// import SpecificsProduct from "./page/product/specificsProduct";
import UserDashbord from "./page/UserDashbord";
import ProductUpload from "./page/Admin/ProductUpload";
import ManageUsers from "./page/Admin/ManageUsers";
import ManageProduct from "./page/Admin/ManageProduct";
import SingleProductPage from "./page/product/SingleProductPage";
import BarChartComponent from "./components/Admin/Dashbord";
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
          path="/specificsProduct/:id"
          element={
            <>
              <Header />
              {/* <SpecificsProduct /> */}
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
        <Route
          path="/admin/manage_users/:id"
          element={
            <>
              <Header />
              <ManageUsers />
            </>
          }
        />
        <Route
          path="/admin/product_manage/:id"
          element={
            <>
              <Header />
              <ManageProduct />
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
        <Route
          path="/user/see_single_product/:id"
          element={
            <>
              <Header />
              <SingleProductPage />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
