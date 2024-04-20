import React from "react";
import { Link } from "react-router-dom";

const NotificationModalCards = ({ title, desc }) => {
  return (
    // It's going to be a link that navigates to notification page and shows details based on id
    <Link
      to="/dashboard/notifications"
      className="flex items-center w-full bg-white mx-[0px]"
    >
      <div className="flex flex-col w-[100%] border-l-4 border-l-green-300 border-b hover:bg-green-100 cursor-pointer transition-all duration-300">
        <p className="font-medium text-sm pl-2 pt-1 text-green-600">{title}</p>
        <p className="text-xs truncate px-2 pb-1 text-nowrap text-slate-700">
          {desc}
        </p>
      </div>
    </Link>
  );
};

export default NotificationModalCards;
