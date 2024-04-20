import React from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";

const PaymentType = ({ handleClose }) => {
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center absolute top-0 p-[10px] md:p-[100px] lg:p-[300px] flex-col">
      <div className="ml-auto">
        <CloseButton handleModalClose={handleClose} />
      </div>
      <div className="w-full px-4 py-8 rounded-md flex flex-col gap-2 bg-white text-center">
        <p
          className="w-full bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 tracking-widest md:text-lg rounded font-semibold cursor-pointer transition-all duration-300"
          onClick={() => alert("This method is not advisable.")}
        >
          Cash
        </p>
        <p
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 md:p-4 tracking-widest md:text-lg rounded font-semibold cursor-pointer transition-all duration-300"
          onClick={() => {
            alert(
              "You'd be redirected to our trusted payment partner shortly."
            );
          }}
        >
          Transfer
        </p>
      </div>
    </div>
  );
};

export default PaymentType;
