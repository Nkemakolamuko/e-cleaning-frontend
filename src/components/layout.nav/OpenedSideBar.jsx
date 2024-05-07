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

const OpenedSideBar = ({ handleSideBarClose }) => {
  const { darkMode } = useContext(BgContext);
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

  // Handle Logout
  const handleLogout = () => {
    // // window.location.replace("/dashboard");
    // const confirmLogOut = confirm("Are you sure?");
    // if (confirmLogOut) {
    //   // window.location.href = "/login";
    //   navigate("/login");
    // }
    Swal.fire({
      title: "Are you sure?",
      text: "You will have to login again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#EC4899",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/login";
      }
    });
  };
  return (
    <aside
      className={`w-full h-screen bg-white flex flex-col px-6 py-5 shadow-2xl md:shadow-lg z-50 border-r ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* <p className="text-lg font-bold">Clean-Off Agency</p> */}
      <div className="flex items-center justify-between w-full">
        <p className="text-base md:text-lg font-bold truncate w-[80%]">
          24/7 E-Laundry Service
        </p>

        <p onClick={handleSideBarClose} className="tooltip">
          <FaTimes className="w-8 h-8 text-rose-500 hover:bg-rose-600 hover:text-white transition-all duration-300 cursor-pointer active:scale-75" />
          <span className="tooltiptext rounded">Close Menu</span>
        </p>
      </div>
      <ul className="flex flex-col gap-1 my-4 text-green-900 overflow-auto scroll transition-all duration-300">
        <Link to="/dashboard" onClick={() => handleActiveLink("/dashboard")}>
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/dashboard"
                ? "bg-green-300 text-white rounded-md"
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
          onClick={() => handleActiveLink("/cleaners")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/cleaners"
                ? "bg-green-300 text-white rounded-md"
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
          onClick={() => handleActiveLink("/orders")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/orders"
                ? "bg-green-300 text-white rounded-md"
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
          onClick={() => handleActiveLink("/notifications")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/notifications"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaRegBell />
            </span>
            <span>Notifications</span>
          </li>
        </Link>

        <Link to="/dashboard/store" onClick={() => handleActiveLink("/store")}>
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/store"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaStore />
            </span>
            <span>Our Store</span>
          </li>
        </Link>

        <Link to="/dashboard/faq" onClick={() => handleActiveLink("/faq")}>
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/faq" ? "bg-green-300 text-white rounded-md" : ""
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
          onClick={() => handleActiveLink("/history")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/history"
                ? "bg-green-300 text-white rounded-md"
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
          onClick={() => handleActiveLink("/contact")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/contact"
                ? "bg-green-300 text-white rounded-md"
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
          onClick={() => handleActiveLink("/settings")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:rounded-md hover:text-white ${
              activeLink === "/settings"
                ? "bg-green-300 text-white rounded-md"
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
        onClick={handleLogout}
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
