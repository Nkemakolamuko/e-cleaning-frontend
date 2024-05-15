import { split } from "postcss/lib/list";
import React, { useState } from "react";

const AdminUsersCard = () => {
  const [joinedAt, setJoinedAt] = useState(new Date().toUTCString());
  return (
    <div className="flex items-center gap-6 p-2 border-b overflow-auto scroll hover:bg-slate-100 transition-all duration-300">
      <span className="font-medium">Jeremy Doku</span>
      <span>jeremydoku@gmail.com</span>
      <span>
        Plot 294 Zone A, Kusa Jisalo Crescent, Apo New Garki Town, Apo - Abuja.
      </span>
      <span>Joined - {joinedAt.split("GMT")}</span>
      <span className="py-1 bg-rose-500 text-white cursor-pointer active:scale-95">
        Restrict account
      </span>
      <span className="py-1 bg-rose-500 text-white cursor-pointer active:scale-95">
        Delete account
      </span>
      <span className="px-2 py-1 cursor-pointer border active:scale-95">
        Edit
      </span>
    </div>
  );
};

export default AdminUsersCard;
