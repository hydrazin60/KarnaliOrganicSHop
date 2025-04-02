import React from "react";
import { useNavigate } from "react-router-dom";

const adminOptions = [
  {
    title: "Invoice",
    description: "Manage and generate invoices",
  },
  {
    title: "Upload Products",
    description: "Add new products to the platform",
  },
  {
    title: "Manage Products",
    description: "View, edit, or remove products",
  },
];

const AdminAccountDashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (title) => {
    if (title === "Manage Products") {
      navigate("/admin/manage-products");
    } else if (title === "Upload Products") {
      navigate("/admin/upload-products");
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="admin-options">
        {adminOptions.map((option, index) => (
          <div
            key={index}
            className="option"
            onClick={() => handleNavigation(option.title)}
          >
            <h2>{option.title}</h2>
            <p>{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAccountDashboard;
