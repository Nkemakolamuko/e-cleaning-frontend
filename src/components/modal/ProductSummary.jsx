import React, { useContext, useEffect, useState } from "react";
import ProductSummaryDetails from "./ProductSummaryDetails";
import { BgContext } from "../../App";
import data from "../../../db/storeDB";

const ProductSummary = () => {
  const { cartTotal, setCartTotal, cartItem, setCartItem, cartId } =
    useContext(BgContext);
  const [mainSum, setMainSum] = useState([]);
  const [newSum, setNewSum] = useState(0);

  const addedProduct = data?.find((product) => {
    return product.id == cartId;
  });

  // useEffect(() => {
  //   console.log("Initial SummaryDetails Parent", cartItem);

  //   // setCartItem([...cartItem, addedProduct]);
  //   cartItem.map((product) => setCartTotal([...cartTotal, product]));
  //   // setCartTotal(cartItem);

  //   console.log("Initial Cart Total summary parent ", cartTotal);
  // }, []);

  // useEffect(() => {
  //   console.log("From SummaryDetails Parent", cartItem);
  //   cartItem.map((product) => setCartTotal([...cartTotal, product]));

  //   // setCartItem([...cartItem, addedProduct]);
  //   // setCartTotal(cartItem);

  //   console.log("After Cart Total summary parent ", cartTotal);
  // }, [cartItem]);

  return (
    <div className="max-w-fit flex-col flex items-center justify-between h-[70vh] overflow-auto transition-all duration-300 ease-in-out">
      <ProductSummaryDetails />

      <div className="sticky bottom-0 w-full bg-white px-2 pt-2">
        <div className="flex items-center justify-between w-full bg-slate-100 p-2 rounded-md transition-all duration-300">
          <p className="font-medium tracking-widest">Total</p>
          <p className="font-medium tracking-widest">₦125, 650</p>
        </div>

        <button className="w-full p-4 bg-black/80 text-white font-medium mt-3 rounded hover:bg-black transition-all duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductSummary;
