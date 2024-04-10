import React, { useState } from "react";
import Title from "../components/Title";
import user from "../assets/logo.jpg";
import {
  FaCheckDouble,
  FaDollarSign,
  FaHome,
  FaLock,
  FaUserShield,
} from "react-icons/fa";
import PaymentType from "../components/settings/PaymentType";
import UserImage from "../components/settings/UserImage";
import ChangeAddress from "../components/settings/ChangeAddress";
import ChangeEmail from "../components/settings/ChangeEmail";
import ChangePassword from "../components/settings/ChangePassword";
import ReadPrivacyPolicy from "../components/settings/ReadPrivacyPolicy";
import { FaShareNodes } from "react-icons/fa6";
import ShareApp from "../components/settings/ShareApp";

const Settings = () => {
  const [show, setShow] = useState(null);
  return (
    <section className="relative mb-6 md:mb-0">
      <Title title="Settings" />
      <div className="mt-5 w-full flex items-center justify-center">
        <UserImage user={user} />
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px] mx-auto gap-4 mt-5">
        <div className="mx-auto w-full">
          <ul className="flex flex-col gap-2 w-full">
            <li
              className="p-3 group bg-white hover:bg-slate-200 shadow hover:shadow-lg cursor-pointer flex justify-between items-center transition-all duration-300"
              onClick={() => setShow("Payment")}
            >
              <p className="flex flex-col">
                <span className="font-medium">Make Payments</span>
                <span className="text-xs">Click to select</span>
              </p>
              <p>
                <FaDollarSign className="md:w-8 md:h-8 w-6 h-6 text-green-600 group-text-green-700" />
              </p>
            </li>
            <li
              className="p-3 bg-white hover:bg-slate-200 shadow-md hover:shadow-lg cursor-pointer group transition-all duration-300 flex items-center justify-between"
              onClick={() => setShow("Email")}
            >
              <p className="flex flex-col">
                <span className="font-medium">useremail@gmail.com</span>{" "}
                <span className="text-xs">Click to change</span>
              </p>
              <p>
                <FaCheckDouble className="md:w-8 md:h-8 w-6 h-6 text-green-500 group-hover:text-green-600" />
              </p>
            </li>
            <li
              className="p-3 bg-white hover:bg-slate-200 shadow-md hover:shadow-lg cursor-pointer group transition-all duration-300 flex items-center justify-between"
              onClick={() => setShow("Privacy")}
            >
              <p className="flex flex-col">
                <span className="font-medium">Privacy Policy</span>{" "}
                <span className="text-xs">Click to read</span>
              </p>
              <p>
                <FaUserShield className="md:w-8 md:h-8 w-6 h-6 text-slate-500 group-hover:text-slate-600" />
              </p>
            </li>
          </ul>
        </div>
        <div className="mx-auto w-full">
          <ul className="flex flex-col gap-2 w-full">
            <li
              className="p-3 bg-white hover:bg-slate-200 shadow-md hover:shadow-lg cursor-pointer flex justify-between group items-center transition-all duration-300"
              onClick={() => setShow("Address")}
            >
              <p className="flex flex-col w-[91%]">
                <span className="font-medium">Change Address</span>{" "}
                <span className="text-xs truncate w-[90%]">
                  No 12 Nwaobasi Estate, Ogbor Hill Aba.
                </span>
              </p>
              <p className="w-[9%]">
                <FaHome className="md:w-8 md:h-8 w-6 h-6 text-neutral-700 group-hover:text-neutral-900" />
              </p>
            </li>
            <li
              className="p-3 group bg-white hover:bg-slate-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-between transition-all duration-300"
              onClick={() => setShow("Password")}
            >
              <p className="flex flex-col">
                <span className="font-medium">Change Password</span>{" "}
                <span className="text-xs">***********</span>
              </p>
              <p>
                <FaLock className="md:w-8 md:h-8 w-6 h-6 text-yellow-500 group-hover:text-yellow-600" />
              </p>
            </li>
            <li
              className="p-3 group bg-white hover:bg-slate-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-between transition-all duration-300"
              onClick={() => setShow("Share")}
            >
              <p className="flex flex-col">
                <span className="font-medium">Share App</span>{" "}
                <span className="text-xs">
                  Click to invite your friends and family.
                </span>
              </p>
              <p>
                <FaShareNodes className="md:w-8 md:h-8 w-6 h-6 text-cyan-400 group-hover:text-cyan-500" />
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Version */}
      <div className="flex flex-col text-slate-500 text-xs text-center mt-12">
        <p>24/7 E-Laundry Service</p>
        <p>version 1.0.0</p>
      </div>

      {/* Show Components */}
      {/* It will also be a pop-up form for updating other user info in the settings page */}
      {show === "Payment" && <PaymentType handleClose={() => setShow(null)} />}

      {show === "Address" && (
        <ChangeAddress handleCloseAddress={() => setShow(null)} />
      )}

      {show === "Email" && (
        <ChangeEmail handleCloseEmail={() => setShow(null)} />
      )}

      {show === "Password" && (
        <ChangePassword handleClosePassword={() => setShow(null)} />
      )}

      {show === "Privacy" && (
        <ReadPrivacyPolicy handleClosePrivacy={() => setShow(null)} />
      )}

      {show === "Share" && <ShareApp handleCloseShare={() => setShow(null)} />}
    </section>
  );
};

export default Settings;
