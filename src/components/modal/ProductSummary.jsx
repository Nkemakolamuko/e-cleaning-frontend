import React, { useContext, useEffect, useState } from "react";
import ProductSummaryDetails from "./ProductSummaryDetails";
import { BgContext } from "../../App";
import data from "../../../db/storeDB";

const ProductSummary = () => {
  const {
    cartTotal,
    setCartTotal,
    cartItem,
    setCartItem,
    cartId,
    total,
    setTotal,
  } = useContext(BgContext);
  const [mainSum, setMainSum] = useState([]);
  const [newSum, setNewSum] = useState(0);

  const addedProduct = data?.find((product) => {
    return product.id == cartId;
  });

  useEffect(() => {
    const calculatePrice = cartItem.map((val) => {
      // Since cartItem is an array of objects, I used map to access each individual object - then I accessed the 'newPrice' and used split to remove the '₦' because I want to sum up the values and '₦' can't be converted to Number later - the split returns an array with 2 values, but the first is an empty string, so i collect only the second value at index[1] - then I split the value again because I have to remove the trailing ',' in the amount - then I used join("") without any argument so I can put all the values inside an array
      return val.newPrice.split("₦")[1].split(",").join("");
    });
    // I assigned the value from the above iteration to totalPrice so I won't have to work with the main value itself
    const totalPrice = calculatePrice;

    // Then I used reduce method on the values - since it's an object (I used typeof to check) - so I can sum them all up, but when the summation is been done, I converted the individual values from strings to numbers ao I'd get summation and not concatenation
    const sumTotal = totalPrice.reduce((pVal, cVal) => {
      return Number(pVal) + Number(cVal);
    }, 0); // The initial value of '0' is so it doesn't through an error when the array is empty (Probably when we deleting items from cart)
    // Then of course I set the value to an existing null 'total'
    setTotal(sumTotal);
  }, []);

  useEffect(() => {
    const calculatePrice = cartItem.map((val) => {
      // Since cartItem is an array of objects, I used map to access each individual object - then I accessed the 'newPrice' and used split to remove the '₦' because I want to sum up the values and '₦' can't be converted to Number later - the split returns an array with 2 values, but the first is an empty string, so i collect only the second value at index[1] - then I split the value again because I have to remove the trailing ',' in the amount - then I used join("") without any argument so I can put all the values inside an array
      return val.newPrice.split("₦")[1].split(",").join("");
    });
    // I assigned the value from the above iteration to totalPrice so I won't have to work with the main value itself
    const totalPrice = calculatePrice;

    // Then I used reduce method on the values - since it's an object (I used typeof to check) - so I can sum them all up, but when the summation is been done, I converted the individual values from strings to numbers ao I'd get summation and not concatenation
    const sumTotal = totalPrice.reduce((pVal, cVal) => {
      return Number(pVal) + Number(cVal);
    }, 0); // The initial value of '0' is so it doesn't through an error when the array is empty (Probably when we deleting items from cart)
    // Then of course I set the value to an existing null 'total'
    setTotal(sumTotal);
  }, [cartItem]);

  // Why there are two useEffects is for when the page loads and when there's a change in the cartItem for the iteration to run again -

  return (
    <div className="max-w-fit flex-col flex items-center justify-between h-[70vh] overflow-auto transition-all duration-300 ease-in-out">
      <div>
        <ProductSummaryDetails />
      </div>
      <div className="sticky bottom-0 w-full bg-white px-2 pt-2">
        <div className="flex items-center justify-between w-full bg-slate-100 p-2 rounded-md transition-all duration-300">
          <p className="font-medium tracking-widest">Total</p>
          <p className="font-medium tracking-widest">₦{total || " "}</p>
        </div>

        <button className="w-full p-4 bg-black/80 text-white font-medium mt-3 rounded hover:bg-black transition-all duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductSummary;
