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

  useEffect(() => {
    cartItem.map((product) => {
      let initial = product.newPrice;
      setCartTotal((initial += product.newPrice));
    });
    console.log("Initial Cart Total summary parent ", cartTotal);
    // if (cartItem.includes(addedProduct) || addedProduct == undefined) {
    //   // console.log("can not");
    //   return;
    // } else {
    //   setCartItem([...cartItem, addedProduct]);
    //   // console.log("Initial Cart Item from card: ", cartItem);
    // }
  }, []);

  useEffect(() => {
    console.log("From SummaryDetails Parent", cartItem);
    cartItem.map((product) => {
      let initial = product.newPrice;
      setCartTotal((initial += product.newPrice));
    });
    console.log("After Cart Total ", cartTotal);
    console.log("Stringed ", cartTotal.toString().split("₦"));

    // setMainSum([...mainSum, sum.split("₦")]);
    // console.log("Sum ", sum.split("₦"));
    // console.log("Main Sum ", mainSum);
  }, [cartItem]);

  return (
    <div className="max-w-fit flex-col flex items-center justify-between h-[70vh] overflow-auto transition-all duration-300 ease-in-out">
      <ProductSummaryDetails />
      {/* <ProductSummaryDetails />
      <ProductSummaryDetails />
      <ProductSummaryDetails />
      <ProductSummaryDetails />
      <ProductSummaryDetails /> */}
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
