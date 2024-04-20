import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { BgContext } from "../../App";
import ProductSummary from "./ProductSummary";
import CloseButton from "../CloseButton";
import { FaCartArrowDown } from "react-icons/fa6";

const CartModal = ({ handleModalClose }) => {
  const { cartModalCount, setCartModalCount } = useContext(BgContext);

  const handleCartModalCount = () => {
    const youSure = confirm("Are you sure?");
    if (youSure) {
      // setCartModalCount(1);
      setCartModalCount([]);
    }
  };
  return (
    <div className="max-w-fit h-fit bg-white flex items-center flex-col justify-center absolute top-2 right-2 md:right-8 z-[999] shadow-lg shadow-black/20 rounded transition-all duration-300">
      {/* <div className="w-full flex items-center justify-between pl-4">
        <p className="tracking-widest font-medium">
          Items In Your Cart:{" "}
          <span className="text-green-500">{cartModalCount}</span>
        </p>
        <CloseButton handleModalClose={handleModalClose} />
      </div> */}
      {!cartModalCount ? (
        // <div className="px-4 py-6 flex flex-col w-full bg-white my-[10px] mx-[55px] md:my-[50px] text-center justify-center md:mx-[100px]">
        //   <div className="w-full flex items-center justify-between pl-4">
        //     <p className="tracking-widest font-medium">
        //       Items In Your Cart:{" "}
        //       <span className="text-green-500">{cartModalCount}</span>
        //     </p>
        //     <CloseButton handleModalClose={handleModalClose} />
        //   </div>
        //   <p className="text-slate-500">Cart Is Empty</p>
        // </div>

        <div className="fixed top-0 left-0 w-full md:w-1/2 flex flex-col bg-white h-[50vh] md:h-[30vh] shadow-lg">
          <div className="w-full flex items-center justify-between pl-2 border-b">
            <p className="tracking-widest font-medium">
              Items In Your Cart:{" "}
              <span className="text-green-500">{cartModalCount}</span>
            </p>
            <div className="pt-2 pr-2">
              <CloseButton handleModalClose={handleModalClose} />
            </div>
          </div>
          <p className="text-slate-500 h-full mx-auto flex justify-center items-center gap-2">
            <FaCartArrowDown /> Cart Is Empty
          </p>
        </div>
      ) : (
        <>
          <div className="pb-1 pt-1 md:py-4 flex flex-col w-full md:w-1/2 bg-white fixed top-0 left-0 z-[999]">
            <div className="w-full flex items-center justify-between pl-4 border-b">
              <p className="tracking-widest font-medium">
                Items In Your Cart:{" "}
                <span className="text-green-500">{cartModalCount}</span>
              </p>
              <div className="pt-2 pr-2">
                <CloseButton handleModalClose={handleModalClose} />
              </div>
            </div>
            <ProductSummary />
          </div>

          {/* <p
            className="w-full p-2 text-center bg-rose-300 hover:bg-rose-600 text-white active:bg-rose-600 font-medium hover:rounded cursor-pointer hover:text-white transition-all"
            onClick={handleCartModalCount}
          >
            Clear Your Cart
          </p> */}
        </>
      )}
    </div>
  );
};

export default CartModal;
