import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { BgContext } from "../../App";
import data from "../../../db/storeDB";

const ProductSummaryDetails = () => {
  const {
    cartId,
    cartItem,
    setCartItem,
    cartExistErr,
    setCartExistErr,
    cartAdded,
    setCartAdded,
    cartModalCount,
    setCartModalCount,
    cartTotal,
    setCartTotal,
  } = useContext(BgContext);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const addedProduct = data?.find((product) => {
    return product.id == cartId;
  });

  useEffect(() => {
    if (cartItem.includes(addedProduct) || addedProduct == undefined) {
      return;
    } else {
      setCartItem([...cartItem, addedProduct]);
      cartItem.map((product) => {
        let initial = product.newPrice;
        setCartTotal((initial += product.newPrice));
      });
      console.log("Initial Cart Total summary child ", cartTotal);
      // console.log("Initial Cart Item: ", cartItem);
    }
  }, []);

  // console.log(allAddedProduct);
  useEffect(() => {
    const addToCartFn = () => {
      // console.log("After Cart Item: ", cartItem);
      if (cartItem.includes(addedProduct) || addedProduct == undefined) {
        return;
      } else {
        setCartItem([...cartItem, addedProduct]);
        cartItem.map((product) => {
          let initial = "";
          setCartTotal((initial += product.newPrice));
        });
        console.log("Initial Cart Total summary child ", cartTotal);
        // console.log("After Cart Item: ", cartItem);
      }

      // if (cartId == null) {
      //   console.log("It does... or null...");
      //   setCartExistErr(true);
      //   return;
      // } else
      if (cartItem?.includes(addedProduct)) {
        // setCartExistErr(true);
        // console.log("Err From summary");
        return;
      } else {
        // setCartAdded(true);
        // console.log("Err From summary add");
        setCartModalCount(cartModalCount + 1);
        // setTimeout(() => {
        setCartItem([...cartItem, addedProduct]);
        cartItem.map((product) => {
          let initial = "";
          setCartTotal((initial += product.newPrice));
        });
        console.log("Initial Cart Total summary child ", cartTotal);
        // }, 3000);
      }
    };
    addToCartFn();
    // console.log(cartItem);
  }, [cartId]);

  return (
    <>
      {cartItem &&
        cartItem?.map((product) => (
          <div
            className="grid grid-cols-5 md:grid-cols-4 items-center justify-between w-full my-2 gap-6 px-2"
            // key={product.id}
            key={Math.random()}
          >
            <div className="flex items-center w-fit gap-4 md:col-span-2 col-span-3">
              <img
                src={logo}
                alt="CartImage"
                width={"60rem"}
                height={"60rem"}
                className="rounded-md"
              />
              <div className="flex flex-col">
                <p className="font-medium md:text-base text-sm">
                  {product?.title}
                </p>
                <p className="md:text-base text-sm">{product?.newPrice}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 col-span-1 text-sm md:text-base">
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
                className="p-1 md:p-2 rounded-md bg-green-300 cursor-pointer text-white hover:bg-green-400  transition-all duration-300"
                onClick={() => {
                  setCount(count + 1);
                  setDisabled(false);
                }}
              >
                <FaPlus />
              </p>
            </div>
            <p className="bg-slate-100 hover:text-white hover:bg-rose-600 p-1 md:p-2 rounded-md cursor-pointer text-slate-500 transition-all duration-300 col-span-1 w-fit ml-auto text-sm md:text-base">
              <FaTrash />
            </p>
          </div>
        ))}
    </>
  );
};

export default ProductSummaryDetails;
