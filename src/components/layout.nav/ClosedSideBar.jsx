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
  const { darkMode, notification } = useContext(BgContext);
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
      className={`w-fit h-screen bg-white flex flex-col px-2 py-4 shadow-lg md:border-r z-[50] ${
        window.innerHeight < 500 && "overflow-y-auto"
        // The height thing is I can add a scroll for the sidebar on smaller devices - but with the overflow-y-auto enabled, the tooltip hides - so that's why I don't want to enable it globally
      } ${darkMode ? "dark-mode closed-sidebar" : ""}`}
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
      <ul className="flex flex-col gap-1 my-4 text-green-900 w-fit transition-all duration-300">
        <Link
          to="/dashboard"
          className="tooltip"
          onClick={() => handleActiveLink("/dashboard")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/dashboard"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaHouse />
            </span>
          </li>
          <span className="tooltiptext rounded">Dashboard</span>
        </Link>

        <Link
          to="/dashboard/cleaners"
          className="tooltip"
          onClick={() => handleActiveLink("/cleaners")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/cleaners"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaUsersGear />
            </span>
          </li>
          <span className="tooltiptext rounded">Cleaners</span>
        </Link>

        <Link
          to="/dashboard/orders"
          className="tooltip"
          onClick={() => handleActiveLink("/orders")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/orders"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaCheckDouble />
            </span>
          </li>
          <span className="tooltiptext rounded">Orders</span>
        </Link>

        <Link
          to="/dashboard/notifications"
          className="tooltip"
          onClick={() => handleActiveLink("/notifications")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/notifications"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaRegBell className="relative" />
              <span
                className={`absolute 
                 py-1 bg-rose-500/80 text-white text-xs -mt-8 rounded-full ${
                   notification?.length > 9 ? "px-1" : "px-[9px]"
                 } `}
              >
                {notification?.length > 9 ? "9+" : notification?.length || "0"}
              </span>
            </span>
          </li>
          <span className="tooltiptext rounded">Notifications</span>
        </Link>

        <Link
          to="/dashboard/store"
          className="tooltip"
          onClick={() => handleActiveLink("/store")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/store"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaStore />
            </span>
          </li>
          <span className="tooltiptext rounded">Our Store</span>
        </Link>

        <Link
          to="/dashboard/faq"
          className="tooltip"
          onClick={() => handleActiveLink("/faq")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/faq" ? "bg-green-300 text-white rounded-md" : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaQuestion />
            </span>
          </li>
          <span className="tooltiptext rounded">FAQ</span>
        </Link>

        <Link
          to="/dashboard/history"
          className="tooltip"
          onClick={() => handleActiveLink("/history")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/history"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaCalendarCheck />
            </span>
          </li>
          <span className="tooltiptext rounded">History</span>
        </Link>

        <Link
          to="/dashboard/contact"
          className="tooltip"
          onClick={() => handleActiveLink("/contact")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/contact"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaSquarePhoneFlip />
            </span>
          </li>
          <span className="tooltiptext rounded">Contact Us</span>
        </Link>

        <Link
          to="/dashboard/settings"
          className="tooltip"
          onClick={() => handleActiveLink("/settings")}
        >
          <li
            className={`flex items-center gap-4 bg-green-100 px-2 py-4 cursor-pointer hover:bg-green-300 hover:text-white hover:rounded-md ${
              activeLink === "/settings"
                ? "bg-green-300 text-white rounded-md"
                : ""
            } transition-all duration-300`}
          >
            <span className="">
              <FaGear />
            </span>
          </li>
          <span className="tooltiptext rounded">User Setting</span>
        </Link>
      </ul>

      {/* Log Out */}
      <p
        className="flex flex-col items-center text-rose-600 border border-rose-600 hover:border-rose-600 p-2 hover:bg-rose-600 hover:text-white w-fit transition-all duration-300 cursor-pointer tooltip"
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
