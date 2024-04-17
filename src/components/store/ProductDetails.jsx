import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { BgContext } from "../../App";
import data from "../../../db/storeDB";

const ProductDetails = ({ handleCloseProduct }) => {
  const { title, description, id } = data;
  const { cartModalCount, setCartModalCount } = useContext(BgContext);
  const [cartSuccess, setCartSuccess] = useState(false);
  const [cartError, setCartError] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleAddToCart = () => {
    setCartModalCount(() => cartModalCount + 1);
    setCartSuccess(true);
  };

  useEffect(() => {
    const descID = localStorage.getItem("store-id"); // We have our particular product ID
    const getProduct = () => {
      // We write a function to find a product based on ID
      const foundProduct = data.find((product) => product.id == descID); // We find a product based on the ID that matches the comparison ID
      // console.log(foundProduct);
      setCurrentProduct(foundProduct); // Then we set it to a null state variable
    };
    setTimeout(() => {
      setCartSuccess(false);
    }, 5000);

    // We will only call the getProduct function when we have our ID
    if (descID) {
      getProduct();
    }
  }, [cartModalCount]);

  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center absolute -top-16 px-[10px] pb-[10px] pt-[70px] md:p-[200px] flex-col mx-auto">
      <p
        className="text-rose-600 border-2 group border-white rounded hover:border-rose-600 hover:text-white hover:bg-rose-600 p-2 md:p-2 font-semibold ml-auto mb-2 cursor-pointer active:scale-90 transition-all duration-300"
        onClick={handleCloseProduct}
      >
        <FaTimes className="w-6 h-6 md:w-10 md:h-10 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 cursor-pointer" />
      </p>
      <div className="w-fit px-4 py-6 rounded-md flex flex-col md:flex-row items-center mx-auto gap-4 bg-white">
        <p className="">
          <img
            src={logo}
            alt="Product Image"
            width={"250rem"}
            height={"250rem"}
            className="rounded-full"
          />
        </p>
        <div className="flex flex-col gap-2">
          {cartSuccess && (
            <p className="text-green-500 text-center bg-green-50 rounded p-2">
              {currentProduct?.title + " successfully added to cart!"}
            </p>
          )}
          <span className="tracking-widest font-medium text-lg">
            {currentProduct?.title || "Loading..."}
          </span>
          <p className="flex flex-col">
            <span className="font-medium">Description</span>
            <span className="text-slate-700 text-sm">
              {currentProduct?.desc || "Loading..."}
            </span>
          </p>
          <p>
            <select
              name="size"
              id="size"
              className="active:outline-none outline-none border-2 p-2 rounded w-full font-medium transition-all duration-300"
            >
              <option value="size">Select size</option>
              {currentProduct?.size.map((sz) => (
                <option value={sz} key={sz}>
                  {sz}
                </option>
              ))}
            </select>
          </p>
          <p>
            <select
              name="color"
              id="color"
              className="active:outline-none outline-none border-2 p-2 rounded w-full font-medium transition-all duration-300"
            >
              <option value="color">Choose Color</option>
              {currentProduct?.color.map((clr) => (
                <option value={clr} key={clr}>
                  {clr}
                </option>
              ))}
            </select>
          </p>

          <button
            className="p-2 w-full text-white bg-yellow-500/90 hover:bg-yellow-500 hover:text-white  border-2 border-yellow-500/90 hover:border-yellow-500 font-medium md:hover:rounded rounded transition-all duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
          {cartError && (
            <p className="text-rose-500 text-center bg-rose-50 rounded p-2">
              Error while adding {currentProduct?.title} to cart - try again
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
