import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { FaCartPlus, FaPlus } from "react-icons/fa6";
import { BgContext } from "../../App";
import data from "../../../db/storeDB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StoreCards = ({
  handleViewDetails,
  title,
  prevPrice,
  newPrice,
  id,
  img,
  reviews,
}) => {
  const {
    cartModalCount,
    setCartModalCount,
    cartId,
    setCartId,
    cartExistErr,
    setCartExistErr,
    cartAdded,
    setCartAdded,
    setCartItem,
    cartItem,
    cartTotal,
    setCartTotal,
    darkMode,
  } = useContext(BgContext);

  const addedProduct = data?.find((product) => {
    return product.id == cartId;
  });

  // To update cartTotal on load
  useEffect(() => {
    if (cartItem.includes(addedProduct) || addedProduct == undefined) {
      return;
    } else {
      setCartAdded(true);
      setCartModalCount(cartModalCount + 1);

      setCartItem([...cartItem, addedProduct]);
    }
  }, []);

  const handleCartItemId = (id) => {
    setCartId(id);
  };

  // const addToCartFn = () => {
  //   if (cartItem.includes(addedProduct) || addedProduct == undefined) {
  //     setCartExistErr(true);
  //     return;
  //   } else {
  //     setCartAdded(true);
  //     setCartModalCount(cartModalCount + 1);

  //     setCartItem([...cartItem, addedProduct]);
  //     // setCartTotal(cartItem);
  //   }
  // };

  // I used this useEffect method before - but it causes error to be true each time page loads
  useEffect(() => {
    const addToCartFn = () => {
      if (cartItem.includes(addedProduct) || addedProduct == undefined) {
        setCartExistErr(true);
        return;
      } else {
        setCartAdded(true);
        setCartModalCount(cartModalCount + 1);
        setCartItem([...cartItem, addedProduct]);
      }
    };
    if (cartId) {
      addToCartFn();
      setCartId("");
    }
  }, [cartId]);

  return (
    <div
      className={`h-full flex flex-col md:shadow-lg shadow-lg md:hover:shadow-lg items-center p-2 rounded scale-95 md:scale-100 transition-all duration-300 relative ${
        darkMode ? "dark-mode border-2 border-white" : ""
      }`}
    >
      <p
        className="right-2 top-2 absolute p-1 text-xs hover:bg-yellow-300 bg-yellow-400 text-slate-100 cursor-pointer shadow-md active:shadow-none active:scale-90 transition-all duration-300"
        onClick={() => {
          handleCartItemId(id);
          // addToCartFn();
        }}
      >
        <span>
          <FaCartPlus className="w-5 h-5" />
        </span>
      </p>
      <img
        src={img ? img : logo}
        alt="Product Image"
        width={"50%"}
        height={"50%"}
        className=""
      />
      <div className="flex flex-col h-full justify-end mx-auto text-center w-[80%] items-center gap-2">
        <p className="tracking-widest font-medium">
          {title} - {reviews}
        </p>
        <p className="flex items-center gap-4">
          <span
            className={`line-through text-rose-600 px-2 ${
              darkMode ? "!bg-white opacity-100" : "opacity-50"
            }`}
          >
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
