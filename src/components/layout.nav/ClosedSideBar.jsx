import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
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

const ClosedSideBar = ({ handleSideBarOpen }) => {
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
    // I'd use -sign in- page here
    // window.location.replace("/dashboard");
    const confirmLogOut = confirm("Are you sure?");
    if (confirmLogOut) {
      // window.location.href = "/login";
      navigate("/login");
    }
  };
  return (
    <aside
      className={`w-fit h-screen bg-white flex flex-col px-2 py-4 shadow-sm md:border-r z-[999] ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* <p className="text-lg font-bold">Clean-Off Agency</p> */}
      <div className="px-1 py-[5px] tooltip">
        <p
          onClick={handleSideBarOpen}
          className="active:scale-75 cursor-pointer"
        >
          <GiHamburgerMenu className="w-6 h-6" />
        </p>
        <span className="tooltiptext rounded">Open Menu</span>
      </div>
      <ul className="flex flex-col gap-1 my-4 text-green-900 overflow-hidden hover:overflow-auto w-fit transition-all duration-300">
        <Link to="/dashboard" onClick={() => handleActiveLink("/dashboard")}>
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/dashboard"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaHouse />
            </span>
          </li>
        </Link>

        <Link
          to="/dashboard/cleaners"
          onClick={() => handleActiveLink("/cleaners")}
        >
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/cleaners"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaUsersGear />
            </span>
          </li>
        </Link>

        <Link
          to="/dashboard/orders"
          onClick={() => handleActiveLink("/orders")}
        >
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/orders"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaCheckDouble />
            </span>
          </li>
        </Link>

        <Link
          to="/dashboard/notifications"
          onClick={() => handleActiveLink("/notifications")}
        >
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/notifications"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaRegBell />
            </span>
          </li>
        </Link>

        <Link to="/dashboard/store" onClick={() => handleActiveLink("/store")}>
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/store"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaStore />
            </span>
          </li>
        </Link>

        <Link to="/dashboard/faq" onClick={() => handleActiveLink("/faq")}>
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/faq" ? "bg-green-300 text-white rounded-md" : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaQuestion />
            </span>
          </li>
        </Link>

        <Link
          to="/dashboard/history"
          onClick={() => handleActiveLink("/history")}
        >
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/history"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaCalendarCheck />
            </span>
          </li>
        </Link>

        <Link
          to="/dashboard/contact"
          onClick={() => handleActiveLink("/contact")}
        >
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/contact"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaSquarePhoneFlip />
            </span>
          </li>
        </Link>

        <Link
          to="/dashboard/settings"
          onClick={() => handleActiveLink("/settings")}
        >
          <li
            className={`flex items-center gap-4 bg-green-50 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/settings"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaUsersGear />
            </span>
          </li>
        </Link>
      </ul>

      {/* Log Out */}
      <p
        className="flex flex-col items-center text-rose-600 border border-slate-300 p-2 hover:bg-rose-600 hover:text-white w-fit transition-all duration-300 cursor-pointer tooltip"
        onClick={handleLogout}
      >
        <span>
          <FaSignOutAlt />
        </span>
        <span className="tooltiptext rounded">Logout</span>
      </p>
    </aside>
  );
};

export default ClosedSideBar;
