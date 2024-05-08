import React from "react";

const DetailsProduct = ({ handleAddToCart }) => {
  return (
    <div className="">
      <div className="flex items-baseline gap-2">
        <p className="font-medium text-6xl text-green-500">20%</p>
        <p className="text-rose-500 line-through text-2xl">off</p>
      </div>
      <h2 className="font-medium text-lg">Easy On Spray Starch - 100cl</h2>
      <p className="flex justify-between w-1/2">
        <span className="py-2 font-medium text-rose-500 text-lg opacity-80 line-through">
          N3,800
        </span>
        <span className="py-2 font-medium text-green-500 text-lg">N2,900</span>
      </p>
      <p className="mt-2">Hurry before product runs out</p>
      <p>Qty Left : 12</p>

      <p
        className="py-3 rounded text-white bg-orange-500 text-center w-full font-medium cursor-pointer mt-2 shadow-lg active:scale-95"
        onClick={handleAddToCart}
      >
        Add To Cart
      </p>
    </div>
  );
};

export default DetailsProduct;
