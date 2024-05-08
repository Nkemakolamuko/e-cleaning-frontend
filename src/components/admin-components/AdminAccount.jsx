import React from "react";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { FaUser, FaUserGear } from "react-icons/fa6";

const AdminAccount = ({ handleAccount }) => {
  return (
    <div className="absolute w-[300px] right-2 top-16 border rounded shadow text-sm">
      <p className="w-full flex items-center justify-between px-2 py-2 border-b">
        <span className="text-slate-500 font-medium">Actions</span>
        <FaTimes className="cursor-pointer" onClick={handleAccount} />
      </p>

      <div className="flex items-center py-3 px-4 gap-4 hover:bg-slate-50 transition-all cursor-pointer">
        <FaUser />
        <p className="font-medium">Profile</p>
      </div>
      <div className="flex items-center py-3 px-4 gap-4 hover:bg-slate-50 transition-all cursor-pointer">
        <FaUserGear />
        <p className="font-medium">Account Setting</p>
      </div>
      <div className="flex items-center py-3 px-4 gap-4 hover:bg-slate-50 transition-all cursor-pointer">
        <FaSignOutAlt className="text-rose-500" />
        <p className="font-medium text-rose-500">Logout</p>
      </div>
    </div>
  );
};

export default AdminAccount;
