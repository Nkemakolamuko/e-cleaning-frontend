import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

const ProductDetails = ({ handleCloseProduct }) => {
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center absolute -top-16 px-[10px] pb-[10px] pt-[70px] md:p-[200px] flex-col mx-auto">
      <p
        className="text-rose-600 border-2 border-white rounded hover:border-rose-600 hover:text-white hover:bg-rose-600 p-2 md:p-2 font-semibold ml-auto mb-2 cursor-pointer active:scale-90 transition-all duration-300"
        onClick={handleCloseProduct}
      >
        <FaTimes className="w-6 h-6 md:w-10 md:h-10 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300 cursor-default" />
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
          <span className="tracking-widest font-medium text-lg">
            Nike Sneakers
          </span>
          <p className="flex flex-col">
            <span className="font-medium">Description</span>
            <span className="text-slate-700 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              description Lorem ipsum dolor sit amet.
            </span>
          </p>
          <p>
            <select
              name="size"
              id="size"
              className="active:outline-none outline-none border-2 p-2 rounded w-full font-medium transition-all duration-300"
            >
              <option value="size">Select size</option>
              <option value="size">Size 44</option>
              <option value="size">Size 45</option>
              <option value="size">Size 46</option>
              <option value="size">Size 47</option>
              <option value="size">Size 48</option>
              <option value="size">Size 49</option>
            </select>
          </p>

          <button className="p-2 w-full text-white bg-black/90 hover:bg-black hover:text-white  border-2 border-black/90 hover:border-black font-medium md:hover:rounded rounded transition-all duration-300 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
