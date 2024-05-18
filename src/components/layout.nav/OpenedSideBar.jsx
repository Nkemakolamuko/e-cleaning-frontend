import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import {
  FaCalendarCheck,
  FaCheckDouble,
  FaGear,
  FaHouse,
  FaQuestion,
  FaRegBell,
  FaSquarePhoneFlip,
  FaStore,
  FaUsersGear,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { BgContext } from "../../App";
import AuthContext from "../../context-API/AuthProvider";
import { handleLogout } from "../../api/api.controller/logout";

const OpenedSideBar = ({ handleSideBarClose }) => {
  const { darkMode } = useContext(BgContext);
  const { setAuth } = useContext(AuthContext);
  const [activeLink, setActiveLink] = useState(null);

  const navigate = useNavigate();

  const handleActiveLink = (link) => {
    setActiveLink(localStorage.setItem("active", link));
  };

  // I used the local storage to make the active link persist even on refresh
  useEffect(() => {
    const linkStored = localStorage.getItem("active" || null);
    setActiveLink(linkStored);
  });

  return (
    <aside
      className={`w-full h-screen bg-white flex flex-col px-6 py-5 shadow-2xl md:shadow-lg z-50 border-r ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* <p className="text-lg font-bold">Clean-Off Agency</p> */}
      <div className="flex items-center justify-between w-full">
        <p className="text-sm md:text-base font-bold truncate w-[85%]">
          24/7 E-Laundry Service
        </p>

        <p onClick={handleSideBarClose} className="tooltip">
          <FaTimes className="w-6 h-6 text-rose-500 hover:bg-rose-600 hover:text-white transition-all duration-300 cursor-pointer active:scale-75" />
          <span className="tooltiptext rounded">Close Menu</span>
        </p>
      </div>
      <ul className="flex flex-col gap-1 my-4 text-green-900 overflow-auto scroll transition-all duration-300">
        <Link
          to="/dashboard"
          onClick={() => {
            handleActiveLink("/dashboard");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/dashboard"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/dashboard"
                ? "bg-green-500 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaHouse />
            </span>
            <span>Dashboard</span>
          </li>
        </Link>

        <Link
          to="/dashboard/cleaners"
          onClick={() => {
            handleActiveLink("/cleaners");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/cleaners"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/cleaners"
                ? "bg-green-500 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaUsersGear />
            </span>
            <span>Dry Cleaners Nearby</span>
          </li>
        </Link>

        <Link
          to="/dashboard/orders"
          onClick={() => {
            handleActiveLink("/orders");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/orders"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/orders"
                ? "bg-green-500 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaCheckDouble />
            </span>
            <span>Orders</span>
          </li>
        </Link>

        <Link
          to="/dashboard/notifications"
          onClick={() => {
            handleActiveLink("/notifications");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/notifications"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/notifications"
                ? "bg-green-500 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaRegBell />
            </span>
            <span>Notifications</span>
          </li>
        </Link>

        <Link
          to="/dashboard/store"
          onClick={() => {
            handleActiveLink("/store");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/store"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/store"
                ? "bg-green-500 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaStore />
            </span>
            <span>Our Store</span>
          </li>
        </Link>

        <Link
          to="/dashboard/faq"
          onClick={() => {
            handleActiveLink("/faq");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/faq"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/faq" ? "bg-green-500 text-white rounded-md" : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaQuestion />
            </span>
            <span>FAQ</span>
          </li>
        </Link>

        <Link
          to="/dashboard/history"
          onClick={() => {
            handleActiveLink("/history");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/history"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/history"
                ? "bg-green-500 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaCalendarCheck />
            </span>
            <span>History</span>
          </li>
        </Link>

        <Link
          to="/dashboard/contact"
          onClick={() => {
            handleActiveLink("/contact");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/contact"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/contact"
                ? "bg-green-500 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaSquarePhoneFlip />
            </span>
            <span>Contact Us</span>
          </li>
        </Link>

        <Link
          to="/dashboard/settings"
          onClick={() => {
            handleActiveLink("/settings");
            handleSideBarClose();
          }}
        >
          <li
            className={`flex items-center gap-4 rounded text-sm px-2 py-3 cursor-pointer hover:bg-green-500 hover:rounded-md hover:text-white ${
              darkMode ? "dark-mode hover:!bg-[#0000ff]" : ""
            } ${
              darkMode && activeLink === "/settings"
                ? "!bg-[#0000ff] !text-white rounded-md"
                : ""
            } ${
              activeLink === "/settings"
                ? "bg-green-500 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaGear />
            </span>
            <span>Settings</span>
          </li>
        </Link>
      </ul>

      {/* Log Out */}
      <p
        className="flex flex-col items-center text-rose-600 border border-slate-300 p-2 hover:bg-rose-600 hover:text-white transition-all duration-300 cursor-pointer"
        onClick={() => handleLogout(setAuth)}
      >
        <span>
          <FaSignOutAlt />
        </span>
        <span>Logout</span>
      </p>
    </aside>
  );
};

export default OpenedSideBar;
