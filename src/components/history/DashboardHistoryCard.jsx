import React, { useContext } from "react";
import img from "../../assets/userImage.jpg";
import { FaHistory } from "react-icons/fa";
import { BgContext } from "../../App";
import { Link } from "react-router-dom";

const DashboardHistoryCard = ({ businessName, location, desc, id }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <Link
      to={`/dashboard/history/${id}`}
      className="flex items-center justify-between border rounded p-2 hover:shadow-lg transition-all duration-300 tooltip"
    >
      <div className="w-[40%] md:w-[30%] h-full">
        <img
          src={img}
          alt="Cleaner image"
          className="w-[100%] h-[100%] rounded transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-1 text-sm cursor-pointer w-[60%] md:w-[70%]">
        <div className="pl-2 flex items-center justify-between">
          {" "}
          <p className="text-xs">12-05-2024</p>{" "}
          <p className="text-xs cursor-pointer hover:underline">
            More details...
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="pl-2 text-base font-medium">{businessName}</p>
          <code className="pl-2 text-base">N2, 000</code>
        </div>
        <div className="pl-2 flex items-center justify-between">
          <p className=" w-[30%]">{location}</p>{" "}
          <p className="truncate text-xs w-[70%]">{desc}</p>
        </div>
        <p className="pl-2 text-[10px]">12:54:05PM</p>
        <p
          className={`h-2 bg-green-200 w-full text-green-900 ml-2 flex items-center justify-center border-y border-l rounded-y rounded-l ${
            darkMode
              ? "!bg-[#0000ff] border-l border-l-[#0000ff] border-y border-y-[#0000ff] !text-white"
              : ""
          }`}
        ></p>
        <p
          className={`h-2 bg-green-200 w-full text-green-900 ml-2 flex items-center justify-center border-y border-l rounded-y rounded-l ${
            darkMode
              ? "!bg-[#0000ff] border-l border-l-[#0000ff] border-y border-y-[#0000ff] !text-white"
              : ""
          }`}
        >
          {/* <FaHistory />{" "} */}
        </p>
      </div>
      <span className="tooltiptext rounded">Click for more details</span>
    </Link>
  );
};

export default DashboardHistoryCard;
