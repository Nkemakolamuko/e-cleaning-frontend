import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";
import { BgContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../api/axios";

const BecomeCleaner = ({ handleCloseCleaner }) => {
  const { darkMode } = useContext(BgContext);
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [img, setImg] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !businessName ||
      !location ||
      !phoneNumber ||
      !desc ||
      !address
    ) {
      toast.error("All fields are required.", {
        position: "bottom-left",
      });
      return;
    }

    const cleanerDetails = {
      name,
      businessName,
      location,
      address,
      desc,
      phoneNumber,
    };

    try {
      const response = await axios.post(
        "/api/cleaners",
        JSON.stringify(cleanerDetails),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      toast.success("Submitted Successfully - You'd be contacted shortly.");
      setTimeout(() => {
        handleCloseCleaner();
      }, 5000);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.log(error.message);
        toast.error(`Error Occurred:  ${error.message}`);
      }
    }
  };
  return (
    <div className="w-full h-screen bg-slate-500/75 flex items-center absolute top-0 p-[10px] md:py-[10px] md:px-[100px] lg:py-[30px] lg:px-[300px] flex-col overflow-auto rounded">
      <ToastContainer />
      <div
        className={`w-full rounded-md flex flex-col gap-2 bg-white text-center ${
          darkMode ? "dark-mode border rounded" : ""
        }`}
      >
        <div
          className={`flex items-center mb-2 border-b px-4 pt-2 pb-0 ${
            darkMode ? "dark-mode rounded" : ""
          }`}
        >
          <h2 className="!tracking-widest font-medium">Become a cleaner</h2>
          <div className="ml-auto">
            <CloseButton handleModalClose={handleCloseCleaner} />
          </div>
        </div>

        <form
          className={`px-4 pb-6 pt-2 flex flex-col gap-4 text-slate-800 ${
            darkMode ? "dark-mode rounded" : ""
          }`}
          onSubmit={handleSubmit}
        >
          <p className="flex flex-col items-start w-full">
            <label
              htmlFor="name"
              className="font-medium flex items-center gap-2"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className={`outline-none border-2 rounded px-2 py-3 w-full text-sm ${
                darkMode ? " dark-mode" : ""
              }`}
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
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              name="compName"
              className={`outline-none border-2 rounded px-2 py-3 w-full text-sm ${
                darkMode ? " dark-mode" : ""
              }`}
              placeholder="Eg. Euphoria Brothers"
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
              className={`outline-none border-2 rounded px-2 py-3 w-full text-sm ${
                darkMode ? " dark-mode" : ""
              }`}
              placeholder="Eg. Owerri"
            />
          </p>

          <p className="flex flex-col items-start w-full">
            <label
              htmlFor="address"
              className="font-medium flex items-center gap-2"
            >
              Company/Business Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              className={`outline-none border-2 rounded px-2 py-3 w-full text-sm ${
                darkMode ? " dark-mode" : ""
              }`}
              placeholder="Eg. Shop 12 Sazodo Plaza Nowas junction Enugu, Enugu State"
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
              className={`outline-none border-2 rounded px-2 py-3 w-full text-sm ${
                darkMode ? " dark-mode" : ""
              }`}
              placeholder="Eg. 07040876440"
            />
          </p>

          <p className="flex flex-col items-start w-full">
            <label
              htmlFor="desc"
              className="font-medium flex items-center gap-2"
            >
              Company/Business Description{" "}
              <span className="text-rose-500">*</span>
            </label>
            <textarea
              type="text"
              cols={10}
              rows={5}
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              name="desc"
              className={`outline-none border-2 rounded px-2 py-3 w-full text-sm resize-none ${
                darkMode ? "dark-mode" : ""
              }`}
              placeholder="Eg. We prioritize our customers satisfaction more than anything else, try us out today, and you'd have an experience of a lifetime"
            ></textarea>
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
