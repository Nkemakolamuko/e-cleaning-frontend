import React, { useContext, useState } from "react";
import logo from "../../assets/logo.jpg";
import { FaPlus } from "react-icons/fa6";
import { BgContext } from "../../App";

const StoreCards = ({ handleViewDetails }) => {
  const { cartModalCount, setCartModalCount } = useContext(BgContext);

  const handleCartModalCount = () => {
    setCartModalCount(() => cartModalCount + 1);
  };
  return (
    <div className="bg-white flex flex-col md:shadow-sm shadow-lg md:hover:shadow-lg items-center p-2 rounded transition-all duration-300 relative">
      <p
        className="right-0 top-0 absolute p-1 text-xs flex flex-col items-center hover:bg-slate-100 bg-slate-100 md:bg-white cursor-pointer transition-all duration-300"
        onClick={handleCartModalCount}
      >
        <span>
          <FaPlus className="w-5 h-5" />
        </span>
        <span className="text-[9px]">Add To Cart</span>
      </p>
      <img
        src={logo}
        alt="Product Image"
        width={"30%"}
        height={"30%"}
        className="rounded-full"
      />
      <div className="flex flex-col mx-auto text-center">
        <p className="tracking-widest font-medium">Nike Sneakers</p>
        <p className="flex items-center gap-4">
          <span className="line-through text-rose-600 opacity-60">
            N 12, 800
          </span>
          <span className="font-medium text-green-500">N 8, 400</span>
        </p>
        <button
          className="p-2 w-full bg-white hover:bg-black hover:text-white  border-2 hover:border-black font-medium hover:rounded transition-all duration-300 ease-in-out"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default StoreCards;
