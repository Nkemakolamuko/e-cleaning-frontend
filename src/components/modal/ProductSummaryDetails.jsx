import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

const ProductSummaryDetails = () => {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="flex items-center justify-between w-full my-2">
      <div className="flex items-center w-fit gap-4">
        <img
          src={logo}
          alt="CartImage"
          width={"60rem"}
          height={"60rem"}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <p className="font-medium">Sneakers</p>
          <p>N 2000</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p
          className={`p-1 md:p-2 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200  transition-all duration-300 ${
            disabled
              ? "bg-rose-100 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={() => {
            if (count < 1) {
              setDisabled(true);
              return;
            } else {
              setDisabled(false);
              setCount(count - 1);
            }
          }}
        >
          <FaMinus />
        </p>
        <p>{count}</p>
        <p
          className="p-1 md:p-2 rounded-md bg-slate-100 cursor-pointer text-slate-800 hover:bg-slate-200  transition-all duration-300"
          onClick={() => {
            setCount(count + 1);
            setDisabled(false);
          }}
        >
          <FaPlus />
        </p>
      </div>
      <p className="bg-slate-100 hover:text-white hover:bg-rose-600 p-1 md:p-2 rounded-md cursor-pointer text-slate-500 mt-4 transition-all duration-300">
        <FaTrash />
      </p>
    </div>
  );
};

export default ProductSummaryDetails;
