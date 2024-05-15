import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { toast } from "react-toastify";

const LocateActions = ({ setDirection, handleClose }) => {
  return (
    <>
      <p className="bg-black/60 backdrop-blur-md rounded pb-2 px-1 flex flex-col absolute top-14 left-4 text-white text-xs transition-all duration-300 h-fit">
        <span className="w-fit ml-auto mt-1 text-sm h-[1px] z-10 cursor-pointer">
          <FaTimes
            className="float-right p-[2px] rounded-full bg-white/10"
            onClick={handleClose}
          />
        </span>
        <span
          className="py-2 px-3 flex items-center gap-2 hover:bg-white/10 rounded cursor-pointer transition-all duration-200"
          onClick={() => {
            toast.success(
              "Working on it - call instead if description ain't good enough!"
            );
            setDirection;
          }}
        >
          Google map <FaAngleRight />
        </span>
        <span
          className="py-2 px-3 flex items-center gap-2 hover:bg-white/10 rounded cursor-pointer transition-all duration-200"
          onClick={setDirection}
        >
          Call for direction <FaAngleRight />
        </span>
      </p>
    </>
  );
};

export default LocateActions;
