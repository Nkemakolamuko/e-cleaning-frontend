import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";
import { BgContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../api/axios";

const BecomeCleaner = ({ handleCloseCleaner }) => {
  const { darkMode } = useContext(BgContext);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    location: "",
    address: "",
    desc: "",
    phoneNumber: "",
    img: null,
  });
  const { name, businessName, location, address, desc, phoneNumber, img } =
    formData;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field)) {
      toast.error("All fields are required.", { position: "bottom-left" });
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post("/api/cleaners", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Submitted successfully - You will be contacted shortly.");
      setTimeout(() => {
        handleCloseCleaner();
      }, 5000);
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.message;
      toast.error(`Error occurred: ${message}`);
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
          <InputField
            label="Full Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            darkMode={darkMode}
            placeholder="Enter your full name"
            required
          />
          <InputField
            label="Company/Business Name"
            type="text"
            name="businessName"
            value={businessName}
            onChange={handleChange}
            darkMode={darkMode}
            placeholder="Eg. Euphoria Brothers"
            required
          />
          <InputField
            label="Company/Business Location"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            darkMode={darkMode}
            placeholder="Eg. Owerri"
            required
          />
          <InputField
            label="Company/Business Address"
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            darkMode={darkMode}
            placeholder="Eg. Shop 12 Sazodo Plaza Nowas junction Enugu, Enugu State"
            required
          />
          <InputField
            label="Company/Business Phone Number"
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            darkMode={darkMode}
            placeholder="Eg. 07040876440"
            required
          />
          <FileInputField
            label="Company/Business Image"
            name="img"
            onChange={handleChange}
            darkMode={darkMode}
            required
          />
          <TextAreaField
            label="Company/Business Description"
            name="desc"
            value={desc}
            onChange={handleChange}
            darkMode={darkMode}
            placeholder="Eg. We prioritize our customers satisfaction more than anything else, try us out today, and you'd have an experience of a lifetime"
            required
          />
          <button
            type="submit"
            className={`py-4 rounded shadow bg-neutral-900 text-white font-medium w-full cursor-pointer active:scale-95 ${
              darkMode ? "bg-orange-500" : ""
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  darkMode,
  placeholder,
  required,
}) => (
  <p className="flex flex-col items-start w-full">
    <label htmlFor={name} className="font-medium flex items-center gap-2">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`outline-none border-2 rounded px-2 py-3 w-full text-sm ${
        darkMode ? " dark-mode" : ""
      }`}
      placeholder={placeholder}
      required={required}
    />
  </p>
);

const FileInputField = ({ label, name, onChange, darkMode, required }) => (
  <p className="flex flex-col items-start w-full">
    <label htmlFor={name} className="font-medium flex items-center gap-2">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <input
      type="file"
      id={name}
      name={name}
      onChange={onChange}
      accept="image/*"
      className={`outline-none border-2 rounded px-2 py-3 w-full text-sm ${
        darkMode ? " dark-mode" : ""
      }`}
      required={required}
    />
  </p>
);

const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  darkMode,
  placeholder,
  required,
}) => (
  <p className="flex flex-col items-start w-full">
    <label htmlFor={name} className="font-medium flex items-center gap-2">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`outline-none border-2 rounded px-2 py-3 w-full text-sm resize-none ${
        darkMode ? "dark-mode" : ""
      }`}
      placeholder={placeholder}
      required={required}
    ></textarea>
  </p>
);

export default BecomeCleaner;
