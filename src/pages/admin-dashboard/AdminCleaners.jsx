import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import { FaAngleRight, FaPen, FaTrashCan } from "react-icons/fa6";
import img from "../../assets/download.jpg";
import cleanersData from "../../../db/cleanersDb";

const AdminCleaners = () => {
  const cleanerRef = useRef();
  const [location, setLocation] = useState(false);
  const [cleaners, setCleaners] = useState([]);

  const [value, setValue] = useState("By");
  useEffect(() => {
    cleanerRef.current.focus();

    const data = cleanersData;
    setCleaners(data);
  }, []);
  return (
    <div>
      <Title title="Cleaners" />

      <div className="p-4 border rounded flex flex-col" ref={cleanerRef}>
        <div className="p-2 border rounded w-full md:w-1/2 mx-auto flex justify-between items-center relative">
          <p className="font-medium text-sm">Registered Cleaners</p>
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

        {/* Clicking on edit button only allows for editing the rating -- we not allowed to edit other info */}
        {/* Cleaners Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
          {cleaners?.map((cleaner) => (
            <div
              className="border rounded flex flex-col w-full p-2 text-sm text-center"
              key={cleaner.id}
            >
              <img
                src={img}
                alt="cleaner Image"
                width={"50%"}
                height={"50%"}
                className="mx-auto"
              />

              <p className="py-2 font-semibold text-base">
                {cleaner.businessName} - {cleaner.rating} star rating.
              </p>
              <div className="flex items-center gap-2 pb-2 w-full lg:w-1/2 justify-center mx-auto text-nowrap">
                <code>{cleaner.phoneNumber} - </code>

                <code className="">{cleaner.name}</code>
              </div>
              <p className="pb-2 text-slate-700">{cleaner.desc}</p>

              <p className="pb-2 text-slate-700">
                <span className="font-medium">Location:</span>{" "}
                {cleaner.location}
              </p>

              <p className="pb-2 text-slate-700">
                <span className="font-medium">Address:</span> {cleaner.address}
              </p>

              <div className="w-full flex flex-col md:flex-row items-center gap-2">
                <p className="rounded text-center py-3 border border-green-500 text-green-500 active:scale-95 cursor-pointer w-full flex justify-center">
                  <FaPen />
                </p>
                <p className="rounded text-center py-3 border border-rose-500 text-rose-500 active:scale-95 cursor-pointer w-full flex justify-center">
                  <FaTrashCan />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCleaners;
