import AdminAccountDashboard from "@/components/Admin/adminAccountDashboard ";
import AccountDashboard from "@/components/users/AccountDashboard ";
import React, { useState } from "react";

export default function UserDashboard() {
  const [isUser, setIsUser] = useState(false);
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          {isUser ? "Your Account" : "Admin Dashboard"}{" "}
        </h2>
      </div>
      <>{isUser ? <AccountDashboard /> : <AdminAccountDashboard />}</>
    </div>
  );
}
