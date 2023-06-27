import React, { useState } from "react";
import Sidebar from "../pages/Dashboard/Shared/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <div className="flex-grow">
        <div>
          <div>Header</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
