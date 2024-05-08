import React from "react";
import { Link } from "react-router-dom";

const AdminSideBarLink = ({ to, icon, title, handleClick, iconColor, bg }) => {
  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`px-6 py-3 flex items-center gap-4 hover:bg-green-50 ${
        bg && "bg-green-50"
      } transition-all duration-300`}
    >
      <p className={`${iconColor ? "text-green-500" : "text-slate-500"}`}>
        {icon}
      </p>
      <p className="font-medium">{title}</p>
    </Link>
  );
};

export default AdminSideBarLink;
