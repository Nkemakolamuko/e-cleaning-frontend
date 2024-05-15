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
    <div
      className={`header relative z-40 top-0 w-full border-b flex items-center justify-between h-fit bg-slate-50 text-slate-500 over ${
        sidebar && "truncate"
      }`}
    >
      <div className="flex items-center gap-4 w-full">
        {!sidebar && (
          <p className="p-1 rounded-full hover:bg-slate-200 transition-all duration-300 tooltip">
            <GiHamburgerMenu
              className="w-7 h-7 cursor-pointer active:scale-95 text-neutral-900"
              onClick={() => setSidebar(true)}
            />
            <span className="tooltiptext rounded">Open Menu</span>
          </p>
        )}
        <div className="flex items-center justify-between border rounded w-full bg-white">
          <input
            type="text"
            className="py-2 md:py-2 px-2 bg-inherit w-full outline-none"
            placeholder="Search User, Cleaner, and Product"
          />
          <p className="cursor-pointer border-l md:px-4 px-3 py-2 md:py-2">
            <FaSearch className="md:w-5 md:h-5 h-4 w-4" />
          </p>
        </div>
      </div>
      {!sidebar && (
        <div className="flex items-center gap-4 w-full justify-end">
          <FaBell
            className="cursor-pointer w-5 h-5 md:w-6 md:h-6 hover:text-slate-700 active:scale-95 transition-all"
            onClick={() => setNotification(true)}
          />
          <p
            className="bg-black rounded text-sm flex items-center gap-2 shadow text-slate-100 font-medium py-2 px-2 cursor-pointer active:scale-95"
            onClick={() => setAccount(true)}
          >
            Account <FaAngleRight />
          </p>
        </div>
      )}

      {notification && (
        <AdminNotification handleNotification={() => setNotification(false)} />
      )}

      {account && <AdminAccount handleAccount={() => setAccount(false)} />}
    </div>
  );
};

export default AdminHeader;
