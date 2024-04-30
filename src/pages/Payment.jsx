import React, { useState } from "react";
import {
  FaAngleLeft,
  FaHashtag,
  FaMoneyBill1,
  FaMoneyBillTransfer,
  FaNairaSign,
  FaPaypal,
  FaPesetaSign,
  FaPesoSign,
  FaSackDollar,
  FaStripe,
  FaStripeS,
} from "react-icons/fa6";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Payment = () => {
  const [showPaymentMsg, setShowPaymentMsg] = useState(false);
  return (
    <div className="container mx-auto md:max-w-[800px] h-full flex justify-center flex-col px-2 mb-8">
      <div className="flex items-center justify-between py-2">
        <div className="">
          <Title title="Payment Page" />
        </div>
        <Link
          to="/dashboard/store"
          className="underline underline-offset-1 pt-2 pb-4 hover:bg-green-100 bg-green-50 active:bg-green-100 flex items-center gap-2 px-2 text-slate-500 rounded transition-all duration-300"
        >
          <span>
            <FaAngleLeft />
          </span>
          <span>Back to store</span>
        </Link>
      </div>

      <h2 className="mb-2 font-medium mt-4 text-slate-500">
        Select Payment Option
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-slate-600">
        <p
          className="p-3 rounded cursor-pointer items-center justify-center border shadow hover:shadow-lg flex flex-col active:scale-90 transition-all duration-300"
          onClick={() => setShowPaymentMsg(true)}
        >
          <FaMoneyBill1 className="w-6 h-6 text-blue-500" />
          <span className="text-sm">Flutterwave</span>
        </p>
        <p
          className="p-3 rounded cursor-pointer items-center justify-center border shadow hover:shadow-lg flex flex-col active:scale-90 transition-all duration-300"
          onClick={() => setShowPaymentMsg(true)}
        >
          <FaStripe className="w-10 h-8 text-blue-500" />
          <span className="text-sm">Stripe</span>
        </p>
        <p
          className="p-3 rounded cursor-pointer items-center justify-center border shadow hover:shadow-lg flex flex-col active:scale-90 transition-all duration-300"
          onClick={() => setShowPaymentMsg(true)}
        >
          <FaNairaSign className="w-6 h-6 text-blue-500" />
          <span className="text-sm">Payoneer</span>
        </p>
        <p
          className="p-3 rounded cursor-pointer items-center justify-center border shadow hover:shadow-lg flex flex-col active:scale-90 transition-all duration-300"
          onClick={() => setShowPaymentMsg(true)}
        >
          <FaPaypal className="w-6 h-6 text-blue-500" />
          <span className="text-sm">Paypal</span>
        </p>
        <p
          className="p-3 rounded cursor-pointer items-center justify-center border shadow hover:shadow-lg flex flex-col active:scale-90 transition-all duration-300"
          onClick={() => setShowPaymentMsg(true)}
        >
          <FaSackDollar className="w-6 h-6 text-blue-500" />
          <span className="text-sm">PayStack</span>
        </p>
        <p
          className="p-3 rounded cursor-pointer items-center justify-center border shadow hover:shadow-lg flex flex-col active:scale-90 transition-all duration-300"
          onClick={() => setShowPaymentMsg(true)}
        >
          <FaMoneyBillTransfer className="w-6 h-6 text-blue-500" />
          <span className="text-sm">Bank Transfer</span>
        </p>
        <p
          className="p-3 rounded cursor-pointer items-center justify-center border shadow hover:shadow-lg flex flex-col active:scale-90 transition-all duration-300"
          onClick={() => setShowPaymentMsg(true)}
        >
          <FaPesoSign className="w-6 h-6 text-blue-500" />
          <span className="text-sm">Peso</span>
        </p>
        <p
          className="p-3 rounded cursor-pointer items-center justify-center border shadow hover:shadow-lg flex flex-col active:scale-90 transition-all duration-300"
          onClick={() => setShowPaymentMsg(true)}
        >
          <FaHashtag className="w-6 h-6 text-blue-500" />
          <span className="text-sm">USSD</span>
        </p>
      </div>
      {/* Clicking on any will take you to the payment provider */}

      {showPaymentMsg && (
        <div className="mt-4 bg-green-50 flex items-start justify-between rounded px-4 py-4 text-green-700 cursor-default">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-base text-slate-700">
              Coming soon...
            </p>
            <p>
              Call or WhatsApp{" "}
              <span
                className="md:hover:border md:hover-border-black border md:border-0 rounded px-2 cursor-text animate-pulse"
                contentEditable
              >
                <code>07040876440</code>
              </span>{" "}
              to place order and make payments.
            </p>
          </div>
          <p
            className="h-full bg-rose-100 text-rose-500 px-1 rounded cursor-pointer active:scale-90 shadow-lg active:shadow-none"
            onClick={() => setShowPaymentMsg(!showPaymentMsg)}
          >
            Close
          </p>
        </div>
      )}
    </div>
  );
};

export default Payment;
