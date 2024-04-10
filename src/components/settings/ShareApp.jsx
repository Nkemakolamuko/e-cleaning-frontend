import React from "react";
import CloseButton from "../CloseButton";
import {
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const ShareApp = ({ handleCloseShare }) => {
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center justify-center md:justify-start gap-2 absolute -top-16 p-[10px] md:px-[300px] md:pb-[300px] md:pt-[200px] flex-col">
      <div className="ml-auto">
        <CloseButton handleModalClose={handleCloseShare} />
      </div>
      <div className="w-full px-4 py-6 rounded-md flex flex-col gap-2 bg-white text-center">
        <h2 className="tracking-widest font-semibold text-lg mb-2">
          Share Via
        </h2>
        <p
          className="w-full bg-green-500 hover:bg-green-600 text-white p-2 tracking-widest rounded font-semibold cursor-pointer flex items-center justify-start gap-2 transition-all duration-300"
          //   onClick={() => alert("This method is not advisable.")}
        >
          <FaWhatsapp className="w-6 h-6" />
          WhatsApp
        </p>
        <p
          className="w-full bg-neutral-900 hover:bg-neutral-950 text-white p-2 tracking-widest rounded font-semibold cursor-pointer flex items-center justify-start gap-2 transition-all duration-300"
          //   onClick={() => {
          //     alert(
          //       "You'd be redirected to our trusted payment partner shortly."
          //     );
          //   }}
        >
          <FaXTwitter className="w-6 h-6" />
          Twitter
        </p>
        <p
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 tracking-widest rounded font-semibold cursor-pointer flex items-center justify-start gap-2 transition-all duration-300"
          //   onClick={() => {
          //     alert(
          //       "You'd be redirected to our trusted payment partner shortly."
          //     );
          //   }}
        >
          <FaFacebook className="w-6 h-6" />
          FaceBook
        </p>

        <p
          className="w-full bg-neutral-900 hover:bg-neutral-950 text-white p-2 tracking-widest rounded font-semibold cursor-pointer flex items-center justify-start gap-2 transition-all duration-300"
          //   onClick={() => {
          //     alert(
          //       "You'd be redirected to our trusted payment partner shortly."
          //     );
          //   }}
        >
          <FaEnvelope className="w-6 h-6" />
          Text Message
        </p>
      </div>
    </div>
  );
};

export default ShareApp;
