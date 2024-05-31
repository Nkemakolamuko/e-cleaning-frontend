import React from "react";

const UserDashboardActionCard = ({ icon, title, desc, darkMode }) => {
  return (
    <div
      className={`shadow rounded p-4 flex items-center gap-4 w-full cursor-default hover:bg-slate-50 border transition-all duration-300 ${
        darkMode && "hover:bg-slate-800"
      }`}
    >
      {icon}

      <p
        className={`flex flex-col text-slate-500 text-sm ${
          darkMode && "!text-slate-200"
        }`}
      >
        <span className="font-semibold">{title}</span>
        <code>{desc}</code>
      </p>
    </div>
  );
};

export default UserDashboardActionCard;
