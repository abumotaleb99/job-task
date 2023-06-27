import React from "react";
import Sidebar from "../pages/Dashboard/Shared/Sidebar";
import DashboardHeader from "../pages/Dashboard/Shared/DashboardHeader";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <div className="flex-grow">
        <DashboardHeader></DashboardHeader>
        {/* Main Content */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
