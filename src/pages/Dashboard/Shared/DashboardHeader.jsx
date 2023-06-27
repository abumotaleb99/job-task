import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/Ellipse 28.png";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="bg-[#6078EA] flex justify-between px-28 py-5">
        <div className="w-3/5">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring "
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
            <div>
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
                <ul className="absolute bg-white px-5 rounded-md pt-1">
                  <li>
                    <Link>Account</Link>
                  </li>
                  <li>
                    <Link>Logout</Link>
                  </li>
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
