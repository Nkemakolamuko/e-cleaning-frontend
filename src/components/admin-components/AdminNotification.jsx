import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const AdminNotification = ({ handleNotification }) => {
  return (
    <div className="absolute right-2 top-16 w-[300px] h-fit border rounded bg-white flex flex-col text-sm cursor-default">
      <p className="w-full flex items-center justify-between px-2 py-2 border-b">
        <span className="text-slate-500 font-medium">Notification</span>
        <FaTimes className="cursor-pointer" onClick={handleNotification} />
      </p>
      <div className="flex items-center justify-between py-3 px-4 gap-4 hover:bg-slate-50 transition-all">
        <p className="font-medium">New Order</p>
        <FaTrashCan className="text-slate-500 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between py-3 px-4 gap-4 hover:bg-slate-50 transition-all">
        <p className="font-medium">New User</p>
        <FaTrashCan className="text-slate-500 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between py-3 px-4 gap-4 hover:bg-slate-50 transition-all">
        <p className="font-medium">Product Review</p>
        <FaTrashCan className="text-slate-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default AdminNotification;
