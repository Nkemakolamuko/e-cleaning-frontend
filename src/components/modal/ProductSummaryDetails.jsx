import React, { Profiler, useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { BgContext } from "../../App";
import data from "../../../db/storeDB";

const ProductSummaryDetails = ({
  handleDeleteFromCart,
  handleIncrement,
  handleDecrement,
  id,
  newPrice,
  title,
  quantity,
  star,
  img,
}) => {
  const { darkMode } = useContext(BgContext);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <div
        className={`grid grid-cols-5 md:grid-cols-4 items-center justify-between w-full my-2 gap-6 px-2 pb-2 ${
          darkMode ? "cart-border" : "border-b-2 border-b-slate-100"
        }`}
        // key={product.id}
        // key={Math.random()}
      >
        <div className="flex items-center w-fit gap-4 md:col-span-2 col-span-3">
          <img
            src={img}
            alt="CartImage"
            width={"60rem"}
            height={"60rem"}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <p className="font-medium md:text-base text-sm">{title}</p>
            <p className="md:text-base text-sm">₦ {newPrice}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 col-span-1 text-sm md:text-base">
          <p
            className={`p-1 md:p-2 rounded-md active:scale-90 bg-slate-100 text-slate-800 hover:bg-slate-200  transition-all duration-300 ${
              disabled
                ? "bg-rose-100 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            onClick={handleDecrement}
          >
            <FaMinus />
          </p>
          <p>{quantity}</p>
          <p
            className="p-1 md:p-2 rounded-md active:scale-90 bg-green-300 cursor-pointer text-white hover:bg-green-400  transition-all duration-300"
            onClick={handleIncrement}
          >
            <FaPlus />
          </p>
        </div>
        <p
          className="bg-slate-100 hover:text-white hover:bg-rose-600 active:text-white active:bg-rose-600 p-1 md:p-2 rounded-md active:scale-90 cursor-pointer text-slate-500 transition-all duration-300 col-span-1 w-fit ml-auto text-sm md:text-base"
          onClick={handleDeleteFromCart}
        >
          <FaTrash />
        </p>
      </div>
    </>
  );
};

export default ProductSummaryDetails;
