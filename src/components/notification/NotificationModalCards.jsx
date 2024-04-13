import React from "react";
import { Link } from "react-router-dom";

const NotificationModalCards = () => {
  return (
    // It's going to be a link that navigates to notification page and shows details based on id
    <Link
      to="/dashboard/notifications"
      className="flex items-center w-full bg-white mx-[0px]"
    >
      <div className="flex flex-col w-[100%] border-l-4 border-l-green-300 bg-slate-50 hover:bg-green-100 cursor-pointer transition-all duration-300">
        <p className="font-medium text-sm pl-2 pt-1 text-green-600">
          Email Verification
        </p>
        <p className="text-xs truncate px-2 pb-1 text-nowrap text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Porro non laborum itaque
          dolorum ab vel error perferendis accusamus veniam? Distinctio.
        </p>
      </div>
    </Link>
  );
};

export default NotificationModalCards;
