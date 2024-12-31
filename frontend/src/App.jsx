import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./page/Login";
import { Divide } from "lucide-react";

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
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
