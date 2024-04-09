import React from "react";
import logo from "../../assets/logo.jpg";
import {
  FaBook,
  FaBookBookmark,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa6";

const CleanersCard = ({ fav, handleFav, name }) => {
  return (
    <div className="p-2 rounded h-fit flex flex-col md:shadow-sm shadow-lg hover:shadow-lg w-full items-center bg-white border border-green-100 to-white relative transition-all duration-300">
      {fav ? (
        <p
          className="absolute right-2 top-0 flex flex-col items-center cursor-pointer transition-all duration-300"
          onClick={handleFav}
        >
          <span className="text-purple-700">
            <FaBookmark />
          </span>
        </p>
      ) : (
        <p
          className="absolute right-2 top-0 flex flex-col items-center cursor-pointer transition-all duration-300"
          onClick={handleFav}
        >
          <span className="text-slate-400">
            <FaRegBookmark />
          </span>
        </p>
      )}
      <img
        src={logo}
        alt="Cleaner Image"
        height={"80rem"}
        width={"80rem"}
        className="rounded-full mx-auto"
      />
      <div className="flex flex-col w-full text-slate-800 gap-2 mt-2">
        <p className="text-center text-xs md:text-base font-medium tracking-widest">
          {name || "Tony Best"}
        </p>

        <a
          href="tel:+2347040876440"
          target="_blank"
          className="md:w-[70%] mx-auto w-full"
        >
          <button className="p-2 md:p-3 bg-neutral-900 text-white font-medium tracking-widest rounded text-xs md:text-sm active:scale-90 md:w-full w-full">
            Call Now!
          </button>
        </a>
      </div>
    </div>
  );
};

export default CleanersCard;
