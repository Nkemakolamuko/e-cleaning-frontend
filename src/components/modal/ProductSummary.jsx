import React, { useState } from "react";
import ProductSummaryDetails from "./ProductSummaryDetails";

const ProductSummary = () => {
  return (
    <div className="max-w-full flex-col flex items-center justify-between h-[200px] overflow-hidden hover:overflow-auto transition-all duration-300 ease-in-out">
      <ProductSummaryDetails />
      <ProductSummaryDetails />
      <ProductSummaryDetails />
      <ProductSummaryDetails />
      <ProductSummaryDetails />
      <ProductSummaryDetails />
      <div className="flex items-center justify-between w-full mt-8 bg-slate-100 p-2 rounded-md transition-all duration-300">
        <p className="font-medium tracking-widest">Total</p>
        <p className="font-medium tracking-widest">N 2999.99</p>
      </div>

      <button className="w-full p-4 bg-black/80 text-white font-medium mt-3 rounded hover:bg-black transition-all duration-300">
        Checkout
      </button>
    </div>
  );
};

export default ProductSummary;
