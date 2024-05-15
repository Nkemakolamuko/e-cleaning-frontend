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
import { FaMoon, FaShareNodes, FaSun, FaUserPlus } from "react-icons/fa6";
import ShareApp from "../components/settings/ShareApp";
import { BgContext } from "../App";
import SettingsCard from "../components/settings/SettingsCard";
import BecomeCleaner from "../components/settings/BecomeCleaner";
import { ToastContainer, toast } from "react-toastify";
import axios from "../api/axios";
import AuthContext from "../context-API/AuthProvider";
import { getUser } from "../api/api.controller/getUser";
import { updateUser } from "../api/api.controller/updateUser";

const Settings = () => {
  const { darkMode, setDarkMode, globalUser, setGlobalUser } =
    useContext(BgContext);
  const { auth } = useContext(AuthContext);
  const [show, setShow] = useState(null);
  const [user, setUser] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [updatedUser, setUpdatedUser] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data[0]);
    setUpdatedUser([...updatedUser, data]);

    getUser(auth, setGlobalUser); // declared elsewhere --
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
    // setShow(false);

    updateUser(auth, setGlobalUser, { address: userAddress }); // I guess, I'm 100% sure - I'd test
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
    // setShow(false);

    updateUser(auth, setGlobalUser, { email: userEmail }); // I guess, I'm 100% sure - I'd test
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
      <ToastContainer />
      <div className="flex items-center justify-between">
        <Title title="Settings" />
        <div className="flex gap-2 items-center md:hidden">
          <p
            className="!bg-white text-yellow-400 border rounded-full cursor-pointer p-2 transition-all duration-300"
            onClick={toggleThemeLight}
          >
            <FaSun />
          </p>
          <p className="tracking-tighter text-xs font-medium">CHANGE THEME</p>
          <p
            className="border border-[#0101be] bg-[#000068] rounded-full cursor-pointer p-2 text-white transition-all duration-300"
            onClick={toggleThemeDark}
          >
            <FaMoon />
          </p>
        </div>
      </div>
      <div className="mt-5 w-full flex items-center justify-center">
        {/* <UserImage user={user} /> */}
        <UserImage user={globalUser?.username} />
      </div>

      {/* Actions */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 max-w-[800px] mx-auto gap-4 mt-5 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <div className="mx-auto w-full !text-sm !text-slate-700">
          <div className="flex flex-col gap-2 w-full">
            <SettingsCard
              handleClick={() => {
                setShow("Address");
                const data = JSON.parse(localStorage.getItem("user"));
                setUser(data[0]);
                // setUserAddress(user?.address);
                setUserAddress(globalUser?.address);
              }}
              title={"Address"}
              // desc={user?.address || "Click to enter address for delivery"}
              desc={globalUser?.address || "Loading..."}
              icon={
                <span className="w-[9%]">
                  <FaHome className="md:w-8 md:h-8 w-6 h-6" />
                </span>
              }
            />

            <SettingsCard
              handleClick={() => {
                setShow("Email");
                const data = JSON.parse(localStorage.getItem("user"));
                setUser(data[0]);
                // setUserEmail(user?.email);
                setUserEmail(globalUser?.email);
              }}
              // title={user?.email || "loading..."}
              title={globalUser?.email || "Loading..."}
              desc={"Click to update"}
              icon={<FaCheckDouble className="md:w-8 md:h-8 w-6 h-6" />}
            />
            <SettingsCard
              handleClick={() => setShow("Privacy")}
              title={"Privacy Policy"}
              desc={"Click to read"}
              icon={<FaUserShield className="md:w-8 md:h-8 w-6 h-6" />}
            />

            <SettingsCard
              handleClick={() => setShow("Cleaner")}
              title={"Become A Cleaner"}
              desc={"Click to fill out form"}
              icon={<FaUserPlus className="md:w-8 md:h-8 w-6 h-6" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full">
          <div className="flex flex-col gap-2 !text-sm !text-slate-700 w-full">
            <SettingsCard
              handleClick={() => setShow("Payment")}
              title={"Make Payments"}
              desc={"Click to select"}
              icon={<FaDollarSign className="md:w-8 md:h-8 w-6 h-6" />}
            />

            <SettingsCard
              handleClick={() => {
                setShow("Password");
              }}
              title={"Change Password"}
              desc={"***********"}
              icon={<FaLock className="md:w-8 md:h-8 w-6 h-6" />}
            />

            <SettingsCard
              handleClick={() => {
                setShow("Share");
              }}
              title={"Share App"}
              desc={"Click to invite friends and family"}
              icon={<FaShareNodes className="md:w-8 md:h-8 w-6 h-6" />}
            />
          </div>
        </div>
      </div>

      {/* Version */}
      <div className="flex flex-col text-slate-500 text-xs text-center mt-12">
        <p>24/7 E-Laundry Service</p>
        <p>version 1.0.0</p>
      </div>

      {/* Show Components */}
      {/* It will also be a pop-up form for updating other user info in the settings page */}
      <div className="fixed left-0 top-0 w-[100%] z-[999] !text-sm">
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

        {show === "Cleaner" && (
          <BecomeCleaner handleCloseCleaner={() => setShow(null)} />
        )}
      </div>
    </section>
  );
};

export default Settings;
