import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { BgContext } from "../../App";
import data from "../../../db/storeDB";
import CloseButton from "../CloseButton";

const ProductDetails = ({ handleCloseProduct }) => {
  const { title, description, id } = data;
  const { cartModalCount, setCartModalCount, darkMode } = useContext(BgContext);
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
    <div
      className={`w-full h-screen bg-slate-500/75 flex items-center md:justify-center absolute top-0 px-[10px] md:py-[0px] md:px-[100px] flex-col mx-auto overflow-auto`}
    >
      <section
        className={`flex flex-col bg-white md:h-fit lg:h-[500px] md:justify-center mt-5 mb-5 md:mt-0 md:mb-0 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <div className="flex items-center px-2 md:px-6 pt-2 border-b pb-2">
          <h2 className="tracking-widest font-medium">Product details</h2>
          <div className="ml-auto">
            <CloseButton handleModalClose={handleCloseProduct} />
          </div>
        </div>
        <div
          className={`w-fit px-2 md:px-6 py-3 md:py-2 rounded-md flex flex-col md:grid md:grid-cols-2 items-center mx-auto gap-4 md:gap-2 bg-white ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <p className="md:col-span-1 h-[200px] w-[200px] md:w-fit md:h-fit lg:w-[400px] lg:h-[400px] md:flex md:items-center md:justify-center">
            <img
              src={currentProduct?.img ? currentProduct?.img : logo}
              alt="Product Image"
              // width={250}
              // height={250}
              className="rounded-md md:rounded-md md:flex md:items-center md:justify-center w-fit h-fit"
            />
          </p>
          <div className="flex flex-col gap-2 md:col-span-1">
            {cartSuccess && (
              <p className="text-green-500 text-center bg-green-50 rounded p-2">
                {currentProduct?.title + " successfully added to cart!"}
              </p>
            )}
            <span className="tracking-widest font-medium text-lg text-center md:text-start">
              {currentProduct?.title + " - " + currentProduct?.reviews ||
                "Loading..."}
            </span>
            <p className="flex flex-col">
              <span className="font-medium">Description</span>
              <span
                className={`text-sm ${
                  darkMode ? "text-white" : "text-slate-700"
                }`}
              >
                {currentProduct?.desc || "Loading..."}
              </span>
            </p>
            <p>
              <select
                name="size"
                id="size"
                className={`active:outline-none outline-none border-2 p-2 rounded w-full font-medium transition-all duration-300 ${
                  darkMode ? "dark-mode" : ""
                }`}
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
                className={`active:outline-none outline-none border-2 p-2 rounded w-full font-medium transition-all duration-300 ${
                  darkMode ? "dark-mode" : ""
                }`}
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
              className={`p-3 w-full hover:border-black font-medium md:hover:rounded rounded transition-all duration-300 ease-in-out ${
                darkMode
                  ? "bg-orange-500 text-white "
                  : "text-white bg-black hover:bg-black hover:text-white  border-2 border-black"
              }`}
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
      </section>
    </div>
  );
};

export default ProductDetails;
