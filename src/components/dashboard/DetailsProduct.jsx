import React, { useContext } from "react";
import { BgContext } from "../../App";

const DetailsProduct = ({ handleAddToCart }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div
      className={`text-slate-600 text-sm ${
        darkMode ? "dark-mode !text-slate-200" : ""
      }`}
    >
      <div className="flex items-baseline gap-2 justify-center">
        <p className="font-medium text-6xl text-green-500">20%</p>
        <p className="text-rose-500 line-through text-2xl">off</p>
      </div>
      <h2 className="font-medium text-base">
        Easy On Spray Starch - 100cl and 750ml
      </h2>
      <p className="flex w-full justify-between mx-auto border-y">
        <span className="py-2 font-medium text-rose-500 text-lg opacity-80 line-through w-1/2 flex justify-center">
          N3,800
        </span>
        <span className="py-2 font-medium text-green-500 text-lg w-1/2 flex justify-center">
          N2,900
        </span>
      </p>
      <p className="mt-2">Hurry before product runs out</p>
      <p>Qty Left : 12</p>

      <p
        className="py-3 rounded text-white bg-orange-500 text-center text-base w-full font-medium cursor-pointer mt-2 shadow-lg active:scale-95"
        onClick={handleAddToCart}
      >
        Add To Cart
      </p>
    </div>
  );
};

export default DetailsProduct;
