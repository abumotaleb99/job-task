import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/Ellipse 28.png";
import logo from "../../../assets/dashboard_logo.png";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="">
      <div className="bg-[#6078EA] flex justify-between px-5 md:px-28 py-4 md:py-5">
        <div className="flex items-center md:hidden">
          <img src={logo} alt="" />
          <h1 className="text-xl md:text-2xl text-[#fff] font-semibold pl-2">
            Job Task
          </h1>
        </div>
        <div className="w-3/5">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full border border-gray-300 px-3 py-2 hidden md:block rounded-md focus:outline-none focus:ring "
          />
        </div>
        <div className="flex items-center gap-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 absolute text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <div className="relative -top-1 -right-2 bg-orange-900 h-4 w-4 rounded-full border border-white flex justify-center items-center">
              <span style={{ fontSize: 10 }} className="">
                9
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="h-11 w-11 rounded-full">
              <img src={profileImage} className="w-full" alt="" />
            </div>
            <div className="hidden md:block">
              <h3 className="text-base text-[#FFFFFF] font-semibold">
                Dr. Johirul
              </h3>
              <p className="text-xs text-[#FFFFFF] font-normal">Teacher</p>
            </div>

            <div className="relative inline-block">
              <svg
                onClick={toggleDropdown}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              {isOpen && (
                <ul className="absolute right-0 bg-white px-5 rounded-md pt-1">
                  <li>
                    <Link>Account</Link>
                  </li>
                  <li>
                    <Link>Logout</Link>
                  </li>
                </ul>
              )}
            </div>

            <div className="relative inline-block">
              <svg
                onClick={toggleDropdownMenu}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:hidden text-[#fff]"
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
              {isOpenMenu && (
                <ul className="absolute right-0 bg-white px-5 rounded-md flex flex-col pt-1">
                  <Link
                    to=""
                    className="text-sm  font-medium   rounded-md px-3 py-2 mb-1"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to=""
                    className="text-sm  font-medium   rounded-md px-3 py-2 mb-1"
                  >
                    Courses
                  </Link>
                  <Link
                    to=""
                    className="text-sm  font-medium   rounded-md px-3 py-2 mb-1"
                  >
                    Account
                  </Link>
                  <Link
                    to=""
                    className="text-sm  font-medium   rounded-md px-3 py-2 mb-1"
                  >
                    Logout
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
