import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import { FaAngleRight } from "react-icons/fa6";

const AdminCleaners = () => {
  const cleanerRef = useRef();
  const [location, setLocation] = useState(false);
  const [value, setValue] = useState("By");
  useEffect(() => {
    cleanerRef.current.focus();
  }, []);
  return (
    <div>
      <Title title="Cleaners" />

      <div
        className="p-4 border rounded flex flex-col relative"
        ref={cleanerRef}
      >
        <div className="p-2 border rounded w-full mx-auto flex justify-between items-center">
          <p className="font-medium text-sm">Registered Cleaners</p>
          <select
            name="cleaners"
            id="cleaners"
            className="border rounded px-2 py-1 text-sm cursor-pointer outline-none"
            onChange={(e) => {
              setLocation(true);
              setValue(e.target.value);
              console.log(value);
            }}
          >
            <option value="By">---Filter By---</option>
            <option value="All">All</option>
            <option value="Location">Location</option>{" "}
            {/* This will return a kinda search history thingy under the select that shows list of locations and a greater than arrow that when the card is clicked on, a request is made to the backend to return cleaners in that location */}
          </select>
          {location && (
            <p className="absolute w-fit h-fit right-4 md:right-4 top-16 border rounded-b flex flex-col bg-white text-sm">
              <span
                className="py-1 px-[34px] flex items-center gap-2 cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Lagos</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-[34px] flex items-center gap-2 cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Abuja</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-[34px] flex items-center gap-2 cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Aba</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-[34px] flex items-center gap-2 cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Owerri</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-[34px] flex items-center gap-2 cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Enugu</span>
                <FaAngleRight />
              </span>
              <span
                className="py-1 px-[34px] flex items-center gap-2 cursor-pointer border-b hover:bg-slate-100"
                onClick={() => setLocation(false)}
              >
                <span>Ondo</span>
                <FaAngleRight />
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCleaners;
