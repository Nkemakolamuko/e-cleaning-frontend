import React from "react";

const AdminDashboardActionCard = ({ icon, title, desc }) => {
  return (
    <div className="shadow rounded p-4 flex items-center gap-4 w-full cursor-default hover:bg-slate-50 transition-all duration-300">
      {icon}

      <p className="flex flex-col text-slate-500 text-sm">
        <span className="font-medium">{title}</span>
        <span>{desc}</span>
      </p>
    </div>
  );
};

export default AdminDashboardActionCard;
