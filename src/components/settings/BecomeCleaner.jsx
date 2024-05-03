import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";
import { BgContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BecomeCleaner = ({ handleCloseCleaner }) => {
  const { darkMode } = useContext(BgContext);
  const [fullName, setFullName] = useState("");
  const [bizName, setBizName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !bizName || !location || !phoneNumber) {
      //   setErr("All fields are required!")
      toast.error("All fields are required.", {
        position: "bottom-left",
      });
      return;
    }

    const cleanerDetails = {
      fullName,
      bizName,
      location,
      phoneNumber,
    };
    // console.log(cleanerDetails);
    toast.success("Submitted Successfully - You'd be contacted shortly.");
    setTimeout(() => {
      handleCloseCleaner();
    }, 5000);
  };
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center md:justify-center absolute top-0 p-[10px] md:p-[100px] lg:p-[300px] flex-col overflow-auto">
      <ToastContainer />
      <div
        className={`w-full rounded-md flex flex-col gap-2 bg-white text-center ${
          darkMode ? "dark-mode border-2" : ""
        }`}
      >
        <div
          className={`flex items-center mb-2 border-b px-4 pt-2 pb-0 ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <h2 className="!tracking-widest font-medium">Become a cleaner</h2>
          <div className="ml-auto">
            <CloseButton handleModalClose={handleCloseCleaner} />
          </div>
        </div>

        <form
          className={`px-4 pb-6 pt-2 flex flex-col gap-4 text-slate-800 ${
            darkMode ? "dark-mode" : ""
          }`}
          onSubmit={handleSubmit}
        >
          <p className="flex flex-col items-start w-full">
            <label
              htmlFor="fullName"
              className="font-medium flex items-center gap-2"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              name="fullName"
              className="outline-none border-2 rounded px-2 py-3 w-full text-sm"
              placeholder="Enter your full name"
            />
          </p>

          <p className="flex flex-col items-start w-full">
            <label
              htmlFor="compName"
              className="font-medium flex items-center gap-2"
            >
              Company/Business Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="compName"
              value={bizName}
              onChange={(e) => setBizName(e.target.value)}
              name="compName"
              className="outline-none border-2 rounded px-2 py-3 w-full text-sm"
              placeholder="Enter your company/business name"
            />
          </p>

          <p className="flex flex-col items-start w-full">
            <label
              htmlFor="location"
              className="font-medium flex items-center gap-2"
            >
              Company/Business Location <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              name="location"
              className="outline-none border-2 rounded px-2 py-3 w-full text-sm"
              placeholder="Enter your company/business location"
            />
          </p>

          <p className="flex flex-col items-start w-full">
            <label
              htmlFor="phoneNumber"
              className="font-medium flex items-center gap-2"
            >
              Company/Business Phone Number{" "}
              <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="phoneNumber"
              className="outline-none border-2 rounded px-2 py-3 w-full text-sm"
              placeholder="Enter your company/business phone number"
            />
          </p>

          <input
            type="button"
            value="Submit"
            className={`py-4 rounded shadow bg-neutral-900 text-white font-medium w-full cursor-pointer active:scale-95 ${
              darkMode ? "bg-orange-500" : ""
            }`}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default BecomeCleaner;
