import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideBarContext } from "./MainAdmin";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight, FaBell } from "react-icons/fa6";
import AdminNotification from "../../components/admin-components/AdminNotification";
import AdminAccount from "../../components/admin-components/AdminAccount";

const AdminHeader = () => {
  const { sidebar, setSidebar } = useContext(SideBarContext);
  const [notification, setNotification] = useState(false);
  const [account, setAccount] = useState(false);
  return (
    <div className="header relative z-40 sticky top-0 w-full py-3 border-b flex items-center justify-between h-fit bg-slate-50 text-slate-500">
      <div className="flex items-center gap-4 w-full">
        <GiHamburgerMenu
          className="w-6 h-6 cursor-pointer active:scale-95 text-neutral-900"
          onClick={() => setSidebar(true)}
        />
        <div className="flex items-center justify-between border rounded w-full bg-white">
          <input
            type="text"
            className="py-3 px-2 bg-inherit w-full outline-none"
            placeholder="Search User"
          />
          <p className="cursor-pointer border-l px-4 py-2">
            <FaSearch className="w-5 h-5" />
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full justify-end">
        <FaBell
          className="cursor-pointer w-7 h-7 hover:text-slate-700 transition-all"
          onClick={() => setNotification(true)}
        />
        <p
          className="bg-black rounded flex items-center gap-2 shadow text-slate-100 font-medium py-2 px-2 cursor-pointer"
          onClick={() => setAccount(true)}
        >
          Account <FaAngleRight />
        </p>
      </div>

      {notification && (
        <AdminNotification handleNotification={() => setNotification(false)} />
      )}

      {account && <AdminAccount handleAccount={() => setAccount(false)} />}
    </div>
  );
};

export default AdminHeader;
