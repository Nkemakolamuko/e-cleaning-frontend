import React, { useContext, useEffect, useState } from "react";
import ProductSummaryDetails from "./ProductSummaryDetails";
import { BgContext } from "../../App";
import data from "../../../db/storeDB";

const ProductSummary = () => {
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
    quantity,
    setQuantity,
    total,
    setTotal,
    darkMode,
  } = useContext(BgContext);

  // const [newQty, setNewQty] = useState(1);

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

  useEffect(() => {
    if (cartItem.includes(addedProduct) || addedProduct == undefined) {
      return;
    } else {
      setCartItem([...cartItem, addedProduct]);
      setCartTotal(cartItem);
      // setNewQty((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const addToCartFn = () => {
      if (cartItem.includes(addedProduct) || addedProduct == undefined) {
        return;
      } else {
        setCartItem([...cartItem, addedProduct]);
        // setNewQty(quantity++);
        setCartTotal(cartItem);
      }

      if (cartItem?.includes(addedProduct)) {
        return;
      } else {
        setCartModalCount(cartModalCount + 1);
        setCartItem([...cartItem, addedProduct]);
        setCartTotal(cartItem);
      }
    };

    addToCartFn();
  }, [cartId]);

  // Delete from cart
  const handleDeleteFromCart = (id) => {
    const youSure = confirm("Are you sure?");
    youSure &&
      setCartItem(
        cartItem.filter((product) => {
          return product.id !== id;
        })
      );

    youSure && setCartModalCount(cartModalCount - 1);
  };

  // Increment
  const handleIncrement = (id) => {
    const foundProduct = cartItem.find((product) => {
      return product.id === id;
    });
    foundProduct.quantity++;
    setTotal(
      (prev) =>
        prev + Number(foundProduct.newPrice.split("₦")[1].split(",").join(""))
    );
  };

  // Decrement
  const handleDecrement = (id) => {
    const foundProduct = cartItem.find((product) => {
      return product.id === id;
    });
    foundProduct.quantity && foundProduct.quantity--;
    foundProduct.quantity &&
      setTotal(
        (prev) =>
          prev - Number(foundProduct.newPrice.split("₦")[1].split(",").join(""))
      );
  };

  return (
    <div className="bg-transparent h-[80vh] w-full">
      <div
        className={`max-w-full md:max-w-full flex-col flex items-center justify-between h-[100%] overflow-auto bg-white shadow-xl shadow-black/20 transition-all duration-300 ease-in-out ${
          darkMode ? "dark-mode shadow shadow-white/50" : ""
        }`}
      >
        <div className={`w-full px-2 ${darkMode ? "dark-mode" : ""}`}>
          {cartItem &&
            cartItem?.map(({ title, newPrice, id, quantity, img }) => (
              <ProductSummaryDetails
                handleDeleteFromCart={() => handleDeleteFromCart(id)}
                handleIncrement={() => handleIncrement(id)}
                handleDecrement={() => handleDecrement(id)}
                id={id}
                title={title}
                newPrice={newPrice}
                key={id}
                quantity={quantity}
                img={img}
              />
            ))}
        </div>
        <div
          className={`sticky bottom-0 w-full bg-white px-2 pt-2 pb-2 ${
            darkMode ? "dark-mode pb-0" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between w-full bg-slate-100 px-2 py-3 rounded-md transition-all duration-300 ${
              darkMode ? "dark-mode !bg-white !text-black" : ""
            }`}
          >
            <p className="font-medium !tracking-widest">Total</p>
            <p className="font-medium !tracking-widest">₦{total || " "}</p>
          </div>
          <p
            className={`flex flex-row items-center py-2 gap-2 w-full ${
              darkMode ? "dark-mode !text-white" : ""
            }`}
          >
            <span
              className={`text-slate-700 w-[30%] text-sm ${
                darkMode ? "dark-mode" : ""
              }`}
            >
              Enter Voucher Code
            </span>
            <input
              type="text"
              className="py-2 md:py-3 px-2 text-slate-600 border-2 border-orange-500/80 rounded outline-none w-[70%]"
              placeholder="(Optional)"
            />
          </p>

          <button
            className={`w-full p-4 bg-black/80 text-white font-medium rounded hover:bg-black transition-all duration-300 ${
              darkMode ? "dark-mode !bg-orange-500" : ""
            }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
