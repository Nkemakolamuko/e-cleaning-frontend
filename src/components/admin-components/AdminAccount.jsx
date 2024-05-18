import React, { useContext } from "react";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { FaUser, FaUserGear } from "react-icons/fa6";
import { handleLogout } from "../../api/api.controller/logout";
import AuthContext from "../../context-API/AuthProvider";
import { Link } from "react-router-dom";

const AdminAccount = ({ handleAccount }) => {
  const { setAuth } = useContext(AuthContext);
  return (
    <div className="absolute w-[300px] right-2 top-16 border rounded shadow text-sm bg-white">
      <p className="w-full flex items-center justify-between px-2 py-2 border-b">
        <span className="text-slate-500 font-medium">Account Actions</span>
        <FaTimes className="cursor-pointer" onClick={handleAccount} />
      </p>

      <Link
        to="/admin-dashboard2521/admin-profile"
        className="flex items-center py-3 px-4 gap-4 hover:bg-slate-50 transition-all cursor-pointer"
      >
        <FaUser />
        <p className="font-medium">Profile</p>
      </Link>
      <Link
        to="/admin-dashboard2521/admin-profile"
        className="flex items-center py-3 px-4 gap-4 hover:bg-slate-50 transition-all cursor-pointer"
      >
        <FaUserGear />
        <p className="font-medium">Account Setting</p>
      </Link>
      <div
        className="flex items-center py-3 px-4 gap-4 hover:bg-slate-50 transition-all cursor-pointer"
        onClick={() => handleLogout(setAuth)}
      >
        <FaSignOutAlt className="text-rose-500" />
        <p className="font-medium text-rose-500">Logout</p>
      </div>
    </div>
  );
};

export default AdminAccount;
