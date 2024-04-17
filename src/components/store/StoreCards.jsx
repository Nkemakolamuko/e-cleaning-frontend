import React, { useContext, useState } from "react";
import logo from "../../assets/logo.jpg";
import { FaCartPlus, FaPlus } from "react-icons/fa6";
import { BgContext } from "../../App";

const StoreCards = ({ handleViewDetails, title, prevPrice, newPrice }) => {
  const { cartModalCount, setCartModalCount } = useContext(BgContext);

  const handleCartModalCount = () => {
    setCartModalCount(() => cartModalCount + 1);
  };
  return (
    <div className="bg-white h-full flex flex-col md:shadow-lg shadow-lg md:hover:shadow-lg items-center p-2 rounded scale-95 md:scale-100 transition-all duration-300 relative">
      <p
        className="right-2 top-2 absolute p-1 text-xs hover:bg-yellow-300 bg-yellow-400 text-slate-100 cursor-pointer shadow-md active:shadow-none active:scale-90 transition-all duration-300"
        onClick={handleCartModalCount}
      >
        <span>
          <FaCartPlus className="w-5 h-5" />
        </span>
      </p>
      <img
        src={logo}
        alt="Product Image"
        width={"30%"}
        height={"30%"}
        className="rounded-full"
      />
      <div className="flex flex-col h-full justify-end mx-auto text-center w-[80%] items-center">
        <p className="tracking-widest font-medium">{title}</p>
        <p className="flex items-center gap-4">
          <span className="line-through text-rose-600 opacity-50">
            {prevPrice}
          </span>
          <span className="font-medium text-green-500">{newPrice}</span>
        </p>
        <button
          className="p-2 w-full bg-green-500/85 hover:bg-green-500 text-white  border-2 border-green-500/85 hover:border-green-500 font-medium hover:rounded-md rounded transition-all duration-300 ease-in-out"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default StoreCards;
