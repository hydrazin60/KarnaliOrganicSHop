import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import AdminAccountDashboard from "./components/Admin/AdminAccountDashboard";
import Analytics from "./components/Admin/Analytics";
import ManageProducts from "./components/Admin/ManageProducts";
import UploadProducts from "./components/Admin/UploadProducts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminAccountDashboard />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/manage-products" element={<ManageProducts />} />
        <Route path="/admin/upload-products" element={<UploadProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
