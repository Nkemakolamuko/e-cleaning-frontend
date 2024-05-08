import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BgContext } from "../../App";

const NotificationModalCards = ({ title, desc, handleNavigation }) => {
  const { darkMode } = useContext(BgContext);
  return (
    // It's going to be a link that navigates to notification page and shows details based on id
    <div
      // to="/dashboard/notifications"
      onClick={handleNavigation}
      className={`flex items-center w-full bg-white text-slate-600 mx-[0px] ${
        darkMode && "dark-mode !text-slate-200"
      }`}
    >
      <div
        className={`flex flex-col w-[100%] hover:bg-green-100 cursor-pointer py-2 transition-all duration-300 ${
          darkMode && "hover:bg-slate-800"
        }`}
      >
        <p className="font-medium text-sm pl-2 pt-1">{title}</p>
        <p className="text-xs truncate px-2 pb-1 text-nowrap">{desc}</p>
      </div>
    </div>
  );
};

export default NotificationModalCards;
