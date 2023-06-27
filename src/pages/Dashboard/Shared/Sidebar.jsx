import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/dashboard_logo.png";
import dashboardIcon from "../../../assets/icons/dashboard_home.png";
import coursesIcon from "../../../assets/icons/courses.png";
import accountIcon from "../../../assets/icons/account.png";
import logoutIcon from "../../../assets/icons/logout.png";

const Sidebar = () => {
  return (
    <div className="hidden lg:block bg-[#418CD1] text-white w-16 lg:w-72 p-4">
      <div className="flex justify-between items-baseline px-7">
        <div className="flex items-center ">
          <img src={logo} alt="" />
          <h1 className="text-2xl text-[#fff] font-semibold pl-2">Job Task</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul className="px-4 pt-10">
        <li className="flex items-center hover:bg-[#4D89C3] rounded-md px-3 py-3 mb-3">
          <img src={dashboardIcon} alt="" />
          <Link to="" className="text-sm  text-[#FFFFFF] font-medium ps-2">
            Dashboard
          </Link>
        </li>
        <li className="flex items-center hover:bg-[#4D89C3] rounded-md px-3 py-3 mb-3">
          <img src={coursesIcon} alt="" />
          <Link to="" className="text-sm  text-[#FFFFFF] font-medium ps-2">
            Courses
          </Link>
        </li>
        <li className="flex items-center hover:bg-[#4D89C3] rounded-md px-3 py-3 mb-3">
          <img src={accountIcon} alt="" />
          <Link to="" className="text-sm  text-[#FFFFFF] font-medium ps-2">
            Account
          </Link>
        </li>
        <li className="flex items-center hover:bg-[#4D89C3] rounded-md px-3 py-3 mb-3">
          <img src={logoutIcon} alt="" />
          <Link to="" className="text-sm  text-[#FFFFFF] font-medium ps-2">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
