import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import { FaAngleRight, FaUser } from "react-icons/fa6";
import AdminUsersCard from "../../components/admin-components/AdminUsersCard";

const AdminUsers = () => {
  const cleanerRef = useRef();
  const [location, setLocation] = useState(false);
  const [cleaners, setCleaners] = useState([]);

  const [value, setValue] = useState("By");
  useEffect(() => {
    cleanerRef.current.focus();
  }, []);
  return (
    <div>
      <Title title={"Users"} />

      <div
        className="p-4 border rounded flex flex-col gap-3 overflow-auto"
        ref={cleanerRef}
      >
        <div className="p-2 border rounded w-full md:w-1/2 mx-auto flex justify-between items-center relative">
          <p className="font-medium text-sm">Registered Users</p>
          <select
            name="cleaners"
            id="cleaners"
            className="border rounded px-2 py-1 text-sm cursor-pointer outline-none"
            onChange={(e) => {
              setLocation(true);
              setValue(e.target.value);
              // console.log(value);
            }}
          >
            <option value="By">---Filter By---</option>
            <option value="All">All</option>
            <option value="Location">Location</option>{" "}
            {/* This will return a kinda search history thingy under the select that shows list of locations and a greater than arrow that when the card is clicked on, a request is made to the backend to return cleaners in that location */}
          </select>
          {location && (
            <p className="absolute w-fit h-fit right-2 top-10 border rounded flex flex-col bg-white text-sm">
              <span
                className="py-1 px-4 flex items-center gap-[34px] text-slate-600 hover:text-slate-800 transition-all duration-300 justify-between cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Lagos</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-4 flex items-center gap-[34px] text-slate-600 hover:text-slate-800 transition-all duration-300 justify-between cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Abuja</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-4 flex items-center gap-[34px] text-slate-600 hover:text-slate-800 transition-all duration-300 justify-between cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Aba</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-4 flex items-center gap-[34px] text-slate-600 hover:text-slate-800 transition-all duration-300 justify-between cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Owerri</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-4 flex items-center gap-[34px] text-slate-600 hover:text-slate-800 transition-all duration-300 justify-between cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Enugu</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-4 flex items-center gap-[34px] text-slate-600 hover:text-slate-800 transition-all duration-300 justify-between cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Ondo</span>
                <FaAngleRight />
              </span>
            </p>
          )}
        </div>

        {/* Users */}
        <div className="flex flex-col text-nowrap text-slate-800 text-sm border rounded mb-4">
          <h2 className="p-2 border-b font-semibold">Users in Enugu</h2>

          <div className="flex flex-col">
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
          </div>
        </div>
        <div className="flex flex-col text-nowrap text-slate-800 text-sm border rounded mb-4">
          <h2 className="p-2 border-b font-semibold">Users in Lagos</h2>

          <div className="flex flex-col">
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
          </div>
        </div>
        <div className="flex flex-col text-nowrap text-slate-800 text-sm border rounded mb-4">
          <h2 className="p-2 border-b font-semibold">Users in Abuja</h2>

          <div className="flex flex-col">
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
          </div>
        </div>
        <div className="flex flex-col text-nowrap text-slate-800 text-sm border rounded mb-4">
          <h2 className="p-2 border-b font-semibold">Users in Uyo</h2>

          <div className="flex flex-col">
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
            <AdminUsersCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
