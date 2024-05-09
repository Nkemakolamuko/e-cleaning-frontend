import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BgContext } from "../../App";
import { FaTrashCan } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const NotificationModalCards = ({ title, desc, handleNavigation }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div className="relative">
      <div
        // to="/dashboard/notifications"
        onClick={handleNavigation}
        className={`flex items-center w-full bg-white text-slate-600 mx-[0px] relative ${
          darkMode && "dark-mode !text-slate-200"
        }`}
      >
        <div
          className={`flex flex-col w-[100%] hover:bg-green-100 cursor-pointer py-2 border-b transition-all duration-300 ${
            darkMode && "hover:bg-slate-800"
          }`}
        >
          <p className="font-medium text-sm pl-2 pt-1">{title}</p>
          <div className="flex flex-col w-[90%]">
            <p className="text-xs truncate px-2 pb-1 text-nowrap">{desc}</p>
            <p className="text-xs px-2">more...</p>
          </div>
        </div>
      </div>
      <p
        className="absolute w-full z-[999] px-2 text-slate-500 top-4"
        onClick={() => toast("Coming soon... delete from page instead")}
      >
        <FaTrashCan className="active:scale-95 ml-auto" />
      </p>
    </div>
  );
};

export default NotificationModalCards;
