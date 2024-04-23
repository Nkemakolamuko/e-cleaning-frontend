import React, { useContext, useEffect, useState } from "react";
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
import { FaMoon, FaShareNodes, FaSun } from "react-icons/fa6";
import ShareApp from "../components/settings/ShareApp";
import { BgContext } from "../App";

const Settings = () => {
  const { darkMode, setDarkMode } = useContext(BgContext);
  const [show, setShow] = useState(null);
  const [user, setUser] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [updatedUser, setUpdatedUser] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data[0]);
    setUpdatedUser([...updatedUser, data]);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data[0]);
  }, [updatedUser]);

  // Address Change
  const handleChangeAddress = (e) => {
    setUserAddress(e.target.value);
  };

  const handleUpdateAddress = (e) => {
    e.preventDefault();
    setUpdatedUser([...updatedUser, (updatedUser[0][0].address = userAddress)]);

    const updatedUserToLS = updatedUser[0];
    localStorage.setItem("user", JSON.stringify(updatedUserToLS));
    setShow(false);
  };

  // Email Change
  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    setUpdatedUser([...updatedUser, (updatedUser[0][0].email = userEmail)]);

    const updatedUserToLS = updatedUser[0];
    localStorage.setItem("user", JSON.stringify(updatedUserToLS));
    setShow(false);
  };

  // Theme
  const toggleThemeDark = () => {
    setDarkMode(true);
  };

  const toggleThemeLight = () => {
    setDarkMode(false);
  };

  return (
    <section className="relative mb-6 md:mb-0">
      <div className="flex items-center justify-between">
        <Title title="Settings" />
        <div className="px-4 md:px-4 lg:px-4 flex gap-2 items-center md:hidden">
          <p
            className="!bg-white text-yellow-400 border rounded-full cursor-pointer p-1 transition-all duration-300"
            onClick={toggleThemeLight}
          >
            <FaSun />
          </p>
          <p className="tracking-tighter text-xs font-medium">THEME</p>
          <p
            className="border bg-neutral-900 rounded-full cursor-pointer p-1 text-white transition-all duration-300"
            onClick={toggleThemeDark}
          >
            <FaMoon />
          </p>
        </div>
      </div>
      <div className="mt-5 w-full flex items-center justify-center">
        <UserImage user={user} />
      </div>

      {/* Actions */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 max-w-[800px] mx-auto gap-4 mt-5 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <div className="mx-auto w-full">
          <ul className="flex flex-col gap-2 w-full">
            <li
              className={`p-3 group bg-white hover:bg-slate-200 shadow hover:shadow-lg cursor-pointer flex justify-between items-center transition-all duration-300 ${
                darkMode
                  ? "dark-mode border-2 hover:bg-white hover:text-black rounded"
                  : ""
              }`}
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
              className={`p-3 group bg-white hover:bg-slate-200 shadow hover:shadow-lg cursor-pointer flex justify-between items-center transition-all duration-300 ${
                darkMode
                  ? "dark-mode border-2 hover:bg-white hover:text-black rounded"
                  : ""
              }`}
              onClick={() => {
                setShow("Email");
                const data = JSON.parse(localStorage.getItem("user"));
                setUser(data[0]);
                setUserEmail(user?.email);
              }}
            >
              <p className="flex flex-col">
                <span className="font-medium">
                  {user?.email || "loading..."}
                </span>{" "}
                <span className="text-xs">Click to change</span>
              </p>
              <p>
                <FaCheckDouble className="md:w-8 md:h-8 w-6 h-6 text-green-500 group-hover:text-green-600" />
              </p>
            </li>
            <li
              className={`p-3 group bg-white hover:bg-slate-200 shadow hover:shadow-lg cursor-pointer flex justify-between items-center transition-all duration-300 ${
                darkMode
                  ? "dark-mode border-2 hover:bg-white hover:text-black rounded"
                  : ""
              }`}
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
              className={`p-3 group bg-white hover:bg-slate-200 shadow hover:shadow-lg cursor-pointer flex justify-between items-center transition-all duration-300 ${
                darkMode
                  ? "dark-mode border-2 hover:bg-white hover:text-black rounded"
                  : ""
              }`}
              onClick={() => {
                setShow("Address");
                const data = JSON.parse(localStorage.getItem("user"));
                setUser(data[0]);
                setUserAddress(user?.address);
              }}
            >
              <p className="flex flex-col w-[91%]">
                <span className="font-medium">Change Address</span>{" "}
                <span className="text-xs truncate w-[90%]">
                  {user?.address || "Address for delivery"}
                </span>
              </p>
              <p className="w-[9%]">
                <FaHome className="md:w-8 md:h-8 w-6 h-6 text-neutral-700 group-hover:text-neutral-900" />
              </p>
            </li>
            <li
              className={`p-3 group bg-white hover:bg-slate-200 shadow hover:shadow-lg cursor-pointer flex justify-between items-center transition-all duration-300 ${
                darkMode
                  ? "dark-mode border-2 hover:bg-white hover:text-black rounded"
                  : ""
              }`}
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
              className={`p-3 group bg-white hover:bg-slate-200 shadow hover:shadow-lg cursor-pointer flex justify-between items-center transition-all duration-300 ${
                darkMode
                  ? "dark-mode border-2 hover:bg-white hover:text-black rounded"
                  : ""
              }`}
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
      <div className="fixed left-0 top-0 w-[100%] z-[999]">
        {show === "Payment" && (
          <PaymentType handleClose={() => setShow(null)} />
        )}

        {show === "Address" && (
          <ChangeAddress
            handleCloseAddress={() => setShow(null)}
            userAddress={userAddress}
            handleChangeAddress={handleChangeAddress}
            handleUpdateAddress={handleUpdateAddress}
          />
        )}

        {show === "Email" && (
          <ChangeEmail
            handleCloseEmail={() => {
              setShow(null);
            }}
            userEmail={userEmail}
            handleChange={handleChangeEmail}
            handleEmailUpdate={handleEmailUpdate}
          />
        )}

        {show === "Password" && (
          <ChangePassword handleClosePassword={() => setShow(null)} />
        )}

        {show === "Privacy" && (
          <ReadPrivacyPolicy handleClosePrivacy={() => setShow(null)} />
        )}

        {show === "Share" && (
          <ShareApp handleCloseShare={() => setShow(null)} />
        )}
      </div>
    </section>
  );
};

export default Settings;
